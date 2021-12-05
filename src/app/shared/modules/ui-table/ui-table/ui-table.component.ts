import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fadeInDown } from '@shared/animations/animations';
import { UITableItem } from '../models/ui-table-item';

/**
 * Component to create angular material table
 * Require:
 * @param items: UITableItem[]
 * @param data: T[]
 */
@Component({
  selector: 'app-ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss'],
  animations: [fadeInDown()]
})
export class UITableComponent<T> implements OnChanges, AfterViewInit {

  @Input() items: UITableItem[] = [];
  @Input() data: T[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null = null;
  @ViewChild(MatSort, { static: true }) sort: MatSort | null = null;
 
  public displayedColumns: string[] = [];
  public dataSource = new MatTableDataSource<T>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items && this.items !== null) {
      this.displayedColumns = this.items.map(item => item.name);
    }
    if (changes.data && this.data !== null) {
      this.dataSource.data = this.data;
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  search(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}