// generating a random color

const randColor = function() {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

// start and stop button
let eachInterval;
const startChangingColor = () => {
    // just a professional way to check if the value is null or not
    if (!eachInterval) {
        eachInterval = setInterval(() => {
            document.body.style.backgroundColor = randColor();
        }, 1000)
    }
}
const stopChangingColor = () => {
    clearInterval(eachInterval)
    // fluss out eachInterval --> clean up memory
    eachInterval = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)