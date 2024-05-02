// innerText

// passo 1 - criar o elemento HTML

let elementoJavaScript = document.createElement("li")

// passo 2 - popular e manipular o elemento HTML

elementoJavaScript.innerText = "JavaScript"
elementoJavaScript.id = "ling-js"
console.log(elementoJavaScript)

// passo 3 - adicionar o elemento HTML ao DOM

let listaLinguagens = document.querySelector(".lista-linguagens")
listaLinguagens.appendChild(elementoJavaScript)

// innerHtml

const postagemJavaScript = document.createElement("div")
postagemJavaScript.innerHTML = 
`
<h2 class="post-titulo">JavaScript</h2>
<p class="post-texto">
JavaScript é uma linguagem de programação
</p>
`
const postagens = document.querySelector(".postagens")
postagens.appendChild(postagemJavaScript)