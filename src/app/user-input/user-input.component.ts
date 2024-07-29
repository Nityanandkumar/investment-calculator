import { Component,inject,signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment =signal("0");
  enteredAnnualInvestment = signal("0");
  enteredExpectedReturn =signal("5");
  enteredDuration =signal("10");
  private investmentService = inject(InvestmentService);
   onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(), //+ used here to convert string type to number
      annualInvestment: +this.enteredAnnualInvestment(),
      duration: +this.enteredDuration(),
       expectedReturn: +this.enteredExpectedReturn()
    })
    this.enteredAnnualInvestment.set('0');
    this.enteredInitialInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
   }
}
