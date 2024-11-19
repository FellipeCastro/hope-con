const swiper = new Swiper('.swiper', {
    direction: 'horizontal', // Define a direção do slide para horizontal
    loop: true, // Ativa o loop, permitindo que o carrossel repita os slides infinitamente

    // Define a paginação (os pontos indicadores de slides)
    pagination: {
        el: '.swiper-pagination', // Seleciona o elemento de paginação
    },

    // Define os botões de navegação (avançar e voltar)
    navigation: {
        nextEl: '.swiper-button-next', // Botão para avançar
        prevEl: '.swiper-button-prev', // Botão para voltar
    },

    // Define a barra de rolagem (scrollbar)
    scrollbar: {
        el: '.swiper-scrollbar', // Seleciona o elemento da barra de rolagem
    },
})

// Capturando elementos do formulário e mensagem
const form = document.getElementById("form")
const msg = document.getElementById("msg")

// Adicionando um evento na submissão do formulário
form.addEventListener("submit", (e) => {
    e.preventDefault() // Previnindo o comportamento padrão do formulário

    msg.style.display = "block" // Exibindo a mensagem

    // Deixando a mensagem visível por apenas 5s
    setTimeout(() => {
        msg.style.display = "none"
    }, 5000)
})