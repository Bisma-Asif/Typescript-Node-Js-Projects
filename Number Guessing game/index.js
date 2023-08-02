import inquirer from "inquirer";
async function startFunc() {
    const RandonGentrateNo = Math.floor(Math.random() * 10);
    const userAns = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Write your guess number"
        }
    ]);
    const { userGuess } = userAns;
    console.log(userGuess, "userGuess", RandonGentrateNo, 'systemGuess');
    if (userGuess === RandonGentrateNo) {
        console.log("Great job!!! Your answer is correct \n You are a Winner ");
    }
    else {
        console.log("Opps!! your answer is wrong \n please try again");
    }
}
async function startAgain() {
    do {
        await startFunc();
        var again = await inquirer
            .prompt([
            {
                type: "Input",
                name: "restart",
                message: "Do You Want to Continue? Press Y or N"
            }
        ]);
    } while (again.restart == "Y" || again.restart == "y");
}
startAgain();
