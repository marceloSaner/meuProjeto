//Exercicio 001

/*const usuario = "Marcelo";
let senha = "1234";
const adm = true;

function alterarSenha(novaSenha){
  senha = novaSenha
  console.log("Senha alterada com sucesso")
}

if(usuario === "Marcelo" && senha === "1234"){
  console.log("Por favor, insira sua nova senha")
} else {
  console.log("Usuário/Senha incorretos")
}

if(adm){
  console.log("Vem vindo(a) à area de administrador")
} else{
  console.log("Você não pode acessar esta parte do Sistema")
}
*/

// Declaração de objetos
let usuario = {
    id: 5,
    username: "Marcelo",
    senha: "abc123",
    admin: true,
  }
  
  let id = usuario.id
  console.log(id)
  
  let senha = usuario.senha
  console.log(senha)
  
  let idarr = usuario["id"]
  console.log(idarr)
  
  
  let usuarios = [
    {id:1, username:"Samuel"},
    {id:2, username:"Anderson"},
    {id:3, username:"Alice"},
    {id:4, username:"Vitor"},
    {id:5, username:"Marcelo"},
    ]
    
    let nome = usuarios[3].username
    console.log(nome)