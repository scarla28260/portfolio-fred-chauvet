let canvas, ctx, gameLoop;
let snake = [];
let food = {};
let direction = 'right';
let score = 0;
let isGameRunning = false;
let currentPlatform = 'snake';

function launchGame(type) {
    const overlay = document.getElementById('game-overlay');
    const title = document.getElementById('game-title');
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.display = 'none', 500);

    canvas = document.getElementById('game-canvas');
    ctx = canvas.getContext('2d');

    currentPlatform = type;
    title.textContent = `RUNNING: ${type.toUpperCase()}.PY`;

    if (type === 'snake') initSnake();
    if (type === 'matrix') initMatrixGame();
}

// --- CYBER SNAKE ---
function initSnake() {
    snake = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
    generateFood();
    direction = 'right';
    score = 0;
    isGameRunning = true;
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(updateSnake, 100);
}

function generateFood() {
    food = {
        x: Math.floor(Math.random() * (canvas.width / 20)),
        y: Math.floor(Math.random() * (canvas.height / 20))
    };
}

function updateSnake() {
    const head = { x: snake[0].x, y: snake[0].y };
    if (direction === 'right') head.x++;
    if (direction === 'left') head.x--;
    if (direction === 'up') head.y--;
    if (direction === 'down') head.y++;

    // Collision Walls
    if (head.x < 0 || head.x >= canvas.width / 20 || head.y < 0 || head.y >= canvas.height / 20 || checkCollision(head)) {
        gameOver();
        return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        generateFood();
    } else {
        snake.pop();
    }

    drawSnake();
}

function checkCollision(head) {
    return snake.some((segment, index) => index !== 0 && segment.x === head.x && segment.y === head.y);
}

function drawSnake() {
    ctx.fillStyle = 'rgba(5, 8, 13, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Grid (Subtle)
    ctx.strokeStyle = 'rgba(0, 212, 255, 0.05)';
    for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 20) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
    }

    // Food
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#FF2E63';
    ctx.fillStyle = '#FF2E63';
    ctx.fillRect(food.x * 20, food.y * 20, 18, 18);

    // Snake
    snake.forEach((segment, i) => {
        ctx.shadowColor = i === 0 ? '#00D4FF' : '#7B61FF';
        ctx.fillStyle = i === 0 ? '#00D4FF' : '#7B61FF';
        ctx.fillRect(segment.x * 20, segment.y * 20, 18, 18);
    });
    ctx.shadowBlur = 0;

    // Score
    ctx.fillStyle = 'white';
    ctx.font = '12px Orbitron';
    ctx.fillText(`SCORE: ${score}`, 20, 30);
}

// --- MATRIX DODGE ---
let matrixProjectiles = [];
function initMatrixGame() {
    matrixProjectiles = [];
    score = 0;
    isGameRunning = true;
    snake = [{ x: canvas.width / 2, y: canvas.height - 40 }]; // Player position
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(updateMatrix, 1000 / 60);
}

function updateMatrix() {
    ctx.fillStyle = 'rgba(5, 8, 13, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Move Player
    if (keys['ArrowLeft'] && snake[0].x > 0) snake[0].x -= 7;
    if (keys['ArrowRight'] && snake[0].x < canvas.width - 30) snake[0].x += 7;

    // Draw Player
    ctx.fillStyle = '#00FF41';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#00FF41';
    ctx.fillRect(snake[0].x, snake[0].y, 30, 10);

    // Spawn projectiles
    if (Math.random() < 0.1) {
        matrixProjectiles.push({ x: Math.random() * canvas.width, y: -20, speed: Math.random() * 5 + 2 });
    }

    // Update projectiles
    matrixProjectiles.forEach((p, i) => {
        p.y += p.speed;
        ctx.fillText(Math.random() > 0.5 ? '1' : '0', p.x, p.y);

        // Collision
        if (p.y > snake[0].y && p.y < snake[0].y + 10 && p.x > snake[0].x && p.x < snake[0].x + 30) {
            gameOver();
        }

        if (p.y > canvas.height) {
            matrixProjectiles.splice(i, 1);
            score++;
        }
    });

    ctx.fillStyle = 'white';
    ctx.fillText(`DATA_SHIELD: ${score}`, 20, 30);
}

// --- CORE ---
function gameOver() {
    isGameRunning = false;
    clearInterval(gameLoop);
    const overlay = document.getElementById('game-overlay');
    overlay.style.display = 'flex';
    overlay.style.opacity = '1';
    document.getElementById('game-title').textContent = 'SYSTEM FAILURE: REBOOT REQUIRED';
}

const keys = {};
window.addEventListener('keydown', e => {
    keys[e.key] = true;
    if (currentPlatform === 'snake') {
        if (e.key === 'ArrowUp' && direction !== 'down') direction = 'up';
        if (e.key === 'ArrowDown' && direction !== 'up') direction = 'down';
        if (e.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
        if (e.key === 'ArrowRight' && direction !== 'left') direction = 'right';
    }
});
window.addEventListener('keyup', e => keys[e.key] = false);
