const input = document.querySelector('.tasks__input');
const task = document.querySelector('.tasks__list');
const btn = document.querySelector('.tasks__add');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (input.value === '') return;
  newElements(input.value);
  input.value = '';
})

function newElements(value) {
  console.log(value)
  let div = document.createElement('div');

  div.className = 'task';

  div.innerHTML = `
    <div class="task__title">
      ${input.value.trim()}
    </div>
    <a href="#" class="task__remove">&times;</a>
  `
  task.appendChild(div);
  let remove = document.querySelector('.task__remove');
  remove.addEventListener('click', (e) => {
    task.removeChild(div);
  })
}



//input.addEventListener('submit', (event) => {
//  let send = event.key;
//  event.preventDefault();
//  if (input.value.trim()) {
//    task.innerHTML += `
//      <div class="task">
//        <div class="task__title">
//          ${input.value.trim()}
//        </div>
//        <a href="#" class="task__remove">&times;</a>
//      </div>
//    `;
//  }
//})