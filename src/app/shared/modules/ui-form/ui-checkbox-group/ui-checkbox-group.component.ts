import { SelectionModel } from '@angular/cdk/collections';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UIOptionItem } from '../models/ui-option-item';

@Component({
  selector: 'app-ui-checkbox-group',
  template: `
    <div class="pt-1" *ngIf="options">
        <div class="form-check pl-0" *ngFor="let option of options; let i = index">
            <mat-checkbox [color]="color" (change)="updateValue($event.checked, option)"
                [checked]="selection.isSelected(option.value)"
                [disabled]="option.disabled!">
                {{ option.label }}
            </mat-checkbox>
        </div>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UICheckboxGroupComponent),
      multi: true
    }
  ]
})
export class UICheckboxGroupComponent implements ControlValueAccessor {

  @Input() options: UIOptionItem[] = [];
  @Input() property = '';
  @Input() color = 'primary';

  value: (string | number)[] = [];
  selection = new SelectionModel<string | number>(true, []);
  isDisabled = false;

  constructor() {}

  onChange = (_: any) => {
  };
  onTouch = () => {
  };

  /************************* OVERRIDE *******************/
  writeValue(value: any[]): void {
    if (value) {
      this.selection = new SelectionModel<string | number>(true, value);
    } else {
      this.value = [];
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  /********************** UTILS **********************/
  updateValue(checked: boolean, option: UIOptionItem) {
    if (checked) {
      this.selection.select(option.value);
    } else {
      this.selection.deselect(option.value);
    }
    this.value = this.selection.selected;
    this.onChange(this.value);
  }

}
