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

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Descubra o número secreto entre 1 e 10!');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    if(chute ==numeroAleatorio){
        exibirTextoNaTela('h1', 'Parabéns! Você acertou!');
        let palavraTentativa = tentativas > 1 ? `tentativas` : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto ${numeroAleatorio} em ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(chute < numeroAleatorio){
        exibirTextoNaTela('p', `O número secreto é maior`);
    }else if(chute > numeroAleatorio){
        exibirTextoNaTela('p', `O número secreto é menor`);
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10) + 1;
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}