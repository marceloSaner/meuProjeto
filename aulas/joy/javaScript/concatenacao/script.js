let nome = "Rafael"
let sobrenome = "Pereira"
let nomeCompleto = nome + sobrenome
console.log(nomeCompleto)

let nomeCompletoSTR = "Meu nome é: " + nome + " " + sobrenome
console.log(nomeCompletoSTR)

let templateString = `
Meu nome é: ${nome} ${sobrenome}
` 
console.log(templateString)

let numA = 5
let numB = 9
let soma = `A soma de ${numA} e ${numB} é ${numA + numB}`
console.log(soma)