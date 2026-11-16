class Produto{
    constructor(id,nome, categoria, descricao, preco, imagem, estoque){
        this.id = id
        this.nome = nome
        this.categoria = categoria
        this.descricao = descricao
        this.preco = preco
        this.imagem = "imagens/Produtos/" + imagem
        this.estoque = estoque
    }
}

export const produtos = new Array();

produtos.push(new Produto(
    produtos.length + 1,
    "Arroz Tio João 5 kg",
    "mercearia",
    "O arroz tradicional que fica sempre soltinho e saboroso, perfeito para o dia a dia da sua família.",
    21.39,
    "Arroz.png",
    50    
))
produtos.push(new Produto(
    produtos.length + 1,
    "Feijão Carioca 1 kg",
    "mercearia",
    "Grãos selecionados de cozimento rápido, ideais para um caldo grosso, rico e muito nutritivo.",
    13.79,
    "feijao.png",
    50    
))
produtos.push(new Produto(
    produtos.length + 1,
    "Ovos Brancos 12 unidades",
    "mercearia",
    "Ovos selecionados e sempre frescos, ideais para o café da manhã ou para o preparo de receitas.",
    12.0,
    "ovos.png",
    50    
))
produtos.push(new Produto(
    produtos.length + 1,
    "Alcatra",
    "acougue",
    "Corte nobre, extremamente macio e com pouca gordura, perfeito para bifes rápidos e grelhados suculentos.",
    42.50,
    "alcatra.png",
    50    
))
produtos.push(new Produto(
    produtos.length + 1,
    "patinho",
    "acougue",
    "Carne magra e versátil, excelente opção para carne moída, refogados saudáveis e almôndegas.",
    42.50,
    "patinho.png",
    50    
))
produtos.push(new Produto(
    produtos.length + 1,
    "Leite Integral Longa Vida 1L",
    "laticinios-e-frios",
    "Fonte de cálcio e energia com o sabor puro e a cremosidade que sua rotina pede.",
    6.79,
    "leite.png",
    50    
))
produtos.push(new Produto(
    produtos.length + 1,
    "Manteiga com Sal 200g",
    "laticinios-e-frios",
    "Textura cremosa e sabor irresistível, perfeita para o pão quentinho ou para dar um toque especial aos pratos.",
    11.50,
    "manteiga.png",
    50    
))
produtos.push(new Produto(
    produtos.length + 1,
    "Tomate",
    "hortifruti",
    "Tomates frescos e selecionados, ideais para saladas leves ou para preparar aquele molho caseiro encorpado.",
    7.0,
    "tomate.png",
    50    
))
produtos.push(new Produto(
    produtos.length + 1,
    "Batata Inglesa",
    "hortifruti",
    "Batatas frescas e versáteis, prontas para virar purê, fritas crocantes ou acompanhar assados.",
    3.49,
    "batata.png",
    50    
))
produtos.push(new Produto(
    produtos.length + 1,
    "Detergente Líquido Neutro 500ml",
    "limpeza-e-higiene",
    "Máxima eficiência contra a gordura, garantindo louças brilhantes sem agredir as mãos.",
    2.60,
    "detergente.png",
    50    
))
produtos.push(new Produto(
    produtos.length + 1,
    "Sabão em Pó 800g",
    "limpeza-e-higiene",
    "Remoção poderosa de manchas e sujeiras, deixando suas roupas limpas, cheirosas e com cores vivas.",
    14.90,
    "sabaoEmPo.png",
    50    
))



