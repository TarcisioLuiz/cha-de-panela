const ItensLista = [
    {
        Nome: "Ferro de passar roupa",
        imagem: "https://m.media-amazon.com/images/I/5105qwGHJqL._AC_SL1000_.jpg",
        url: "https://www.amazon.com.br/dp/B09LNLM4FX?ref=cm_sw_r_cso_wa_apin_dp_ZR88MW0YVGVHZFH590MS&ref_=cm_sw_r_cso_wa_apin_dp_ZR88MW0YVGVHZFH590MS&social_share=cm_sw_r_cso_wa_apin_dp_ZR88MW0YVGVHZFH590MS&th=1"
    },
    {
        Nome: "Caminha de João Pedro",
        imagem: "https://cobasi.vteximg.com.br/arquivos/ids/1066105-1000-1000/Cama-Austria-Bichinho-Chic-Cinza-1.png?v=638702985271500000",
        url: "https://www.cobasi.com.br/cama-austria-bichinho-chic-cinza-31152823/p?idsku=1152866&s[%E2%80%A6]n=FxbMMWO82HyH&snrai_id=8783ad9e-89ea-4bcc-bafc-b52e2964f16e"
    },
    {
        Nome: "Jogo de facas",
        imagem: "https://m.media-amazon.com/images/I/51oCxGHT-aL._AC_SX679_.jpg",
        url: "https://www.amazon.com.br/Facas-Tramontina-Plenus-L%C3%A2minas-Polipropileno/dp/B07WR4TP9W/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=VOYNVIJ71EC5&dib=eyJ2IjoiMSJ9.azJmO6ZzooTNGuiwtGzzxgcTw1KjdE_wzOXcM_KgOnzpfFm_BwDopFawDv9xcQ_EjaoOB-RZZJdig8y4cD6Z8BgvO7iYSSf4qGGWLCuOmVx_fleo0ctTQxCuLrhllVYI4idPieSmNx27JRm3pVId7qFgtYREr0S5e4i8cAQp3yvbrLG7sHeXxGG5yF22lBUignEYF4yD_G44rvCsstS-25UJn2Aobhpb-I5Lba-4UhgIl9FzPr_gqHp8hGIcQmGmC10MDCAE6Rlepsqk9Dgk_bHkWxgJ6iZOCOfg_29hesI.TVQJIwpsotivH7nq3R9HiKvRZAO0PNXC1l_LpFX7B7Y&dib_tag=se&keywords=jogo+de+faca&qid=1772670586&sprefix=jogo+de+fac%2Caps%2C275&sr=8-7"
    },
    {
        Nome: "Lixeira 12 Litros",
        imagem: "https://m.media-amazon.com/images/I/31tGsalT79L._AC_SL1000_.jpg",
        url: "https://www.amazon.com.br/dp/B09SZRXLMV?ref=cm_sw_r_cso_wa_apin_dp_SNWYCYXKXGQJA59YX29A&ref_=cm_sw_r_cso_wa_apin_dp_SNWYCYXKXGQJA59YX29A&social_share=cm_sw_r_cso_wa_apin_dp_SNWYCYXKXGQJA59YX29A"
    },
    {
        Nome: "TV",
        imagem: "https://m.media-amazon.com/images/I/81-ljI2R4dL._AC_SL1500_.jpg",
        url: "https://www.amazon.com.br/Samsung-Smart-Crystal-U8100F-2025/dp/B0F5X69KQB/ref=sr_1_6?crid=2MZC61R2DZ6VB&dib=eyJ2IjoiMSJ9.70F1TS-WLRCxC7lre_T9AYFU1jMagz9HLIvGFdYMMoDT-ChLgEw-vb16_4Q-yw7T0QsCPUOoVPLQjKBrfLXvkXe7sc1Zoa_uKkobQPeulnpoYxsW5fx8N7X8thFlg52jbfX3HYewQOcJ7VnPu1hTMEDPIL6bp-TXH01j1TNA1cfRCB6h0nMdU76oYfOK70XljbqiLttgtPyOT-e3FTPaeWApV1pAnNLpYyBuPiB1mYyKOQqN45i-OmGuzWU4r82Q9N6FBEv0mkmd1PGFKbS5skY1wi_oaFMwJY3bqRQU4ws.FXSuOaYI5P52JGqTSRX6z9A-J66fQDbTwIKUOZhVntE&dib_tag=se&keywords=televis%C3%A3o%2B43%2Bpolegadas&qid=1772415053&sprefix=televisao%2B43%2Caps%2C264&sr=8-6&th=1"
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
            <span class="btn-comprar">Ver sugestão</span>
            <p class="note">*site de compra é apenas uma sugestão</p>
        `;

        container.appendChild(card);
    });
}

window.onload = carregarItens;