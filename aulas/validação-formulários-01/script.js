// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

let emailInput = document.getElementById("email")
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById("email-helper")

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", () => {
    usernameLabel.classList.add("required-popup")
})

emailInput.addEventListener("focus", () => {
    emailLabel.classList.add("required-popup")
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", () => {
    usernameLabel.classList.remove("required-popup")
})

emailInput.addEventListener("blur", () => {
    emailLabel.classList.remove("required-popup")
})


// Validar valor do input
usernameInput.addEventListener("change", (e) => {
    let valor = e.target.value
    if(valor.length < 2){
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
        usernameHelper.innerText = "Digite um nome com 2 ou mais caracteres"
        usernameHelper.classList.add("visible")
    } else {
        usernameInput.classList.remove("error")
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")
    }
})


emailInput.addEventListener("change", (e) => {
    let valor = e.target.value
    if(valor.includes("@") && valor.includes(".com")) {
        emailInput.classList.add("correct")
        emailInput.classList.remove("error")
        emailHelper.classList.remove("visible")
    } else {
        emailInput.classList.remove("correct")
        emailInput.classList.add("error")
        emailHelper.innerText = "O email deve ter @ ou .com para ser válido!"
        emailHelper.classList.add("visible")
    }
})

/*
function mostrarPopup (input, label) {
    input.addEventListener("focus", () =>  {
        label.classList.add("required-popup")
    })
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup")
    })
}

mostrarPopup(usernameInput, usernameLabel)
mostrarPopup(emailInput,emailLabel)
*/