import inquirer from "inquirer";
const ans = await inquirer.prompt([
    {
        type: "input",
        name: "UserID",
        message: "Enter your ID"
    },
    {
        type: "number",
        name: "UserPin",
        message: "Enter your PIN"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type:"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "withdraw"],
        message: "Select Your transaction",
        when(ans) {
            return ans.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select Your amount",
        when(ans) {
            return ans.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your amount",
        when(ans) {
            return ans.transactionType == "withdraw";
        },
    }
]);
// if (ans.userID && ans.userPin) {
//     const balance = Math.floor(Math.random() * 10000000);
//     console.log(balance)
//     const EnteredAmount = ans.amount;
//     if(balance >= EnteredAmount){
//         const remainingAmount = balance - EnteredAmount;
//         console.log("Your Remaining balance is " , remainingAmount)
//     }
//     else{
//         console.log("Insuficient Balance")
//     }
// }
// if (ans.UserID && ans.UserPin) {
//     const balance = Math.floor(Math.random()*10000000);
//     console.log(balance)
//     const EnteredAmount = ans.amount;
//     if (balance >= EnteredAmount) {
//         const remianing = balance - EnteredAmount;
//         console.log( "Your remaining balance is", remianing)
//     } else {
//         console.log("Insuficient Balance")
//     }
// }
if (ans.UserID !== undefined && ans.UserPin !== undefined) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log("Current balance:", balance);
    const EnteredAmount = ans.amount;
    if (balance >= EnteredAmount) {
        const remainingAmount = balance - EnteredAmount;
        console.log("Your Remaining balance is", remainingAmount);
    }
    else {
        console.log("Insufficient Balance");
    }
}
else {
    console.log("Invalid userID or userPin");
}
