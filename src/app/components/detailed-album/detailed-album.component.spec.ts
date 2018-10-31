import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedAlbumComponent } from './detailed-album.component';

describe('DetailedAlbumComponent', () => {
  let component: DetailedAlbumComponent;
  let fixture: ComponentFixture<DetailedAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
