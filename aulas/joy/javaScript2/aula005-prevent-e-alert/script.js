let linkProz = document.getElementById("link-proz")
let btnSubtmit = document.querySelector("button[type=submit]")

linkProz.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Não foi possível acessar o link")
})

btnSubtmit.addEventListener("click", (e)=> {
    alert("Não foi possível enviar os dados do formulário")
    e.preventDefault()
})