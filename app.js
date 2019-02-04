/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, gmaePlay;
init();

document.querySelector('.btn-roll').addEventListener('click', function(){

  if(gamePlay){
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
  }

})

document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlay){
    //add the roundscore to the global score
    score[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
    //declare the winner of the game
    if(score[activePlayer] >= 20){
      document.querySelector('#name-' + activePlayer).textContent = 'winner';
      document.querySelector('.dice').style.display = 'none';
      gamePlay = false;
    }else{
      nextPlayer();
    }
  }
  

  
})

//setting up the new game button
document.querySelector('.btn-new').addEventListener('click', init);

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

function init(){
  gamePlay = true;
  score = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0; 
  document.getElementById('name-0').textContent = 'Player 1';  
  document.getElementById('name-1').textContent = 'Player 2'; 
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  
}