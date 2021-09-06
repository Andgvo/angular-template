import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIContextComponent } from './ui-context.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UIContextComponent],
  exports: [UIContextComponent]
})
export class UIContextModule { }
