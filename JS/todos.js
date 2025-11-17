document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll("article");

    articles.forEach(article => {
        const imgs = article.querySelectorAll("img");
        if (imgs.length <= 1) return;

        let index = 0;


        imgs.forEach((img, i) => {
            img.style.display = i === 0 ? "block" : "none";
        });


        const container = document.createElement("div");
        container.classList.add("btn-container");

        const btnPrev = document.createElement("button");
        btnPrev.classList.add("btn-prev");
        btnPrev.textContent = "<";

        const btnNext = document.createElement("button");
        btnNext.classList.add("btn-next");
        btnNext.textContent = ">";

        container.appendChild(btnPrev);
        container.appendChild(btnNext);
        article.appendChild(container);

        function mostrarImagem(i) {
            imgs.forEach(img => (img.style.display = "none"));
            imgs[i].style.display = "block";
        }

        btnNext.addEventListener("click", () => {
            index = (index + 1) % imgs.length;
            mostrarImagem(index);
        });

        btnPrev.addEventListener("click", () => {
            index = (index - 1 + imgs.length) % imgs.length;
            mostrarImagem(index);
        });
    });
});
