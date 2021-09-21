export class UIOptionItem {
  value: string | number;
  label: string;
  disabled?: boolean = false;

  constructor(value: string | number, label: string) {
    this.value = value;
    this.label = label;
    this.disabled = false;
  }

}
