const modal = document.getElementById("modal_main");
const modalClose = document.querySelector(".modal__close");
const modalShow = document.querySelector(".show-success");
const modalSuccess = document.getElementById("modal_success");

modal.classList.add("modal_active");
modalClose.onclick = function() {
  modal.classList.remove("modal_active");
}
modalShow.onclick = function() {
  modalSuccess.classList.add("modal_active");
}
modalSuccess.onclick = function() {
  modal.classList.remove("modal_active");
  modalSuccess.classList.remove("modal_active");
}