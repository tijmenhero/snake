const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;



let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = 'High Score: ${highScore}';


const updatFoodPosition = () =>{
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () =>{
  clearInterval(setIntervalId);
  alert("Game Over! Press OK to replay...");
  location.reload();
}

const changeDirection = e =>{
  if(e.key === "ArrowUp" && velocityY !=1){
    velocityX = 0;
    velocityY = -1:
  }else if(e.key === "ArrowDown" && volocityY != -1){
    velocityX = 0;
    velocityY = 1;
  }else if(e.key === "ArrowLeft" && velocityX != 1){
    velocityX = -1;
    velocityY = 0;
  }else if(e.key === "ArrowRight" && velocityX != -1){
    velocityX = 1;
    velocityY = 0;
  }
}

controls.forEach(button => button.addEventListener("click", () => changeDirection({key: button.dataset.key})));

const initGame = () =>{
  if(gameOver) return handleGameOver();
  let html = '<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>';

  
  if(snakeX === foodX && snakeY === foodY){
    updateFoodPosition();
    snakeBody.push([foodY, foodX]); //food bij snakebody optellen
    score++;
    highScore = score >= highScore ? score : highScore // als score groter is dan high score dan wordt de high score die score

    localStorage.setItem("high-score", highScore);
    scoreElement.innerText = 'Score: ${score}';
    highScoreElement.innerText = 'High Score: ${highScore}';
  }

  // update snake head 
  snakeX += velocityX;
  snakeY += velocityY;

  for(let i = snakeBody.length - 1; i > 0; i--){
    snakeBody[i] = snakeBody[i - 1];  
  }

  snakeBody[0] = [snakeX, snakeY];

  
  
}

