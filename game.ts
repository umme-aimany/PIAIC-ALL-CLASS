//////////////////////friend game////////////////
let friend:string="aroma";
if(friend==="bisma"||friend==="Aroma"){
    console.log(`${friend} "you are my best friend.`);
}
else{
    console.log(`${friend}you are not my friend`)
}

///////////////////////guesss game////////////////////
let guess = 7;
let target = 5;
if (guess < target) {
    console.log("your guess is to low");
}
else if (guess > target) {
    console.log("your guess is to high");
}
else {
    console.log("you guess correctly");
}
//////////////////your guess is to high//////////////////////////
///////////////////////////rock paper sessior game///////////
let player1: string = "Rock";
let player2: string = "Scissors";

if (player1 === player2) {
    console.log("It's a tie!");
} else if (
    (player1 === "Rock" && player2 === "Scissors") ||
    (player1 === "Scissors" && player2 === "Paper") ||
    (player1 === "Paper" && player2 === "Rock")
) {
    console.log("Player 1 wins!");
} else {
    console.log("Player 2 wins!");
}
