let score = 0;
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const scoreDisplay = document.querySelector('.total-score');
function updateScore() {
  score = 0;
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      score++; 
    }
  });
  scoreDisplay.textContent = `Score: ${score}`;
}
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateScore);
});