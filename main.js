#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollars
let pinCode = 1211;
let pinAnswer = await inquirer.prompt([
    { name: "pin",
        type: "number",
        message: "Enter your Pin Please" },
]);
if (pinAnswer.pin === pinCode) {
    console.log("Welcome to ATM");
    let operationAns = await inquirer.prompt([
        { name: "operation",
            type: "list",
            message: "what you want to do",
            choices: ["balance enquiry", "witdraw funds", "Fast Cash"] }
    ]);
    if (operationAns.operation === "witdraw funds") {
        let amountAns = await inquirer.prompt([
            { name: "amount",
                tpye: "number",
                message: "Enter the amount" }
        ]);
        if (myBalance > amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log(`you have successfully withdrawn ${amountAns.amount}`);
            console.log("Your remaining Balance is", myBalance);
        }
        else {
            console.log("insufficiant Balance");
        }
    }
    else if (operationAns.operation === "balance enquiry") {
        console.log(`"Your Balance is", ${myBalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fCash = await inquirer.prompt([
            {
                name: "amt", type: "list", message: "Select your Amount", choices: ["500", "1000", "2000", "5000"]
            }
        ]);
        if (fCash.amt === "500") {
            myBalance -= 500;
            console.log("`You have withdrawn $500 ");
            console.log(`your current Balance is ${myBalance}`);
        }
        else if (fCash.amt === "1000") {
            myBalance -= 1000;
            console.log("`You have withdrawn $1000 ");
            console.log(`your current Balance is ${myBalance}`);
        }
        else if (fCash.amt === "2000") {
            myBalance -= 2000;
            console.log("`You have withdrawn $2000 ");
            console.log(`your current Balance is ${myBalance}`);
        }
        else if (fCash.amt === "5000") {
            myBalance -= 5000;
            console.log("`You have withdrawn $5000 ");
            console.log(`your current Balance is ${myBalance}`);
        }
        else {
            console.log("incorrect Amount");
        }
    }
}
else {
    console.log("incorrect Pin Number");
}
