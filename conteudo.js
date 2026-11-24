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
        acontece: `
          <p>Trilha do caminho até o local de início da visita, com cadastro nas recepções e organização das turmas</p>
        `,
        agentes: `
          <ul>
            <li>Professores</li>
            <li>Funcionários do MSP</li>
            <li>Monitores da visita</li>
            <li>Estudantes</li>
          </ul>
        `,
        importancia: `
          <p><strong>Winnicott</strong>: a passagem do cotidiano escolar para a visita traz a criança a uma experiência de “faz de conta” com sentido real</p>
        `,
        limitantes: `
          <ul>
            <li>Cadastro e agendamento podem atrasar a visita e impedir o acompanhamento desde a chegada</li>
          </ul>
        `
      }
    },
    {
      id: "auditorio",
      nome: "Auditório",
      titulo: "Auditório",
      conteudo: {
        sentimentos: `
          <p><strong>Ansiedade &amp; desconforto</strong></p>
          <p><u><strong>Expectativa</strong></u>: Começar logo o passeio para poder brincar e conhecer o MSP</p>
        `,
        acontece: `
          <p>Vídeo de boas vindas, com aparição dos primeiros personagens e explicação da visita</p>
          <p>(Mistério da lupa)</p>
        `,
        agentes: `
          <ul>
            <li>Professores</li>
            <li>Personagens envolvidos na dinâmica</li>
            <li>Monitores da visita</li>
            <li>Estudantes</li>
          </ul>
        `,
        importancia: `
          <p><strong>Montigneaux</strong>: o vínculo com personagens faz a criança se interessar pelo conteúdo que eles apresentam.</p>
        `,
        limitantes: `
          <ul>
            <li>Problemas com o vídeo atrapalham a apresentação.</li>
            <li>O vídeo de abertura cria expectativas irreais, com imagens do parque que não são do passeio.</li>
            <li>Baixo tom de voz limita a mensagem</li>
          </ul>
        `
      }
    },
    {
      id: "museu",
      nome: "“Museu”\ndo MSP",
      titulo: "“Museu” do MSP",
      conteudo: {
        sentimentos: `
          <p><strong>Curiosidade &amp; atenção</strong></p>
          <p><u><strong>Expectativa</strong></u>: Aprender sobre os desenhos e poder fazer perguntas</p>
        `,
        acontece: `
          <p>Monitor mostra itens da história do MSP, como gibis antigos e produções importantes e explica eles</p>
        `,
        agentes: `
          <ul>
            <li>Professores</li>
            <li>Monitores da visita</li>
            <li>Estudantes</li>
          </ul>
        `,
        importancia: `
          <p><strong>Vygotsky</strong>: a criança aprende pela linguagem e pela mediação de adultos e pares; o guia transforma o conteúdo em conhecimento</p>
        `,
        limitantes: `
          <ul>
            <li>Guia que não consegue atender a todas as dúvidas pelo tamanho do grupo</li>
            <li>Linguagem usada pouco pedagógica</li>
            <li>Período longo de exposição pode cansar</li>
          </ul>
        `
      }
    },
    {
      id: "sala-de-audio",
      nome: "Sala de\náudio",
      titulo: "Sala de áudio",
      conteudo: {
        sentimentos: `
          <p><strong>Confusão &amp; tédio</strong></p>
          <p><u><strong>Expectativa</strong></u>: Descobrir algo diferente e ter uma nova experiência legal</p>
        `,
        acontece: `
          <p>Os estudantes escutam um áudio sobre como fazem as vozes dos personagens e a sala está escura</p>
        `,
        agentes: `
          <ul>
            <li>Professores</li>
            <li>Personagens envolvidos na dinâmica</li>
            <li>Monitores da visita</li>
            <li>Estudantes</li>
          </ul>
        `,
        importancia: `
          <p><strong>Wallon</strong>: aprender junta emoção e corpo; a escuta atenta e o ambiente escuro são formas da criança processar o conteúdo com seus sentidos</p>
        `,
        limitantes: `
          <ul>
            <li>Fones que caem ou falham podem interromper a escuta</li>
            <li>Baixo nível de atenção aos comandos de fechar os olhos</li>
            <li>Imersão fraca para a experiência (não motiva a participação)</li>
          </ul>
        `
      }
    },
    {
      id: "segundo-andar",
      nome: "2° andar:\nEscritório",
      titulo: "2° andar: Escritório",
      conteudo: {
        sentimentos: `
          <p><strong>Encanto &amp; distração</strong></p>
          <p><u><strong>Expectativa</strong></u>: Poder explorar as salas e “atrações” apresentadas</p>
        `,
        acontece: `
          <p>Demonstração das salas “especiais” no andar, como a da Mônica e a dos produtos licenciados</p>
        `,
        agentes: `
          <ul>
            <li>Professores</li>
            <li>Monitores da visita</li>
            <li>Estudantes</li>
          </ul>
        `,
        importancia: `
          <p><strong>Huizinga</strong>: o cenário com regras e papéis organiza a exploração como um jogo, o que sustenta o aprendizado</p>
        `,
        limitantes: `
          <ul>
            <li>Ambientes com pouca explicação ou limitações muito bruscas de acesso podem ser frustrantes e entediantes</li>
            <li>Palavras pouco acessíveis (ex. “produtos licenciados”)</li>
          </ul>
        `
      }
    },
    {
      id: "primeiro-andar",
      nome: "1° andar:\nEscritório\n(estúdio)",
      titulo: "1° andar: Escritório (estúdio)",
      conteudo: {
        sentimentos: `
          <p><strong>Interesse &amp; cansaço</strong></p>
          <p><u><strong>Expectativa</strong></u>: Entender o processo dos gibis e aprender como fazer</p>
        `,
        acontece: `
          <p>“Estações” de aprendizado sobre o processo dos gibis e demonstração por um artista do estúdio</p>
        `,
        agentes: `
          <ul>
            <li>Professores</li>
            <li>Artista que faz a amostra</li>
            <li>Monitores da visita</li>
            <li>Estudantes</li>
          </ul>
        `,
        importancia: `
          <p><strong>Vygotsky</strong>: o conhecimento sobre o trabalho real ganha sentido quando o adulto responde às perguntas, que fazem parte da mediação</p>
        `,
        limitantes: `
          <ul>
            <li>Ausência da demonstração gera tédio e frustração</li>
            <li>Explicação rápida dos processos não abre espaço para diálogo e curiosidade em explorar</li>
          </ul>
        `
      }
    },
    {
      id: "parque",
      nome: "Parque de\nbrincar",
      titulo: "Parque de brincar",
      conteudo: {
        sentimentos: `
          <p><strong>Alegria &amp; realização</strong></p>
          <p><u><strong>Expectativa</strong></u>: Brincar livremente por bastante tempo com os amigos</p>
        `,
        acontece: `
          <p>Estudantes são liberados para irem para o brinquedão e surge o desfecho sobre a lupa da Milena</p>
        `,
        agentes: `
          <ul>
            <li>Professores</li>
            <li>Estudantes</li>
          </ul>
        `,
        importancia: `
          <p><strong>Winnicott</strong>: o brincar é um espaço de elaboração entre fantasia e realidade</p>
          <p><strong>Corso</strong>: brincar permite vencer as limitações de ser pequeno</p>
        `,
        limitantes: `
          <ul>
            <li>Tempo curto de brincadeira limita o engajamento e quebra a expectativa bruscamente</li>
            <li>Participação baixa dos monitores afasta as crianças da imersão em um ponto crítico do final</li>
          </ul>
        `
      }
    },
    {
      id: "lojinha",
      nome: "Lojinha",
      titulo: "Lojinha",
      conteudo: {
        sentimentos: `
          <p><strong>Excitação &amp; agitação</strong></p>
          <p><u><strong>Expectativa</strong></u>: Comprar coisas que possam (ou não) combinar com amigos</p>
        `,
        acontece: `
          <p>Estudantes são liberados para irem até a lojinha do MSP e comprarem souvenires</p>
        `,
        agentes: `
          <ul>
            <li>Professores</li>
            <li>Atendente da lojinha</li>
            <li>Estudantes</li>
          </ul>
        `,
        importancia: `
          <p><strong>Erikson</strong>: a escolha autônoma desenvolve competência de decisão</p>
          <p><strong>Montigneaux</strong>: a noção de valor e marca muda com a idade</p>
        `,
        limitantes: `
          <ul>
            <li>Preços difíceis de achar geram dependência nos adultos</li>
            <li>Produtos sem uma organização categórica confundem a criança no ato da procura para a compra</li>
          </ul>
        `
      }
    }
  ]
};
