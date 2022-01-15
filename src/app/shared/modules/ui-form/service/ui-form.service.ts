import { Inject, Injectable, InjectionToken } from '@angular/core';

export declare class UIFormLables {
  required?: string;
  maxLength?: string;
  minLength?: string;
  maxDate?: string;
  minDate?: string;
  dateFormat?: string;
  min?: string;
  max?: string;
  true?: string;
  false?: string;
  ok?: string;
  cancel?: string;
}

export declare interface UIFormConfig {
  label?: UIFormLables;
  locale: string;
}

export const CONFIG = new InjectionToken<UIFormConfig>('CONFIG');

@Injectable()
export class UIFormService {

  constructor(@Inject(CONFIG) private configuration: UIFormConfig) { }

  get config() {
    return this.configuration;
  }
  
}
