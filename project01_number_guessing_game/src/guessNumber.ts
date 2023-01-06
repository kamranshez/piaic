function guessNumber(guessNumber:number):boolean {
    let randomNumber:number =Math.floor((Math.random() * 5) + 1);

    if (randomNumber === guessNumber) {
        return true;
    } else {
        return false;
    }
}

export {guessNumber}