const numero = prompt('digite um numero:');
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero// alteramos o elemento do html span
texto.innerHTML = `<p> Seu numero - 2 é `;