import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from './interfaces/photo';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss'],
})
export class PhotoBoard implements OnChanges {
  @Input() photos: Photo[];
  rows: any[][] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = this.groupColumns(changes.photos.currentValue);
    }
  }

  groupColumns(photos: Photo[]): any[][] {
    const newRows = [];
    const step = 4;

    for (let index = 0; index < photos.length; index += step) {
      newRows.push(photos.splice(index, index + step));
    }

    return newRows;
  }
}
