const token = '5462607539:AAHKyBBkU2epPdAjI0-t0uQys19XsGYdBOw';
const chatId = 851424962;

const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');

async function sendMessage(text) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
  const params = {
    chat_id: chatId,
    text,
  };

  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  })
}

async function sendDice(emoji) {
  const url = `https://api.telegram.org/bot${token}/sendDice`;
  
  const params = {
    chat_id: chatId,
    emoji,
  };

  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  })
}

firstButton.onclick = () => {
  const text = prompt('В поле ниже введите текст, который необходимо отправить боту в лс', 'Ваш текст');

  if (text) {
    sendMessage(text);
  }
}

secondButton.onclick = () => {
  const correctEmojies = [ '🎲', '🎯','🏀', '⚽', '🎳', '🎰'];
  const emoji = prompt('В поле ниже введите эмодзи, который необходимо отправить боту в лс', 'Ваш эмодзи');

  if (correctEmojies.includes(emoji)) {
      sendDice(emoji);
  }
}
