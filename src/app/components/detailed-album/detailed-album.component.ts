import { Component, OnInit } from '@angular/core';

import { FetchDataService } from '../../services/fetch-data/fetch-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-album',
  templateUrl: './detailed-album.component.html',
  styleUrls: ['./detailed-album.component.css']
})
export class DetailedAlbumComponent implements OnInit {

  constructor(private fetchDataService: FetchDataService, private _route: ActivatedRoute) { }

  tracks: [] = [];
  name: string = null;

  ngOnInit() {
    this.name = this._route.snapshot.queryParamMap.get('name')

    this.getTracks(this.name);
  }
  getTracks(name): void {
    this.fetchDataService.getTracks(name)
        .subscribe(tracks => this.tracks = tracks.toptracks.track);
  }
}
