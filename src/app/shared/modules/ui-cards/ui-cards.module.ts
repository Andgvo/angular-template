import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UICardsComponent } from './ui-cards/ui-cards.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [ UICardsComponent ],
  exports: [ UICardsComponent ],
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule
  ]
})
export class UICardsModule { }
