import { Component, OnInit } from '@angular/core';
import { CARDS_HOME, ROUTE_HOME } from '@shared/routing/AppsRoute';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public breadcrumb = ROUTE_HOME;
  public cards = CARDS_HOME;
  
  constructor() { }

  ngOnInit(): void {
  }

}
