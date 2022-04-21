import { Observable } from 'rxjs';
import { PhotoBoardService } from './shared/components/photo-board/services/photo-board.service';
import { Component, Input, OnInit } from '@angular/core';
import { Photo } from './shared/components/photo-board/interfaces/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular testing';
}
