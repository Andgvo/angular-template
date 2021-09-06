import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleBreadcrumbComponent } from './example-breadcrumb/example-breadcrumb.component';
import { ExampleFormComponent } from './example-form/example-form.component'; 
import { ExampleStyleComponent } from './example-style/example-style.component';

const routes: Routes = [
  { path:'breadcrumb', component: ExampleBreadcrumbComponent },
  { path:'style', component: ExampleStyleComponent },
  { path:'form', component: ExampleFormComponent},
  { path:'**', redirectTo:'breadcrumb'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
