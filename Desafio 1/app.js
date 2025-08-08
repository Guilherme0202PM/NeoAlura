//O alert serve para mostrar uma mensagem na tela
alert("Boas vindas ao jogo do número secreto");

let numeroSecreto = 29;

let chute = prompt("Escolha um número entre 1 e 100");

//o consele.log serve para mostrar algo na tela, como por exemplo o que foi escrito no alert
if (numeroSecreto == chute){
    console.log("Parabéns, você acertou!");
} else if (chute > numeroSecreto){
    alert("O número secreto é menor");
} else {
    alert("O número secreto é maior");
}