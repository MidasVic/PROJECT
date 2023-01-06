// pseudocoding first problem => //
// first declare a function called getComputerChoice //
// then inside or within the function, develop a method or an operation that will randomly return the string,: "rock", "paper" or "scissors" //
// console.log the operation to confirm it works. //

function getComputerChoice(){
    const myArray = ['rock', 'paper', 'scissors'];
    const RandomNumber = Math.floor(Math.random() * myArray.length)
    return myArray[RandomNumber];

} 
// console.log(getComputerChoice()) ==> returned below

// psuedocoding second problem => //
// declare a function name of your choice, //
// the function should have two parameters namely: "playerSelection" & "computerSelection" //
// return a string that says who won the round "e.g" "you lose! paper beats rock"//
// make the parameter "player selection" case insensitive so users can input any type or form of input "i.e" ROCK / rock / or others. //
// this function call should be returned not console logged because the function is going to be used later on //

function playRound(playerSelection, computerSelection){
   console.log(1, playerSelection, 2, computerSelection);
   console.log('player score:', playerScore, 'computer score:', computerScore);
   
if(playerSelection === computerSelection){
    return `you tied! you both picked ${playerSelection}` 

} else if(playerSelection === 'rock' && computerSelection === 'paper'){
    computerScore++;
    return 'you lose! paper covers rock'

} else if(playerSelection === 'rock' && computerSelection === 'scissors'){
    playerScore++;
    return 'you win! rock crushes scissors'

} else if(playerSelection === 'paper' && computerSelection === 'rock'){
    playerScore++;
    return 'you win! paper covers rock'

} else if(playerSelection === 'paper' && computerSelection === 'scissors'){
    computerScore++;
    return 'you lose! scissors cuts paper'

} else if(playerSelection === 'scissors' && computerSelection === 'rock'){
    computerScore++;
    return 'you lose! rock crushes scissors'

} else if(playerSelection === 'scissors' && computerSelection === 'paper'){
    playerScore++;
    return 'you win! scissors cuts paper'
}

}
// const playerSelection = 'rock' returned below =>
// const computerSelection = getComputerChoice();  returned below =>
// console.log(playRound(playerSelection, computerSelection)); returned below =>

// pseudocoding third problem => //
// declare a new function named "game" //
// call the playground function inside "game" function //
// initiate a method to play a 5 round game in the function //
// make a method that keeps score and reports the winner or loser at the end of the game // 

let playerScore = 0;
computerScore = 0;

function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose what to throw!", 'Rock Paper Scissors')
        const computerSelection = getComputerChoice();  
        console.log(playRound(playerSelection.toLowerCase(), computerSelection)); // this is console logged just because i want to peep the computer's play lol
    
        if(playerSelection === null){
            return alert('You quit game!') // strangely dosen't work because of the .tolowerCase() method in playerSelection 

        } else if(playerSelection === ''){
            return prompt('input empty, enter a value!')
        }
        // } else if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors' ){   < 
        //     return prompt(`${playerSelection}`)                                                                  > this two enables some nice feautures but disintergrates the game!! <
        // } else if (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors'){ ^  
        //     return prompt(`"${playerSelection}."   wrong spelling or form of input! but don't fret the game will still play as long as you input values close to default values or slightly different values from default! `)
        
        
    }        
       if(playerScore > computerScore){
            return "you beat the computer, you're a genius!"

        } else if(playerScore < computerScore){
            return "you lose! you got beaten. check your throws"

        } else if(playerScore = computerScore){
            return 'no winner you both tied!'
        }       
}
game();
