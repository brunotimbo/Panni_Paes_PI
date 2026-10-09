let total = 0;

function adicionar(nome, preco){
    let carrinho = document.getElementById("carrinho");
    let produto = document.createElement("li");
    produto.textContent = nome + " - R$" + preco.toFixed(2);
    carrinho.appendChild(produto);
    total = total + preco;
    document.getElementById("total").textContent = total.toFixed(2).replace(".",",");
}