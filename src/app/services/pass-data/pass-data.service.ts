import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PassDataService {
  artist: object = null;
  playerShow: boolean = false;

  constructor() {}

  storeArtist(artist) {
    this.artist = artist;
  }
}
