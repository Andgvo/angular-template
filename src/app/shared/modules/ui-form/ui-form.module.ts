import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UICheckboxGroupComponent } from './ui-checkbox-group/ui-checkbox-group.component';
import { UIFormComponent } from './ui-form/ui-form.component';
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
  ],
  declarations: [UIFormComponent, UICheckboxGroupComponent, OnlyNumberDirective],
  exports: [UIFormComponent, OnlyNumberDirective]
})
export class UIFormModule {
}
