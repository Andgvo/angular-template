import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UIInputType } from '@shared/modules/ui-form/models/input-type';
import { UIFormItem } from '@shared/modules/ui-form/models/ui-form-item';
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
  public inputs: UIFormItem[] = [
    { name: 'name', label: 'Name', type: UIInputType.text },
    { name: 'lastname', label: 'Lastname', type: UIInputType.text },
    { name: 'disabled', label: 'Disabled', type: UIInputType.text, disabled: true, required: false, value: 'I was disabled' },
    { name: 'age', label: 'Age', type: UIInputType.number },
    { name: 'phone', label: 'Phone', type: UIInputType.textNumber },
    { name: 'gender', label: 'Gender', type: UIInputType.select, optionItems: this.optionItems },
    { name: 'birthday', label: 'Birthday', type: UIInputType.date },
    { name: 'startTime', label: 'Star time', type: UIInputType.time },
    { name: 'switch', label: 'Switch', type: UIInputType.switch },
    { name: 'radio', label: 'Radio button', type: UIInputType.radioButton, optionItems: this.optionItems },
    { name: 'checkbox', label: 'Checkbox', type: UIInputType.checkbox, optionItems: this.optionItems },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:FormGroup){
    console.log(form.value);
  }
}
