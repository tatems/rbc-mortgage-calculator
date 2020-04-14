import { NgModule } from "@angular/core";
import { LabelledInputComponent } from './labelled-input/labelled-input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LabelledInputComponent],
  exports: [LabelledInputComponent],
  imports: [CommonModule]
})
export class AppFormModule {}