const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth-40;
canvas.height = window.innerHeight-40;

canvas.style.backgroundColor = "black";


var ballx = Math.floor(Math.random()*(window.innerWidth-20))+ 10;
var bally = Math.floor(Math.random()*(window.innerHeight-20))+ 10; 

const play = document.querySelector("#play-button");

var direction = 0;
var x= 50, y= 50; 


play.addEventListener('click',function(){
    document.querySelector('#menu-container').style.display = 'none';
    playgame();

});


// starting point of my game
function playgame(){
console.log("game is play")
drawsnake(x,y);
randomball(ballx, bally);
const intervalId = setInterval(() => {
    if(x < 5 || x > canvas.width - 5 || y < 5 || y > canvas.height - 5){
        console.log(`Game Over`);
        document.querySelector('#menu-container').style.display = 'flex';
        play.addEventListener('click',function(){
            x = canvas.width/2, y = canvas.height/2;
            document.querySelector('#menu-container').style.display = 'none';
            playgame();
        });
        clearInterval(intervalId); // Clear the interval to stop the loop
        return;
    }

    if(direction == 1){
        y -= 4;
    } else if(direction == 0){
        y += 4;
    } else if(direction == 2){
        x -= 4;
    } else if(direction == 3){
        x += 4;
    } else {
        console.log(`direction error`);
    }
    drawsnake(x, y);
}, 100);}
function randomball(ballx,bally){
 // Clear canvas
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(ballx, bally, 10, 10);
}
// Add event listener for keydown event
window.addEventListener('keydown', function(event) {
    // Check which key was pressed
    switch (event.key) {
        case 'ArrowUp':
            // Handle the up arrow key press
            direction = 1;
            y -= 5; // Move up
            break;
        case 'ArrowDown':
            // Handle the down arrow key press
            direction = 0;
            y += 5; // Move down
            break;
        case 'ArrowLeft':
            direction = 2;
            // Handle the left arrow key press
            x -= 5; // Move left
            break;
        case 'ArrowRight':
            // Handle the right arrow key press
            direction = 3;
            x += 5; // Move right
            break;
        default:
            // Handle other key presses
            console.log('Key pressed:', event.key);
    }
    // Redraw the snake after movement
});
function drawsnake(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
     randomball(ballx,bally);
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, 10, 10);
}








/*const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth-40;
canvas.height = window.innerHeight-40;

canvas.style.backgroundColor = "black";

var ballx = Math.floor(Math.random()*(window.innerWidth-20))+ 10;
var bally = Math.floor(Math.random()*(window.innerHeight-20))+ 10;

const play = document.querySelector("#play-button");

var direction = 0;
x=50 , y=50;

play.addEventListener('click',function(){
    document.querySelector('#menu-container').style.display = 'none';
    playgame();

});


// starting point of my game
function playgame(){
console.log("game is play")

size_a.forEach(size => {
    drawsnake(x, y);
    console.log(`Position of ${x} or ${
        y
    }`)
});


randomball(ballx, bally);
const intervalId = setInterval(() => {
    if(x < 5 || x > canvas.width - 5 || y < 5 || y > canvas.height - 5){
        console.log(`Game Over`);
        document.querySelector('#menu-container').style.display = 'flex';
        play.addEventListener('click',function(){
            x = canvas.width/2, y = canvas.height/2;
            document.querySelector('#menu-container').style.display = 'none';
            playgame();
        
        });
        clearInterval(intervalId); // Clear the interval to stop the loop
        return;
    }

    if(direction == 1){
        y -= 4;
    } else if(direction == 0){
        y += 4;
    } else if(direction == 2){
        x -= 4;
    } else if(direction == 3){
        x += 4;
    } else {
        console.log(`direction error`);
    }
    drawsnake(x, y);
}, 100);

}

function randomball(ballx,bally){

 // Clear canvas
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(ballx, bally, 10, 10);
}

// Add event listener for keydown event
window.addEventListener('keydown', function(event) {
    // Check which key was pressed
    switch (event.key) {
        case 'ArrowUp':
            // Handle the up arrow key press
            direction = 1;
            y -= 12; // Move up
            break;
        case 'ArrowDown':
            // Handle the down arrow key press
            direction = 0;
            y += 12; // Move down
            break;
        case 'ArrowLeft':
            direction = 2;
            // Handle the left arrow key press
            x -= 12; // Move left
            break;
        case 'ArrowRight':
            // Handle the right arrow key press
            direction = 3;
            x += 12; // Move right
            break;
        default:
            // Handle other key presses
            console.log('Key pressed:', event.key);
    }
});





function drawsnake(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    randomball(ballx,bally);
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, 10, 10);
} 


/*const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 40;
canvas.height = window.innerHeight - 40;

canvas.style.backgroundColor = "black";

const play = document.querySelector("#play-button");

let direction = 0;
let snake = [{ x: 50, y: 50 }];
let ball = { x: 0, y: 0 };

play.addEventListener('click', function () {
    document.querySelector('#menu-container').style.display = 'none';
    playgame();
});

function playgame() {
    generateBall(); // Generate the initial ball
    const intervalId = setInterval(() => {
        moveSnake();
        if (checkCollision()) {
            clearInterval(intervalId);
            console.log("Game Over");
            document.querySelector('#menu-container').style.display = 'flex';
        }
        drawGame();
    }, 100);
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawBall();
}

function drawSnake() {
    ctx.fillStyle = "green";
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, 10, 10);
    });
}

function drawBall() {
    ctx.fillStyle = "red";
    ctx.fillRect(ball.x, ball.y, 10, 10);
}

function moveSnake() {
    const head = { x: snake[0].x, y: snake[0].y };
    switch (direction) {
        case 0:
            head.y += 12; // Move down
            break;
        case 1:
            head.y -= 12; // Move up
            break;
        case 2:
            head.x -= 12; // Move left
            break;
        case 3:
            head.x += 12; // Move right
            break;
    }
    snake.unshift(head); // Add new head segment

    // Check if the snake eats the ball
    if (head.x === ball.x && head.y === ball.y) {
        generateBall(); // Generate a new ball
    } else {
        snake.pop(); // Remove tail segment if the snake doesn't eat the ball
    }
}

function checkCollision() {
    const head = snake[0];
    // Check if the head collides with the walls
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        return true;
    }
    // Check if the head collides with itself (snake body)
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

function generateBall() {
    let isOnSnake = true;
    while (isOnSnake) {
        // Generate a new position for the ball
        ball.x = Math.floor(Math.random() * ((canvas.width - 20) / 10)) * 10 + 10;
        ball.y = Math.floor(Math.random() * ((canvas.height - 20) / 10)) * 10 + 10;
        // Ensure the new ball position is not on the snake
        isOnSnake = snake.some(segment => segment.x === ball.x && segment.y === ball.y);
    }
}

window.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowUp':
            if (direction !== 0) direction = 1;
            break;
        case 'ArrowDown':
            if (direction !== 1) direction = 0;
            break;
        case 'ArrowLeft':
            if (direction !== 3) direction = 2;
            break;
        case 'ArrowRight':
            if (direction !== 2) direction = 3;
            break;
        default:
            console.log('Key pressed:', event.key);
    }
}); */ 