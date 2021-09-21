import { Component, OnInit } from '@angular/core';
import { ROUTE_BREADCRUMB } from '@shared/routing/AppsRoute';

@Component({
  selector: 'app-example-breadcrumb',
  templateUrl: './example-breadcrumb.component.html',
  styleUrls: ['./example-breadcrumb.component.scss']
})
export class ExampleBreadcrumbComponent implements OnInit {

  public breadcrumb = ROUTE_BREADCRUMB;
  public componentStr = '<app-breadcrumb [breadcrumb]="breadcrumb"></app-breadcrumb>';

  constructor() {
  }

  ngOnInit(): void {
  }

}
