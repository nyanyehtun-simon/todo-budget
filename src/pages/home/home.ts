import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // @ViewChild('inputReason') reasonInput: ElementRef;
  // @ViewChild('inputAmount') amountInput: ElementRef;
  // @ViewChild('expensesList') expensesList: ElementRef;
  // @ViewChild('totalExpenses') totalExpensesOutput: ElementRef;
  // @ViewChild('expensesList') expensesList: ElementRef;

  public reasonInput:string;
  public amountInput: string;
  public totalExpenses = 0;

  public expensesListData = {}
  public expensesListKeys = []

  constructor(private alertCtrl: AlertController) {}

  public clear() {
    this.reasonInput = "";
    this.amountInput = "";
  }

  public clickConfirmButton(e: Event) {
    console.log(this.reasonInput)
    console.log(this.amountInput)
    const enteredReason = this.reasonInput;
    const enteredAmount = this.amountInput;

    if (
      enteredReason.trim().length <= 0 ||
      enteredAmount <= 0 ||
      enteredAmount.trim().length <= 0
    ) {
      alertCtrl
        .create({
          message: "Please enter valid values",
          header: "Input error",
          buttons: ["Okay"]
        })
        .then(alertElement => {
          alertElement.present();
        });
      console.log("\n %c!!INPUT ERROR!!", "color: red; font-size:15px;");
      return;
    }

    const newItem = document.createElement("ion-button");
    newItem.color = "warning";
    newItem.fill = "solid";
    newItem.textContent = enteredReason + ": $" + enteredAmount;

    this.expensesListData[enteredReason] = enteredAmount;

    this.expensesListKeys.push(enteredReason);

    // this.expensesList = Object.assign()
    console.log(this.expensesListData);

    // this.expensesList.appendChild(newItem);
    console.log("Reason:", enteredReason, "|| Amount:", enteredAmount, "$");

    this.totalExpenses += parseInt(enteredAmount);
    // console.log("his total", totalExpenses);
    // totalExpensesOutput.textContent = +(
    //   Math.round(totalExpenses + "e+2") + "e-2"
    // );

    this.clear();
  }

}
