/* configuções teste de perfil */
const startBtn = document.getElementById("startBtn");
const quizContainer = document.getElementById("quizContainer");
const quizForm = document.getElementById("quizForm");
const result = document.getElementById("result");

startBtn.addEventListener("click", () => {
  quizContainer.classList.remove("hidden");
  startBtn.style.display = "none";
});

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(quizForm);
  const scores = {};

  formData.forEach((_, key) => {
    const selected = quizForm.querySelector(`input[name="${key}"]:checked`);
    if (selected) {
      const area = selected.dataset.area;
      scores[area] = (scores[area] || 0) + 1;
    }
  });

  let resultArea = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

  const descricoes = {
    frontend: "Você tem olhar para o detalhe e criatividade! O Frontend é onde sua visão transforma ideias em interfaces que encantam as pessoas.",
    backend: "Você gosta de estruturar e organizar a base de tudo. O Backend é perfeito para mulheres que querem dominar a lógica e construir sistemas sólidos.",
    datascience: "Sua curiosidade e análise crítica brilham! Na Ciência de Dados, você transforma informações em poder para tomar decisões.",
    devops: "Você é prática e estratégica! No DevOps, garante que tudo funcione de forma rápida, segura e escalável.",
    uxui: "Você tem empatia e visão para melhorar a experiência das pessoas. No UX/UI, seu talento faz tecnologia mais humana.",
    mobile: "Você adora mobilidade e impacto! No desenvolvimento mobile, cria soluções que vão estar no bolso de milhões de pessoas.",
    security: "Você é protetora e estratégica! Em Segurança da Informação, sua missão é blindar sistemas e garantir confiança.",
    fullstack: "Você é versátil e completa! No Fullstack, domina várias áreas e mostra que lugar de mulher é em qualquer tecnologia.",
    ai: "Você gosta de inovação e futuro! Em Inteligência Artificial, pode criar soluções que transformam o mundo.",
    dataeng: "Você gosta de estruturar fluxos e grandes volumes de dados. Engenharia de Dados é o espaço certo para sua visão analítica.",
    dba: "Você é cuidadosa e técnica! No mundo dos bancos de dados, garante que a informação esteja sempre organizada e acessível.",
    game: "Você é criativa e gosta de desafios! No desenvolvimento de jogos, pode unir arte e lógica para criar experiências incríveis.",
    bootcamp: "Você é prática e objetiva! Prefere aprender com mão na massa e projetos rápidos que mostram resultados.",
    degree: "Você valoriza a base teórica e sólida. A graduação abre portas para pesquisa e carreiras de longo prazo.",
    cert: "Você busca reconhecimento e profissionalismo. As certificações reforçam seu espaço no mercado.",
    self: "Você é autodidata e independente! Constrói sua trajetória aprendendo por conta própria e se adaptando rápido."
  };

  result.classList.remove("hidden");
  result.innerHTML = `<h2>Sua área em tecnologia é: <span style="color:#a64ac9">${resultArea.toUpperCase()}</span></h2>
                      <p>${descricoes[resultArea]}</p>`;
});

