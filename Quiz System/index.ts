import inquirer from "inquirer";

async function Questions() {
    
    const answers = await inquirer.prompt([
        {
            type:"list",
            name: "question1",
            choices: ["Amazon","Microsoft","Oracle","Typescript"],
            message: "Which of the company has developed Typescript ?",
        },
        {
            type:"list",
            name: "question2",
            choices: ["Gradual","Duck","Dynamic","All of above"],
            message: "What is the typing principle of Typescript ?",
        },
        {
            type:"list",
            name: "question3",
            choices: [".tt","tsx",".node",".ts"],
            message: "Which extension is use for Typescript ?",
        },
        {
            type:"list",
            name: "question4",
            choices: ["Javascript","C#","Java","All of above"],
            message: "Which of the computer programming languages below has influencedthe creation of Typescript ?",
        },
    ])
    const marks = 10;
    const fail = 0;
    if (answers.question1 === "Microsoft") {
        console.log("Your answer is correct...!")
    }else{
        console.log("Opps! Your answer is wrong");
    }
    if(answers.question2 === "Dynamic"){
        console.log("Your answer is correct...!")
    }else{
        console.log("Opps! Your answer is wrong");
    }
    if(answers.question3 === ".ts"){
        console.log("Your answer is correct...!")
    }else{
        console.log("Opps! Your answer is wrong");
    }
    if(answers.question4 === "Javascript"){
        console.log("Your answer is correct...!")
    }else{
        console.log("Opps! Your answer is wrong");
    }
}
Questions();