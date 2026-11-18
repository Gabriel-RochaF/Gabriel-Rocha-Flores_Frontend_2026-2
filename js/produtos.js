import { produtos } from "../data/produtos.js";

window.onload = function(){
    var template = document.querySelector('#tmplt');
    const filtros = document.querySelector('#formulario-filtros')

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

        var div = copia.querySelectorAll('div');
        div[0].classList.add("produto-" + produto.categoria);

        var secao = document.querySelector("#" + produto.categoria);
        if (secao !== null){
            secao.appendChild(copia);
        } else {
            secao = document.querySelector('#produtos');
            secao.appendChild(copia);
        }
        
    });

    filtros.addEventListener('submit', function(event){
        event.preventDefault();

        const filtroCategoriaSelecionado = this.querySelectorAll('.filtro-categoria:checked').length
        
        const produtosMercearia = document.querySelectorAll(".produto-mercearia")
        const produtosAcougue = document.querySelectorAll(".produto-acougue")
        const produtosLaticiniosEFrios = document.querySelectorAll(".produto-laticinios-e-frios")
        const produtosHortifruti = document.querySelectorAll(".produto-hortifruti")
        const produtoslimpezaEHigiene = document.querySelectorAll(".produto-limpeza-e-higiene")

        const dados = new FormData(event.target);
        if (filtroCategoriaSelecionado){
            

            if (!dados.has('mercearia')){                
                produtosMercearia.forEach(element => {
                    element.style.display = "none";
                });
            } else {
                produtosMercearia.forEach(element => {
                    element.style.display = "";
                });
            }

            if (!dados.has('acougue')){                
                produtosAcougue.forEach(element => {
                    element.style.display = "none";
                });
            } else {
                produtosAcougue.forEach(element => {
                    element.style.display = "";
                });
            }

            if (!dados.has('laticinios-e-frios')){                
                produtosLaticiniosEFrios.forEach(element => {
                    element.style.display = "none";
                });
            } else {
                produtosLaticiniosEFrios.forEach(element => {
                    element.style.display = "";
                });
            }

            if (!dados.has('hortifruti')){                
                produtosHortifruti.forEach(element => {
                    element.style.display = "none";
                });
            } else {
                produtosHortifruti.forEach(element => {
                    element.style.display = "";
                });
            }

            if (!dados.has('Limpeza-e-higiene')){                
                produtoslimpezaEHigiene.forEach(element => {
                    element.style.display = "none";
                });
            } else {
                produtoslimpezaEHigiene.forEach(element => {
                    element.style.display = "";
                });
            }
        } else {
            produtosMercearia.forEach(element => {
                element.style.display = "";
            });
            produtosAcougue.forEach(element => {
                element.style.display = "";
            });
            produtosLaticiniosEFrios.forEach(element => {
                element.style.display = "";
            });
            produtosHortifruti.forEach(element => {
                element.style.display = "";
            });
            produtoslimpezaEHigiene.forEach(element => {
                element.style.display = "";
            });
        }
        
        const loja = document.querySelector('#produtos');
        const todosOsProdutos = loja.querySelectorAll(".produto");
        const pesquisa = dados.get('pesquisar');
        if (pesquisa){
            todosOsProdutos.forEach(element => {
                let h3 = element.querySelectorAll("h3");
                var nome = h3[0].innerText.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                if (!nome.includes((pesquisa.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
                    element.style.display = "none"
                }
            });
        }   
    })

    
}


