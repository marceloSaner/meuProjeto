//console.log("teste de conexao")

//let logotipo = document.getElementById("logo")
//console.log(logotipo)

//let formulario = document.getElementById("formulario")
//console.log(formulario)

//let postagens = document.getElementById("posts")
//console.log(postagens)

//let dataPost = document.getElementsByClassName("post-data")
//console.log(dataPost)

//let postTexto = document.getElementsByClassName("post-texto")
//console.log(postTexto)

//const redes = document.getElementsByClassName("lista_redes")
//console.log(redes)

let logo = document.getElementById("logo")
//console.log(logo)

let postAutores = document.getElementsByClassName("post-autor")
//console.log(postAutores)

let texto02 = document.querySelector("#port02 .post-texto")
//console.log(texto02)

let listaRedesFooter = document.querySelectorAll("footer .lista_redes li")
//console.log(listaRedesFooter.innerHtml)

function percorrerArray(lista){
    for (let i = 0; i < lista.length; i++){
        console.log(lista[i])
    }
}

percorrerArray(listaRedesFooter)