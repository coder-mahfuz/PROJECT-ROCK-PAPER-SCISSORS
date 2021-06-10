let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const action_p = document.getElementById("action-message");
const button_div = document.getElementById("btnn")



function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}


function win(userChoice, computerChoice) {
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore; 
result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} .you win`;
document.getElementById(userChoice).classList.add('green-glow');
setTimeout(() =>
    document.getElementById(userChoice).classList.remove('green-glow')
, 300);

if(userScore >= 5 && computerScore < 5){
    action_p.innerHTML = "Hurraah, You Won the Game";
    rock_div.style.display = "none";
    paper_div.style.display = "none";
    scissors_div.style.display = "none";
    result_p.style.display = "none"; 
    button_div.style.display = "block"; 
    }
}


function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)} .you lost`;
    document.getElementById(userChoice).classList.add('red-glow');
setTimeout(() =>
    document.getElementById(userChoice).classList.remove('red-glow')
, 300);

    if (computerScore >= 5 && userScore < 5){
    action_p.innerHTML = "Oh, You Just Lost";
    rock_div.style.display = "none";
    paper_div.style.display = "none";
    scissors_div.style.display = "none";
    result_p.style.display = "none";
    button_div.style.display = "block";
    }
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)} .it's a draw`;
    document.getElementById(userChoice).classList.add('gray-glow');
setTimeout(() =>
    document.getElementById(userChoice).classList.remove('gray-glow')
, 300);

if (computerScore == 5 && userScore == 5){
    action_p.innerHTML = "Oh, It's Just a Draw";
    rock_div.style.display = "none";
    paper_div.style.display = "none";
    scissors_div.style.display = "none";
    result_p.style.display = "none";
    }
}



function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":    
        win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr": 
        lose(userChoice, computerChoice);
        break;    
        case "rr":
        case "pp":
        case "ss": 
        draw(userChoice, computerChoice);   
        break;    
    }
}

function main(){
    rock_div.addEventListener('click', () =>
    game("r"));
     paper_div.addEventListener('click', () =>
    game("p"));
     scissors_div.addEventListener('click', () =>
    game("s"));
}

main();