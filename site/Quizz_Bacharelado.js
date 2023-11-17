function Quizz(params) {
    var perguntas = [
        {
        pergunta: '1.Qual é a principal função dos leucócitos no sistema imunológico?',
        alternativas: ['a) Transporte de oxigênio', 'b) Produção de hormônios', 'c) Defesa contra agentes patogênicos'],
        alternativa_correta: 'c'
        },
        {
        pergunta: '2.O que é a hematopoese?',
        alternativas: ['a) Digestão de hemácias', 'b) Produção de células sanguíneas', 'b) Produção de células sanguíneas'],
        alternativa_correta: 'b'
        },
        {
        pergunta: '3.Qual é o principal órgão responsável pela desintoxicação no corpo humano?',
        alternativas: ['a) Rim', 'b) Fígado', 'c) Pulmão'],
        alternativa_correta: 'b'
        },
        {
        pergunta: '4.O que é um anticorpo?',
        alternativas: ['a) Célula de defesa', 'b) Proteína que combate patógenos', 'c) Hormônio regulador do metabolismo'],
        alternativa_correta: 'b'
        },
        {
        pergunta: '5.Qual é a função dos eritrócitos no sangue?',
        alternativas: ['a) Coagulação', 'b) Transporte de oxigênio', 'c) Produção de anticorpos'],
        alternativa_correta: 'b'
        },
        {
        pergunta: '6.O que caracteriza a síndrome de imunodeficiência adquirida (HIV/AIDS)?',
        alternativas: ['a) Infecção bacteriana', 'b) Supressão do sistema imunológico', 'c) Doença genética'],
        alternativa_correta: 'b' 
        }
    ];

    var indicePerguntaAtual = 0;
    var pontuacao = 0;

    function exibirPergunta() {
        var perguntaAtual = perguntas[indicePerguntaAtual];
        alert('Pergunta: ' + perguntaAtual.pergunta + '\nAlternativas:\n' + perguntaAtual.alternativas.join('\n'));
    }

    function verificarResposta(respostaUsuario) {
        var perguntaAtual = perguntas[indicePerguntaAtual];
        if (respostaUsuario === perguntaAtual.alternativa_correta) {
            alert('Resposta correta!');
            pontuacao++;
        } else {
            alert('Resposta incorreta. A resposta correta é: ' + perguntaAtual.alternativa_correta);
        }
    }

    function proximaPergunta() {
        indicePerguntaAtual++;

        if (indicePerguntaAtual < perguntas.length) {
            exibirPergunta();
        } else {
            alert('Fim do Quiz. Pontuação: ' + pontuacao);
            // Você pode adicionar outras ações quando o quiz terminar
        }
    }

    // Exibir a primeira pergunta quando a função Quizz é chamada
    exibirPergunta();

    // Função chamada quando o botão é clicado
    window.responderPergunta = function () {
        // Exemplo de como verificar a resposta usando prompt
        var respostaDoUsuario = prompt('Digite a alternativa escolhida (a, b ou c):');
        verificarResposta(respostaDoUsuario);

        // Exemplo de como avançar para a próxima pergunta
        proximaPergunta();
    };
}

// Inicializar o Quiz
var quiz = new Quizz();