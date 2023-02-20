const menu = [...document.querySelectorAll(".menu__item")];
const menuSub = document.querySelector(".menu_sub")
for (let i = 0; i < menu.length; i++) {
  menu[i].onclick = function () {
    if (menu[i].classList.toggle(".menu_sub")) {
      menuSub.classList.add("menu_active")
      return false;
    } else {
      menuSub.classList.remove("menu_active")
      return false;
    }
  }
}
