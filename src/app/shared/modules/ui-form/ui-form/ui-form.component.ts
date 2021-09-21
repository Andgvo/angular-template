import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { UIInputType } from '../models/input-type';
import { UIFormItem } from '../models/ui-form-item';

@Component({
  selector: 'app-ui-form',
  templateUrl: './ui-form.component.html',
  styleUrls: ['./ui-form.component.scss']
})
export class UIFormComponent implements OnChanges {

  @Input() title = '';
  @Input() inputs: UIFormItem[] = [];
  @Input() object: any = null;
  @Input() col: string = 'col-12 col-sm-6 col-md-4';
  @Input() validators: ValidatorFn | ValidatorFn[] = [];
  @Input() showSubmit = true;
  @Input() submitLabel = 'Aceptar';
  @Input() showCancel = true;
  @Input() cancelLabel = 'Cancel';
  @Input() showRequired = true;
  @Input() submitted = false;
  @Input() loading = false;
  @Output() submit = new EventEmitter<FormGroup>();
  @Output() cancel = new EventEmitter<boolean>();

  formGroup: FormGroup = new FormGroup({});
  types = UIInputType;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.inputs) {
      const inputs: UIFormItem[] = changes?.inputs.currentValue;
      this.formGroup = new FormGroup({});
      inputs.forEach(input => {
        const control = new FormControl(
          { value: input.value ?? '', disabled: input.disabled ?? false }, this.addValidators(input));
        //input.control = control;
        if (input.onChanges) {
          control.valueChanges.subscribe(input.onChanges);
        }
        this.formGroup.addControl(input.name, control);
      });
      this.formGroup.setValidators(this.validators);
    }
    if (changes.object && this.object != null) {
      setTimeout(() => {
      }, 1000);
      console.log(this.object);
      if (this.inputs.length !== 0) {
        this.inputs.forEach(input => {
          if (this.object[input.name] != null) {
            this.formGroup.get(input.name)?.setValue(this.object[input.name]);
          }
        });
      }
    }
    if (changes.validators) {
      this.formGroup.setValidators(this.validators);
    }
  }

  /////////////// UTILS //////////////////////
  onComplementButton(item: UIFormItem, value: any) {
    if (item.onClickButton) {
      item.onClickButton(value);
    } else {
      console.error('You have to define \'onClickButton\' property');
    }
  }

  ////////////////  FUNCTIONS //////////////////
  onSubmit() {
    this.submitted = true;
    console.log(" INSIDE :v");
    this.submit.emit(this.formGroup);
  }

  onCancel() {
    this.cancel.emit(true);
  }

  /**
   * This functions add all validators defined on item
   *
   * @param item
   * @returns
   */
  private addValidators(item: UIFormItem): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (item.required) {
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
