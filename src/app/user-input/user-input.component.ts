import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //to passing data from child component to parent-component we use eventEmitter means outputdecrator
  @Output() calculate= new EventEmitter<{
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }>();
  enteredInitialInvestment ="0";
  enteredAnnualInvestment = "0";
  enteredExpectedReturn ="5";
  enteredDuration ="10";
   onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment, //+ used here to convert string type to number
      annualInvestment: +this.enteredAnnualInvestment,
      duration: +this.enteredDuration,
       expectedReturn: +this.enteredExpectedReturn
    })
   }
}
