// class Person {
//     // Declare a field to represent the personality
//     private personality: string;
//     // Constructor
//     constructor() {
//       this.personality = "Mystery";
//     }
//     // This method asks a question and sets the personality
//     askQuestion(answer: number) {
//       if (answer === 1) {
//         this.personality = "Extravert";
//       } else {
//         this.personality = "Introvert";
//       }
//     }
//     // This method returns the value of the Personality
//     getPersonality(): string {
//       return this.personality;
//     }
//   }
//   // Create a new person
//   const person = new Person();
//   // Ask the person a question
//   person.askQuestion(1);
//   // Print the person's personality
//   console.log(person.getPersonality());
var MyBank;
(function (MyBank) {
    class Customer {
        FirstName = "";
        LastName = "";
        Gender = "";
        Age = "";
        MobileNumber = "";
        bankAccount = new BankAccount();
        CustomerInfo() {
            return `Name: ${this.FirstName} ${this.LastName}
Age: ${this.Age}
Gender: ${this.Gender}
Mobile: ${this.MobileNumber}
Account Balance: ${this.bankAccount.AccountBalance}`;
        }
    }
    MyBank.Customer = Customer;
    class BankAccount {
        AccountBalance = 100;
        constructor() {
            this.AccountBalance = 100;
        }
        Debit(amount) {
            let statement = "Sorry, you have insufficient balance!";
            if (amount > 0) {
                statement = "The amount you entered is wrong!";
                if (this.AccountBalance > amount) {
                    this.AccountBalance -= amount;
                    statement = `Transaction successful! New account balance is ${this.AccountBalance}`;
                }
                else {
                    statement = "You don't have enough money to do this transaction";
                }
            }
            return statement;
        }
        Credit(amount) {
            let statement = "Transaction failed!";
            if (amount > 0) {
                this.AccountBalance += amount;
                if (amount > 100) {
                    this.AccountBalance -= 1;
                }
                statement = "Your account has been credited successfully";
            }
            return statement;
        }
    }
    MyBank.BankAccount = BankAccount;
})(MyBank || (MyBank = {}));
const customer = new MyBank.Customer();
customer.FirstName = "John";
customer.LastName = "Doe";
customer.Gender = "Male";
customer.Age = "30";
customer.MobileNumber = "1234567890";
console.log(customer.CustomerInfo());
const account = new MyBank.BankAccount();
console.log(account.Debit(50));
console.log(account.Credit(200));
console.log(account.Debit(150));
export {};
