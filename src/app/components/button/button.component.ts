import { Component } from "@angular/core";

@Component({
  selector: '[appButton]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {}
