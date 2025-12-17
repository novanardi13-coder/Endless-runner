const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");
let isJumping = false;
let score = 0;

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") jump();
});

function jump() {
  if (isJumping) return;
  isJumping = true;
  let jumpHeight = 0;
  const upInterval = setInterval(() => {
    if (jumpHeight >= 150) {
      clearInterval(upInterval);
      const downInterval = setInterval(() => {
        if (jumpHeight <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        }
        jumpHeight -= 10;
        player.style.bottom = jumpHeight + "px";
      }, 20);
    }
    jumpHeight += 10;
    player.style.bottom = jumpHeight + "px";
  }, 20);
}

function moveObstacle() {
  let obstaclePosition = 600;
  const obstacleInterval = setInterval(() => {
    if (obstaclePosition < -50) {
      obstaclePosition = 600;
      score++;
      scoreDisplay.textContent = "Skor: " + score;
    }
    obstaclePosition -= 10;
    obstacle.style.right = obstaclePosition + "px";

    // Cek tabrakan
    const playerBottom = parseInt(player.style.bottom);
    if (
      obstaclePosition < 100 &&
      obstaclePosition > 50 &&
      playerBottom < 50
    ) {
      alert("Game Over! Skormu: " + score);
      score = 0;
      scoreDisplay.textContent = "Skor: 0";
      obstaclePosition = 600;
    }
  }, 20);
}

moveObstacle();