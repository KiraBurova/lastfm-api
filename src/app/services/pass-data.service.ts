import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {
  artistImage: object = null;
  playerShow: boolean = false;

  constructor() {
   }

   getD(d) {
      this.artistImage = d;
   }

   showPlayer(bool) {
     this.playerShow = bool;
   }
}
