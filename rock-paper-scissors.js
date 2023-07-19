/* Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
rockpaperscissors */


function rockPaperScissors( player1 , player2 ) {
   if ( player1 === player2) {
      return 'draw!'
   }
    
};


console.log(rockPaperScissors('rock' , 'rock'));