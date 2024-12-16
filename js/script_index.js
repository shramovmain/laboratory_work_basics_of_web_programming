let score = 0;
const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const gameArea = document.getElementById('gameArea');

function moveTarget() {
    const x = Math.random() * (gameArea.clientWidth - target.clientWidth);
    const y = Math.random() * (gameArea.clientHeight - target.clientHeight);
    target.style.left = x + 'px';
    target.style.top = y + 'px';
}

target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = 'Очки: ' + score;
    moveTarget();
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        score = 0;
        scoreDisplay.textContent = 'Очки: ' + score;
        moveTarget();
    }
});

// Перемещение цели в начальное положение
moveTarget();