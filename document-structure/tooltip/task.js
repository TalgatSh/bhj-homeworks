const tooltip = [...document.querySelectorAll(".has-tooltip")];

tooltip.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    target.innerHTML += `
      <div class="tooltip tooltip_active">
        ${target.getAttribute('title')} 
      </div>
    `;
    target.outerHTML += ``;
  })
})