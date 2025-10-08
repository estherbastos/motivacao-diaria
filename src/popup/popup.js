// Substitua a parte de pegar frase do storage por uma frase padrão
const fraseEl = document.getElementById('frase');
const btn = document.getElementById('novaFrase');

const frases = [
  "Você é mais forte do que pensa.",
  "Acredite no seu potencial.",
  "Não desista agora!",
  "Cada passo te leva mais perto do seu objetivo.",
];

function novaFrase() {
  const index = Math.floor(Math.random() * frases.length);
  const frase = frases[index];
  fraseEl.textContent = frase;
}

// Como não tem chrome.storage, já define frase padrão:
fraseEl.textContent = frases[0];

btn.addEventListener('click', novaFrase);

  

  