const reveal = Array.from(document.querySelectorAll(".reveal"));
//function revealActive(e) {  
//    const { top, bottom } = e.getBoundingClientRect();
//    if (bottom < 0) {
//      return reveal.classList.toggle("reveal_active");
//    }
//    if (top > window.innerHeight) {
//      return reveal.classList.toggle("reveal_active");
//   }
//    return reveal.classList.toggle("reveal_active");
//  }

//document.addEventListener("scroll", () => revealActive(reveal));
function revealActive() {
  reveal.forEach((r) => {
    const { top, bottom } = r.getBoundingClientRect();
    if (top < window.innerHeight && bottom > 0) {
      r.classList.add("reveal_active");
    } else {
      r.classList.remove("reveal_active");
    }
  })
}

document.addEventListener("scroll", revealActive(reveal));

