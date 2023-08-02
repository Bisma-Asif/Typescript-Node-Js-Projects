import inquirer from "inquirer";
const ans = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your sentence"
    }
]);
const words = ans.Sentence.split(" ");
console.log(`There are ${words.length} word in your sentence`);
