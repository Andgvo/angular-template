import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { fadeInDown } from '@shared/animations/animations';
import { UIInputEnum } from '../models/input-type';
import { UIFormItem, UIFormItemType } from '../models/ui-form-item';
import { UIFormLables, UIFormService } from '../service/ui-form.service';

declare type ValueType = number | string | boolean;
declare type ObjetInput = Record<string, ValueType | ValueType[]>;

@Component({
  selector: 'app-ui-form',
  templateUrl: './ui-form.component.html',
  styleUrls: ['./ui-form.component.scss'],
  animations: [fadeInDown()],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class UIFormComponent implements OnChanges {

  @Input() title = '';
  @Input() items: UIFormItemType | undefined;
  @Input() object: ObjetInput | undefined;
  @Input() col: string = 'col-span-1';
  @Input() validators: ValidatorFn | ValidatorFn[] = [];
  @Input() showSubmit = true;
  @Input() submitLabel = 'Accept';
  @Input() showCancel = true;
  @Input() cancelLabel = 'Cancel';
  @Input() submitted = false;
  @Input() loading = false;
  @Output() onSubmit = new EventEmitter<FormGroup>();
  @Output() onCancel = new EventEmitter<boolean>();
  public labels: UIFormLables;
  public inputs: UIFormItem[] = [];

  formGroup: FormGroup = new FormGroup({});
  types = UIInputEnum;

  constructor(private uiFormService: UIFormService, private adapter: DateAdapter<any>) {
    this.labels = this.uiFormService.config.label ?? {};
    this.adapter.setLocale(uiFormService.config.locale);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items && this.items !== undefined) {
      this.formGroup = new FormGroup({});
      this.inputs = Object.entries(this.items).map(([key, input]) => {
        input.name = key;
        const control = new FormControl(
          { value: input.value ?? '', disabled: input.disabled ?? false }, this.addValidators(input));
        input.control = control;
        if (input.onChanges) {
          control.valueChanges.subscribe(input.onChanges);
        }
        this.formGroup.addControl(key, control);
        return input;
      });
      this.formGroup.setValidators(this.validators);
    }
    if (changes.object && this.object != undefined) {
      if (this.inputs.length !== 0) {
        this.inputs.forEach(input => {
          if (this.object !== undefined && input.name && this.object[input.name] !== null) {
            this.formGroup.get(input.name)?.setValue(this.object[input.name]);
          }
        });
      }
    }
    if (changes.validators) {
      this.formGroup.setValidators(this.validators);
    }
  }

  public submit() {
    this.submitted = true;
    this.onSubmit.emit(this.formGroup);
  }

  public cancel() {
    this.onCancel.emit(true);
  }

  public onComplementButton(item: UIFormItem, value: any) {
    if (item.onClickButton) {
      item.onClickButton(value);
    } else {
      console.error('You have to define \'onClickButton\' property');
    }
  }

  trackBy(index: number, item: UIFormItem) {
    return item.name ?? '';
  }
  /**
   * This functions add all validators defined on item
   *
   * @param item
   * @returns
   */
  private addValidators(item: UIFormItem): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if ((item.required === undefined) || item.required) {
      validators.push(Validators.required);
    }
    if (item.regex) {
      validators.push(Validators.pattern(item.regex));
    }
    if (item.minLength) {
      validators.push(Validators.minLength(item.minLength));
    }
    return validators;
  }
}
