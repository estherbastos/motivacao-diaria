const palavras = ["motivação", "foco", "produtividade"];
const regex = new RegExp(`\\b(${palavras.join("|")})\\b`, "gi");

document.body.innerHTML = document.body.innerHTML.replace(regex, (match) => {
  return `<mark style="background-color: yellow">${match}</mark>`;
});
