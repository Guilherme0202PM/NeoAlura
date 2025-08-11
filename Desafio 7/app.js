console.log("Bem Vindo");
let nome = "Guilherme"
console.log("Bem vindo " + nome);
alert("Bem vindo " + nome);

let nomeLinguagemPreferida = prompt("Qual a linguagem de programação que voce mais gosta?");
console.log("A linguagem de programação que voce mais gosta eh " + nomeLinguagemPreferida);

let numero1 = 10;
let numero2 = 20;
let resultado = numero1 + numero2;
let resultado2 = numero1 - numero2;
console.log("A soma de " + numero1 + " e " + numero2 + " eh " + resultado);
console.log("A diferenca entre " + numero1 + " e " + numero2 + " eh " + resultado2);


//Desafio 7
let idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}


//Desafio 8
let numero = prompt("Digite um numero");
if (numero > 0) {
    console.log("O numero eh positivo");
} else if (numero < 0) {
    console.log("O numero eh negativo");
} else {
    console.log("O numero eh zero");
}

//Desafio 9
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//Desafio 10
let nota = prompt("Digite uma nota");
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//Desafio 11
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//Desafio 12
let numeroAleatorioInteiro = parseInt(Math.random() * 11)
console.log(numeroAleatorioInteiro);

//Desafio 13
let numeroAleatorioInteiro2 = parseInt(Math.random() * 1001)
console.log(numeroAleatorioInteiro2);
