let YourMove;
let randomNumber;
let compMove;
let result;
const Score = {
    lose: 0,
    wins: 0,
    tied: 0
};
Score = JSON.parse(localStorage.getItem('Score'));
function RockF() {
    randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        compMove = '✊🏻';
        result = 'Tied';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        compMove = '📰';
        result = 'You Lose';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        compMove = '✂';
        result = 'You Win';
    }
}
function PaperF() {
    randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        compMove = '✊🏻';
        result = 'You Win';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        compMove = '📰';
        result = 'Tied';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        compMove = '✂';
        result = 'You Lose';
    }
}
function ScissorsF() {
    randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        compMove = '✊🏻';
        result = 'You Lose';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        compMove = '📰';
        result = 'You Win';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        compMove = '✂';
        result = 'Tied';
    }
}
function ResultCounter() {
    if (result === 'You Win') {
        Score.wins = Score.wins + 1;
    }
    else if (result === 'You Lose') {
        Score.lose = Score.lose + 1;
    }
    else if (result === 'Tied') {
        Score.tied = Score.tied + 1;
    }
    console.log(`Won=${Score.wins} , Lost=${Score.lose} , Tied=${Score.tied}`);
    (document.querySelector('.ScoreDisplay')).innerHTML = `${result} <br>You chose ${YourMove} & Computer chose ${compMove} <br>Won=${Score.wins} , Lost=${Score.lose} , Tied=${Score.tied} ,`;
}
localStorage.setItem('Score', JSON.stringify(Score));
