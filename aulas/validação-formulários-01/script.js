// ------ FUNÇÕES GERAIS --------- //
function mostrarPopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

mostrarPopup(usernameInput, usernameLabel);

// -------- VALIDAÇÃO DO EMAIL --------
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

mostrarPopup(emailInput, emailLabel);

// Validar valor do input do campo nome de usuario
usernameInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length < 3) {
    usernameHelper.innerText = "Digite um nome com 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper);
    inputsCorretos.username = false;
  } else {
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputsCorretos.username = true;
  }
});

// Validar valor do input do campo email

emailInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.includes("@") && valor.includes(".com")) {
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true;
  } else {
    emailHelper.innerText = "O email deve ter @ ou .com para ser válido!";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false;
  }
});

// -------- VALIDAÇÃO DE SENHA --------
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

mostrarPopup(senhaInput, senhaLabel);

senhaInput.addEventListener("blur", (e) => {
  const valor = e.target.value;
  if (valor == "") {
    senhaHelper.innerText = "O campo senha não pode estar vazio";
    estilizarInputIncorreto(senhaInput, senhaHelper);
    inputsCorretos.senha = false;
  } else {
    estilizarInputCorreto(senhaInput, senhaHelper);
    inputsCorretos.senha = true;
  }
});

// -------- VALIDAÇÃO DE CONFIRMAR SENHA --------
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

mostrarPopup(confirmaSenhaInput, confirmaSenhaLabel);

confirmaSenhaInput.addEventListener("blur", (e) => {
  let valorConformaSenha = e.target.value;

  if (valorConformaSenha == senhaInput.value) {
    estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper);
    inputsCorretos.confirmaSenha = true;
  } else {
    confirmaSenhaHelper.innerText = "Senha não confere!";
    estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper);
    inputsCorretos.confirmaSenha = false;
  }
});

// ------- EVITAR ENVIO DO FORMUÁRIO ----------- //

let btnSubmit = document.querySelector('button[type="submit"]');
let inputsCorretos = {
  username: false,
  email: false,
  senha: false,
  confirmaSenha: false,
};

btnSubmit.addEventListener("click", (e) => {
  if (
    inputsCorretos.username == false ||
    inputsCorretos.email == false ||
    inputsCorretos.senha == false ||
    inputsCorretos.confirmaSenha == false
  ) {
    e.preventDefault();
    alert("Os campos obrigatórios tem que ser preenchidos corretamente");
  } else {
    alert("Formulário enviado com sucesso");
  }
});
