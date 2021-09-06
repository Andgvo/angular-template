import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BreadcrumbModule } from '@shared/modules/breadcrumb/breadcrumb.module';
import { UICardsModule } from '@shared/modules/ui-cards/ui-cards.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BreadcrumbModule,
    UICardsModule
  ]
})
export class HomeModule { }
