#! /usr/bin/env node
import inquirer from "inquirer";
//Initialize user balance and pin code
let myBalance = 5000;  //Dollars
let myPin = 1234;

//Print Welcome message

console.log("Welcome to code with Shafaq-ATM Machine");

let pinAnswer = await inquirer.prompt([
{
    name: "pin",
    type: "number",
    message: "Enter your pin code:",

}

])

if (pinAnswer.pin === myPin){
    console.log("Pin is correct , Login Successfully!");
  // console.log('current account balance is ${mybalance}')

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["Withdraw Amount" , "Check Balance"],
                      

    }
    ]);
    console.log(operationAns);
    if(operationAns.operation === "Withdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the Withdraw Amount",
                type: "number"
        
            }
        ]);

        if(amountAns.amount > myBalance){
            console.log("Insufficient Balance");
        }

      else {
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} Withdraw Successfully`);
        console.log(`your remaining balance is: ${myBalance}`);
      }

    }
    else if(operationAns.operation === "Check Balance"){
        console.log(`your account balance is: ${myBalance}`);
    }
    }
    else{
        console.log("Pin is incorrect , Try Again!");
    }
