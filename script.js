let newGame = document.getElementById('newGame');
let rollDice = document.getElementById('rollDice');
let playerOneRandomNumber = Math.floor(Math.random() * 5 + 1);
let playerTwoRandomNumber = Math.floor(Math.random() * 5 + 1);
let playerOneCurrentScore = 0;
let playerTwoCurrentScore = 0;


//Satrts new game
newGame.addEventListener('click', () => {
    location.reload();
});

rollDice.addEventListener('click', () => {

});