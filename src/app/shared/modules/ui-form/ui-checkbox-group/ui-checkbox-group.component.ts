import {Component, forwardRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {UIOptionItem} from '../models/ui-option-item';

@Component({
  selector: 'app-ui-checkbox-group',
  template: `
    <div class="pt-1" *ngIf="options">
        <div class="form-check pl-0" *ngFor="let option of options; let i = index">
            <mat-checkbox [(ngModel)]="valueBoolean[i]" [color]="color" (change)="updateValue($event.checked, option)"
                          [disabled]="option.disabled!">
                {{ option.label }}
            </mat-checkbox>
        </div>
    </div>
    `,
  //styleUrls: ['./main-checkbox-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UICheckboxGroupComponent),
      multi: true
    }
  ]
})
export class UICheckboxGroupComponent implements OnChanges, ControlValueAccessor {

  @Input() options: UIOptionItem[] = [];
  @Input() property = '';
  @Input() color = 'primary';

  value: any[] = [];
  valueBoolean: boolean[] = [];
  isDisabled = false;

  constructor() {
  }

  onChange = (_: any) => {
  };
  onTouch = () => {
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.opciones && this.options != null) {
      this.valueBoolean = new Array(this.options.length).fill(false);
    }
  }

  /************************* OVERRIDE *******************/
  writeValue(value: any[]): void {
    if (value) {
      this.setValues(value);
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
      this.value.push(option.value);
    } else {
      for (let i = 0; i < this.value.length; i++) {
        if (this.value[i] === option.value) {
          this.value.splice(i, 1);
          break;
        }
      }
    }
    this.onChange(this.value);
  }

  private setValues(values: any[]) {
    let indexSelected: number[] = [];
    this.noneSelected();
    indexSelected = values.map(value => this.options?.findIndex(item => item.value === value));
    indexSelected.forEach(index => this.valueBoolean[index] = true);
    this.value = values;
    this.onChange(this.value);
  }

  private noneSelected(): void {
    this.valueBoolean = new Array(this.options?.length).fill(false);
  }
}
