function Ir_Tela_1(params) {
    location.replace('../../../site/Tela_1/Tela_1.html');
}

function Ir_Tela_2(params) {
    location.replace('../../../site/Tela_2/Tela_2.html');
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function Ir_Tela_3_Bacharelado(params) {
    location.replace('../../../site/Telas_3/Tela_3_Bacharelado/Tela_3_Bacharelado.html');
}

function Ir_Tela_3_Doutorado(params) {
    location.replace('../../../site/Telas_3/Tela_3_Doutorado/Tela_3_Doutorado.html');
}

function Ir_Tela_3_Mestrado(params) {
    location.replace('../../../site/Telas_3/Tela_3_Mestrado/Tela_3_Mestrado.html');
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function Ir_Tela_de_Busca_Bacharelado(params) {
    location.replace('../../../site/Telas_de_Busca/Tela_de_Busca_Bacharelado/Tela_de_Busca_Bacharelado.html');
}

function Ir_Tela_de_Busca_Doutorado(params) {
    location.replace('../../../site/Telas_de_Busca/Tela_de_Busca_Doutorado/Tela_de_Busca_Doutorado.html');
}

function Ir_Tela_de_Busca_Mestrado(params) {
    location.replace('../../../site/Telas_de_Busca/Tela_de_Busca_Mestrado/Tela_de_Busca_Mestrado.html');
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function Ir_Tela_de_Quizz_Bacharelado(params) {
    location.replace('../../../site/Telas_de_Quizz/Tela_de_Quizz_Bacharelado/Tela_de_Quizz_Bacharelado.html');
}

function Ir_Tela_de_Quizz_Doutorado(params) {
    location.replace('../../../site/Telas_de_Quizz/Tela_de_Quizz_Doutorado/Tela_de_Quizz_Doutorado.html')
}

function Ir_Tela_de_Quizz_Mestrado(params) {
    location.replace('../../../site/Telas_de_Quizz/Tela_de_Quizz_Mestrado/Tela_de_Quizz_Mestrado.html')
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Carregar_Informacoes_Bacharelado(params) {
    var videos = [
        { nome: 'Anatomia Humana:', descricao: 'Essa disciplina aborda o estudo detalhado da estrutura do corpo humano, incluindo órgãos, sistemas e tecidos.' },
        { nome: 'Microbiologia:', descricao: 'Os microrganismos, como bactérias, vírus e fungos, e seu impacto na saúde humana.' },
        { nome: 'Bioquímica:', descricao: 'Essa disciplina explora as reações químicas que ocorrem nos organismos vivos, analisando processos metabólicos e estruturas moleculares.' },
        { nome: 'Imunologia:', descricao: 'A imunologia é essencial para entender o sistema imunológico humano e suas respostas a agentes patogênicos, contribuindo para a compreensão da imunidade e desenvolvimento de vacinas.' }
    ];

    document.getElementById('caixas_de_video_1').innerHTML = `<h3>${videos[0].nome}</h3><p>${videos[0].descricao}</p>`;
    document.getElementById('caixas_de_video_2').innerHTML = `<h3>${videos[1].nome}</h3><p>${videos[1].descricao}</p>`;
    document.getElementById('caixas_de_video_3').innerHTML = `<h3>${videos[2].nome}</h3><p>${videos[2].descricao}</p>`;
    document.getElementById('caixas_de_video_4').innerHTML = `<h3>${videos[3].nome}</h3><p>${videos[3].descricao}</p>`;

  }

  function Feedback_Bacharelado(params) {
    var Feedback = prompt("Avalie de 1 a 5 a aula que você acabou de ver:");

    if (Feedback !== null && !isNaN(Feedback) && Feedback >= 1 && Feedback <= 5) {
        alert("Obrigado pela sua avaliação: " + Feedback);
    } else {
        alert("Por favor, insira uma avaliação válida de 1 a 5.");
    }
}

function Carregar_Informacoes_Mestrado(params) {
    var videos = [
        { nome: 'Biologia Molecular:', descricao: 'os estudantes podem aprofundar seus conhecimentos em biologia molecular, explorando técnicas avançadas e aplicações práticas em pesquisa.' },
        { nome: 'Farmacologia:', descricao: 'Estuda a interação de substâncias químicas com sistemas biológicos, sendo crucial para o desenvolvimento de medicamentos e compreensão dos efeitos das drogas no organismo.' },
        { nome: 'Genômica:', descricao: ' A genômica envolve o estudo abrangente dos genomas, incluindo sequenciamento genético, análise de expressão gênica e as implicações para a saúde.' },
        { nome: 'Biomedicina Experimental:', descricao: 'métodos de pesquisa experimental em biomedicina, permitindo que os estudantes desenvolvam habilidades práticas e contribuam para avanços na área.' }
    ];

    document.getElementById('caixas_de_video_1').innerHTML = `<h3>${videos[0].nome}</h3><p>${videos[0].descricao}</p>`;
    document.getElementById('caixas_de_video_2').innerHTML = `<h3>${videos[1].nome}</h3><p>${videos[1].descricao}</p>`;
    document.getElementById('caixas_de_video_3').innerHTML = `<h3>${videos[2].nome}</h3><p>${videos[2].descricao}</p>`;
    document.getElementById('caixas_de_video_4').innerHTML = `<h3>${videos[3].nome}</h3><p>${videos[3].descricao}</p>`;

  }

  function Feedback_Mestrado(params) {
    var Feedback = prompt("Avalie de 1 a 5 a aula que você acabou de ver:");

    if (Feedback !== null && !isNaN(Feedback) && Feedback >= 1 && Feedback <= 5) {
        alert("Obrigado pela sua avaliação: " + Feedback);
    } else {
        alert("Por favor, insira uma avaliação válida de 1 a 5.");
    }
}

function Carregar_Informacoes_Doutorado(params) {
    var videos = [
        { nome: 'Pesquisa Translacional:', descricao: 'Os estudantes podem se envolver em pesquisa translacional, que busca traduzir descobertas científicas em aplicações práticas para melhorar a saúde humana.' },
        { nome: 'Biologia Celular Avançada:', descricao: 'Disciplina mais avançada que se aprofunda nos mecanismos celulares em um nível molecular, contribuindo para a compreensão de processos complexos e seu potencial terapêutico.' },
        { nome: 'Neurociência Aplicada:', descricao: ' Estudo avançado do sistema nervoso, com foco em aplicações práticas para entender e tratar distúrbios neurológicos.' },
        { nome: 'Biomedicina Regenerativa:', descricao: 'desenvolvimento de terapias para regenerar tecidos e órgãos, utilizando abordagens como células-tronco e engenharia de tecidos.' }
    ];

    document.getElementById('caixas_de_video_1').innerHTML = `<h3>${videos[0].nome}</h3><p>${videos[0].descricao}</p>`;
    document.getElementById('caixas_de_video_2').innerHTML = `<h3>${videos[1].nome}</h3><p>${videos[1].descricao}</p>`;
    document.getElementById('caixas_de_video_3').innerHTML = `<h3>${videos[2].nome}</h3><p>${videos[2].descricao}</p>`;
    document.getElementById('caixas_de_video_4').innerHTML = `<h3>${videos[3].nome}</h3><p>${videos[3].descricao}</p>`;

  }

  function Feedback_Doutorado(params) {
    var Feedback = prompt("Avalie de 1 a 5 a aula que você acabou de ver:");

    if (Feedback !== null && !isNaN(Feedback) && Feedback >= 1 && Feedback <= 5) {
        alert("Obrigado pela sua avaliação: " + Feedback);
    } else {
        alert("Por favor, insira uma avaliação válida de 1 a 5.");
    }
}