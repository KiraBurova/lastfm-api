import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-album',
  templateUrl: './single-album.component.html',
  styleUrls: ['./single-album.component.css']
})
export class SingleAlbumComponent implements OnInit {

  @Input() artist;

  constructor() { }

  ngOnInit() {
  }

}
