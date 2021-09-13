import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoute } from 'src/app/shared/routing/AppRoute';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() public breadcrumb: AppRoute | undefined;

  constructor(private route: Router) { }

  goto(path: string){
    this.route.navigate([path]);
  }
  
  ngOnInit() {
  }

}
