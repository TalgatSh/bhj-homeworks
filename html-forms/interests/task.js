const interestMain = document.querySelectorAll('.interest__check');
//const interestSub = $(interestMain).closest('.interests_active');
console.log(interestMain[0])

interestMain[0].addEventListener('change', () => {
  if (interestMain[0].checked != false) {
    interestMain[1].checked = true;
    interestMain[2].checked = true;
  } else {
    interestMain[1].checked = false;
    interestMain[2].checked = false;
  }
});

interestMain[3].addEventListener('change', () => {
  if (interestMain[3].checked != false) {
    interestMain[4].checked = true;
    interestMain[5].checked = true;
  } else {
    interestMain[4].checked = false;
    interestMain[5].checked = false;
  }
});
