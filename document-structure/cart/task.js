const value = [...document.querySelectorAll('.product__quantity-value')];
const plus = [...document.querySelectorAll('.product__quantity-control_inc')];
const minus = [...document.querySelectorAll('.product__quantity-control_dec')];
const cartbtn = [...document.querySelectorAll('.product__add')];
const controls = [...document.querySelectorAll('.product__quantity-control')];

controls.forEach((e) => {
  e.addEventListener('click', (event) => {
    let target = event.target;
    let maxCount = parseFloat(value.textContent);
    if (target.classList.contains('product__quantity-control_inc')) {
      value.textContent = maxCount + 1;
    }
    
  })
})