const widget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');

widget.addEventListener('click', () => {
  widget.classList.add('chat-widget_active');
  
});

input.addEventListener('keyup', (event) => {
  let send = event.key;
  let messageList = [
    'Вы не купили ни одного товара, чтобы так с нами разговаривать!',
    'Кто тут?',
    'Где ваша совесть?',
    'Мы ничего не будем вам продавать!'
  ];
  let message = Math.floor(Math.random() * messageList.length);
  if (send !== 'Enter') return;
  const time = new Date();
  Hour = time.getHours().toString().length < 2 ? '0' + time.getHours() : time.getHours();
  Minute = time.getMinutes().toString().length < 2 ? '0' + time.getMinutes() : time.getMinutes();
  if (input.value.trim()) {
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${Hour}:${Minute}</div>
          <div class="message__text">
            ${input.value.trim()}
        </div>
      </div>
    `;
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${Hour}:${Minute}</div>
          <div class="message__text">
            ${messageList[message]}
        </div>
      </div>
    `;
  } else return;
  input.value = ''
});




//messages.innerHTML += `
//  <div class="message">
//    <div class="message__time">09:21</div>
//    <div class="message__text">
//      Добрый день, мы ещё не проснулись. Позвоните через 10 лет
//    </div>
//  </div>
//`;