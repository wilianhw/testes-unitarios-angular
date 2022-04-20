import { PhotoBoardService } from './services/photo-board.service';
import { PhotoFrameModule } from './../photo-frame/photo-frame.module';
import { PhotoBoard } from './photo-board.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [PhotoBoard],
  imports: [CommonModule, PhotoFrameModule],
  exports: [PhotoBoard],
  providers: [PhotoBoardService],
})
export class PhotoBoardModule {}
