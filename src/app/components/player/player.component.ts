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
  tracks;
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
  index = 0;
  nextTrack;

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

  moveIndexNext() {
    if (this.tracks.length === 0) {
        return;
    }
    if (this.index + 1 === this.tracks.length) {
       this.index = 0;
    } else {
       this.index++;
    }
}

moveIndexPrevious() {
    if (this.tracks.length === 0) {
        return;
    }
    if (this.index - 1 === -1) {
       this.index = this.tracks.length - 1;
    } else {
       this.index--;
    }

}
getCurrentItem() {
  console.log(this.tracks[this.index])
    return this.tracks[this.index];
}


  nextSong() {

    this.tracks.forEach((item, index) => {
      if(this.track === item.name) {
      if (index > 0) {
          console.log("Previous: " + this.tracks[index - 1].name);
      }
      if (index < this.tracks.length - 1) {
         this.nextTrack = this.tracks[index + 1].name;
      }
    }
  });
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
