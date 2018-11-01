import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { SingleArtistComponent } from './components/single-artist/single-artist.component';
import { DetailedArtistComponent } from './components/detailed-artist/detailed-artist.component';

import { HeaderComponent } from './components/header/header.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsListComponent,
    SingleArtistComponent,
    DetailedArtistComponent,
    HeaderComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
