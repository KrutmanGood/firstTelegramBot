const token = '5462607539:AAHKyBBkU2epPdAjI0-t0uQys19XsGYdBOw';
const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');

async function sendMessage(text) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const params = {
    chat_id: 851424962,
    text,
  };

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  })
  const result = await response.json();
}

async function sendDice(emoji) {
  const url = `https://api.telegram.org/bot${token}/sendDice`;
  const params = {
    chat_id: 851424962,
    emoji,
  };

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  })
  const result = await response.json();
}

firstButton.onclick = function a() {

  let text = prompt('В поле ниже введите текст, который необходимо отправить боту в лс', 'Ваш текст');

  if (text != '') {
    sendMessage(text);
  }
}

secondButton.onclick = function b() {

  let emoji = prompt('В поле ниже введите эмодзи, который необходимо отправить боту в лс', 'Ваш эмодзи');



  if (emoji == '🎲' || emoji == '🎯' || emoji == '🏀' || emoji == '⚽' || emoji == '🎳' || emoji == '🎰') {
      sendDice(emoji);
  }
}
