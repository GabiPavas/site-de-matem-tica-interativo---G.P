// Variáveis principais do jogo
let respostaCorreta;
let pontuacao = 0; 
let modoAtual ='basico';

// Função que inicia o jogo com o modo escolhido
 function iniciarJogo (modo){
  modoAtual = modo;
document.getElementById("area-jogo").style.display = "block";
novaPergunta();
 }

// Função que gera nova pergunta e nostra na tela 
function novaPergunta() {
const numeros =gerartlumeros(modoAtual);
const operacao =escolherOperacao();
const perguntaTexto = '${numeros.numl} ${operacao} ${numeros.num2}';

respostaCorreta = calcularResposta(numeros.numl, numeros.num2, operacao);

document-getElementById("pergunta").innerText = perguntaTexto;
document-getElementById("resposta").value = "";
document.getElementById("resultado").innerText = "";
}
// Gera números aleatórios, maiores no modo desafio 
function gerarNumeros (modo){
 let numl = Math. floor (Math.random() * 10) + 1; 
 let num2 = Math.floor (Math.random() *10) + 1;

if (modo === 'desafio') {
numi *= 2;
num2 *= 3;
}
return { numl, num2 };
}
// Escolhe aleatoriamente uma operação: +, - ou *
function escolherOperacao() {
    const operacoes = ["+","-","*"];
}
// Calcula o resultado com base nos números e operação
function calcularResposta(nl, n2, op) {
switch (op){
     case "+": return n1 + n2;
     case "-": return nl - n2; 
     case "*": return n1 * n2;
}
}
// Verifica se a resposta do usuário está correta