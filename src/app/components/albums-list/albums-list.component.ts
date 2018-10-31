import { Component, OnInit } from '@angular/core';

import { FetchDataService } from '../../services/fetch-data/fetch-data.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  constructor(private fetchDataService: FetchDataService) { }

  artists:[] = [];

  ngOnInit() {
    this.getArtists()
  }
  getArtists(): void {
    this.fetchDataService.getArtists()
        .subscribe(artists => this.artists = artists.topartists.artist);
  }

}
