import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_BREADCRUMB, ROUTE_BUTTONS, ROUTE_CUSTOM_THEME, ROUTE_DYNAMIC_FORM } from '@shared/routing/AppsRoute';
import { ExampleBreadcrumbComponent } from './example-breadcrumb/example-breadcrumb.component';
import { ExampleButtonsComponent } from './example-buttons/example-buttons.component';
import { ExampleFormComponent } from './example-form/example-form.component';
import { ExampleStyleComponent } from './example-style/example-style.component';

const routes: Routes = [
  { path: ROUTE_BREADCRUMB.path, component: ExampleBreadcrumbComponent },
  { path: ROUTE_CUSTOM_THEME.path, component: ExampleStyleComponent },
  { path: ROUTE_BUTTONS.path, component: ExampleButtonsComponent },
  { path: ROUTE_DYNAMIC_FORM.path, component: ExampleFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'breadcrumb' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
