import { NgModule } from "@angular/core";
import { LabelledInputComponent } from './labelled-input/labelled-input.component';
import { CommonModule } from '@angular/common';
import { InputErrorsComponent } from './input-errors/input-errors.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [LabelledInputComponent, InputComponent, InputErrorsComponent],
  exports: [LabelledInputComponent, InputComponent],
  imports: [CommonModule]
})
export class AppFormModule {}