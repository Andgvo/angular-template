import { Component, OnInit } from '@angular/core';
import { ROUTE_TABLE } from '@shared/routing/AppsRoute';

@Component({
  selector: 'app-example-table',
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.scss']
})
export class ExampleTableComponent implements OnInit {

  public breadcrumb = ROUTE_TABLE;

  constructor() { }

  ngOnInit(): void {
  }

}
