import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UITableComponent } from './ui-table/ui-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    UITableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [UITableComponent]
})
export class UiTableModule { }
