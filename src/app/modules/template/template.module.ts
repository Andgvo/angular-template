import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { UIFormModule } from '@shared/modules/ui-form/ui-form.module';
import { UITableModule } from '@shared/modules/ui-table/ui-table.module';
import { BreadcrumbModule } from 'src/app/shared/modules/breadcrumb/breadcrumb.module';
import { UIContextModule } from 'src/app/shared/modules/ui-context/ui-context.module';
import { ExampleBreadcrumbComponent } from './example-breadcrumb/example-breadcrumb.component';
import { ExampleButtonsComponent } from './example-buttons/example-buttons.component';
import { ExampleFormComponent } from './example-form/example-form.component';
import { ExampleStyleComponent } from './example-style/example-style.component';
import { ExampleTableComponent } from './example-table/example-table.component';
import { TemplateRoutingModule } from './template-routing.module';

@NgModule({
  declarations: [
    ExampleBreadcrumbComponent,
    ExampleStyleComponent,
    ExampleFormComponent,
    ExampleButtonsComponent,
    ExampleTableComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    MatButtonModule,
    BreadcrumbModule,
    UIContextModule,
    UIFormModule,
    UITableModule,
    MatTableModule
  ]
})
export class TemplateModule { }
