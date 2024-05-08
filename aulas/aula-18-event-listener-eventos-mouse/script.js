let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

// ======= variáveis ======= //

let btnAddProdutos01 = document.querySelector("#btn-adicionar-produto-01")
//console.log(btnAddProdutos01)

let qtdProdutos01 = document.querySelector("#quantidade-produto-01")
//console.log(qtdProdutos01)

let btnSubtrairProdutos01 = document.querySelector("#btn-subtrair-produto-01")
//console.log(btnSubtrairProdutos01)



// ======= Funções ======= //

function atualizarSubTotal() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens"
  valorSubtotal.innerText = subtotalInfo.valor
}

function addUm() {
  qtdProdutos01.value = parseInt(qtdProdutos01.value) + 1
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1
  subtotalInfo.valor = (parseFloat(subtotalInfo.valor) + 11.66).toFixed(2)
  atualizarSubTotal()
}

function subtUn() {
  if(parseInt(qtdProdutos01.value) > 0){
    qtdProdutos01.value = parseInt(qtdProdutos01.value) - 1
    subtotalInfo.quantidade = subtotalInfo.quantidade - 1
    subtotalInfo.valor = (parseFloat(subtotalInfo.valor) - 11.66).toFixed(2)
  atualizarSubTotal()
  }
}




// ======= Eventos ======= //

btnAddProdutos01.addEventListener("click", addUm)

btnSubtrairProdutos01.addEventListener("click",subtUn)