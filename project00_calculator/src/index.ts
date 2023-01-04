#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk'
import { Calculator } from './calculator.js';
import { welcome } from './welcome.js';


type Answer = {
    firstNumber: string;
    operation: "+" | "-" | "x" | "/" | "^" | "%";
    secondNumber: string;
}


async function getInputFromUser(): Promise<void> {
    const answers: Answer = await inquirer.prompt([
        {
            name: "firstNumber",
            message: "Enter first number",
            type: "input",
            validate: function (input:any) {
                if (isNaN(input) || input === "") {
                    return "Not a valid input"
                }
                else {
                    return true;
                }
            }
        },
        {
            name: "operation",
            message: "Choose an operation",
            type: "list",
            choices: ["+", "-", "x", "/", "^", "%"]
        },
        {
            name: "secondNumber",
            message: "Enter second number",
            type: "input",
            validate: function (input:any) {
                if (isNaN(input) || input === "") {
                    return "Not a valid input"
                }
                else {
                    return true;
                }
            }
        }

    ])

    const firstNumber = Number(answers.firstNumber);
    const secondNumber = Number(answers.secondNumber);
    const operatror =  answers.operation;
    let answer:number = Calculator(firstNumber,secondNumber,operatror)
    console.log(chalk.green(`Result: ${firstNumber} ${operatror} ${secondNumber} = ${answer}`))
    
    

}

async function starAgain() {
    do {
        await getInputFromUser();
        var again = await inquirer
            .prompt({
                type: 'input',
                name: 'restart',
                message: 'Do You Want Calculate Again ?Press y Or n:'
            })
        if (again.restart == 'n') {
            break;
        }
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'n' || again.restart == 'N')
}



//Display Welcome message 
await welcome("Let Start Calculations");

starAgain();

export { }