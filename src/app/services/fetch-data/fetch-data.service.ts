import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { API_KEY } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  getArtists (): Observable<any> {
    return this.http.get<{}>(`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=italy&limit=10&api_key=${API_KEY}&format=json`)
  }

  getTracks (artist): Observable<any> {
    return this.http.get<{}>(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&limit=10&api_key=${API_KEY}&format=json`)
  }



}
