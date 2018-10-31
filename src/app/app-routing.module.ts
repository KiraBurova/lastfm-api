import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { DetailedAlbumComponent } from './components/detailed-album/detailed-album.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: AlbumsListComponent },
  { path: 'artist/:id', component: DetailedAlbumComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
