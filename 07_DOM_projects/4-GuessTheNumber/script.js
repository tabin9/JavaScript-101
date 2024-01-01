// generate a random num between 1 and 100
let randomNum = parseInt(Math.random() * 100 + 1);


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();

        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    // did the user give a valid guess? if so, what to do:
    // if not: avoid NaNs, nums < 0 or nums > 100
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over, Random number was ${randomNum}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    // print the message of validation, high or low
    if (guess === randomNum) {
        displayMessage(`You guessed it right!`);
        endGame();
    } else if (guess < randomNum) {
        displayMessage(`Number is low`);
    }  else if (guess > randomNum) {
        displayMessage(`Number is high`);
    } 
}

function displayGuess(guess) {
    // clean values in input, guess array update, remaining update

    // update user input --> clear it
    userInput.value = '';

    // update guess array
    guessSlot.innerHTML += `${guess}, `;

    // increment num of guesses
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    // display message where its low, high or guessed the num
    lowOrHi.innerHTML = `<h3>${message}</h2>`;
}

function endGame() {
    // end the game

    // clear the input
    userInput.value = ''
    // disable user to enter any attribute
    userInput.setAttribute('disabled', '')

    // add a new button to start the game
    // add a class list in the p we created earlier
    p.classList.add('button')
    // add h2 text inside p
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;

    // append p to div
    startOver.appendChild(p)
    // set play game to false
    playGame = false

    // new game
    newGame();
}

function newGame() {
    // use the reference of the button we created
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        // reset all variables
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        // remove the disable attribute we set earlier
        userInput.removeAttribute('disabled')
        // remove the start new button we added 
        startOver.removeChild(p)

        // set playGame variable to true
        playGame = true
    })
}