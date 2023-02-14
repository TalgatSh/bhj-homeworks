const timer = document.getElementById("timer");
let countFuncDown = function() {
  let maxSec = parseFloat(timer.textContent);
  timer.textContent = maxSec - 1;
  if (maxSec === 0) {
    clearInterval(countDown);
    alert("Вы победили в конкурсе!");
  }
}
let countDown = setInterval(countFuncDown, 1000);
