import { Component, OnInit } from '@angular/core';

import { FetchDataService } from '../../services/fetch-data/fetch-data.service';
import { ActivatedRoute } from '@angular/router';
import { PassDataService } from 'src/app/services/pass-data.service';

@Component({
  selector: 'app-detailed-artist',
  templateUrl: './detailed-artist.component.html',
  styleUrls: ['./detailed-artist.component.scss']
})
export class DetailedArtistComponent implements OnInit {

  constructor(
    private fetchDataService: FetchDataService, 
    private _route: ActivatedRoute,
    private passDataService: PassDataService
    ) { }

  tracks: [] = [];
  artist = null;
  track: string = null;
  id: number = null;
  openPlayer: boolean = false;

  ngOnInit() {
    this.id = this._route.snapshot.params.id;
    this.artist = this.passDataService.artistImage || JSON.parse(localStorage.getItem('artist'));
    this.getTracks(this.id);
  }
  getTracks(id): void {
    this.fetchDataService.getTracks(id)
        .subscribe(tracks => this.tracks = tracks.toptracks.track);
  }
  showPlayer(event) {
    this.openPlayer = true;
    this.track = event.target.children[0].innerText;
  }
}
