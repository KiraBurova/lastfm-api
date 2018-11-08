import { Component, OnInit, Input } from "@angular/core";

import { PassDataService } from "../../services/pass-data/pass-data.service";

@Component({
  selector: "app-single-artist",
  templateUrl: "./single-artist.component.html",
  styleUrls: ["./single-artist.component.scss"]
})
export class SingleArtistComponent implements OnInit {
  @Input()
  artist;
  randomColor2 = this.getRandomColor();

  constructor(
    private passDataService: PassDataService
  ) {}

  ngOnInit() {
    this.passDataService.storeArtist(this.artist);
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return "#" + ("000000" + color).slice(-6);
  }
}
