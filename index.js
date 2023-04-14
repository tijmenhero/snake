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
