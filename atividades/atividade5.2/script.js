
const elementoTitulo = document.createElement("h1")
elementoTitulo.id = "titulo"
elementoTitulo.innerText = "Produtos à Venda"
const titulo = document.querySelector("main")
titulo.appendChild(elementoTitulo)


const produto = document.createElement("section")
produto.innerHTML = 
`
<h2 class="produto-titulo">ASSASSIN'S CREED MIRAGE LAUNCH EDITION - PS4</h2>
<img src="./img/assassinsCreed.PNG" alt="Assassin's Creed Mirage Launch Edition" width="300rem">
<p class="descricao">Prepare-se para mergulhar em uma jornada épica pela história com Assassin's Creed Mirage Launch Edition para PS4.Entre na pele de um habilidoso assassino e explore os exóticos cenários do Oriente Médio enquanto desvenda segredos ancestrais. Uma experiência única de ação e aventura espera por você. Não perca esta oportunidade de fazer parte da lenda.</p>
<p class="preco">R$ 268,99</p>
`
const produtos = document.querySelector('main')
produtos.appendChild(produto)