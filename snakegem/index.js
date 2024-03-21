const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 40;
canvas.height = window.innerHeight - 40;

canvas.style.backgroundColor = "black";

let ball = generateRandomPosition();
let direction = 0;
let x = 50, y = 50;
let snake = [{ x, y }];

const play = document.querySelector("#play-button");

play.addEventListener('click', function () {
    document.querySelector('#menu-container').style.display = 'none';
    playgame();
});

function playgame() {
    console.log("game is play");
    const intervalId = setInterval(() => {
        movesnake();
        if (checkCollision()) {
            clearInterval(intervalId);
            console.log(`Game Over`);
            document.querySelector('#menu-container').style.display = 'flex';
        }
        drawGame();
    }, 100);
}

function movesnake() {
    switch (direction) {
        case 1:
            y -= 5; // Move up
            break;
        case 0:
            y += 5; // Move down
            break;
        case 2:
            x -= 5; // Move left
            break;
        case 3:
            x += 5; // Move right
            break;
        default:
            console.log(`direction error`);
            break;
    }

    // Add new head segment
    snake.unshift({ x, y });

    // Check if the snake eats the ball
    if (x === ball.x && y === ball.y) {
        // Increase snake length
        snake.push({ x, y });
        // Generate a new random position for the ball
        ball = generateRandomPosition();
    } else {
        // Remove tail segment if the snake doesn't eat the ball
        snake.pop();
    }
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

function generateRandomPosition() {
    return {
        x: Math.floor(Math.random() * (canvas.width - 20)) + 10,
        y: Math.floor(Math.random() * (canvas.height - 20)) + 10
    };
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
});
