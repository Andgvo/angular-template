import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UIInputType } from '@shared/modules/ui-form/models/input-type';
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
    { value: 4, label: 'Option 4' },
    { value: 5, label: 'Option 5' }
  ];
  public inputs: UIFormItemType = {
    name: { label: 'Name', type: UIInputType.text },
    lastname: { label: 'Lastname', type: UIInputType.text },
    disabled: { label: 'Disabled', type: UIInputType.text, disabled: true, required: false, value: 'I was disabled' },
    money: { label: 'Money', type: UIInputType.money },
    age: { label: 'Age', type: UIInputType.number },
    phone: { label: 'Phone', type: UIInputType.textNumber },
    gender: { label: 'Gender', type: UIInputType.select, optionItems: this.optionItems },
    birthday: { label: 'Birthday', type: UIInputType.date },
    startTime: { label: 'Star time', type: UIInputType.time },
    switch: { label: 'Switch', type: UIInputType.switch, value: false },
    description: { label: 'Description', type: UIInputType.textarea, col: 'col-12 col-md-8' },
    radio: { label: 'Radio button', type: UIInputType.radioButton, optionItems: this.optionItems },
    checkbox: { label: 'Checkbox', type: UIInputType.checkbox, optionItems: this.optionItems },
  };
  public optionItemsDynamic: UIOptionItem[] = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
  ];
  public dynamicInputs: UIFormItemType = {
    show: {
      label: 'Show', type: UIInputType.select, optionItems: this.optionItemsDynamic,
      onChanges: (value) => this.hideOption(value)
    },
    enable: {
      label: 'Enable', type: UIInputType.select, optionItems: this.optionItemsDynamic,
      onChanges: (value) => this.disabledOption(value)
    },
    disabled: {
      label: 'Disabled', type: UIInputType.text, required: false
    },
    hidden: {
      label: 'Gender', type: UIInputType.hidden, required: false
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
    checkbox: [2],
    description: "12313",
    radio: 1,
    startTime: "12:03",
    switch: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);      
    } else {
      console.error('Not valid form');
    }
  }

  hideOption(value: number) {
    if (value === 1) {
      this.dynamicInputs.hidden.type = UIInputType.text
    } else if (value === 2) {
      this.dynamicInputs['hidden'].type = UIInputType.hidden
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
