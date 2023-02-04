import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbModule } from '@shared/modules/breadcrumb/breadcrumb.module';
import { ROUTE_BUTTONS } from '@shared/routing/AppsRoute';

@Component({
  standalone: true,
  selector: 'app-example-buttons',
  imports: [
    CommonModule, 
    MatButtonModule,
    BreadcrumbModule
  ],
  templateUrl: './example-buttons.component.html',
  styleUrls: ['./example-buttons.component.scss']
})
export class ExampleButtonsComponent implements OnInit {

  breadcrumb = ROUTE_BUTTONS;

  constructor() { }

  ngOnInit(): void {
  }

}
