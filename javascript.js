console.log("Rock-Paper-Scissors");


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
		case "scissors"
			return 2;
			break;
		default:
			break;
	}

	return -1;
}

function playRound(playerSelection, computerSelection){
	let rockPlay = [0, 2, 1];
	let paperPlay = [1, 0, 2];
	let scissorPlay = [2, 1, 0];


	switch(computerSelction){
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
			return [-1, playerSelction];
			break;
	}


	if(playerSelction == computerSelection){
		return [0, playerSelction];
	}

	switch(playerSelction){
		case 0:
			return [rockPlay[computerSelection], playerSelction];
			break;
		case 1:
			return [paperPlay[computerSelection], playerSelction];
		case 2:
			return [scissorPlay[computerSelection], playerSelction];
		default:
			console.log("Invalid playing option");
			return [-1, playerSelction];
	}

}

function game(){
	let playerOne = humanPlay();
	let playerTwo = computerPlay();

	let scoreOne = 0;
	let scoreTwo = 0;

	let gameCount = 0;
	while( gameCount < 5 ){
		let results = playRound(playerOne, playerTwo);

		gameCount +=1;
		switch(results[0]){
			case 0:
				console.log("Tie match!");
				break;
			case 1:
				scoreOne += 1;
				console.log("You win!" + winStatement(results));
				break;
			case 2:
				scoreTwo += 1;
				console.log("You lose! " + winStatement(resutls));
				break;
			default:
				console.log("Invalid round thrown out. Replay round");
				gameCount -= 1;
				break;
		}


	}


	if( scoreOne > scoreTwo ){
		console.log("You won!");
	}
	if( scoreTwo > scoreOne ){
		console.log("Computer player wins!");
	}
	if( scoreOne == scoreTwo ){
		console.log("Tied game!");
	}

}

function winStatement( gameResults ){
	switch(gameresults[1]){
		case 0:
			return ( (gameresults[0] == 1) ? "Rock beats Scissors" : "Paper beats Rock");
		case 1:
			return ( (gameresults[0] == 1) ? "Paper beats Rock" : "Scissors beat Paper");
		case 2:
			return ( (gameresults[0] == 1) ? "Scissors beat Paper": "Rock beats Scissors");
	}
}

game();