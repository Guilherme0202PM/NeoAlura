//O alert serve para mostrar uma mensagem na tela
alert("Boas vindas ao jogo do número secreto");

let numeroSecreto = parseInt(Math.random() * 101)

//let numeroSecreto = 29;

let chute;
let tentativas = 0;

//o consele.log serve para mostrar algo na tela, como por exemplo o que foi escrito no alert

while(numeroSecreto != chute){

    chute = prompt("Escolha um número entre 1 e 100");
    tentativas++;

if (numeroSecreto == chute){
    break;
} else if (chute > numeroSecreto){
    alert("O número secreto é menor");
} else {
    alert("O número secreto é maior");
}
}

//Operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`)

