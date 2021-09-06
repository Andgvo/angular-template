import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-style',
  templateUrl: './example-style.component.html',
  styleUrls: ['./example-style.component.scss']
})
export class ExampleStyleComponent implements OnInit {

  public htmlStr = `<b>Exmample: </b>`;

  constructor() { }

  fillerContent = Array.from({ length: 15 }, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  ngOnInit(): void {
  }

}
