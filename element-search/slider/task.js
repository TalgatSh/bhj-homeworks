const slider = [...document.querySelectorAll(".slider__item")];
const next = document.querySelector(".slider__arrow_next");
const prev = document.querySelector(".slider__arrow_prev");

next.onclick = nextSlide;
prev.onclick = prevSlide;

function getCurrentIndex() {
  let currentIndex = slider.findIndex((item) =>
    item.closest(".slider__item_active")
  );
  return currentIndex;
}

function nextSlide() {
  let currentIndex = getCurrentIndex();
  if (currentIndex !== -1) {
    slider[currentIndex].classList.toggle("slider__item_active");
    if (currentIndex === slider.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
  } else {
    alert("Ошибка");
  }
  slider[currentIndex].classList.toggle("slider__item_active");
}

function prevSlide() {
  let currentIndex = getCurrentIndex();
  if (currentIndex !== -1) {
    slider[currentIndex].classList.toggle("slider__item_active");
    if (currentIndex === 0) {
      currentIndex = slider.length - 1;
    } else {
      currentIndex--;
    }
  } else {
    alert("Ошибка");
  }
  slider[currentIndex].classList.toggle("slider__item_active");
}