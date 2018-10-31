import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { PassDataService } from 'src/app/services/pass-data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() openPlayer;
  @Input() track;
  @Input() artist;

  @ViewChild('music') audioPlayerRef: ElementRef;

  audio = {
    minutes: null,
    seconds: null
  }

  constructor(private passDataService: PassDataService) { }

  ngOnInit() {
    const audio = this.audioPlayerRef.nativeElement;

    audio.onloadedmetadata = () => {
        this.getTime();
    }
  }

  toggleAudio() {
    // console.log(this.audioPlayerRef)
  }

  getTime() {
    this.audio.minutes = Math.floor(this.audioPlayerRef.nativeElement.duration / 60);
    this.audio.seconds = Math.floor(this.audioPlayerRef.nativeElement.duration - this.audio.minutes * 60);
  }

}
