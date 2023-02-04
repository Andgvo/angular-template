import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UITableComponent } from './ui-table/ui-table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    UITableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [UITableComponent]
})
export class UITableModule { }
