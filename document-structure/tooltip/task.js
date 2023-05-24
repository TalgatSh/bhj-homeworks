const tooltip = [...document.querySelectorAll(".has-tooltip")];


tooltip.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    let position = target.getBoundingClientRect();
    console.log(position)
    target.innerHTML += `
      <div class="tooltip tooltip_active">
        ${target.getAttribute('title')} 
      </div>
    `;
    target.outerHTML += ``;
    let tooltip2 = document.querySelector('.tooltip');
    tooltip2.style.left = position.left + 'px';
    tooltip2.style.top = position.top + 'px';
  })
})