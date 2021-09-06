import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { cardAnimation } from '@shared/animations/animations';
import { AppRoute } from '@shared/routing/AppRoute';

@Component({
  selector: 'app-ui-cards',
  templateUrl: './ui-cards.component.html',
  styleUrls: ['./ui-cards.component.scss'],
  animations: [ cardAnimation() ]
})
export class UICardsComponent {

  @Input() cards: AppRoute[] | undefined;
  
  constructor(private router:Router) { }

  gotoSeccion(url: string, disabled?: boolean | false){
    if(!disabled)
      this.router.navigate([url]);
  }

  trackById(index: number, item: AppRoute) {
    return item.path;
  }

}