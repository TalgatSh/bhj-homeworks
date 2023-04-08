let rotator = document.querySelectorAll(".rotator__case");
let currentRotator = 0;
setInterval(nextRotator, 1000)

function nextRotator() {
  rotator[currentRotator].className = "rotator__case";
  currentRotator = (currentRotator + 1) % rotator.length;
  rotator[currentRotator].className = "rotator__case_active";
}