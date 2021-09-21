import { Component, OnInit } from '@angular/core';
import {
  CARDS_HOME,
  ROUTE_APP, ROUTE_BREADCRUMB, ROUTE_BUTTONS
} from '@shared/routing/AppsRoute';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public breadcrumb = ROUTE_APP;

  public cards = CARDS_HOME.slice(1);

  constructor() {
    console.log("----------- APP -----------");
    console.log(this.breadcrumb.path);
    console.log(this.breadcrumb.fullPath);
    console.log(this.breadcrumb.fullModule);
    console.log("----------- SEDE -----------");
    console.log(ROUTE_BUTTONS.path);
    console.log(ROUTE_BUTTONS.fullPath);
    console.log(ROUTE_BUTTONS.fullModule);
    console.log("----------- SEDE REGISTRAR -----------");
    console.log(ROUTE_BREADCRUMB.path);
    console.log(ROUTE_BREADCRUMB.fullPath);
    console.log(ROUTE_BREADCRUMB.fullModule);
  }

  ngOnInit(): void {
  }

}
