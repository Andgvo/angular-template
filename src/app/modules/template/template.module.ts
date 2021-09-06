import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { ExampleBreadcrumbComponent } from './example-breadcrumb/example-breadcrumb.component';
import { ExampleStyleComponent } from './example-style/example-style.component';
import { ExampleFormComponent } from './example-form/example-form.component';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbModule } from 'src/app/shared/modules/breadcrumb/breadcrumb.module';
import { UIContextModule } from 'src/app/shared/modules/ui-context/ui-context.module';


@NgModule({
  declarations: [
    ExampleBreadcrumbComponent,
    ExampleStyleComponent,
    ExampleFormComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    MatButtonModule,
    BreadcrumbModule,
    UIContextModule
  ]
})
export class TemplateModule { }
