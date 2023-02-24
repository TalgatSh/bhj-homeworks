const menu = [...document.querySelectorAll(".menu__link")];
menu.forEach((element) => {
  let menuSub = element.closest(".menu__item").querySelector(".menu_sub");
  if (!menuSub) {
    return;
  }
  element.onclick = function () {
    menuSub.classList.toggle("menu_active");
    return false;
  }
})
//for (let i = 0; i < menu.length; i++) {
//  let menuList = menu[i].closest(".menu__item");
//  let menuSub = menuList.querySelector(".menu_sub");  
//  if (!menuSub) {
//    return false;
//  } else {
//    menu[i].onclick = function () {
//      menuSub.classList.toggle("menu_active");
//    }
//  }
//}
