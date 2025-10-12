//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Descubra o número secreto entre 1 e 10!';

let tamanhoDoJogo = 3; //define o tamanho do jogo, ou seja, o maior número possível
let listaDeNumerosSortiados = []; //array para armazenar os números já sorteados
let numeroAleatorio = gerarNumeroAleatorio(); //número aleatório entre 1 e tamanhoDoJogo
let tentativas = 1; //contador de tentativas

function exibirTextoNaTela(tag,texto){ //função para exibir texto na tela
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){ //função para exibir a mensagem inicial
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Descubra o número secreto entre 1 e ${tamanhoDoJogo}!`);
}

exibirMensagemInicial(); //chamada da função para exibir a mensagem inicial

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
    let numeroEscolhido = parseInt(Math.random() * tamanhoDoJogo) + 1;
    let quantidadeDeElementosDaLista = listaDeNumerosSortiados.length //verifica a quantidade de elementos no array
    if(quantidadeDeElementosDaLista >= tamanhoDoJogo){ //se a quantidade de elementos for igual ao tamanho do jogo, todos os números já foram sorteados
        listaDeNumerosSortiados = []; //limpa o array
    }
    
    if(listaDeNumerosSortiados.includes(numeroEscolhido)){ //a função includes verifica se o array já contém o número
        return gerarNumeroAleatorio(); //chamada recursiva - a função se chama novamente
    }else{
        listaDeNumerosSortiados.push(numeroEscolhido); //adiciona o número ao array
        console.log(listaDeNumerosSortiados);
        return numeroEscolhido;
    }
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


