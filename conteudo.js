/*
 * CONTEÚDO DO PAINEL
 * ------------------
 * Este é o único arquivo que você precisa editar para mudar textos.
 *
 * - "etapas": as setas vermelhas da página inicial, na ordem em que aparecem.
 *     id     -> nome curto usado no endereço da página (sem espaço nem acento)
 *     nome   -> texto que aparece na seta (use \n para quebrar a linha)
 *     titulo -> título grande da página da etapa
 *     conteudo -> o texto de cada uma das 5 opções. Pode usar HTML simples:
 *        <p>parágrafo</p>, <strong>negrito</strong>, <u>sublinhado</u>,
 *        <ul><li>item de lista</li></ul>
 *     Se uma opção estiver vazia (""), o painel mostra "Conteúdo em breve".
 *
 * - "opcoes": as 5 linhas azuis da página de cada etapa.
 */

window.PAINEL = {
  cabecalho: "Apresentação de case: <em>A jornada consumidor na visita pedagógica ao MSP</em>",
  tituloInicial: "Jornada atual<br>da visita",

  opcoes: [
    { id: "sentimentos", nome: "Sentimentos e Expectativas" },
    { id: "acontece", nome: "O que acontece?" },
    { id: "agentes", nome: "Agentes envolvidos" },
    { id: "importancia", nome: "Importância pedagógica" },
    { id: "limitantes", nome: "Pontos limitantes" }
  ],

  etapas: [
    {
      id: "chegada",
      nome: "Chegada\nao MSP\nEstúdios",
      titulo: "Chegada ao MSP Estúdios",
      conteudo: {
        sentimentos: `
          <p><strong>Empolgação &amp; alívio</strong></p>
          <p><u><strong>Expectativa</strong></u>: Vai ser um passeio divertido, com fotos e personagens</p>
        `,
        acontece: "",
        agentes: "",
        importancia: "",
        limitantes: ""
      }
    },
    {
      id: "auditorio",
      nome: "Auditório",
      titulo: "Auditório",
      conteudo: { sentimentos: "", acontece: "", agentes: "", importancia: "", limitantes: "" }
    },
    {
      id: "museu",
      nome: "“Museu”\ndo MSP",
      titulo: "“Museu” do MSP",
      conteudo: { sentimentos: "", acontece: "", agentes: "", importancia: "", limitantes: "" }
    },
    {
      id: "sala-de-audio",
      nome: "Sala de\náudio",
      titulo: "Sala de áudio",
      conteudo: { sentimentos: "", acontece: "", agentes: "", importancia: "", limitantes: "" }
    },
    {
      id: "segundo-andar",
      nome: "2° andar:\nEscritório",
      titulo: "2° andar: Escritório",
      conteudo: { sentimentos: "", acontece: "", agentes: "", importancia: "", limitantes: "" }
    },
    {
      id: "primeiro-andar",
      nome: "1° andar:\nEscritório\n(estúdio)",
      titulo: "1° andar: Escritório (estúdio)",
      conteudo: { sentimentos: "", acontece: "", agentes: "", importancia: "", limitantes: "" }
    },
    {
      id: "parque",
      nome: "Parque de\nbrincar",
      titulo: "Parque de brincar",
      conteudo: { sentimentos: "", acontece: "", agentes: "", importancia: "", limitantes: "" }
    },
    {
      id: "lojinha",
      nome: "Lojinha",
      titulo: "Lojinha",
      conteudo: { sentimentos: "", acontece: "", agentes: "", importancia: "", limitantes: "" }
    }
  ]
};
