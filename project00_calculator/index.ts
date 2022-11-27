#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { listenerCount } from "process";

const sleep = ()=>{
    return new Promise((res) => {
        setTimeout(res, 1000);
    }
)}


async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Let Start Calcualte');
    await sleep();
    rainbowTitle.stop();
    console.log(` _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`);


}

console.clear();

await welcome();

async function askQuestion() {
   let answers = await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"list",
        name:"operation",
        message:"Which operation you want to perform",
        choices:["addition", "subtraction", "multiplication" , "division"]
    },
    {
        type:"number",
        name:"operand1",
        message:"Enter number 1: "
    },
    {
        type:"number",
        name:"operand2",
        message:"Enter number 2: "
    }


  ]);
     
    switch (answers.operation) {
        case "addition":
            console.log(answers.operand1 + answers.operand2);
        break;
   
        case "subtraction":
            console.log(answers.operand1 - answers.operand2);
        break;
       
        case "multiplication":
            console.log(answers.operand1 * answers.operand2);
        break;
       
        case "division":
            console.log(answers.operand1 / answers.operand2);
        break        
                
        default:
            
        break;
      
        }

}



async function startAgain() {
    
    do {
        await askQuestion();
        var repeat = await inquirer.prompt([{
            name: "again",
            type: "input",
            message: "Do you want to contine? press y/Y for continue:"}
        ]);
    
    } while (repeat.again === 'y' || repeat.again === 'Y');


}

startAgain();