// import functions and grab DOM elements
const shell1btn = document.getElementById('shell1-btn');
const shell2btn = document.getElementById('shell2-btn');
const shell3btn = document.getElementById('shell3-btn');

const shellOne = document.getElementById('shell-one');
const shellTwo = document.getElementById('shell-two');
const shellThree = document.getElementById('shell-three');

const totalEL = document.getElementById('total');
const winsEL = document.getElementById('wins');
const lossesEL = document.getElementById('losses');

const hidingPlaces = ['one', 'two', 'three'];




// let state
let gameWon = 0;
let gameLost = 0;

// set event listeners 
shell1btn.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'one');
});

shell2btn.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'two');
});

shell3btn.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'three');
});

  // get user input
function handleGuess(correct, pick) {
    shellOne.classList.remove('ball');
    shellTwo.classList.remove('ball');
    shellThree.classList.remove('ball');
    //totalGuesses++;
    //console.log(totalGuesses);

    if (correct === 'one') {
        shellOne.classList.add('ball');

    } else if (correct === 'two') {
        shellTwo.classList.add('ball');

    } else if (correct === 'three') 
        shellThree.classList.add('ball');
    
    if (pick === correct) {
        //correctGuesses++;
    }

    /*totalEL.textContent = totalGuesses;
    winsEL.textContent = correctGuesses;
    lossesEL.textContent = totalGuesses - correctGuesses;*/

    
}
  // use user input to update state 
  // update DOM to reflect the new state
