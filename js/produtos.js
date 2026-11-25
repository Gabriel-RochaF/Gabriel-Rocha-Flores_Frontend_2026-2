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

    const filtroPrecos = document.querySelectorAll(".filtro-preco");
    const seletorValor = document.querySelectorAll(".seletor-valor");
    filtroPrecos.forEach(caixa => {
            caixa.addEventListener('change', (event) => {
                if (event.target.checked){
                    filtroPrecos.forEach(c =>{
                        if (c !== caixa) {
                            c.checked = false;
                        }
                    })
                    seletorValor.forEach(s => {
                        s.checked = false;
                    })
                }
            })
        })    
    seletorValor.forEach(caixa => {
        caixa.addEventListener('change', (event) => {
            if (event.target.checked){
                filtroPrecos.forEach(c => {
                    c.checked = false;
                })
            }
        })
    })
    const sliderMinimo = document.querySelector("#minimo");
    const minimoExibido = document.querySelector("#valor-minimo-exibido");

    sliderMinimo.addEventListener('input', (event) =>{
        let valor = Number(event.target.value)
        minimoExibido.textContent = valor.toFixed(2);
    })

    const sliderMaximo = document.querySelector("#maximo");
    const maximoExibido = document.querySelector("#valor-maximo-exibido");

    sliderMaximo.addEventListener('input', (event) =>{
        let valor = Number(event.target.value)
        maximoExibido.textContent = valor.toFixed(2);
    })

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

        const filtroPrecosSelecionado = this.querySelectorAll('.filtro-preco:checked').length

        if (filtroPrecosSelecionado){
            let valorMinimo;
            let valorMaximo;
            if (dados.has('Faixa-ate-10')){
                valorMaximo = 10.0
            } else if (dados.has('Faixa-de-10-a-25')){
                valorMinimo = 10.0
                valorMaximo = 25.0
            } else if (dados.has('Faixa-de-25-a-50')){
                valorMinimo = 25.0
                valorMaximo = 50.0
            } else if (dados.has('Faixa-de-50-a-100')){
                valorMinimo = 50.0
                valorMaximo = 100.0
            } else if (dados.has('Faixa-mais-de-100')){
                valorMinimo = 100.0
            }

            todosOsProdutos.forEach(element => {
                let precoDoProduto;
                let nomeProduto = element.querySelectorAll("h3");
                produtos.forEach(p => {
                    if (p.nome == nomeProduto[0].innerText){
                        compararValor(p.preco,valorMinimo,valorMaximo,element)
                    }
                })
            })
        }
        
        const seletorPrecosSelecionado = this.querySelectorAll('.seletor-valor:checked').length
        if (seletorPrecosSelecionado){
            let valorMinimo;
            let valorMaximo;

            if (dados.has('ativar-minimo')){
                valorMinimo = this.querySelector("#minimo").value
            }
            if (dados.has('ativar-maximo')){
                valorMaximo = this.querySelector("#maximo").value
            }

            todosOsProdutos.forEach(element => {
                let precoDoProduto;
                let nomeProduto = element.querySelectorAll("h3");
                produtos.forEach(p => {
                    if (p.nome == nomeProduto[0].innerText){
                        compararValor(p.preco,valorMinimo,valorMaximo,element)
                    }
                })
            })
        }
        
        


    })

    
}

function compararValor(preco, valorMinimo, valorMaximo, element){
    if (valorMinimo !== undefined && valorMaximo !== undefined){
        if(preco < valorMinimo || preco > valorMaximo){
            element.style.display = "none"
        }
    } else if (valorMinimo !== undefined) {
        if (preco < valorMinimo){
            element.style.display = "none"
        }
    } else if (valorMaximo !== undefined){
        if (preco > valorMaximo){
            element.style.display = "none"
        }
    }
}

