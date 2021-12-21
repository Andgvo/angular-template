import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-ui-money',
  template: `<input #Input matInput type="text" (change)="change(Input.value)"/>`,
  styles: [],
  providers: [{ provide: MatFormFieldControl, useExisting: UIMoneyComponent }],
  host: {
    '[class.example-floating]': 'shouldLabelFloat',
    '[id]': 'id',
  },
})
export class UIMoneyComponent implements OnInit, MatFormFieldControl<string> {

  value: string | null = null;
  stateChanges: Observable<void> = new Subject();
  id: string = '';
  placeholder: string = '';
  ngControl: NgControl | null = null;
  focused: boolean = false;
  empty: boolean = false;
  shouldLabelFloat: boolean = false;
  required: boolean = false;
  disabled: boolean = false;
  errorState: boolean = false;
  controlType?: string | undefined;
  autofilled?: boolean | undefined;
  userAriaDescribedBy?: string | undefined;

  setDescribedByIds(ids: string[]): void {
    throw new Error('Method not implemented.');
  }
  onContainerClick(event: MouseEvent): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    
  }
  
  change(value: string){
    this.value = value;
  }
}
 