//const buttons = [...document.querySelectorAll(".font-size")];
const book = document.querySelector(".book");

//console.log(buttons);

const parent = document.querySelector(".book__control");
const buttons = parent.querySelectorAll(".font-size");

parent.addEventListener("click", (event) => {
  let control = event.target;
  let size = control.dataset.size || '';
  event.preventDefault();
  if (control.classList.contains("font-size")) {
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("font-size_active");
      book.classList.remove(`book_fs-${size}`);
    }
    control.classList.add("font-size_active");
    book.classList.add(`book_fs-${size}`);
  }
});

//buttons.forEach((element) =>
//  element.addEventListener("click", (event) => {
//    event.preventDefault();
//    const control = event.target;
//    const size = control.dataset.size || '';
//    if (size == (`book_fs-${size}`)) {
//      book.classList.remove(`book_fs-${size}`);
//    }
//    book.classList.add(`book_fs-${size}`);
//    
//    console.log("click");
//  }));

//const fontsActive = [...document.querySelectorAll(".font-size .book__control")];
//const fontSize = document.querySelector(".book");

//fontsActive.forEach((r) => {
//  r.addEventListener('click', onFontSizeChange);
//})

//const onFontSizeChange = e => {
//  const control = e.target;
//  const size = control.dataset.size || '';
//  if (currentSize == control.classList.contains("font-size_active")) {
//    control.classList.remove("font-size_active");
//    fontSize.classList.remove(`book_fs-${currentSize}`);
//  }
//  control.classList.add("font-size_active");
//  fontSize.classList.add(`book_fs-${size}`);
//  currentSize = size;
//}

//let currentSize;

//const enbaleSizeControls = () => {
//	const controls = [...document.querySelectorAll('.book__control .font-size')];
//	controls.forEach(
//		control => document.addEventListener('click', onFontSizeChange)
//	);
//}


//const onFontSizeChange = e => {
//	const control = e.target;
//	const size = control.dataset.size || '';
//	if (currentSize = document.querySelector(".")) {
//		book.classList.remove(`book_fs-${currentSize}`);
//	}

//	book.classList.add(`book_fs-${size}`);
//	currentSize = size;
//}