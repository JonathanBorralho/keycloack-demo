import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  preserveWhitespaces: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: IncrementerComponent,
      multi: true,
    }
  ]
})
export class IncrementerComponent implements ControlValueAccessor {

  private _value: number = 1;
  onChange: any;
  onTouched: any;

  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faPlus, faMinus);
  }

  setValue(value: number) {
    this._value = value;
    this.onChange(this.value);
    this.onTouched();
  }

  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  get value(): number {
    return this._value;
  }

  increment(): void {
    this.setValue(this._value += 1);
  }

  decrement(): void {
    if (this.shouldDecrement()) {
      this.setValue(this._value -= 1);
    }
  }

  shouldDecrement(): boolean {
    return this._value > 1;
  }

}
