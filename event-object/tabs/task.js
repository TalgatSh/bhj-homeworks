//const tabs = [...document.querySelectorAll(".tab")];
//const tabsContent = [...document.querySelectorAll(".tab__content")];
//for (let i = 0; i < tabs.length; i++) {
//  tabs[i].addEventListener("click", (event) => {
//    let tabsChildren = event.target.parentElement.children;
//    for (let a = 0; a < tabsChildren.length; a++) {
//      tabsChildren[a].classList.remove("tab_active");
//    }
//    tabs[i].classList.add("tab_active");
//    let tabsContentChildren = event.target.parentElement.nextElementSibling.children;
//    for (let t = 0; t < tabsContentChildren.length; t++) {
//      tabsContentChildren[t].classList.remove("tab__content_active");
//    }
//    tabsContent[i].classList.add("tab__content_active");
//  })
//}

const tabsContainer = document.querySelector(".tabs");
const tabs = Array.from(tabsContainer.querySelectorAll(".tab"));
const tabContents = Array.from(tabsContainer.querySelectorAll(".tab__content"));

tabsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("tab")) {
    const tab = event.target;
    const index = tabs.indexOf(tab);
    const tabContent = tabContents[index];

    tabs.forEach((t) => t.classList.remove("tab_active"));
    tabContents.forEach((c) => c.classList.remove("tab__content_active"));

    tab.classList.add("tab_active");
    tabContent.classList.add("tab__content_active");
  }
});