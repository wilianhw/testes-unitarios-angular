import { Photo } from './interfaces/photo';
import { PhotoBoardModule } from './photo-board.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardComponent } from './photo-board.component';
import {
  Component,
  SimpleChange,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';

let fixture: ComponentFixture<PhotoBoardTestComponent>;
let component: PhotoBoardTestComponent;

function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];
  for (let i = 0; i < 8; i++) {
    photos.push({
      id: i + 1,
      url: '',
      description: '',
    });
  }

  return photos;
}

describe(PhotoBoardComponent.name, () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoBoardTestComponent],
      imports: [PhotoBoardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardTestComponent);
    component = fixture.componentInstance;
  });

  it('Should display rows and columns when (@Input photos) has value', () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();
    expect(component.board.rows.length).withContext('Number of rows').toBe(2);
    expect(component.board.rows[0].length)
      .withContext('Number of cols in first row')
      .toBe(4);
    expect(component.board.rows[1].length)
      .withContext('Number of cols in first row')
      .toBe(4);
  });
});

@Component({
  template: ` <app-photo-board [photos]="photos"> </app-photo-board> `,
})
class PhotoBoardTestComponent {
  @ViewChild(PhotoBoardComponent) board: PhotoBoardComponent;
  photos: Photo[] = [];
}
