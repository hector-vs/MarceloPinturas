// Array com as frases
const phrases = [
{ 
    h1: "Excelência em pintura", 
    p: "Fazemos parcerias com decoradores, arquitetos e imobiliárias." 
},
{ 
    h1: "A SUA SATISFAÇÃO ESTÁ EM PRIMEIRO LUGAR", 
    p: "Proporcionando uma segurança e qualidade desde o orçamento até a entrega do serviço." 
},
{ 
    h1: "PREÇO JUSTO, RAPIDEZ E LIMPEZA", 
    p: "Com eficiência e término do serviço no prazo acordado." 
},
{ 
    h1: "VALORIZE O SEU IMÓVEL", 
    p: "contratando nossos serviços de pintura." 
},
{ 
    h1: "FORMAS DE PAGAMENTO VARIADAS", 
    p: "aceitamos cartões de crédito!" 
}
];

let index = 0;
const h1Element = document.getElementById("rotating-text");
const pElement = document.getElementById("rotating-paragraph");

function changeText() {
h1Element.classList.add("hidden"); // Aplica fade-out
pElement.classList.add("hidden"); // Aplica fade-out (se necessário)

setTimeout(() => {
    // Incrementa o índice e faz o loop
    index = (index + 1) % phrases.length;

    // Atualiza os textos
    h1Element.textContent = phrases[index].h1;
    pElement.textContent = phrases[index].p;

    // Remove o fade-out para o fade-in
    h1Element.classList.remove("hidden");
    pElement.classList.remove("hidden");
}, 500); // Tempo de fade-out
}

// Troca de texto a cada 4 segundos
setInterval(changeText, 5000);

document.querySelector('.whats').addEventListener('click', function () {
    window.open('https://wa.me/5511944635555', '_blank');
})