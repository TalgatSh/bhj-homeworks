const input = document.querySelector('.tasks__control');
const task = document.querySelector('.tasks__list');

input.addEventListener('keyup', (event) => {
  let send = event.key;
  if (send !== 'Enter') return;
  if (input.value.trim()) {
    task.innerHTML += `
      <div class="task">
        <div class="task__title">
          ${input.value.trim()}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>
    `;
  } else return;
})