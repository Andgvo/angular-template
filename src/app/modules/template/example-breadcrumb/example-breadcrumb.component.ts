import { Component, OnInit } from '@angular/core';
import { ROUTE_LEVEL_3 } from '@shared/routing/AppsRoute';

@Component({
  selector: 'app-example-breadcrumb',
  templateUrl: './example-breadcrumb.component.html',
  styleUrls: ['./example-breadcrumb.component.scss']
})
export class ExampleBreadcrumbComponent implements OnInit {

  public breadcrumb = ROUTE_LEVEL_3;

  constructor() {
    console.log(this.breadcrumb);
  }

  ngOnInit(): void {
  }

}
