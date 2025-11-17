const imagens = [
    document.getElementById("carrossel1"),
    document.getElementById("carrossel2"),
    document.getElementById("carrossel3")
];

let index = 0;

function mostrarImagem(i) {
    imagens.forEach(img => img.classList.remove("ativo"));
    imagens[i].classList.add("ativo");
}

mostrarImagem(index);

setInterval(() => {
    index = (index + 1) % imagens.length;
    mostrarImagem(index);
}, 3000);
