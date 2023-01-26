import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { UIInputEnum } from '@shared/modules/ui-form/models/input-type';
import { UIFormItemType } from '@shared/modules/ui-form/models/ui-form-item';
import { UIOptionItem } from '@shared/modules/ui-form/models/ui-option-item';
import { ROUTE_DYNAMIC_FORM } from '@shared/routing/AppsRoute';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss']
})
export class ExampleFormComponent implements OnInit {

  public breadcrumb = ROUTE_DYNAMIC_FORM;

  public optionItems: UIOptionItem[] = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
    { value: 4, label: 'Option 4. This is a large option to force breackpoints' },
    { value: 5, label: 'Option 5. Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
  ];
  public readonly inputs: UIFormItemType = {
    name: { label: 'Name', type: 'text' },
    lastname: { label: 'Lastname', type: 'text' },
    disabled: { label: 'Disabled', type: 'text', disabled: true, value: 'I was disabled' },
    money: { label: 'Money', type: 'money' },
    age: { label: 'Age', type: 'number' },
    phone: { label: 'Phone', type: 'textNumber' },
    gender: { label: 'Gender', type: 'select', optionItems: this.optionItems },
    birthday: { label: 'Birthday', type: 'date' },
    date: { label: 'Date Limit now', type: 'date', minDate: new Date(Date.now()), maxDate: new Date(Date.now() + 1000000000) },
    startTime: { label: 'Star time', type: 'time' },
    switch: { label: 'Switch', type: 'switch', value: false },
    description: { label: 'Description', type: UIInputEnum.textarea, col: 'col-span-1 sm:col-span-2', required: true },
    radio: { label: 'Radio button', type: UIInputEnum.radioButton, optionItems: this.optionItems },
    checkbox: { label: 'Checkbox', type: UIInputEnum.checkbox, optionItems: this.optionItems },
  };

  public optionItemsDynamic: UIOptionItem[] = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
  ];
  public dynamicInputs: UIFormItemType = {
    show: {
      label: 'Show', type: UIInputEnum.select, optionItems: this.optionItemsDynamic,
      onChanges: (value) => this.hideOption(value)
    },
    enable: {
      label: 'Enable', type: UIInputEnum.select, optionItems: this.optionItemsDynamic,
      onChanges: (value) => this.disabledOption(value)
    },
    disabled: {
      label: 'Disabled', type: UIInputEnum.text, required: false
    },
    hidden: {
      label: 'Gender', type: UIInputEnum.hidden, required: false
    },
  };
  public exampleObject = {
    name: 'Andres',
    lastname: 'Lopez',
    disabled: 'Other name',
    age: 24,
    money: 1000000,
    phone: '5512345678',
    gender: 2,
    birthday: '2021-12-31T23:20:02.141Z',
    date: new Date(Date.now() + 1000000000).toISOString(),
    checkbox: [2],
    description: "12313",
    radio: 1,
    startTime: "12:03",
    switch: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: UntypedFormGroup) {
    if (form.valid) {
      console.log(form.value);
    } else {
      console.error('Not valid form');
    }
  }

  hideOption(value: number) {
    if (value === 1) {
      this.dynamicInputs.hidden.type = UIInputEnum.text
    } else if (value === 2) {
      this.dynamicInputs['hidden'].type = UIInputEnum.hidden
    }
  }

  disabledOption(value: number) {
    if (value === 1) {
      this.disabledControl?.disable();
    } else if (value === 2) {
      this.disabledControl?.enable();
    }
  }

  get disabledControl() { return this.dynamicInputs.disabled.control; }

}
