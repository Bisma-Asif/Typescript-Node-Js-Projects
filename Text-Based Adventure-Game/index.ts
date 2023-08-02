import inquirer from 'inquirer';

function startGame(): any {
  console.log('Welcome to the Text-Based Adventure Game!');
  console.log('You are in a dark room. There are two doors in front of you, one on the left and one on the right.');

  return inquirer
    .prompt({
      type: 'list',
      name: 'doorChoice',
      message: 'Which door do you choose?',
      choices: ['left', 'right'],
    })
    .then((answer) => {
      if (answer.doorChoice === 'left') {
        console.log('You chose the left door. It leads to a treasure room!');
        console.log('Congratulations, you win!');
      } else if (answer.doorChoice === 'right') {
        console.log('You chose the right door. It leads to a room full of monsters!');
        console.log('You try to run away, but the monsters catch you.');
        console.log('Game Over!');
      }

      console.log('Thanks for playing!');
    });
}
startGame();

