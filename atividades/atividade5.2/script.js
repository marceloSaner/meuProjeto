
const elementoTitulo = document.createElement("title")
elementoTitulo.innerText = "Produtos à Venda"
elementoTitulo.id = "titulo"
const titulo = document.querySelector("head")
titulo.appendChild(elementoTitulo)
console.log(elementoTitulo)


const produto = document.createElement("section")
produto.innerHTML = 
`
<h2 class="produto-titulo">ASSASSIN'S CREED MIRAGE LAUNCH EDITION - PS4</h2>
<p class="descricao">Prepare-se para mergulhar em uma jornada épica pela história com Assassin's Creed Mirage Launch Edition para PS4.Entre na pele de um habilidoso assassino e explore os exóticos cenários do Oriente Médio enquanto desvenda segredos ancestrais. Uma experiência única de ação e aventura espera por você. Não perca esta oportunidade de fazer parte da lenda.</p>
<p class="preco">R$ 268,99</p>
`
const produtos = document.querySelector('main')
produtos.appendChild(produto)