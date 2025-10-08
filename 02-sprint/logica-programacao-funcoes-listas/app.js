//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Descubra o número secreto entre 1 e 10!';

let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Descubra o número secreto entre 1 e 10!');

function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    if(chute ==numeroAleatorio){
        exibirTextoNaTela('h1', 'Parabéns! Você acertou!');
        let palavraTentativa = tentativas > 1 ? `tentativas` : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
    }else if(chute < numeroAleatorio){
        exibirTextoNaTela('h1', 'Tente novamente!');
        exibirTextoNaTela('p', `O número secreto é maior`);
    }else if(chute > numeroAleatorio){
        exibirTextoNaTela('h1', 'Tente novamente!');
        exibirTextoNaTela('p', `O número secreto é menor`);
}
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10) + 1;
}