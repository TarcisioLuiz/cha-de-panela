const ItensLista = [
    {
        Nome: "Ferro de passar roupa",
        imagem: "https://images.unsplash.com/photo-1517639493569-5666a7b2f494?w=500",
        url: "https://www.google.com/search?q=ferro+de+passar+roupa"
    },
    {
        Nome: "Conjunto de Panelas",
        imagem: "https://images.unsplash.com/photo-1584990344119-a2ce1082fab5?w=500",
        url: "https://www.google.com/search?q=conjunto+de+panelas"
    },
    {
        Nome: "Panela de Pressão",
        imagem: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=500",
        url: "https://www.google.com/search?q=panela+de+pressao"
    },
    {
        Nome: "Aspirador de Pó",
        imagem: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500",
        url: "https://www.google.com/search?q=aspirador+de+po"
    },
    {
        Nome: "Caminha de Gato",
        imagem: "https://images.unsplash.com/photo-1548546738-8509cb246ed3?w=500",
        url: "https://www.google.com/search?q=caminha+de+gato"
    },
    {
        Nome: "Assadeira de inox/vidro",
        imagem: "https://images.unsplash.com/photo-1581439645268-ad7bb4df3532?w=500",
        url: "https://www.google.com/search?q=assadeira+de+inox+vidro"
    },
    {
        Nome: "Cafeteira elétrica",
        imagem: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500",
        url: "https://www.google.com/search?q=cafeteira+eletrica"
    },
    {
        Nome: "Jogo de Bowls Inox",
        imagem: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=500",
        url: "https://www.google.com/search?q=jogo+de+bowls+inox"
    },
    {
        Nome: "Jogo de Talher",
        imagem: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=500",
        url: "https://www.google.com/search?q=jogo+de+talher"
    },
    {
        Nome: "Escorredor de Pratos Inox",
        imagem: "https://images.unsplash.com/photo-1622262512638-7613768340d2?w=500",
        url: "https://www.google.com/search?q=escorredor+de+pratos+inox"
    },
    {
        Nome: "Sanduicheira",
        imagem: "https://images.unsplash.com/photo-1610439003310-449e5d415f3e?w=500",
        url: "https://www.google.com/search?q=sanduicheira"
    },
    {
        Nome: "Kit 4 Taças de Vinho",
        imagem: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500",
        url: "https://www.google.com/search?q=kit+tacas+de+vinho"
    },
    {
        Nome: "Kit de Utensílios Cozinhar",
        imagem: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500",
        url: "https://www.google.com/search?q=kit+utensilios+cozinha"
    },
    {
        Nome: "Jogo 10 Potes Vidro (Marmita)",
        imagem: "https://images.unsplash.com/photo-1584263347416-85a696b4eda7?w=500",
        url: "https://www.google.com/search?q=potes+de+vidro+marmita"
    },
    {
        Nome: "Conjunto Peneira Inox",
        imagem: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=500",
        url: "https://www.google.com/search?q=peneira+inox"
    },
    {
        Nome: "Jogo 4 Toalhas de Banho",
        imagem: "https://images.unsplash.com/photo-1560361100-33827179069d?w=500",
        url: "https://www.google.com/search?q=jogo+toalhas+banho"
    },
    {
        Nome: "Lixeira Banheiro",
        imagem: "https://images.unsplash.com/photo-1620624970621-360216447883?w=500",
        url: "https://www.google.com/search?q=lixeira+banheiro"
    },
    {
        Nome: "Kit 2 Canecas de Chopp",
        imagem: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500",
        url: "https://www.google.com/search?q=caneca+de+chopp"
    },
    {
        Nome: "Escorredor de Macarrão",
        imagem: "https://images.unsplash.com/photo-1594833134105-09673891795c?w=500",
        url: "https://www.google.com/search?q=escorredor+de+macarrao"
    },
    {
        Nome: "Cuscuzeira",
        imagem: "https://images.unsplash.com/photo-1585231007224-3711b9340685?w=500",
        url: "https://www.google.com/search?q=cuscuzeira+inox"
    }
];

function carregarItens() {
    const container = document.getElementById('lista-presentes');
    container.innerHTML = ""; // Limpa o container antes de carregar

    ItensLista.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.onclick = () => {
            window.open(item.url, '_blank');
        };

        card.innerHTML = `
            <img src="${item.imagem}" alt="${item.Nome}">
            <h3>${item.Nome}</h3>
            <span class="btn-comprar">Ver Opções</span>
        `;

        container.appendChild(card);
    });
}

window.onload = carregarItens;