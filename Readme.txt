* learning in the way to develop my snake game i learn how many ways i can perform my task
this is my script 
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth-40;
canvas.height = window.innerHeight-40;

canvas.style.backgroundColor = "black";

// const play = document.querySelector("#play-button");

// play.addEventListener('click',function(){
//     document.querySelector('#menu-container').style.display = 'none';
//     playgame();
// });
var x =50 , y = 50 ;
playgame();
// starting point of my game
function playgame(){
console.log("game is play")
drawsnake(x,y);
}

// window.addEventListener("keydown", function(event) {
//     if (event.key === "ArrowDown" || event.key === "ArrowUp") {
//         x += 10; // Adjust x coordinate for ArrowDown and ArrowUp
//     }
//     if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
//         y += 10; // Adjust y coordinate for ArrowLeft and ArrowRight
//     }
//     drawsnake(x.y);
// });
function randomball(){
    var radius = 10;
    var ballx = Math.floor(Math.random()*(window.innerWidth-2*radius))+ radius;
    var bally = Math.floor(Math.random()*(window.innerHeight-2*radius))+ radius;
    drawsnake(ballx,bally,10,10);
    ctx.fillStyle = "red";
    ctx.closePath();
}
randomball()

// Add event listener for keydown event
window.addEventListener('keydown', function(event) {
    // Check which key was pressed
    switch (event.key) {
        case 'ArrowUp':
            // Handle the up arrow key press
            this.y -= 12; // Move up
            break;
        case 'ArrowDown':
            // Handle the down arrow key press
            this.y += 12; // Move down
            break;
        case 'ArrowLeft':
            // Handle the left arrow key press
            this.x -= 12; // Move left
            break;
        case 'ArrowRight':
            // Handle the right arrow key press
            this.x += 12; // Move right
            break;
        default:
            // Handle other key presses
            console.log('Key pressed:', event.key);
    }
    // Redraw the snake after movement
    drawsnake(x, y);
});

function drawsnake(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, 10, 10);
    x +=2;
}


/* use with constructor
// Define the Snake constructor
function Snake(x, y) {
    this.x = x;
    this.y = y;
}

// Define the drawsnake function
function drawsnake(ctx, snake) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(snake.x, snake.y, 10, 10);
}
// Create a Snake instance
var snake = new Snake(50, 50);

// Draw the snake
drawsnake(ctx, snake);

// for keywords i try to userSelect: 

class Movement {
    constructor() {
        // Define any properties here if needed
    }

    handleKeyPress(event) {
        // Check which key was pressed
        switch(event.key) {
            case 'ArrowUp':
                // Handle the up arrow key press
                console.log('Up arrow key pressed');
                break;
            case 'ArrowDown':
                // Handle the down arrow key press
                console.log('Down arrow key pressed');
                break;
            case 'ArrowLeft':
                // Handle the left arrow key press
                console.log('Left arrow key pressed');
                break;
            case 'ArrowRight':
                // Handle the right arrow key press
                console.log('Right arrow key pressed');
                break;
            default:
                // Handle other key presses
                console.log('Key pressed:', event.key);
        }
    }
}

// Create an instance of the Movement class
const movement = new Movement();

// Add event listener for keydown event
window.addEventListener('keydown', function(event) {
    // Call the handleKeyPress method of the movement instance
    movement.handleKeyPress(event);
});


*/