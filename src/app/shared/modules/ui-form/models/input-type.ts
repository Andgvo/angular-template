export enum UIInputEnum {
  text = 'text',
  textNumber = 'textNumber',
  number = 'number',
  select = 'select',
  checkbox = 'checkbox',
  radioButton = 'radioButton',
  textarea = 'textarea',
  date = 'date',
  time = 'time',
  switch = 'switch',
  file = 'file',
  hidden = 'hidden',
  money = 'money'
}

export type UIInputType = keyof typeof UIInputEnum;
