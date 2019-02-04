/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer;
score = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.btn-roll').addEventListener('click', function(){
  //creating the random number
  var dice = Math.floor(Math.random() * 6) + 1;

  //effecting the eventListener
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png'; 
  //updating the currentScore if dice rolled was not a 1:
  if(dice !== 1){
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  }else{
    nextPlayer();
  }
})

document.querySelector('.btn-hold').addEventListener('click', function(){
  //add the roundscore to the global score
  score[activePlayer] += roundScore;
  document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
  //declare the winner of the game
  if(score[activePlayer] >= 20){
    document.querySelector('#name-' + activePlayer).textContent = 'winner';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';
  }else{
    nextPlayer();
  }

  
})

//document.querySelector('current-' +activePlyer).textContent = dice;

function nextPlayer(){
  roundScore = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}