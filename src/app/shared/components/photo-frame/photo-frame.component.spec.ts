import { PhotoFrameModule } from './photo-frame.module';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { PhotoFrameComponent } from './photo-frame.component';

describe(PhotoFrameComponent.name, () => {
  let fixture: ComponentFixture<PhotoFrameComponent> = null;
  let component: PhotoFrameComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
  });

  it('Should create a component', () => {
    expect(component).toBeTruthy();
  });

  it(`#${PhotoFrameComponent.prototype.like.name}
    Should trigger (@Output liked) once when
    called multiple times whitin debounce time`, fakeAsync(() => {
    fixture.detectChanges();
    let times: number = 0;
    component.liked.subscribe(() => times++);
    component.like();
    component.like();
    tick(500);
    expect(times).toBe(1);
  }));

  it(`#${PhotoFrameComponent.prototype.like.name}
    Should trigger (@Output liked) two times when
    called outside debounce time`, fakeAsync(() => {
    fixture.detectChanges();
    let times: number = 0;
    component.liked.subscribe(() => times++);
    component.like();
    tick(500);
    component.like();
    tick(500);
    expect(times).toBe(2);
  }));

  it('(D) Should display number of likes when (@Input likes) is incremented', () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement =
      fixture.nativeElement.querySelector('.like-counter');
    expect(element.textContent.trim()).toBe('1');
  });

  it(`(D) Should update aria-label when (@Inputs likes) is incremented`, () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('1: people liked');
  });

  it(`(D) Should have aria-label with 0 (@Inputs likes)`, () => {
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('0: people liked');
  });

  it(`(D) Should display image with src and description when bound to properties`, () => {
    const description: string = 'Some description';
    const src: string = 'http://somesite.com/img.jpg';
    component.description = description;
    component.src = src;
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(src);
    expect(img.getAttribute('alt')).toBe(description);
  });

  it(`(D) Should display number of likes when clicked`, (done) => {
    fixture.detectChanges();
    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();
      const counterEl: HTMLElement =
        fixture.nativeElement.querySelector('.like-counter');
      expect(counterEl.textContent.trim()).toBe('1');
      done();
    });
    const likeWidgetContainer: HTMLElement =
      fixture.nativeElement.querySelector('.like-widget-container');
    likeWidgetContainer.click();
  });

  it(`(D) Should display number of likes when ENTER key is pressed`, (done) => {
    fixture.detectChanges();
    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();
      const counterEl: HTMLElement =
        fixture.nativeElement.querySelector('.like-counter');
      expect(counterEl.textContent.trim()).toBe('1');
      done();
    });
    const likeWidgetContainer: HTMLElement =
      fixture.nativeElement.querySelector('.like-widget-container');
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    likeWidgetContainer.dispatchEvent(event);
  });
});
