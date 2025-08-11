const desafios = {
    "1": {
    "titulo": "Desafio 1: Protótipo de Jogo com Inteligência Artificial",
    "descricao": "Curso de Jogos Digitais — Desenvolva um protótipo de jogo com pelo menos uma mecânica de gameplay (ex: combate, puzzle ou exploração) e implemente uma inteligência artificial básica para o inimigo ou NPC. A IA deve tomar decisões baseadas no comportamento do jogador. Envie um vídeo demonstrando a IA em ação e o link do projeto."
  }}

  function carregarDesafios() {
    const container = document.getElementById('listaDesafios');

    for (let key in desafios){
  const desafioVisual = desafios[desafiosID];
  const elementosDesafio = document.createElement('div');
  elementosDesafio.className = 'desafio';

  elementoDesafio.innerHTML = `
  <h3>${desafioAtual.titulo}</h3>
  <p>${desafioAtual.descricao}</p>
`;

container.appendChild(elementoDesafio)
    }
  }

  function exibirDesafioPrincipal (){
    const parametros = new URLSearchParams(window.location.search)
    const id = parametros.get("id");

    if (id && desafios[id]){
        const desafio = desafios[id];
        document.getElementById("modalTitulo").innerText = desafio.titulo;
        document.getElementById("modalDescricao").innerText = desafio.titulo;

        document.getElementById("modal").style.display = "block";
    }
  }

  function fecharModal (){
    document.getElementById("modal").style.display = "none";


  }

  window.onload = () => 
    {
        carregarDesafios();
        exibirDesafioPrincipal();
    }
    