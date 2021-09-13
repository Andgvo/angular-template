import { Component, OnInit } from '@angular/core';
import { ROUTE_BUTTONS } from '@shared/routing/AppsRoute';

@Component({
  selector: 'app-example-buttons',
  templateUrl: './example-buttons.component.html',
  styleUrls: ['./example-buttons.component.scss']
})
export class ExampleButtonsComponent implements OnInit {

  breadcrumb = ROUTE_BUTTONS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
