import { SelectionModel } from '@angular/cdk/collections';
import { AfterContentInit, AfterViewInit, Component, ContentChildren, Input, OnChanges, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable, MatTableDataSource } from '@angular/material/table';
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
export class UITableComponent<T> implements OnChanges, AfterViewInit, AfterContentInit {

  @Input() title: string = '';
  @Input() items: UITableItem[] = [];
  @Input() data: T[] = [];
  @Input() selection: SelectionModel<T> | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null = null;
  @ViewChild(MatSort, { static: true }) sort: MatSort | null = null;
  @ViewChild(MatTable, { static: true }) table: MatTable<T> | null = null;
  @ContentChildren(MatHeaderRowDef) headerRowDefs: QueryList<MatHeaderRowDef> | null = null;
  @ContentChildren(MatRowDef) rowDefs: QueryList<MatRowDef<T>> | null = null;
  @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef> | null = null;

  public columns: UITableItem[] = [];
  public displayedColumns: string[] = [];
  public dataSource = new MatTableDataSource<T>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items && this.items !== null) {
      this.columns = this.items.filter(item => item.default !== false);
      this.displayedColumns = this.items.map(item => item.name);
    }
    if (changes.data && this.data !== null) {
      this.dataSource.data = this.data;
    }
    if(changes.selection && this.items !== null){
      this.displayedColumns.unshift('select');
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterContentInit(): void {
    this.columnDefs?.forEach((columnDef) => this.table?.addColumnDef(columnDef));
    this.rowDefs?.forEach((rowDef) => this.table?.addRowDef(rowDef));
    this.headerRowDefs?.forEach((headerRowDef) => this.table?.addHeaderRowDef(headerRowDef));
  }

  search(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection?.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection?.clear();
      return;
    }
    this.selection?.select(...this.dataSource.data);
  }

}