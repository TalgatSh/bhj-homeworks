const tabs = [...document.querySelectorAll(".tab")];
const tabsContent = [...document.querySelectorAll(".tab__content")]
tabs.forEach((e) => {  
  e.addEventListener("click", () => {
    e.classList.toggle("tab_active")
    tabsContent.forEach((c) => {
      c.classList.toggle("tab__content_active")
    })
  })
})