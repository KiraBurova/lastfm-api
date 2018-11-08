import { Component, OnInit } from "@angular/core";

import { FetchDataService } from "../../services/fetch-data/fetch-data.service";
import { ActivatedRoute } from "@angular/router";
import { PassDataService } from "../../services/pass-data/pass-data.service";

@Component({
  selector: "app-detailed-artist",
  templateUrl: "./detailed-artist.component.html",
  styleUrls: ["./detailed-artist.component.scss"]
})
export class DetailedArtistComponent implements OnInit {
  constructor(
    private fetchDataService: FetchDataService,
    private _route: ActivatedRoute,
    private passDataService: PassDataService
  ) {}

  tracks: [] = [];
  artist: {} = {};
  track: string = null;
  id: number = null;
  openPlayer: boolean = false;

  ngOnInit() {
    this.id = this._route.snapshot.params.id;
    this.fetchDataService.getArtist(this.id).subscribe(artist => this.artist = artist.artist);
    this.getTracks(this.id);
  }
  getTracks(id): void {
    this.fetchDataService
      .getTracks(id)
      .subscribe(tracks => this.tracks = tracks.toptracks.track);
  }
  showPlayer(track) {
    this.openPlayer = true;
    track.active = !track.active;
    this.track = track.name;
  }
}
