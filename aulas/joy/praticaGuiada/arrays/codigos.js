// codigos escritos no onecompliler.com

let usuario = {
  id: 26,
  nomeDeUsuario: "Marcelo",
}

if(24 == usuario.id || "Joelson" == usuario.nomeDeUsuario){
  console.log("Quer alterar sua senha?")
} else {
  console.log("Usuários sem autorização")
}

let pessoa = {
  nome: "Joelson",
  idade: 29,
  altura: 1.65,
  fumante: false,
  comidasFavoritas: ["Arroz", "Feijão"],
  familia: {
    mae: "Cecília",
    pai: "Pedro"
  }
}

console.log(pessoa.familia.mae)