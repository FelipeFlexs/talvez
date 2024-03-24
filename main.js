// main.js
const buttonNao = document.getElementById('moving-button'); // Alterado para 'buttonNao' para evitar conflito com 'button' global
let intervalId;

function moveButton() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    buttonNao.style.left = x + 'px'; // Alterado para 'buttonNao'
    buttonNao.style.top = y + 'px';  // Alterado para 'buttonNao'
}

buttonNao.addEventListener('click', function () {  // Alterado para 'buttonNao'
    if (!intervalId) {
        intervalId = setInterval(moveButton, 10);
    } else {
        clearInterval(intervalId);
        intervalId = null;
    }
});

