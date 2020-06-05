const btn = document.querySelector('.btn');
let scoreDisplay = document.getElementById('number');
const win = document.getElementById('win');
const lose = document.getElementById('lose');
const restart = document.getElementById('reset');
let score = 0;

btn.addEventListener('click', (e) => {

    // Create a random number
    const dieRoll = Math.floor( Math.random() * 5 ) + 1;  

    //Display the result
   console.log( document.getElementsByTagName('img')[0]);
    document.getElementsByTagName('img')[0].src = 'img/dice' + dieRoll + '.png';
    
    score =  dieRoll + score;
    scoreDisplay.textContent = score;
    

    document.getElementsByClassName('.number').textContent = score;

    console.log(score);

    if(dieRoll == 1) {
       lose.textContent = "You Lose!"; 
       restart.style.display = 'block';
        
    } else if (score >= 20) {
       win.textContent = "You Win!"; 
       restart.style.display = 'block';
    } 
    
});

restart.addEventListener('click', (e) => {
    location.reload();
});