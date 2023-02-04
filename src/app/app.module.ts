import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIFormModule } from '@shared/modules/ui-form/ui-form.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UIFormModule.forRoot({ locale: 'es', label: { error: { required: 'Required label edited by forRoot' } } }),
    //Stanealone
    SidenavComponent,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
