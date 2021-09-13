import { Component, OnInit } from '@angular/core';
import { ROUTE_DYNAMIC_FORM } from '@shared/routing/AppsRoute';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss']
})
export class ExampleFormComponent implements OnInit {

  public breadcrumb = ROUTE_DYNAMIC_FORM;

  constructor() { }

  ngOnInit(): void {
  }

}
