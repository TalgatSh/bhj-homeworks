const countSum = document.getElementById("clicker__counter");
const count = document.getElementById("cookie")
count.onclick = function() {
  let maxCount = parseFloat(countSum.textContent);  
  countSum.textContent = maxCount + 1;
  if (maxCount % 2 === 0) {
    count.width = 300;
  } else {
    count.width = 200;
  }
}