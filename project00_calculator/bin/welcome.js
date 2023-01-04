import chalkAnimation from 'chalk-animation';
const Stop = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
};
async function welcome(message) {
    let rainbowTitle = chalkAnimation.rainbow(message);
    await Stop();
    rainbowTitle.stop();
    console.log(`
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
    |_____________________|
    `);
}
export { welcome };
