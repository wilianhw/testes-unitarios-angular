import { HttpClientModule } from '@angular/common/http';
import { PhotoListModule } from './photo-list.module';
import { PhotoBoardModule } from './../../shared/components/photo-board/photo-board.module';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PhotoListComponent } from './photo-list.component';

describe(PhotoListComponent.name, () => {
  let fixture: ComponentFixture<PhotoListComponent>;
  let component: PhotoListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });
});
