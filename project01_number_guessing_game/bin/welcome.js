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
}
export { welcome };
