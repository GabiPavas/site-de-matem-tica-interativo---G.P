// Variáveis principais do jogo
let respostaCorreta;
let pontuacao = 0;
let modo = "basico";

// Função que inicia o jogo com o modo escolhido
function iniciarJogo(modoEscolhido) {
    modo = modoEscolhido;
    document.getElementById("area-jogo").style.display = "block";
    novaPergunta();
}

// Função que gera nova pergunta e mostra na tela
function novaPergunta() {
    const numeros = gerarNumeros(modo);
    const operacao = escolherOperacao();
    const perguntaTexto = `${numeros.num1} ${operacao} ${numeros.num2}`;

    respostaCorreta = calcularResposta(numeros.num1, numeros.num2, operacao);

    document.getElementById("pergunta").innerText = perguntaTexto;
    document.getElementById("resposta").value = "";
    document.getElementById("resultado").innerText = "";
}

// Gera números aleatórios, maiores no modo desafio
function gerarNumeros(modoAtual) {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    if (modo === "desafio") {
        num1 *= 3;
        num2 *= 3;
    }

    return { num1, num2 };
}

// Escolhe aleatoriamente uma operação: +, -, ou *
function escolherOperacao() {
    const operacoes = ["+", "-", "*"];
    return operacoes[Math.floor(Math.random() * operacoes.length)];
}

// Calcula o resultado com base nos números e operação
function calcularResposta(num1, num2, operacao) {
    if (operacao === "+") return num1 + num2;
    if (operacao === "-") return num1 - num2;
    if (operacao === "*") return num1 * num2;
}

// Verifica se a resposta está correta
function verificarResposta() {
    const respostaUsuario = parseInt(document.getElementById("resposta").value);

    if (respostaUsuario === respostaCorreta) {
        document.getElementById("resultado").innerText = "✅ Resposta Correta!";
        pontuacao += 10;
    } else {
        document.getElementById("resultado").innerText = `❌ Errado! A resposta era ${respostaCorreta}`;
        pontuacao -= 5;
    }

    document.getElementById("pontuacao").innerText = pontuacao;
    novaPergunta();
}