function Quizz(params) {
    var perguntas = [
        {
        pergunta: '1.Quais são as principais características das células-tronco pluripotentes induzidas (iPSCs)?',
        alternativas: ['a) Originam-se apenas de embriões', 'b) Podem diferenciar-se em qualquer tipo celular', 'c) São encontradas apenas em tecidos adultos'],
        alternativa_correta: 'b'
        },
        {
        pergunta: '2.Explique o conceito de medicina regenerativa e forneça um exemplo de sua aplicação prática.',
        alternativas: ['a) Tratamento de doenças crônicas com medicamentos de última geração', 'b) Restauração de tecidos e órgãos danificados usando células-tronco', 'c) Abordagem terapêutica baseada na manipulação genética'],
        alternativa_correta: 'b'
        },
        {
        pergunta: '3.O que é a proteômica e como ela difere da genômica?',
        alternativas: ['a) Estudo dos genes e suas funções', 'b) Análise das proteínas e suas interações em um organismo', 'c) Investigação dos processos metabólicos celulares'],
        alternativa_correta: 'b'
        },
        {
        pergunta: '4.Qual é a importância da bioinformática na pesquisa biomédica?',
        alternativas: ['a) Análise de imagens médicas', 'b) Processamento de dados genômicos e proteômicos', 'c) Desenvolvimento de novos medicamentos'],
        alternativa_correta: 'b'
        },
        {
        pergunta: '5.Qual é a importância da bioinformática na pesquisa biomédica?',
        alternativas: ['a) Aumentando a resistência a antibióticos', 'b) Possibilitando a modificação precisa do DNA', 'c) Desencadeando respostas autoimunes'],
        alternativa_correta: 'b'
        },
        {
        pergunta: '6.O que é a regulação epigenética e como ela influencia a expressão gênica?',
        alternativas: ['a) Alteração da sequência de DNA', 'b) Modificação química que afeta a acessibilidade do DNA', 'c) Controle da síntese de RNA mensageiro'],
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