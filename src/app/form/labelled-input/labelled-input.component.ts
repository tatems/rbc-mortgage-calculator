import { Component, Input, ContentChild } from "@angular/core";
import { FormControl, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'app-labelled-input',
  templateUrl: './labelled-input.component.html',
  styleUrls: ['./labelled-input.component.scss']
})
export class LabelledInputComponent {
  @Input() label: string;
  @Input() for: string;
  
  @Input() control: FormControl;
  @Input() errorMessages?: {[key: string]: string} = {};
}