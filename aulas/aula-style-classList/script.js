let subt = document.querySelector("h2")
subt.style.color = "blue"
subt.style.fontSize = "2rem"

let inputError = document.querySelector(".error")
inputError.classList.remove("error")

let contemError = inputError.classList.contains("error")
console.log(contemError)

let inputCorrect = document.querySelector(".correct")
inputCorrect.classList.remove("correct")

let contemCorrect = inputCorrect.classList.contains("correct")
console.log(contemCorrect)

let visible = document.querySelector(".visible")
visible.classList.remove("visible")

let botao = document.querySelector("button")
botao.style.backgroundColor = "lightgreen"
botao.style.width = "10rem"
botao.style.height = "3rem"
botao.style.fontSize = "1.5rem"
botao.style.fontWeight = 800



let userInput = document.querySelector("#login-usuario")
//userInput.classList.add("error")
userInput.classList.add("correct")

let msgErroUsuario = document.querySelector("#login-usuario + .error-text")
//msgErroUsuario.classList.add("visible")
msgErroUsuario.classList.remove("visible")

let passInput = document.querySelector("#login-senha")
passInput.classList.add("correct")
//passInput.classList.add("error")

let msgErroSenha = document.querySelector("#login-senha + .error-text")
//msgErroSenha.classList.add("visible")
msgErroSenha.classList.remove("visible")