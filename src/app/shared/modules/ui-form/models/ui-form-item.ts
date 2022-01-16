import { AbstractControl } from '@angular/forms';
import { UIInputEnum, UIInputType } from './input-type';
import { UIOptionItem } from './ui-option-item';

/**
 * @description
 * Object with properties type UIFormItem
 */
export type UIFormItemType = Record<string, UIFormItem>;

/**
 * @description
 * Define type input with parameters
 * Text, Number, Select, Textarea, Checkbox,
 * Radio Buttom, Date or File
 * ```
 * ```
 */
export interface UIFormItem {
  /**
   * Name of item inside the FormGroup
   */
  name?: string;
  /**
   * Can choose text, number, select, checkbox, radio button
   * or text area
   */
  type: UIInputType | UIInputEnum;
  /**
   * Label of Form Item, you can use a json value of transalate.
   * Ex.
   */
  label: string;
  /**
   * Required control. Default: true.
   */
  required?: boolean;
  regex?: string;
  /**
   * Number type min value
   */
  min?: number;
  /**
   * Number type max value
   */
  max?: number;
  /**
   * Text or Textarea type min length value
   */
  minLength?: number;
  /**
   * Text or Textarea type max length value
   */
  maxLength?: number;
  /**
   * Date type min date value
   */
   minDate?: string | Date;
   /**
    * Date type max date value
    */
   maxDate?: string | Date;
  /**
   * Select type avalible items to select
   */
  optionItems?: UIOptionItem[];
  /**
   * Boostrap cool distrubution
   */
  col?: string;
  /**
   * Textarea number of rows
   */
  rows?: number;
  /**
   * Disabled input
   */
  disabled?: boolean;
  /**
   * Custom regex error messages
   */
  regexErrorMsg?: string;
  customValidatorName?: string;
  customValidatorMsg?: string;
  value?: string | number | boolean;
  help?: string;
  visible?: boolean;
  /**
   * This function is activate when the input change their value
   */
  onChanges?: (value: any) => void;
  /**
   * On type TEXT_AND_BUTTON and SELECT_AND_BUTTON this function
   * is activate when click on button
   */
  onClickButton?: (value: any, option?: any) => void;
  /**
   * Label button on type TEXT_AND_BUTTON and SELECT_AND_BUTTON
   */
  labelButton?: string;
  /**
   * AbstractControl
   */
  control?: AbstractControl;

}
