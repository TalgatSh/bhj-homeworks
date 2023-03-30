const bookContainer = document.querySelector(".book__control");
const fontsActive = [...document.querySelectorAll(".font-size")];
const fontSize = document.querySelector(".book")

bookContainer.addEventListener("click", () => {
    fontsActive.forEach((f) => {
        const font = f.fontsActive;
        if (!font.classList.contains("font-size_active")) {
            font.classList.toggle("font-size_active")
            if (font.classList.contains("font-size_small")) {
                font.classList.toggle("font-size_active");
                fontSize.classList.add("book_fs-small");
            }
            if (font.classList.contains("font-size_big")) {
                font.classList.toggle("font-size_active");
                fontSize.classList.add("book_fs-big");
            }
        } else {
            font.classList.toggle("font-size_active")
        }
    })
    
    //if (event.target.classList.contains("font-size")) {
    //    const font = event.target;
    //    font.classList.add("font-size_active");
    //    if (font.contains("font-size_small")) {
    //        fontSize.classList.add("book_fs-small");
    //    }
    //    
    //    fontsActive.forEach((f) => f.classList.remove("font-size_active"))
    //    
    //  }
})