let elementoH1 = document.querySelector("h1")
elementoH1.innerText = "Atividade 5.1 - Manipulando Elementos via DOM!"

let elementoa = document.querySelector("a")
elementoa.innerText = "Proz Educação"

let elementoUl = document.querySelector("ul")
elementoUl.innerHTML = `
<li>Item 01 da Lista Não Ordenada</li>
<li>Item 02 da Lista Não Ordenada</li>
<li>Intem 03 da Lista Não Ordenada</li>
`
let elementoOl = document.querySelector("ol")
elementoOl.innerHTML = `
<li><a href="http://www.google.com">Google</a></li>
<li><a href="http://youtube.com">YouTube</a></li>
<li><a href="https://developer.mozilla.org/pt-BR/docs/Web">Tecnologia Web para desenvolvedores</a></li>
`