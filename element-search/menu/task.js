const menu = [...document.querySelectorAll(".menu__item")];
//const menuSub = document.querySelectorall(".menu_sub");
menu.forEach((element) => {
  let menuSub = element.closest(".menu__item").querySelector(".menu_sub");
  if (!menuSub) {
    return;
  } else {
    element.onclick = function () {
      menuSub.classList.toggle("menu_active");
    }
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
