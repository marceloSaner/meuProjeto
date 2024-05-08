/*
// capturando os elementos do DOM

let numero = document.querySelector("h1")
let botaoSoma = document.getElementById("soma")
let botaoSubtrai = document.getElementById("subtrai")
let contagem = 0

// Criando funções

function adicionarUm(){
    contagem = contagem + 1
    numero.innerText = contagem
}

function removerUm(){
    if (contagem > 0){
    contagem = contagem -1
    numero.innerText = contagem
    }
}

// Ligando a ação de clicar no botao para chamar a função
botaoSoma.addEventListener("click", adicionarUm)

botaoSubtrai.addEventListener("click", removerUm)

*/

let button = document.querySelector("button")
let span = document.querySelector("span")
let section = document.querySelector("section")

// Funções

function mostrarSpan() {
    span.style.opacity = "100"
}

function ocultarSpan() {
    span.style.opacity = "0"
}

function fazerUmClick() {
    section.innerText = "Fez um Click simples."
}

function fazerDoisClicks() {
    section.innerText = "Fez um duplo click"
}

// Eventos

button.addEventListener("mouseover", mostrarSpan)
button.addEventListener("mouseout", ocultarSpan)
button.addEventListener("click", fazerUmClick)
button.addEventListener("dblclick", fazerDoisClicks)