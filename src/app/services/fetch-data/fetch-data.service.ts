import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { LAST_FM_API_KEY } from "../../../config/config";

@Injectable({
  providedIn: "root"
})
export class FetchDataService {
  constructor(private http: HttpClient) {}

  getArtists(): Observable<any> {
    return this.http.get<{}>(
      `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=italy&limit=10&api_key=${LAST_FM_API_KEY}&format=json`
    );
  }

  getArtist(artist): Observable<any> {
    return this.http.get<{}>(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${artist}&limit=10&api_key=${LAST_FM_API_KEY}&format=json`
    );
  }

  getTracks(artist): Observable<any> {
    return this.http.get<{}>(
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${artist}&limit=10&api_key=${LAST_FM_API_KEY}&format=json`
    );
  }
}
