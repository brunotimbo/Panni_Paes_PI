// listas

const produtos = [
    {
        id: 1,
        nome: "Pão francês",
        categoria: "Pães",
        preco: 1.00,
        icone: "🥖",
        descricao: "Pão tradicional, crocante por fora e macio por dentro."
    },
    {
        id: 2,
        nome: "Pão de queijo",
        categoria: "Pães",
        preco: 4.50,
        icone: "🧀",
        descricao: "Pão de queijo assado, ideal para acompanhar o café."
    },
    {
        id: 3,
        nome: "Croissant",
        categoria: "Pães",
        preco: 8.00,
        icone: "🥐",
        descricao: "Massa folhada leve e amanteigada."
    },
    {
        id: 4,
        nome: "Coxinha",
        categoria: "Salgados",
        preco: 7.50,
        icone: "🍗",
        descricao: "Salgado recheado com frango temperado."
    },
    {
        id: 5,
        nome: "Empada",
        categoria: "Salgados",
        preco: 7.00,
        icone: "🥧",
        descricao: "Empada assada com recheio de frango."
    },
    {
        id: 6,
        nome: "Queijo",
        categoria: "Frios",
        preco: 6.50,
        icone: "🧀",
        descricao: "Porção de queijo fatiado para o seu pedido."
    },
    {
        id: 7,
        nome: "Presunto",
        categoria: "Frios",
        preco: 5.50,
        icone: "🥓",
        descricao: "Porção de presunto fatiado."
    },
    {
        id: 8,
        nome: "Fatia de bolo",
        categoria: "Doces",
        preco: 9.00,
        icone: "🍰",
        descricao: "Fatia de bolo do dia."
    },
    {
        id: 9,
        nome: "Sonho",
        categoria: "Doces",
        preco: 6.00,
        icone: "🍩",
        descricao: "Massa macia com recheio doce."
    },
    {
        id: 10,
        nome: "Café expresso",
        categoria: "Cafés",
        preco: 5.00,
        icone: "☕",
        descricao: "Café expresso preparado na hora.",
        personalizavel: true
    },
    {
        id: 11,
        nome: "Café com leite",
        categoria: "Cafés",
        preco: 7.00,
        icone: "☕",
        descricao: "Café com leite quente e cremoso.",
        personalizavel: true
    },
    {
        id: 12,
        nome: "Suco de laranja",
        categoria: "Bebidas",
        preco: 8.50,
        icone: "🍊",
        descricao: "Suco de laranja para acompanhar seu lanche."
    },
    {
        id: 13,
        nome: "Água mineral",
        categoria: "Bebidas",
        preco: 4.00,
        icone: "💧",
        descricao: "Garrafa de água mineral."
    }
];

const categorias = [
    "Pães",
    "Salgados",
    "Frios",
    "Doces",
    "Bebidas",
]

//----------------------------------
// variáveis
//----------------------------------

let categoriaAtual = "Todos"

//----------------------------------
// elementos do HTML
//----------------------------------

const categoriasElemento = document.getElementById("categorias");
const listaProdutosElemento = document.getElementById("listaProdutos");

//-------------------------
//categorias
//-------------------------

function renderizarCategorias() {
    console.log("teste")

    categoriasElemento.innerHTML = "";

    categorias.forEach(categoria => {

        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "categoria-botao";
        botao.textContent = categoria;

        if (categoria === categoriaAtual) {
            botao.classList.add("ativa")
        }
        
        botao.addEventListener("click", function(){
            categoriaAtual = categoria;
            renderizarCategorias();
            renderizarProdutos();
        })

        categoriasElemento.appendChild(botao)
    
    });
}

//-------------------------
//produtos
//-------------------------

function renderizarProdutos() {

    listaProdutosElemento.innerHTML = "";

    if (categoriaAtual === "Todos") {
        const produtosFiltrados = produtos;

    } else {

        produtos.filter(function(produto){
            return produto.categoria === "categoriaAtual";
        })
    }

    produtosFiltrados.forEach(function(produto){
        
        const artigo = document.createElement("article");
        artigo.className = "produto-card";
        artigo.innerHTML = `
        
            <div class="produto-imagem" aria-hidden="true"> ${produto.icone} </div>
            <div class="produto-conteudo">
                <p class="produto-categoria"> ${produto.categoria} </p>
                <h3> ${produto.nome} </h3>
                <p class="produto-descricao"> ${produto.descricao} </p>
                <div class="produto-rodape">
                    <span class="produto-preco"> ${formatarMoeda(produto.preco)} </span> 

        `
    })
}

//-------------------------
// inicialização
//-------------------------

renderizarCategorias();
renderizarProdutos();

let total = 0;

function adicionar(nome, preco){
    let carrinho = document.getElementById("carrinho");
    let produto = document.createElement("li");
    produto.textContent = nome + " - R$" + preco.toFixed(2);
    carrinho.appendChild(produto);
    total = total + preco;
    document.getElementById("total").textContent = total.toFixed(2).replace(".",",");
}