// Projeto Inicial - Jogo do Número Secreto

alert("Boas vindas ao jogo do Número Secreto!");
let numeroSecreto = 10;
let chute = prompt("Tente advinhar o número secreto entre 1 e 30!");
console.log(numeroSecreto)

if(chute == numeroSecreto){
    alert(`Parabéns! Você advinhou o número secreto ${numeroSecreto}!`);
}else{
    alert('você errou :(');
}



/*
//Exercício de fixação 01: DETRAN - você tem idade para dirigir?

alert( 'Boas vindas ao nosso site!');
let nome = prompt('Qual o seu nome?');
let idade = prompt('Qual a sua idade?');
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
//let mensagemDeErro = alert('Erro! Preencha todos os campos!');


if(idade >=18){
    alert('Você é maior de idade e pode dirigir!');
}else{
    alert('Você é menor de idade e não pode dirigir!');
}
*/
/*
//Exercício de fixação 02 - Qual dia da semana hoje?
let diaSemana = prompt('Qual o dia da semana hoje?');

if(diaSemana =='Domingo' || diaSemana =='domingo' || diaSemana =='Sábado' || diaSemana =='sábado'){
    alert('Hoje é dia de descanso! Bom fim de semana!');
}else {
    alert('Boa semana!');
}
*/
/*
//Exercício de fixação 03 - O número é positivo ou negativo?
let numero = prompt('Digite um número qualquer:');
if(numero > 0){
    alert('O número é positivo!');
}else if(numero < 0){
    alert('O número é negativo!');  
}else{
    alert('O número é zero!');
}    
*/
/*
//Exercício de fixação 04 - Sistema de pontuação de um jogo
let pontos = 100;        
let seusPontos = prompt('Quantos pontos você acha que fez?');
if(seusPontos >= pontos){
    alert('Parabéns! Você venceu!');
}else{
    alert('Que pena! Tente novamente!');  
}
*/
/*
//Exercício de fixação 05 - Aleta de boas vindas com o nome do usuário
let username = prompt('Qual o seu nome?');
alert(`Seja bem vindo(a) ${username}!`); 
*/
/*
//Exercício de fixação 06 - Saldo da conta
let saldo = 15;
alert(`Seu saldo atual é de ${saldo} dinheiros!`);
*/