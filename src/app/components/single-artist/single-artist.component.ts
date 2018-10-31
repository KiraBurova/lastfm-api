import { Component, OnInit, Input } from '@angular/core';

import { PassDataService } from '../../services/pass-data.service';

@Component({
  selector: 'app-single-artist',
  templateUrl: './single-artist.component.html',
  styleUrls: ['./single-artist.component.scss']
})
export class SingleArtistComponent implements OnInit {

  @Input() artist;

  constructor(private passDataService: PassDataService) { }

  ngOnInit() {
    this.passDataService.getD(this.artist);
  }

 getArtist () {
    this.passDataService.artistImage = this.artist;
    localStorage.setItem('artist', JSON.stringify(this.artist));
 }

}
