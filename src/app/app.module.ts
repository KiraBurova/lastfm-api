import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { SingleAlbumComponent } from './components/single-album/single-album.component';
import { DetailedAlbumComponent } from './components/detailed-album/detailed-album.component';

import { FetchDataService } from './services/fetch-data/fetch-data.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsListComponent,
    SingleAlbumComponent,
    DetailedAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
