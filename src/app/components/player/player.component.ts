import { Component, OnInit, Input, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"]
})
export class PlayerComponent implements OnInit {
  @Input()
  openPlayer;
  @Input()
  track;
  @Input()
  artist;

  @ViewChild("music")
  audioPlayerRef: ElementRef;
  @ViewChild("playhead")
  playheadRef: ElementRef;
  @ViewChild("volume")
  volumeRef: ElementRef;

  duration: string = null;
  currentTime: string = null;
  playAudio: boolean = true;
  volumeShown: boolean = false;

  constructor() {}

  ngOnInit() {
    const audio = this.audioPlayerRef.nativeElement;

    audio.onloadedmetadata = () => {
      this.duration = this.formatTime(audio.duration);
      this.getVolume();
    };
  }

  toggleAudio() {
    const audio = this.audioPlayerRef.nativeElement;
    this.playAudio = !this.playAudio;

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }

    audio.ontimeupdate = () => {
      let playPercent = Math.floor((100 / audio.duration) * audio.currentTime);

      this.currentTime = this.formatTime(audio.currentTime);
      this.playheadRef.nativeElement.style.width = playPercent + "%";

      if (Math.ceil(audio.duration) === Math.ceil(audio.currentTime)) {
        this.playAudio = true;
        audio.currentTime = 0;
        audio.pause();
      }
    };
  }

  showVolume() {
    this.volumeShown = !this.volumeShown;
  }

  getVolume() {
    const audio = this.audioPlayerRef.nativeElement;
    audio.volume = this.volumeRef.nativeElement.value / 100;
  }

  formatTime(seconds) {
    let minutes: any = Math.floor(seconds / 60);
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  }
}
