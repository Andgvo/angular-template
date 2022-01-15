import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { MatFormFieldAppearance } from "@angular/material/form-field";
import { UIFormLables, UIFormService } from "../service/ui-form.service";

@Component({
    selector: 'ui-date',
    template: `
    <mat-form-field [appearance]="appearance">
        <mat-label>{{ label }}</mat-label>
        <input matInput [matDatepicker]="picker" [formControl]="control" [min]="min" [max]="max"
            [required]="required || true" (dateInput)="updateDate($event)">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
        <mat-error *ngIf="control.getError('required')">
            {{ labels.required }}
        </mat-error>
        <mat-error *ngIf="control.getError('matDatepickerMin')">
            {{ labels.minDate ?? 'Error min date' }}
        </mat-error>
        <mat-error *ngIf="control.getError('matDatepickerMax')">
            {{ labels.maxDate ?? 'Error max date' }}
        </mat-error>
        <!-- <mat-error *ngIf="control.getError('matDatepickerParse')">
            {{ labels.dateFormat ?? 'Error date format' }}
        </mat-error> -->
    </mat-form-field>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UIDateComponent),
            multi: true
        }
    ]
})
export class UIDateComponent implements ControlValueAccessor {

    @Input() max?: string | Date;
    @Input() min?: string | Date;
    @Input() label?: string;
    @Input() required?: boolean;
    @Input() appearance: MatFormFieldAppearance = 'outline';


    value: string = '';
    control = new FormControl('');
    labels: UIFormLables;

    onChange = (_: string) => { }
    onTouch = () => { }

    constructor(private uiFormService: UIFormService) {
        this.labels = this.uiFormService.config.label ?? {};
    }


    writeValue(value: string | Date): void {
        if (value) {
            this.value = (typeof value === 'string') ? value : value.toISOString();
            this.control.setValue(this.value);
        } else {

        }
    }

    registerOnChange(fn: VoidFunction): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: VoidFunction): void {
        this.onTouch = fn;
    }

    updateDate(event: MatDatepickerInputEvent<Date>) {
        if (this.control.valid && event.value !== null) {
            this.value = event.value.toISOString();
        } else {
            this.value = '';
        }
        console.log(this.control.errors);
        this.onChange(this.value);
    }

}