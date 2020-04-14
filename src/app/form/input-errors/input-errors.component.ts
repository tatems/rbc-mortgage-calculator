import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

const DEFAULT_ERRORS = {
  required: 'This field is required',
  other: 'This field is invalid'
}

@Component({
  selector: 'app-input-errors',
  templateUrl: './input-errors.component.html',
  styleUrls: ['./input-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputErrorsComponent {
  @Input() inputErrors: {[key: string]: string} | null;
  @Input() errorMessages: {[key: string]: string} = {};

  errorMessage(): string | null {
    if (!this.inputErrors) {
      return null;
    }

    const errorKey = Object.keys(this.inputErrors)[0];

    return this.errorMessages[errorKey] || DEFAULT_ERRORS[errorKey] || DEFAULT_ERRORS.other;
  }
}