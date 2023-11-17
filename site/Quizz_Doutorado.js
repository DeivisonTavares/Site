function Quizz(params) {
    var perguntas = [
        {
        pergunta: '1.Quais são as principais técnicas de sequenciamento de nova geração (NGS) utilizadas em genômica atualmente?',
        alternativas: ['a) PCR e RT-qPCR', 'b) Sanger e Southern blot', 'c) Illumina e PacBio'],
        alternativa_correta: 'c'
        },
        {
        pergunta: '2.O que é a terapia gênica e como ela difere da terapia celular?',
        alternativas: ['a) Ambas são formas de manipulação genética', 'b) A terapia gênica envolve a modificação do DNA, enquanto a terapia celular utiliza células vivas', 'c) Terapia gênica e terapia celular são termos intercambiáveis'],
        alternativa_correta: 'b'
        },
        {
        pergunta: '3.Qual é o papel dos microRNAs na regulação gênica?',
        alternativas: ['a) Síntese de proteínas', 'b) Degradação de lipídios', 'c) Controle pós-transcricional da expressão gênica'],
        alternativa_correta: 'c'},
        {
        pergunta: '4.O que são biomarcadores e qual é sua importância na medicina personalizada?',
        alternativas: ['a) Indicadores de processos metabólicos', 'b) Moléculas que indicam a presença de patologias', 'c) Elementos químicos presentes em biofluidos'],
        alternativa_correta: 'b'
        },
        {
        pergunta: '5.Quais são os principais métodos de imagem molecular utilizados em pesquisas biomédicas?',
        alternativas: ['a) Ressonância magnética e tomografia computadorizada', 'b) PET (Tomografia por Emissão de Pósitrons) e SPECT (Tomografia Computadorizada por Emissão de Fóton Único)', 'c) Ultrassom e radiografia'],
        alternativa_correta: 'b'
        },
        {
        pergunta: '6.O que é a farmacogenômica e como ela influencia a prática clínica?',
        alternativas: ['a) Estudo dos efeitos colaterais dos medicamentos', 'b) Personalização do tratamento com base na genética do paciente', 'c) Desenvolvimento de novos fármacos'],
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