import { Component, OnInit } from '@angular/core';
import { ROUTE_CUSTOM_THEME } from '@shared/routing/AppsRoute';

@Component({
  selector: 'app-example-style',
  templateUrl: './example-style.component.html',
  styleUrls: ['./example-style.component.scss']
})
export class ExampleStyleComponent {

  public breadcrumb = ROUTE_CUSTOM_THEME;
  
  constructor() { }

}
