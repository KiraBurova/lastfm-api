import { Component, OnInit } from "@angular/core";

import { FetchDataService } from "../../services/fetch-data/fetch-data.service";

@Component({
  selector: "app-artists-list",
  templateUrl: "./artists-list.component.html",
  styleUrls: ["./artists-list.component.scss"]
})

export class ArtistsListComponent implements OnInit {
  constructor(private fetchDataService: FetchDataService) {}

  artists: [] = [];

  ngOnInit() {
    this.getArtists();
  }
  getArtists(): void {
    this.fetchDataService
      .getArtists()
      .subscribe(artists => (this.artists = artists.topartists.artist));
  }
}
