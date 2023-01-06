#! /usr/bin/env node

//show welcome message 
// ask for number to guess
//compare with random generated number 
// if number match show win other wise loss
import { welcome } from './welcome.js';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { guessNumber} from './guessNumber.js';

//Display Welcome message 
await welcome("Lets Play Number Guessing Gam");


let playAgain = true;

type Record ={total:number,win:number,lose:number};
let totalRecord: Record = {total:0, win:0 , lose:0}

// let total = 0;
// let win = 0 ;
// let lose= 0 ;
type Answer = {
    inputNumber: number;
    }

async function getInputFromUser(): Promise<void> {
    const answers: Answer = await inquirer.prompt([
        {
            name: "inputNumber",
            message: "Enter your guess number between 1 to 5:",
            type: "input",
            validate: function (input:any) {
                if (isNaN(input) || input === "" || input > 6) {
                    return "Not a valid input";
                }
                else {
                    return true;
                }
            }
        }
    ])

    const inputNumber = Number(answers.inputNumber) ;
    
    totalRecord.total++;
    console.log(totalRecord.total)
    
    if (guessNumber(inputNumber)) {
    console.log(chalk.green("You guesss the right number. You Win!"));
    totalRecord.win++;

} else {
    console.log(chalk.red("You guesss the wrong number. You Lose!"));
    totalRecord.lose ++;
}

//console.log(inputNumber);

}

async function wantToPlayAgain():Promise<void> {
    
    let confirm = await inquirer.prompt([{
        name:"verify",
        type:"confirm",
        message:"Press Y to play again, Press N to end game"
    }])

    playAgain=confirm.verify;

    //console.log(total);
    console.log(`"Total" ${totalRecord.total} "Win" ${totalRecord.win} "Loss" ${totalRecord.lose}`);

}

do {

    await getInputFromUser();
    await wantToPlayAgain();
    
} while (playAgain);

