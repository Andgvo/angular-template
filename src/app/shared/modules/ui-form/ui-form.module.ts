import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CONFIG, UIFormConfig, UIFormService } from './service/ui-form.service';
import { UICheckboxGroupComponent } from './ui-checkbox-group/ui-checkbox-group.component';
import { UIFormComponent } from './ui-form/ui-form.component';
import { UIMoneyComponent } from './ui-money/ui-money.component';
import { MoneyDirective } from './utils/money.directive';
import { OnlyNumberDirective } from './utils/only-number.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  declarations: [UIFormComponent, UICheckboxGroupComponent, UIMoneyComponent, OnlyNumberDirective, MoneyDirective],
  exports: [UIFormComponent, OnlyNumberDirective],

})
export class UIFormModule {
  static forRoot(config: UIFormConfig): ModuleWithProviders<UIFormModule> {
    return {
      ngModule: UIFormModule,
      providers: [
        { provide: CONFIG, useValue: config },
        UIFormService
      ]
    }
  }
}
