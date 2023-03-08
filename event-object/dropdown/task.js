const menu = document.querySelector(".dropdown__list");
const btnMenu = document.querySelector(".dropdown__value");
const nameMenu = [...document.querySelectorAll(".dropdown__link")];
btnMenu.addEventListener("click", () => {
  menu.classList.toggle("dropdown__list_active");
  if (menu.classList.contains("dropdown__list_active")) {
    nameMenu.forEach((e) => {
      e.addEventListener("click", (event) => {
      btnMenu.textContent = e.textContent;
      event.preventDefault();
      })
    })
  }
  return false;
})

