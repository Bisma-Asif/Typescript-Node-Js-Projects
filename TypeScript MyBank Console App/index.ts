class Customer {
    FirstName: string = "";
    LastName: string = "";
    Gender: string = "";
    Age: string = "";
    MobileNumber: string = "";
    bankAccount: BankAccount = new BankAccount();

    CustomerInfo(): string {
        return `Name: ${this.FirstName} ${this.LastName}
Age: ${this.Age}
Gender: ${this.Gender}
Mobile: ${this.MobileNumber}
Account Balance: ${this.bankAccount.AccountBalance}`;
    }
}

interface IBankAccount {
    Debit(d: number): string;
    Credit(d: number): string;
}

class BankAccount implements IBankAccount {
    AccountBalance: number = 100;

    constructor() {
        this.AccountBalance = 100;
    }

    Debit(amount: number): string {
        let statement = "Sorry, you have insufficient balance!";

        if (amount > 0) {
            statement = "The amount you entered is wrong!";
            if (this.AccountBalance > amount) {
                this.AccountBalance -= amount;
                statement = `Transaction successful! New account balance is ${this.AccountBalance}`;
            } else {
                statement = "You don't have enough money to do this transaction";
            }
        }
        return statement;
    }

    Credit(amount: number): string {
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

const customer = new Customer();
customer.FirstName = "John";
customer.LastName = "Doe";
customer.Gender = "Male";
customer.Age = "30";
customer.MobileNumber = "1234567890";

console.log(customer.CustomerInfo());

const account = new BankAccount();
console.log(account.Debit(50));
console.log(account.Credit(200));
console.log(account.Debit(150));
