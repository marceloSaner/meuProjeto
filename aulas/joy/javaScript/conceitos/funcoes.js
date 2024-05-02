/*
function cumprimentar(){
    console.log("Boas Vindas!!")
}

cumprimentar()

function multiplicar(num1, num2){
    resultado = (num1 * num2);
    console.log(resultado)
}

multiplicar(3,7);


function parimp(n) {
    if (n % 2 == 0) {
        return "Par"
    } else {
        return "Impar"
    }
}

let res = parimp(11)
console.log(res)



// n1=0 ou n2=0 indica que se algum doa parametros nao for passado o valor que será atribido a ele será 0.
function soma(n1=0,n2=0) {
    return n1 + n2
}

console.log(soma(2,5))



let v = function(x) {
    return x*2
}

console.log(v(5))



// fatorial

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))



// Recursividade (uma função chamando ela mesmo dentro da própria função)
// 5! = 5 x 4 x 3 x 2 x 1
// 5! = 5 x 4!
// logo
// n! = n x (n-1)!
// 1! = 1

function fatorial(n) {
    if (n == 1 ) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))


const somar = function(a,b) {
    return (a + b)
}

console.log(somar(5,9))

*/
// funcao anonima declarada da forma tradicional

const seguinteNum = function(n) {
    return (n + 1)
}

console.log(seguinteNum(6))

// arrow function

const proximoNum = (n) => {
    return (n + 1)
}

console.log(proximoNum(9))

const nextNum = n => (n + 1)
console.log(nextNum(15))