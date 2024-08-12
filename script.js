const text = "Olá, apresento-lhes meu currículo!";
const typingSpeed = 100; // Velocidade de digitação em milissegundos
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    }
}

window.onload = typeWriter;