import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedArtistComponent } from './detailed-artist.component';

describe('DetailedAlbumComponent', () => {
  let component: DetailedArtistComponent;
  let fixture: ComponentFixture<DetailedArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
