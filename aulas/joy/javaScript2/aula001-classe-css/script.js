let div = document.querySelector("div")

let incluiClasse = div.classList.contains("texto-novo")
div.classList.add("texto-novo")
div.classList.remove("borda-azul")
div.classList.toggle("borda-azul") // verfica se tem a classe borda-azul, se nao tem, coloca
div.classList.toggle("borda-azul") // verifica se tem a classe borda-azul, se tem, retira

console.log(incluiClasse)