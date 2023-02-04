import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { CARDS_HOME } from '@shared/routing/AppsRoute';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-sidenav',
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  navItems = CARDS_HOME;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 992px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  goto(path: string){
    this.route.navigate([path]);
  }

}
