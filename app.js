/*
 * Navegação do painel.
 * Endereços (ficam na barra do navegador, então dá para compartilhar o link direto):
 *   #/                         -> página inicial (setas da jornada)
 *   #/etapa/<id>               -> página da etapa (5 opções)
 *   #/etapa/<id>/<opcao>       -> página da etapa com a janela de informação aberta
 */
(function () {
  const dados = window.PAINEL;
  const app = document.getElementById("app");
  const modal = document.getElementById("modal");
  const modalTitulo = document.getElementById("modal-titulo");
  const modalConteudo = document.getElementById("modal-conteudo");
  const modalVoltar = document.getElementById("modal-voltar");

  document.getElementById("cabecalho").innerHTML = dados.cabecalho;

  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ir = (hash) => { location.hash = hash; };

  function paginaInicial() {
    document.title = "Jornada Atual da Visita";
    app.innerHTML = `
      <h1 class="titulo-inicial">${dados.tituloInicial}</h1>
      <ol class="jornada">
        ${dados.etapas.map((e) => `
          <li><button class="seta" type="button" data-etapa="${e.id}">${esc(e.nome)}</button></li>
        `).join("")}
      </ol>
      <p class="dica">Clique em uma etapa da jornada para ver os detalhes</p>
    `;
    app.querySelectorAll(".seta").forEach((b) =>
      b.addEventListener("click", () => ir(`#/etapa/${b.dataset.etapa}`))
    );
  }

  function paginaEtapa(etapa) {
    const i = dados.etapas.indexOf(etapa);
    const anterior = dados.etapas[i - 1];
    const proxima = dados.etapas[i + 1];
    document.title = `${etapa.titulo} · Jornada Atual da Visita`;
    app.innerHTML = `
      <div class="etapa-topo">
        <button class="inicio" type="button" data-ir="#/">← Jornada</button>
        <p class="ponto-contato">Ponto de contato:</p>
        <h1 class="titulo-etapa">${esc(etapa.titulo)}</h1>
      </div>
      <ul class="opcoes">
        ${dados.opcoes.map((o) => `
          <li><button class="opcao" type="button" data-ir="#/etapa/${etapa.id}/${o.id}">${esc(o.nome)}</button></li>
        `).join("")}
      </ul>
      <nav class="navegacao">
        ${anterior
          ? `<button type="button" data-ir="#/etapa/${anterior.id}">← ${esc(anterior.titulo)}</button>`
          : `<span class="vazio"></span>`}
        ${proxima
          ? `<button type="button" data-ir="#/etapa/${proxima.id}">${esc(proxima.titulo)} →</button>`
          : `<span class="vazio"></span>`}
      </nav>
    `;
    app.querySelectorAll("[data-ir]").forEach((b) =>
      b.addEventListener("click", () => ir(b.dataset.ir))
    );
  }

  let opcaoAberta = null; // endereço da opção aberta, para devolver o foco ao fechar
  function abrirModal(etapa, opcao) {
    const texto = ((etapa.conteudo && etapa.conteudo[opcao.id]) || "").trim();
    modalTitulo.textContent = opcao.nome;
    modalConteudo.innerHTML = texto || `<p class="em-breve">Conteúdo em breve.</p>`;
    opcaoAberta = `#/etapa/${etapa.id}/${opcao.id}`;
    modal.hidden = false;
    modalVoltar.focus();
  }
  function fecharModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    const botao = app.querySelector(`.opcao[data-ir="${opcaoAberta}"]`);
    if (botao) botao.focus();
    opcaoAberta = null;
  }

  const voltarParaEtapa = () => {
    const partes = location.hash.split("/");
    ir(`#/etapa/${partes[2]}`);
  };
  modalVoltar.addEventListener("click", voltarParaEtapa);
  modal.addEventListener("click", (ev) => { if (ev.target === modal) voltarParaEtapa(); });
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && !modal.hidden) voltarParaEtapa();
  });

  let etapaRenderizada = null;
  function rota() {
    const [, tipo, idEtapa, idOpcao] = location.hash.replace(/^#/, "").split("/");
    const etapa = tipo === "etapa" && dados.etapas.find((e) => e.id === idEtapa);

    if (!etapa) {
      fecharModal();
      etapaRenderizada = null;
      paginaInicial();
      window.scrollTo(0, 0);
      return;
    }
    if (etapaRenderizada !== etapa) {
      fecharModal();
      paginaEtapa(etapa);
      etapaRenderizada = etapa;
      window.scrollTo(0, 0);
    }
    const opcao = dados.opcoes.find((o) => o.id === idOpcao);
    if (opcao) abrirModal(etapa, opcao);
    else fecharModal();
  }

  window.addEventListener("hashchange", rota);
  rota();
})();
