const fontsActive = [...document.querySelectorAll(".font-size .book__control")];
const fontSize = document.querySelector(".book");

fontsActive.forEach((r) => {
  r.addEventListener('click', onFontSizeChange);
})

const onFontSizeChange = e => {
  const control = e.target;
  const size = control.dataset.size || '';
  if (currentSize == control.classList.contains("font-size_active")) {
    control.classList.remove("font-size_active");
    fontSize.classList.remove(`book_fs-${currentSize}`);
  }
  control.classList.add("font-size_active");
  fontSize.classList.add(`book_fs-${size}`);
  currentSize = size;
}

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