document.addEventListener("DOMContentLoaded", () => {
    const startContainer = document.getElementById("startSection-perf");
    const iniciarBtn = document.getElementById("startButton-perf");
    const quizContainer = document.getElementById("quizSection-perf");
    const resultBox = document.getElementById("resultSection-perf");
 
    const question = document.getElementById("quizQuestion-perf");
    const optionsContainer = document.getElementById("quizOptions-perf");
    const nextBtn = document.getElementById("nextButton-perf");
    const prevBtn = document.getElementById("prevButton-perf");
    const progressBar = document.getElementById("progressBar-perf");
 
    // Perguntas do quiz
    const perguntas = [
    {
        pergunta: "1 - O que mais te atrai em tecnologia?",
        opcoes: [
            { texto: "Criar interfaces bonitas e acessíveis", area: "frontend"},
            { texto: "Arquitetura e lógica do servidor", area: "backend"},
            { texto: "Trabalhar com dados e métricas", area: "datascience" },
            { texto: "Infraestrutura, automação e nuvem", area: "devops"}
        ]
    },
    {
        pergunta: "2 - Em uma equipe você prefere:",
        opcoes: [
            { texto: "Prototipar e testar com usuárias", area: "uiux"},
            { texto: "Construir apps para celular", area: "mobile"},
            { texto: "Proteger sistemas e vulnerabilidades", area: "security"},
            { texto: "Fazer tanto front quanto back", area: "fullstack"}
        ]
    },
    {
        pergunta: "3 - Como você aprende melhor?",
        opcoes: [
            { texto: "Cursos práticos e projetos rápidos", area: "bootcamp"},
            { texto: "Graduação/estudos teoricos", area: "degree"},
            { texto: "Certificações e exames técnicos", area: "cert"},
            { texto: "Autoaprendizado e tutorias", area: "self"}
        ]
    },
    {
        pergunta: "4 - Qual ambiente você se imagina trabalhando?",
        opcoes: [
            { texto: "Startup inovadora e ágil", area: "devops"},
            { texto: "Grande empresa estruturada", area: "backend"},
            { texto: "Como freelancer / remoto", area: "fullstack"},
            { texto: "Laboratório / pesquisa acadêmica", area: "ai"}
       
        ]
    },
    {
        pergunta: "5 - Qual dessas atividades você gostaria mais de fazer.",
        opcoes: [
            { texto: "Configurar sistemas em nuvem", area: "devops"},
            { texto: "Programar robos e automações", area: "ai"},
            { texto: "Criar dashboards e relatórios inteligentes", area: "datascience"},
            { texto: "Trabalhar com blockchain / Web3", area: "backend"}
        ]
    },
    {
        pergunta: "6 - Quando surge um problema, você prefere:",
        opcoes: [
            { texto: "Melhorar a experiência das pessoas com design", area: "uxui"},
            { texto: "Encontrar brechas e proteger o sistema", area: "security"},
            { texto: "Organizar dados e encontrar padrões", area: "dataeng"},
            { texto: "Criar algo divertido e interativo", area: "game"}
        ]
    },
    {
        pergunta: "7 - Se tivesse que liderar um projeto, você cuidaria mais de:",
        opcoes: [
            { texto: "A aparência e usabilidade da aplicação", area: "frontend"},
            { texto: "A lógica e funcionamento interno", area: "backend"},
            { texto: "O fluxo de dados e relatórios", area: "datascience"},
            { texto: "A infraestrutura e deploy", area: "devops"}
        ]
    },
    {
        pergunta: "8 - O que você considera mais importante no futuro da tecnologia?",
        opcoes: [
            { texto: "Inteligência Artificial", area: "ai"},
            { texto: "Segurança da informação", area: "security"},
            { texto: "Aplicativos móveis", area: "mobile"},
            { texto: "Jogos Digitais", area: "game"}
        ]
    },
    {
        pergunta: "9 - Qual seu maior objetivo na tecnologia?",
        opcoes: [
            { texto: "Crescimento profissional", area: "degree"},
            { texto: "Inovação", area: "ai"},
            { texto: "Impactar pessoas", area: "frontend"},
            { texto: "Estabilidade", area: "dba"}
        ]
    }
]
 
    let index = 0;
    let respostas = []; // cada posição guarda array com áreas selecionadas naquela pergunta
 
    // Iniciar quiz
    iniciarBtn.addEventListener("click", () => {
      if (startContainer) startContainer.classList.add("hidden-perf");
      if (quizContainer) quizContainer.classList.remove("hidden-perf");
      carregarPergunta();
    });
 
    // ✅ Próximo — com verificação antes de avançar
    nextBtn.addEventListener("click", () => {
      const selecionados = optionsContainer.querySelectorAll('input[type="checkbox"]:checked');
      if (selecionados.length === 0) {
        alert("⚠️ Você precisa marcar pelo menos uma opção antes de continuar!");
        return;
      }
 
      salvarResposta();
      if (index < perguntas.length - 1) {
        index++;
        carregarPergunta();
      } else {
        mostrarResultado();
      }
    });
 
    // Anterior
    prevBtn.addEventListener("click", () => {
      if (index > 0) {
        index--;
        carregarPergunta();
      }
    });
 
    // Carrega pergunta atual
    function carregarPergunta() {
      const atual = perguntas[index];
      if (!atual) return;
 
      question.textContent = atual.pergunta;
      optionsContainer.innerHTML = "";
 
      // Monta opções (checkboxes)
      atual.opcoes.forEach((opcao, i) => {
        const id = `q${index}_opt${i}`;
        const label = document.createElement("label");
        label.setAttribute("for", id);
        label.className = "option-label-perf";
 
        const input = document.createElement("input");
        input.type = "checkbox";
        input.name = `q${index}`;
        input.id = id;
        input.dataset.area = opcao.area;
 
        // Se já existirem respostas salvas para essa pergunta, marca-as
        if (Array.isArray(respostas[index]) && respostas[index].includes(opcao.area)) {
          input.checked = true;
        }
 
        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + opcao.texto));
        optionsContainer.appendChild(label);
      });
 
      // ✅ 🔥 Limita a seleção a no máximo 2 opções
      const checkboxes = optionsContainer.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
          const checked = optionsContainer.querySelectorAll('input[type="checkbox"]:checked');
          if (checked.length > 2) {
            checkbox.checked = false;
            alert("⚠️ Você só pode marcar até 2 alternativas nesta pergunta.");
          }
        });
      });
 
      // Se for a última pergunta, muda botão para "Ver Resultado" e aplica estilo
      if (index === perguntas.length - 1) {
        nextBtn.textContent = "Ver Resultado";
        nextBtn.classList.add("final-btn-perf");
      } else {
        nextBtn.textContent = "→";
        nextBtn.classList.remove("final-btn-perf");
      }
 
      atualizarProgresso();
    }
 
    // Salva seleção atual (por área)
    function salvarResposta() {
      const selecionados = optionsContainer.querySelectorAll('input[type="checkbox"]:checked');
      const areas = Array.from(selecionados).map(input => input.dataset.area).filter(Boolean);
      respostas[index] = areas;
    }
 
    // Atualiza barra de progresso
    function atualizarProgresso() {
      if (!progressBar) return;
      const progresso = ((index + 1) / perguntas.length) * 100;
      progressBar.style.width = `${progresso}%`;
    }
 
    // Mostra resultado final
    function mostrarResultado() {
      if (quizContainer) quizContainer.classList.add("hidden-perf");
 
      const flatRespostas = (respostas.flat ? respostas.flat() : [].concat(...respostas)).filter(Boolean);
 
      if (flatRespostas.length === 0) {
        resultBox.classList.remove("hidden-perf");
        resultBox.innerHTML = `
          <h2 class="titulo-resultado-perf">Nenhuma resposta selecionada</h2>
          <p class="result-description-perf">Você não marcou nenhuma opção. Se quiser, refaça o teste e escolha ao menos uma opção por pergunta.</p>
          <button id="restartBtn-perf" class="restart-btn-perf btn-perf">Refazer Teste</button>
        `;
        ligarBotaoRefazer();
        return;
      }
 
      const scores = {};
      flatRespostas.forEach(area => {
        scores[area] = (scores[area] || 0) + 1;
      });
 
      const areasKeys = Object.keys(scores);
      let resultArea = areasKeys[0] || null;
      if (areasKeys.length > 1) {
        resultArea = areasKeys.reduce((a, b) => (scores[a] >= scores[b] ? a : b));
      }
 
      const descricoes = {
        frontend: "Você tem olhar para o detalhe e criatividade! O Frontend é onde sua visão transforma ideias em interfaces que encantam as pessoas.",
        backend: "Você gosta de estruturar e organizar a base de tudo. O Backend é perfeito para quem domina lógica e arquitetura.",
        datascience: "Sua curiosidade e análise crítica brilham! Na Ciência de Dados, você transforma informações em decisões com impacto.",
        devops: "Você é prática e estratégica! No DevOps, garante que tudo funcione de forma rápida, segura e escalável.",
        uxui: "Você tem empatia e visão para melhorar experiências. No UX/UI, seu talento torna a tecnologia mais humana.",
        mobile: "Você adora mobilidade e impacto! No desenvolvimento mobile, cria soluções no bolso das pessoas.",
        security: "Você é protetora e estratégica! Em Segurança da Informação, sua missão é blindar sistemas.",
        fullstack: "Você é versátil e completa! No Fullstack, domina várias áreas e mostra que lugar de mulher é em qualquer tecnologia.",
        ai: "Você gosta de inovação e futuro! Em Inteligência Artificial, pode criar soluções que transformam o mundo.",
        dataeng: "Você gosta de estruturar fluxos e grandes volumes de dados. Engenharia de Dados exige visão analítica.",
        dba: "Você é cuidadosa e técnica! Em bancos de dados, garante que a informação esteja organizada e disponível.",
        game: "Você é criativa e gosta de desafios! No desenvolvimento de jogos, une arte e lógica.",
        bootcamp: "Você é prática e objetiva! Prefere aprender com mão na massa e projetos rápidos.",
        degree: "Você valoriza a base teórica e sólida. Graduação abre portas para pesquisa e carreiras duradouras.",
        cert: "Você busca reconhecimento e profissionalismo. Certificações reforçam seu espaço no mercado.",
        self: "Você é autodidata e independente! Aprende por conta própria e se adapta rápido."
      };
 
      const descricao = descricoes[resultArea] || "Resultado não categorizado. Experimente responder novamente selecionando as opções que mais combinam com você.";
 
      resultBox.classList.remove("hidden-perf");
      resultBox.innerHTML = `
        <h2 class="titulo-resultado-perf">Sua área em tecnologia é: <span style="color:#6a0dad">${resultArea ? resultArea.toUpperCase() : "—"}</span></h2>
        <p class="result-description-perf">${descricao}</p>
        <div class="resultado-actions-perf">
          <button id="restartBtn-perf" class="restart-btn-perf btn-perf">Refazer Teste</button>
        </div>
      `;
 
      ligarBotaoRefazer();
    }
 
    // Liga o botão de refazer
    function ligarBotaoRefazer() {
      const btn = document.getElementById("restartBtn-perf");
      if (!btn) return;
      btn.addEventListener("click", () => {
        respostas = [];
        index = 0;
        resultBox.classList.add("hidden-perf");
        if (startContainer) startContainer.classList.remove("hidden-perf");
        if (progressBar) progressBar.style.width = "0%";
      });
    }
  });
