import { Component } from '@angular/core';
import { MortgageDetails } from './mortgage-calculator/mortgage-calculator';
import { v4 as uuidV4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mortgageDetails: MortgageDetails[] = [];

  addMortgage(details: MortgageDetails): void {
    this.mortgageDetails.unshift({...details, uuid: uuidV4()});
  }

  deleteMortgage(uuidToDelete: string): void {
    this.mortgageDetails = this.mortgageDetails.filter(({uuid}) => uuid !== uuidToDelete);
  }
}
