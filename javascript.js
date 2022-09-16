console.log("Rock-Paper-Scissors");

let buttonRock = document.querySelector('.button-rock');
let buttonPaper = document.querySelector('.button-paper');
let buttonScissors = document.querySelector('.button-scissors');
let buttonPlay = document.querySelector('.button-play');
let scoreOne = 0;
let scoreTwo = 0;
let gameCount = 0;




buttonRock.addEventListener( "click", function() {
	buttonGame(0);
});

buttonPaper.addEventListener( "click", function() {
	buttonGame(1);
});

buttonScissors.addEventListener( "click", function() {
	buttonGame(2);
});


function computerPlay(){
	let randomNumber = Math.floor(Math.random() * 100) + 1;

	return randomNumber % 3;
}

function humanPlay(){
	let temp = prompt("Playing?> ");

	switch(temp.toLowerCase()){
		case "rock":
			return 0;
			break;
		case "paper":
			return 1;
			break;
		case "scissors":
			return 2;
			break;
		default:
			break;
	}

	return -1;
}

function getPlay(x){
	return [0,2,1][x % 3];
}

function getRockPlay(x){
	return getPlay(x);
}

function getPaperPlay(x){
	return getPlay(x + 2);
}

function getScissorPlay(x){
	return getPlay(x + 1);
}

function playRound(playerSelection, computerSelection){
	//let rockPlay = [0, 2, 1];
	//let paperPlay = [1, 0, 2];
	//let scissorPlay = [2, 1, 0];


	switch(computerSelection){
		case 0:
			console.log("Computer plays: Rock");
			break;
		case 1:
			console.log("Computer plays: Paper");
			break;
		case 2:
			console.log("Computer plays: Scissors");
			break;
		default:
			console.log("Computer plays: Unknown (" + computerSelction.toString() + ")" );
			return [-1, playerSelection];
			break;
	}


	if(playerSelection == computerSelection){
		return [0, playerSelection];
	}

	switch(playerSelection){
		case 0:
			return [getRockPlay(computerSelection), playerSelection];
			break;
		case 1:
			return [getPaperPlay(computerSelection), playerSelection];
		case 2:
			return [getScissorPlay(computerSelection), playerSelection];
		default:
			console.log("Invalid playing option");
			return [-1, playerSelection];
	}

}

function game(){
	let playerOne = -1;
	let playerTwo = -1;

	let scoreOne = 0;
	let scoreTwo = 0;

	let results = [-1, -1];

	let gameCount = 0;
	while( gameCount < 5 ){
		updateScores(scoreOne, scoreTwo);
		playerOne = humanPlay();
		playerTwo = computerPlay();

		results = playRound(playerOne, playerTwo);

		gameCount +=1;
		switch(results[0]){
			case 0:
				console.log("Round " + gameCount.toString() + "> Tie match!");
				break;
			case 1:
				scoreOne += 1;
				console.log("Round " + gameCount.toString() + "> You win! " + winStatement(results));
				break;
			case 2:
				scoreTwo += 1;
				console.log("Round " + gameCount.toString() + "> You lose! " + winStatement(results));
				break;
			default:
				console.log("Invalid round thrown out. Replay round");
				gameCount -= 1;
				break;
		}

	}
	updateScores(scoreOne, scoreTwo);


	if( scoreOne > scoreTwo ){
		console.log("You won!");
	}
	if( scoreTwo > scoreOne ){
		console.log("Computer player wins!");
	}
	if( scoreOne == scoreTwo ){
		console.log("Tied game!");
	}

	console.log("---FINAL SCORE---");
	console.log("YOU: " + scoreOne.toString() + ";  PC: " + scoreTwo.toString() );

}

function buttonGame(playerOne){
	let playerTwo = -1;

	let results = [-1, -1];
	if( gameCount < 5 ){
		playerTwo = computerPlay();

		results = playRound(playerOne, playerTwo);

		gameCount +=1;
		switch(results[0]){
			case 0:
				console.log("Round " + gameCount.toString() + "> Tie match!");
				break;
			case 1:
				scoreOne += 1;
				console.log("Round " + gameCount.toString() + "> You win! " + winStatement(results));
				break;
			case 2:
				scoreTwo += 1;
				console.log("Round " + gameCount.toString() + "> You lose! " + winStatement(results));
				break;
			default:
				console.log("Invalid round thrown out. Replay round");
				gameCount -= 1;
				break;
		}
		updateButtonScores();
	}

	if(gameCount > 4) {

		buttonRock.disabled = true;
		buttonPaper.disabled = true;
		buttonScissors.disabled = true;
		buttonPlay.disabled = true;

	
		if( scoreOne > scoreTwo ){
			console.log("You won!");
		}
		if( scoreTwo > scoreOne ){
			console.log("Computer player wins!");
		}
		if( scoreOne == scoreTwo ){
			console.log("Tied game!");
		}

		console.log("---FINAL SCORE---");
		console.log("YOU: " + scoreOne.toString() + ";  PC: " + scoreTwo.toString() );

	}



}


function winStatement( gameResults ){
	switch(gameResults[1]){
		case 0:
			return ( (gameResults[0] == 1) ? "Rock beats Scissors" : "Paper beats Rock");
		case 1:
			return ( (gameResults[0] == 1) ? "Paper beats Rock" : "Scissors beat Paper");
		case 2:
			return ( (gameResults[0] == 1) ? "Scissors beat Paper": "Rock beats Scissors");
	}
}

//game();

function updateScores(scoreOne, scoreTwo){
	let container1 = document.querySelector('.one-scorecard');
	let container2 = document.querySelector('.two-scorecard');
	container1.textContent = scoreOne;
	container2.textContent = scoreTwo;

}

function updateButtonScores(){
	let container1 = document.querySelector('.one-scorecard');
	let container2 = document.querySelector('.two-scorecard');
	container1.textContent = scoreOne;
	container2.textContent = scoreTwo;
}

