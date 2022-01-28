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
let gameTotal = 0;

// set event listeners 
shell1btn.addEventListener('click', () => {
    reset();
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'one');
    displayResults();
    
});

shell2btn.addEventListener('click', () => {
    reset();
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'two');
    displayResults();
    
});

shell3btn.addEventListener('click', () => {
    reset();
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'three');
    displayResults();
});

  // get user input
function handleGuess(correct, pick) {
   
    gameTotal++;
    

    if (correct === 'one') {
        shellOne.classList.add('ball');
        //shellTwo.classList.remove('hidden-png');
        //shellThree.classList.remove('hidden-png');

    } else if (correct === 'two') {
        shellTwo.classList.add('ball');
        //shellOne.classList.remove('hidden-png');
        //shellThree.classList.remove('hidden-png');

    } else if (correct === 'three') 
        shellThree.classList.add('ball');
    //shellTwo.classList.remove('hidden-png');
    //shellOne.classList.remove('hidden-png');
    
    if (pick === correct) {
        gameWon++;
    }

   

    
}

function displayResults(){
    totalEL.textContent = gameTotal;
    winsEL.textContent = gameWon;
    lossesEL.textContent = gameTotal - gameWon;
}

function reset() {
    shellOne.classList.remove('ball');
    shellTwo.classList.remove('ball');
    shellThree.classList.remove('ball');
}
  // use user input to update state 
  // update DOM to reflect the new state
