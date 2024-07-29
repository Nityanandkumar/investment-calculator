import { Component,output,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //to passing data from child component to parent-component we use eventEmitter means outputdecrator
   calculate= output<investmentInput>();
  enteredInitialInvestment =signal("0");
  enteredAnnualInvestment = signal("0");
  enteredExpectedReturn =signal("5");
  enteredDuration =signal("10");
   onSubmit() {
    this.calculate.emit({
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
