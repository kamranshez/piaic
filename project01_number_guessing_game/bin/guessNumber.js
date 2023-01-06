function guessNumber(guessNumber) {
    let randomNumber = Math.floor((Math.random() * 5) + 1);
    if (randomNumber === guessNumber) {
        return true;
    }
    else {
        return false;
    }
}
export { guessNumber };
