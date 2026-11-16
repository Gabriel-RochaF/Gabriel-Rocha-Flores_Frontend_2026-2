import { produtos } from "../data/produtos.js";

window.onload = function(){
    var template = document.querySelector('#tmplt');

    produtos.forEach(element => {
        var produto = element;
        var copia = template.content.cloneNode(true);

        var h3 = copia.querySelectorAll('h3');
        h3[0].innerHTML = element.nome;

        var img = copia.querySelectorAll('img');
        img[0].src = produto.imagem;
        img[0].alt = produto.nome;

        var p = copia.querySelectorAll('p');
        p[0].innerHTML = element.descricao;

        var h4 = copia.querySelectorAll('h4');
        h4[0].insertAdjacentHTML('afterbegin', "R$ " + produto.preco.toFixed(2));

        var secao = document.querySelector("#" + produto.categoria);
        secao.appendChild(copia);
    });
}
