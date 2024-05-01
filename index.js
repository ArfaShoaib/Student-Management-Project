#! /usr/bin/env node
import inquirer from "inquirer";
const randomnum = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answers = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter Student Name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a value";
        },
    },
    {
        name: "cources",
        type: "list",
        message: "Select one cource you want to enroll",
        choices: ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "PYTHON"],
    },
]);
const fees = {
    HTML: 1000,
    CSS: 1000,
    JAVASCRIPT: 2000,
    TYPESCRIPT: 2500,
    PYTHON: 3000,
};
console.log(`\nYour tuition fee is:${fees[answers.cources]}\n`);
console.log(`\t \nYour Balance is : ${myBalance}\n \t`);
let paymentType = await inquirer.prompt([
    {
        name: "pay",
        type: "list",
        message: "Please select one method",
        choices: ["EASYPAISA", "JAZZCASH", "BANK TRANSFER"],
    },
    {
        name: "amount",
        type: "input",
        message: "Please enter your amount:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a amount";
        },
    },
]);
console.log(`\n You Select ${paymentType.pay} method`);
let tuitionfee = fees[answers.cources];
let payamount = parseFloat(paymentType.amount);
if (tuitionfee == payamount) {
    console.log(`\t \n Congratulations!! You Have Succesfully Enrolled In ${answers.cources}\n \t`);
}
else {
    console.log(`\t \n Invalid \n \t`);
}
