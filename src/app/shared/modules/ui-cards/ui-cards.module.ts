import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UICardsComponent } from './ui-cards/ui-cards.component';

@NgModule({
  declarations: [ UICardsComponent ],
  exports: [ UICardsComponent ],
  imports: [
    CommonModule
  ]
})
export class UICardsModule { }
