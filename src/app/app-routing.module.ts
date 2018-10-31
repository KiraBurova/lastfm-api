import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { DetailedArtistComponent } from './components/detailed-artist/detailed-artist.component';

const routes: Routes = [
  { path: '', redirectTo: '/artists', pathMatch: 'full' },
  { path: 'artists', component: ArtistsListComponent },
  { path: 'artist/:id', component: DetailedArtistComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
