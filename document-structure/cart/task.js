const value = [...document.querySelectorAll('.product__quantity-value')];
const plus = [...document.querySelectorAll('.product__quantity-control_inc')];
const minus = [...document.querySelectorAll('.product__quantity-control_dec')];
const cartbtn = [...document.querySelectorAll('.product__add')];
const controls = [...document.querySelectorAll('.product__quantity-control')];
const cartProducts = document.querySelector('.cart__products');



controls.forEach((e) => {
  e.addEventListener('click', (event) => {
    let target = event.target;
    let valueTarget = target.closest('.product__quantity-controls');
    let maxCount = valueTarget.querySelector('.product__quantity-value');
    if (target.classList.contains('product__quantity-control_inc')) {
      maxCount.innerText = ++maxCount.innerText;
    }
    if (target.classList.contains('product__quantity-control_dec') && parseInt(maxCount.innerText) > 1) {
      maxCount.innerText = --maxCount.innerText;
    }
  })
})

cartbtn.forEach((e) => {
  e.addEventListener('click', (event) => {
    let cartTarget = event.target;
    let product = cartTarget.closest('.product');
    let productInfo = {
      id: product.dataset.id,
      img: product.querySelector('.product__image').getAttribute('src'),
      maxCount: product.querySelector('.product__quantity-value').innerText
    };
    let itemInCart = cartProducts.querySelector(`[data-id="${productInfo.id}"]`);
    if (itemInCart) {
      let counterItem = itemInCart.querySelector('.cart__product-count');
      counterItem.innerText = parseInt(counterItem.innerText) + parseInt(productInfo.maxCount);
    } else {
        cartProducts.innerHTML += `
          <div class="cart__product" data-id="${productInfo.id}">
            <img class="cart__product-image" src="${productInfo.img}">
            <div class="cart__product-count">${productInfo.maxCount}</div>
          </div>
        `;
    }
  })
})