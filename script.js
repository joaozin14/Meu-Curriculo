const text = "Olá, apresento-lhes meu currículo! Clique nele para ir para o Github.";
const typingSpeed = 90; // Velocidade de digitação em milissegundos
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    }
}

window.onload = typeWriter;