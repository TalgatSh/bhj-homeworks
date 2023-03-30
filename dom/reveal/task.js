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
      if (bottom < 0) {
        reveal.forEach((t) => t.classList.toggle("reveal_active"));
      }
      if (top > window.innerHeight) {
        reveal.forEach((t) => t.classList.toggle("reveal_active"));
      }
      reveal.classList.toggle("reveal_active");
  })
}

document.addEventListener("scroll", revealActive(reveal));

