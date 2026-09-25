---
title: "Novidades"
nav_order: 9
permalink: /novidades/
---

# Novidades

O que mudou no RIT360 Realiza, em linguagem de quem usa. As mudanças mais
recentes vêm primeiro.

{: .note }
O produto está em construção, e por isso estas primeiras entradas descrevem
capacidades chegando pela primeira vez, não ajustes em cima do que já existia.
Conforme o Realiza amadurecer, esta página vai virar o que ela é nos outros
produtos da casa: o registro do que mudou de uma versão para a outra.

---

## 25 de setembro de 2026 — versão 0.33.0

### Adicionado

- **Agora dá para pedir ao assistente que aprove ou peça ajuste numa entrega citando o nome
  dela**, sem precisar abrir a tarefa e procurar a versão certa na tela — é a terceira e última
  fatia da capacidade que já cobria espaço, tarefa e pessoa. Peça, por exemplo, "aprova a versão
  2 da entrega Arte final" ou "pede ajuste na versão 3 da entrega Arte final: as cores saíram
  fora do padrão": o assistente sempre mostra a prévia e pede confirmação antes de mudar qualquer
  coisa. A versão é obrigatória — o assistente não adivinha qual versão você quer, porque
  aprovação sempre referencia uma versão identificada. A busca é mais estreita que a de tarefa:
  só encontra entrega de espaço em que você participa de verdade, mesmo para quem administra a
  organização. Veja [Citar a entrega pelo nome](/assistente/#citar-a-entrega-pelo-nome).
- **Criar uma tarefa pelo assistente dizendo a etapa agora respeita o que você pediu.** Antes, a
  etapa informada era ignorada e a tarefa sempre nascia na etapa padrão do espaço, sem nenhum
  aviso; agora ela nasce na etapa pedida, e etapa que não existe naquele espaço é recusada com a
  lista das que existem. Veja [Dizer a etapa da tarefa
  nova](/assistente/#dizer-a-etapa-da-tarefa-nova).

---

## 25 de setembro de 2026 — versão 0.31.0

### Adicionado

- **Agora dá para pedir ao assistente uma ação sobre uma pessoa citando o nome dela**, sem
  precisar abrir a tela de participantes — é a segunda fatia de uma capacidade que ainda vai
  cobrir entrega. Peça, por exemplo, "quais tarefas são da Maria na Campanha do Agasalho 2026?",
  "cria a tarefa Montar release na Campanha do Agasalho 2026 para a Maria", "passa a tarefa
  Revisar arte para a Maria" ou "remove a Maria da Campanha do Agasalho 2026": criar, designar
  responsável e remover participante sempre mostram a prévia e pedem confirmação antes de mudar
  qualquer coisa; listar tarefas responde direto, por ser consulta. A busca acontece só entre
  quem participa do espaço do pedido — quem existe na organização mas não participa daquele
  espaço não é encontrado por aqui, nem por quem administra a organização. Nome repetido no
  mesmo espaço gera pergunta de qual pessoa, mostrando o papel de cada uma para ajudar a
  distinguir. Veja [Citar a pessoa pelo nome](/assistente/#citar-a-pessoa-pelo-nome).

---

## 25 de setembro de 2026 — versão 0.30.0

### Adicionado

- **Agora dá para pedir ao assistente uma ação sobre uma tarefa citando o título**, sem
  precisar abrir o espaço nem saber o identificador dela — é a primeira fatia de uma
  capacidade que ainda vai cobrir entrega e pessoa. Peça, por exemplo, "conclui a tarefa
  Revisar arte", "exclui a tarefa Revisar arte", "reabre a tarefa Revisar arte", "muda o
  título da tarefa Revisar arte para Revisar arte final" ou "comenta na tarefa Revisar arte
  que o andamento está ok": o assistente sempre mostra a prévia e pede confirmação antes de
  mudar qualquer coisa. Dizer o espaço junto ("no espaço Campanha do Agasalho 2026")
  restringe a busca a ele. Título repetido em mais de um espaço gera pergunta de qual delas;
  título que não existe e título que existe mas está fora do seu alcance recebem a mesma
  resposta, sem indicar que a tarefa existe em algum lugar que você não alcança. Veja [Citar
  a tarefa pelo título](/assistente/#citar-a-tarefa-pelo-título).

---

## 25 de setembro de 2026 — versão 0.29.0

### Adicionado

- **Agora dá para criar evento e tarefa direto na barra de cima da visão "Calendário"**, sem
  precisar abrir um dia primeiro. Os botões "Novo evento" e "Nova tarefa" ficam ao lado de
  "Assinar agenda"; a data sugerida acompanha o mês em vista — o dia de hoje quando o mês é
  o atual, ou o dia 1º de qualquer outro mês, sempre uma sugestão que dá para trocar. Os
  botões "+E" e "+T" de dentro de cada dia continuam funcionando do mesmo jeito. Veja
  [Calendário](/trabalho/visoes/#calendário).

---

## 25 de setembro de 2026 — versão 0.28.0

### Modificado

- **A tabela "Todas as organizações", na administração do serviço, passou a avisar quando
  os números de Espaços e Clientes podem estar desatualizados**, com um aviso acima da
  tabela e um link direto para a tela onde se confere a causa. Veja [Quando os números podem
  estar
  desatualizados](/admin-servico/organizacoes/#quando-os-números-podem-estar-desatualizados).

---

## 25 de setembro de 2026 — versão 0.27.0

### Corrigido

- **Uma falha ao registrar o histórico de chamadas à inteligência artificial deixou de
  derrubar a resposta do assistente.** Esse registro serve só para guardar o que aconteceu;
  ele podia, falhando sozinho, fazer o assistente responder "Erro interno." mesmo quando a
  IA tinha respondido certo. Agora a resposta segue normalmente, e a seção "Últimas
  tentativas" (nos provedores de IA, tanto da organização quanto do serviço) avisa quando
  isso aconteceu. Veja [Quando o próprio registro
  falha](/configuracoes/inteligencia-artificial/#quando-o-próprio-registro-falha).

---

## 23 de setembro de 2026 — versão 0.26.0

### Adicionado

- **Os provedores de inteligência artificial do serviço passaram a mostrar as últimas
  tentativas** — a mesma lista que já existia para os provedores de uma organização, com o
  provedor, se deu sucesso ou falhou, a data e a hora e a mensagem devolvida, só que aqui
  mostrando apenas as tentativas dos provedores do serviço. Veja [Últimas
  tentativas](/admin-servico/provedores-de-ia/#últimas-tentativas).

### Modificado

- **Fila represada deixou de passar em branco.** Quando o processamento de fundo de um
  módulo para, os eventos se acumulam sem que a tela avise. Agora, em "Tarefas agendadas", a
  rotina nesse estado ganha a etiqueta "Represada", com a explicação de quantos eventos
  esperam e há quanto tempo; na Visão geral da administração, a pendência "Rotina automática
  que falhou" passou a se chamar "Rotina automática que falhou ou está represada"; e o
  número de espaços, em "Números do serviço", avisa quando pode estar errado. Veja [Quando a
  fila represa](/admin-servico/tarefas/#quando-a-fila-represa).

---

## 23 de setembro de 2026 — versão 0.25.0

### Modificado

- **A aba "Serviços" da administração do serviço passou a trazer as duas configurações —
  servidor de e-mail e provedores de IA padrão — direto na tela**, em vez de levar a outras
  telas para vê-las. No computador elas aparecem lado a lado; no celular, uma abaixo da
  outra e recolhidas, com um botão para mostrar cada uma. Os endereços próprios de cada
  assunto continuam funcionando. Veja [O que você encontra aqui, por
  aba](/admin-servico/#o-que-você-encontra-aqui-por-aba).

---

## 23 de setembro de 2026 — versão 0.24.0

### Adicionado

- **Quem administra a organização passou a ver por que a inteligência artificial falhou.**
  Nas configurações da organização, os provedores de IA ganharam uma seção "Últimas
  tentativas", com a sequência de chamadas recentes, sucesso ou falha, data, hora e a
  mensagem que o próprio provedor devolveu. Veja [Últimas
  tentativas](/configuracoes/inteligencia-artificial/#últimas-tentativas).

### Modificado

- **A mensagem do assistente passou a distinguir duas causas diferentes de falha.** Não
  havendo provedor de IA cadastrado na organização, a resposta agora diz isso e orienta a
  procurar quem administra; havendo provedor e ele tendo falhado agora, a resposta continua
  sugerindo tentar de novo em instantes. Antes as duas situações mostravam a mesma frase, e
  insistir era o conselho certo numa e inútil na outra. Veja [Quando dá
  errado](/assistente/#quando-dá-errado).

### Corrigido

- **O assistente passou a recusar um prazo que já ficou no passado**, em vez de criar a
  tarefa já atrasada — ele pergunta a data certa, mostrando a que entendeu. E as datas nas
  respostas do assistente passaram a aparecer sempre em dd/mm/aaaa. Veja [Confirmar ou
  cancelar uma ação](/assistente/#confirmar-ou-cancelar-uma-ação).
- **Telas que falhavam ao carregar deixaram de ficar presas em "Carregando…" para sempre**,
  em dez telas do produto — a mais notável era Integrações, onde a falha aparecia disfarçada
  de "Nenhuma chave cadastrada" e "Nenhum webhook cadastrado".

---

## 23 de setembro de 2026 — versão 0.23.0

### Modificado

- **O painel da tarefa foi rearrumado**: "Responsável" e "etapa" ganharam uma seção própria,
  sem botão de salvar, separada dos campos que precisam de "Salvar" ou "Salvar datas". Veja
  [Como o painel de detalhe
  grava](/trabalho/criar-tarefas/#como-o-painel-de-detalhe-grava).
- **A Visão geral da administração do serviço passou a mostrar o que espera decisão.** Um
  cartão "Pendências" reúne, quando existirem, os Pedidos de organização, Feedbacks sem
  resposta, Rotinas automáticas que falharam e Cópias de segurança atrasadas — cada item
  leva direto à tela onde se resolve. Não havendo nada pendente, a seção avisa "Nenhuma
  pendência agora — tudo em dia." Veja [Pendências](/admin-servico/painel/#pendências).

---

## 23 de setembro de 2026 — versão 0.22.0

### Modificado

- **O painel da tarefa passou a exigir um clique para salvar** o que você digita — título,
  descrição e as datas — em vez de gravar sozinho ao sair do campo. O botão acende quando há
  alteração pendente, e fechar o painel com algo não salvo pede confirmação antes de
  descartar. Responsável e etapa continuam gravando na hora, por serem escolhas de lista.
  Veja [Como o painel de detalhe grava](/trabalho/criar-tarefas/#como-o-painel-de-detalhe-grava).
- **A recusa de acesso às listas de Espaços e de Clientes passou a dizer o que foi
  recusado**, em vez de uma mensagem genérica — e parou de mostrar "Carregando…" ao lado do
  aviso de erro. Veja [Quando dá errado](/clientes/#quando-dá-errado).

---

## 23 de setembro de 2026 — versão 0.21.0

### Modificado

- **Os títulos das telas de administração do serviço ficaram uniformes**, e a tela de
  entrada — que se chamava "Administração geral" — passou a se chamar "Visão geral", igual à
  aba que a abre. Veja [Como navegar](/admin-servico/#como-navegar).
- **A prévia do assistente passou a mostrar o que ele entendeu do pedido**, não só o título
  — o espaço, o prazo e o responsável, quando você tiver dito algum deles. E uma ação já
  confirmada ou cancelada deixou de reaparecer como pendente ao reabrir a conversa. Veja
  [Confirmar ou cancelar uma ação](/assistente/#confirmar-ou-cancelar-uma-ação).

---

## 23 de setembro de 2026 — versão 0.20.1

### Corrigido

- **O texto das páginas de wiki voltou a aparecer formatado** — título de seção e item de
  lista tinham parado de se destacar, e um guia escrito em títulos e passos virava um bloco
  corrido. Vale na leitura, no editor e na página pública. Veja [Abrir uma página para
  ler](/conhecimento/wiki/#abrir-uma-página-para-ler).

---

## 23 de setembro de 2026 — versão 0.20.0

### Modificado

- **Abrir uma página da wiki passou a mostrar a leitura primeiro**, não o editor direto —
  quem pode editar vê um botão "Editar". O editor também ganhou uma barra de formatação de
  verdade, e colar texto do Word ou do Google Docs parou de trazer lixo de formatação junto.
  Veja [Abrir uma página para ler](/conhecimento/wiki/#abrir-uma-página-para-ler).
- **A administração do serviço ganhou um menu de abas sempre visível** — Visão geral,
  Organizações, Acesso, Serviços, Manutenção e Feedbacks —, no lugar de um cartão que
  escondia oito telas no fim da página. Dentro de Organizações, um novo cartão "Pedidos de
  organização" mostra quantos pedidos esperam decisão. Veja [Como
  navegar](/admin-servico/#como-navegar) e [Pedidos de
  organização](/admin-servico/pedidos-de-organizacao/).

---

## 23 de setembro de 2026 — versão 0.19.0

### Adicionado

- **Agora dá para pedir uma ação ao assistente citando o espaço pelo nome**, sem precisar abrir o
  quadro certo antes. Peça, por exemplo, "crie uma tarefa chamada Comprar mudas no espaço Campanha
  do Agasalho 2026": havendo mais de um espaço parecido, ele pergunta qual; não encontrando
  nenhum, diz que não encontrou e lista os espaços de que você participa. Como o nome precisou ser
  interpretado, o assistente sempre confirma com você antes de criar ou concluir a tarefa de
  verdade. Veja [Citar o espaço pelo nome](/assistente/#citar-o-espaço-pelo-nome).

### Corrigido

- **Endereço longo nas respostas do assistente não estoura mais a largura da conversa.** Agora ele
  quebra dentro da bolha da mensagem, sem criar rolagem para o lado.

---

## 23 de setembro de 2026 — versão 0.18.0

### Adicionado

- **A janela do assistente ficou menor e mais discreta.** Em vez de um quadro no meio da tela, ela
  agora abre pequena, ancorada ao botão do canto inferior direito, sem escurecer o resto da tela —
  dá para continuar lendo o que está atrás enquanto conversa. Tem também um botão **"Fechar"** no
  cabeçalho, além de Esc e clique fora. Veja [Acessar](/assistente/#acessar).
- **A resposta a uma dúvida agora traz um link clicável para a página do manual**, em vez do
  endereço em texto solto. Veja [Tirar dúvida sobre como usar o
  Realiza](/assistente/#tirar-dúvida-sobre-como-usar-o-realiza).

### Corrigido

- **O assistente ficou mais criterioso ao responder dúvidas.** Antes, quando nenhuma página do
  manual respondia bem à pergunta, ele podia trazer a página mais parecida mesmo sem ela explicar
  o que foi perguntado. Agora, nesse caso, ele diz que não encontrou.

---

## 23 de setembro de 2026 — versão 0.17.0

### Adicionado

- **Agora dá para perguntar ao assistente como fazer alguma coisa no Realiza**, tanto no app
  quanto pelo Telegram. Pergunte, por exemplo, "como eu arquivo um espaço?" ou "o que é uma
  reprogramação de prazo?", e ele responde com a parte do manual que explica, mais o link para ler
  o resto. Veja [Tirar dúvida sobre como usar o
  Realiza](/assistente/#tirar-dúvida-sobre-como-usar-o-realiza).

---

## 23 de setembro de 2026 — versão 0.16.0

### Adicionado

- **A tela "Meu trabalho" foi refeita.** No lugar das faixas empilhadas, agora ela tem um campo de
  busca, três filtros ("Organização", "Espaço" e "Prazo") e duas colunas: à esquerda, uma lista
  única de tarefas com uma etiqueta de estado em cada linha — clique na etiqueta para filtrar só
  por aquele estado; à direita, os cartões "Movimento nos meus espaços", "Agenda" e "Conversas". A
  busca encontra tarefa, espaço, cliente ou pessoa, mas não procura dentro de conversas, e nunca
  mostra o que você não alcança. Veja [Meu trabalho](/trabalho/meu-trabalho/).

---

## 22 de setembro de 2026 — versão 0.15.0

### Adicionado

- **Agora dá para ordenar as listas de Clientes, Espaços, Participantes de um espaço e a visão em
  lista de Tarefas.** Clique no nome de uma coluna para ordenar por ela, e clique de novo para
  inverter a ordem. No celular, onde essas listas viram cartões, um seletor **"Ordenar por"**
  oferece as mesmas opções. A ordem escolhida continua valendo se você abrir um item e voltar.
  Veja [Clientes e carteira](/clientes/#ordenar-a-lista), [Criar um
  espaço](/trabalho/criar-espaco/#ordenar-a-lista), [Chamar pessoas para o
  espaço](/trabalho/chamar-pessoas/) e [Ver o trabalho em quadro, lista ou
  calendário](/trabalho/visoes/#lista).

### Corrigido

- **Abrir "Meu perfil", um relatório ou uma tarefa direto por um link — por exemplo, o de um
  e-mail de aviso — não mostra mais um erro de carregamento.** A tela agora espera a organização
  carregar e mostra "Carregando…" enquanto isso, em vez de cair direto num estado de erro.
- **Os horários exibidos no produto pararam de mostrar os segundos.** Onde aparecia, por exemplo,
  "28/09/2026, 10:00:00", agora aparece "28/09/2026, 10:00" — em Meu trabalho, Exportações,
  Integrações, Administração geral, no histórico de versões de tarefas e de páginas da wiki, e nas
  reuniões da agenda.

---

## 22 de setembro de 2026 — versão 0.14.1

### Corrigido

- **O atalho "Adicionar ao Google Agenda" voltou a funcionar.** Ele estava levando a um erro do
  Google ("Não foi possível adicionar a agenda. Verifique o URL."); agora abre corretamente. Veja
  [Levar sua agenda para o Google ou para o celular](/trabalho/assinar-agenda/).

---

## 22 de setembro de 2026 — versão 0.14.0

### Alterado

- **Assinar sua agenda no Google ou no celular mudou de lugar.** Não é mais em "Meu perfil": agora
  é um botão discreto, **"Assinar agenda"**, na própria visão de calendário de um espaço — junto
  de onde você de fato olha os prazos e as reuniões. Veja [Levar sua agenda para o Google ou para
  o celular](/trabalho/assinar-agenda/).

---

## 22 de setembro de 2026 — versão 0.13.0

### Alterado

- **O Assistente deixou de ser uma tela à parte.** Agora ele abre num botão redondo no canto
  inferior direito, presente em qualquer tela do produto — clique para conversar, e feche para
  voltar exatamente para onde você estava, sem precisar navegar de volta. Veja
  [Assistente](/assistente/).
- **Ligar o Telegram ficou mais rápido.** Em vez de só mostrar um link para copiar, a tela agora
  oferece dois botões — um para abrir direto no aplicativo do Telegram, outro para abrir no
  Telegram Web — e reconhece sozinha quando o vínculo foi concluído. Veja
  [Telegram](/configuracoes/telegram/).

---

## 22 de setembro de 2026 — versão 0.12.0

### Adicionado

- **Agora dá para mencionar alguém dentro da conversa da tarefa.** Digite "@" e o nome da pessoa
  para chamar a atenção dela diretamente — ela recebe um aviso e a mensagem aparece destacada para
  ela. Veja [Conversar dentro da tarefa](/trabalho/conversas/).
- **Nova faixa "Menções" em [Meu trabalho](/trabalho/meu-trabalho/)**, logo depois de "Parado",
  com as vezes em que alguém te citou numa conversa.
- **Novo tipo de aviso, "Fui mencionado numa conversa"**, em [Seu perfil](/configuracoes/perfil/).

---

## 22 de setembro de 2026 — versão 0.11.0

### Alterado

- **A tela "Meu trabalho" ficou mais completa.** Além do que depende de você e do que está
  parado esperando outra pessoa, ela agora também mostra suas próximas entregas, sua agenda, as
  últimas conversas e o movimento recente nos seus espaços — tudo numa passada de olhos, sem
  precisar trocar de organização para ver cada uma. Veja [Meu trabalho](/trabalho/meu-trabalho/).
- **O editor de página de wiki passou a abrir com o texto que já estava salvo**, em vez de abrir
  em branco.

---

## 21 de setembro de 2026 — versão 0.10.4

### Adicionado

- **Nova tela para quem administra o serviço: [Mudar de servidor](/admin-servico/mudar-de-servidor/).**
  Exporta a instalação inteira num pacote cifrado, para levar a um servidor novo, ou importa um
  pacote numa instalação vazia — sempre com um ensaio antes de gravar de verdade.

### Alterado

- **Excluir um valor de indicador, um indicador ou um rascunho de relatório passou a pedir
  confirmação**, mostrando exatamente o que vai ser apagado antes de você confirmar.
- **O feedback agora abre numa janela sobre a tela em que você está**, em vez de levar você para
  uma tela própria. Você não perde o lugar de onde partiu.
- **Quem é convidado de fora para um espaço deixou de ver os formulários de recorrências,
  indicadores e relatórios** — via só o resultado; agora a tela já explica, com uma mensagem
  própria, por que aquilo não está disponível para esse papel.

---

## 21 de setembro de 2026 — versão 0.10

### Adicionado

- **O [Assistente](/assistente/) chegou.** Um ícone novo no topo do aplicativo abre uma conversa
  onde você escreve o que precisa — uma pergunta ou um pedido, como "cria uma tarefa para ligar
  para o depósito, prazo sexta" — e ele prepara a ação, sempre mostrando uma prévia para você
  confirmar antes de qualquer coisa acontecer de verdade. Ele nunca faz mais do que você mesmo
  poderia fazer clicando na tela.
- **O Assistente também responde pelo [Telegram](/configuracoes/telegram/).** Ligue o seu Telegram
  ao seu perfil e converse com ele do celular, sem abrir o aplicativo.
- **[Agenda no Google e no celular](/configuracoes/agenda-no-celular/).** Gere um link e cole no
  Google Agenda (ou em qualquer app de calendário) para ver os prazos e reuniões do Realiza junto
  com o resto da sua agenda.
- **[Conhecimento](/conhecimento/): documentos, pastas, links e wiki.** Um lugar para guardar o que
  não é tarefa, mas precisa existir em algum lugar — um modelo de ofício, o estatuto da
  organização, o passo a passo de um processo. A wiki guarda o histórico de cada versão, e uma
  página pode ser publicada num endereço público, para quem não tem conta.
- **[Pedir uma tarefa, sem poder criar direto](/trabalho/pedidos/).** Espaços podem ligar a
  triagem: em vez de criar a tarefa direto, quem participa manda um pedido, e quem gerencia decide
  se ele vira tarefa, precisa de mais informação ou é recusado.
- **[Tarefas que se repetem e modelos de ciclo](/trabalho/recorrencias/).** Uma tarefa recorrente
  nasce sozinha no intervalo que você escolher, e um modelo de ciclo cria de uma vez um conjunto de
  tarefas que sempre acontecem juntas, cada uma com seu prazo contado a partir do início do ciclo.
- **[Indicadores](/trabalho/indicadores/) e [Relatórios](/trabalho/relatorios/) do espaço.** Um
  indicador guarda um número que a sua organização acompanha por período — pessoas atendidas,
  cestas entregues — à mão ou por planilha. O relatório reúne, num rascunho que só sai publicado
  depois de revisado, o que o espaço fez no período: tarefas concluídas, entregas aprovadas e os
  indicadores registrados, com PDF para baixar.
- **[Exportar dados](/configuracoes/exportar-dados/).** Baixe um pacote com os seus dados, ou, se
  você administra a organização, com os dados da organização inteira.
- **[Integrações](/configuracoes/integracoes/): chaves de API e webhooks.** Quem administra a
  organização pode conectar sistemas externos — uma planilha, um robô de automação — para ler ou
  alterar dados do Realiza, e ser avisado automaticamente quando algo acontece.
- **Criar a própria organização, sem esperar convite.** Na tela de entrada, quem ainda não integra
  organização nenhuma pode pedir a criação da própria — veja
  [Primeiros passos](/primeiros-passos/). Quando o domínio do e-mail já pertence a outra
  organização, o pedido vira, em vez disso, um pedido de entrada para quem a administra decidir.
- **Tarefa salva sozinha, sem botão "Salvar".** Toda alteração numa tarefa é gravada automaticamente,
  com um aviso na tela mostrando o horário salvo — ou, se algo falhar, um botão para tentar de novo.
- **Responsável passou a ser opcional ao criar uma tarefa.**

### Alterado

- **A tela de tarefas agendadas, de quem administra o serviço, ganhou duas telas irmãs**: os
  [pedidos de organização](/admin-servico/pedidos-de-organizacao/) que o produto não conseguiu
  decidir sozinho, e os [domínios autorizados](/admin-servico/dominios-autorizados/) a criar conta
  sem convite.

---

## 21 de setembro de 2026 — versão 0.9.5

### Adicionado

- **[Meu perfil](/configuracoes/perfil/) ganhou uma segunda coluna**, com os avisos que você
  recebe reunidos numa tabela só. A antiga tela de preferências de avisos virou parte do perfil.

### Alterado

- **Reprocessar uma rotina que falhou, e reconciliar o espelho de espaços, passaram a pedir
  confirmação** — a caixa de diálogo mostra exatamente o que vai acontecer antes de você
  confirmar. Isso é telas de administração do serviço, sem efeito no seu dia a dia.

---

## 21 de setembro de 2026 — versão 0.9.4

### Alterado

- **Quem é convidado de fora só vê os botões que pode usar.** Criar espaço ou cliente, arquivar,
  excluir, mexer em etapas e participantes, criar tarefa ou evento: nada disso aparecia como opção
  de verdade para essa pessoa, mas os botões continuavam na tela. Agora eles não
  aparecem para quem não pode usá-los.
- **A mensagem de falta de permissão ficou clara.** Em vez de um texto técnico, qualquer recusa por
  permissão agora diz "Você não tem permissão para fazer isto nesta organização."

---

## 21 de setembro de 2026 — versão 0.9.0

### Adicionado

- **Excluir cliente, espaço ou organização, de verdade.** Além de arquivar, agora dá para apagar
  de vez — com a tela sempre avisando antes o que está vinculado e o que vai junto, para você
  confirmar sabendo o tamanho da ação. Excluir um cliente não apaga os espaços ligados a ele, só
  desfaz o vínculo; excluir um espaço ou uma organização leva junto o conteúdo de dentro.
- **Convite pendente ganhou seção própria, com reenviar e cancelar.** Tanto para convite de
  organização quanto para convite de espaço, dá para ver quem ainda não aceitou, reenviar sem
  precisar convidar de novo do zero, ou cancelar um convite enviado por engano.
- **Confirmação antes de apagar uma tarefa, todo o material de um cartão ou uma ocorrência de
  reunião.** As três ações agora avisam exatamente o que se perde antes de acontecer.
- **Aviso de reunião nas preferências.** "Fui convidado para uma reunião" e "Uma reunião minha
  está para começar" entraram na lista de avisos que você liga ou desliga, por canal.
- **A versão do Realiza, no rodapé, agora leva direto para esta página.** Clique no número da
  versão, no rodapé de qualquer tela, para ver o que mudou.
- **A tela de tarefas agendadas passou a mostrar as rotinas de todas as partes do produto**, não só as de
  espaços e tarefas — inclui, por exemplo, o envio de e-mail e de notificação de aviso.

### Alterado

- **Os e-mails que o Realiza envia ganharam um visual novo** — convite, recuperação de senha,
  aviso e o e-mail de teste da configuração.

---

## 20 de setembro de 2026 — versão 0.8.0

### Adicionado

- **Convidar quem não é da organização, direto pelo espaço.** Na configuração do espaço, basta o
  e-mail e o papel: a pessoa recebe o convite, entra, e aparece na lista com o rótulo
  "(convidado externo)". Ela alcança **aquele espaço e nada mais** — não vira membro da
  organização, não descobre os outros espaços, não vê a equipe nem as configurações. Antes eram
  dois passos, e a pessoa precisava entrar na organização inteira.
- **Reunião na agenda, com repetição.** Compromisso com hora, gente convidada e confirmação de
  presença — diferente de prazo de tarefa, que continua sendo "isto precisa estar pronto até tal
  dia". No calendário, cada dia ganhou os botões para criar um ou outro. Reuniões podem repetir
  toda semana ou todo mês.
- **Duas telas novas para quem administra o serviço:** destinos da cópia de segurança, e as
  tarefas agendadas — onde se vê se as rotinas automáticas estão vivas.
- **As preferências de aviso passaram a ter um cartão no seu perfil**, com um resumo de quantos
  tipos de aviso você recebe. Antes só se chegava lá pelo sininho.
- **O produto avisa quando há versão nova**, com uma faixa no alto da tela. Aba que fica aberta
  por dias continuava rodando a versão antiga sem que ninguém percebesse.

### Alterado

- **As duas configurações de servidor de e-mail viraram uma só.** Continuam existindo dois
  caminhos por baixo, e a diferença entre eles continua importando — mas quem configura mexe num
  lugar só.
- **As telas ficaram no mesmo padrão**: mesma largura, título no mesmo lugar, o mesmo "Voltar",
  e listas que se comportam igual em todas.
- **Editar cliente e organização passou a abrir em uma janela sobre a tela**, em vez de cada
  tela fazer de um jeito.
- **Os estados vazios passaram a dizer o que fazer.** Em vez de "Nenhum espaço ainda.", agora é
  "Nenhum espaço ainda. Crie um pelo formulário acima." — e assim em todas as listas.

### Corrigido

- **"Meu trabalho" passou a mostrar só o que depende de você.** Antes trazia também o que estava
  parado com outras pessoas — o que era especialmente incômodo para quem é convidado de fora e
  via atrasos internos da equipe.
- **Quem é convidado de fora não vê mais os controles de edição da tarefa**, nem o botão de
  remover. Eles nunca funcionaram para essa pessoa; agora também não aparecem.
- **A mensagem de "nenhuma organização ativa" parou de mandar a pessoa para um lugar que não
  existe** — e quem ainda não tem vínculo com organização nenhuma passou a receber uma mensagem
  que trata do caso dela.

---

## 20 de setembro de 2026 — versões 0.6.0 e 0.7.0

### Adicionado

- **Agora dá para criar conta sozinho, se o seu e-mail for de um domínio
  autorizado.** Convite continua valendo para qualquer pessoa, de qualquer
  endereço. Sem convite, só cria conta quem tem e-mail de um domínio que quem
  administra o serviço tenha liberado — e a regra vale tanto para a entrada por
  senha quanto pela conta Google. Quem entra assim começa sem vínculo com
  organização nenhuma: entrar não é ser aceito em lugar nenhum.
- **Criar tarefa pela lista e pelo calendário.** Antes só o quadro criava. No
  calendário, clicar num dia já deixa a data preenchida. ⚠️ O que se cria
  continua sendo uma tarefa com data — reunião com hora, participantes e convite
  ainda não existe.
- **Rodapé em todas as telas**, com o manual, a política de privacidade e os
  termos de uso sempre ao alcance.
- **A organização ganhou ícone próprio, além da logo**, e a logo passou a
  aceitar qualquer proporção. Também há campo para o site da organização.
- **A lista de membros ganhou busca, ordenação e páginas**, e cada pessoa passou
  a ocupar uma linha só — antes a lista crescia sem parar.
- **O feedback ficou mais completo**: agora tem tipo (sugestão, problema, elogio,
  depoimento ou outro), título e anexos. E quem administra o serviço passou a ter
  uma tela para ler e responder o que chega.
- **Quem administra o serviço ganhou duas telas novas**: a lista de todas as
  organizações, com gestor, entrada, contrato, espaços e pessoas; e a lista de
  domínios autorizados a criar conta sem convite.
- **Criar organização passou a ser tarefa de quem administra o serviço**, que
  cria e convida quem vai administrá-la.
- **Escolher o modelo de cada provedor de inteligência artificial**, com um botão
  que lista os modelos que a credencial alcança.

### Alterado

- **A aba "Organização" saiu do menu.** As abas agora são Meu trabalho, Espaços e
  Clientes. Trocar de organização passou a ser pelo seletor no alto da tela, e
  configurar, pela engrenagem — o produto parte do princípio de que você trabalha
  numa organização, não que escolhe uma numa lista.
- **A logo do RIT360 Realiza virou atalho** para "Meu trabalho".
- **O alto da tela mostra a logo da sua organização**, quando ela tem uma
  cadastrada; sem logo, mostra o nome.
- **Seu avatar passou a mostrar a sua foto.**
- **A tela de manual dentro do produto saiu** — o manual é alcançado pelo rodapé.
- **No computador, a administração do serviço virou uma tela só**, em duas
  colunas, em vez de uma tela por assunto.
- **O DeepSeek saiu da lista de provedores de inteligência artificial.** Ficam
  Gemini, OpenAI e Claude.

### Corrigido

- **Quem é convidado de fora não vê mais que existe uma conversa interna da
  equipe.** Antes as duas abas apareciam para essa pessoa — o conteúdo nunca
  vazou, mas a existência da conversa, sim.
- **Os nomes das pessoas voltaram a aparecer** em telas onde apareciam códigos.
- **Cada tela tinha uma largura**, e no computador sobrava espaço vazio; agora
  seguem a mesma medida.
- **No celular, a barra superior parou de fugir** e a página parou de deslizar
  para o lado.
- **Configurar espaço** parou de sobrepor partes da tela, e cliente e tipo
  deixaram de gastar duas linhas.
- **O campo de escolher arquivo** passou a parecer um botão e a responder ao
  mouse.
- **O perfil parou de acusar erro** quando a pessoa não tem foto.

---

## 20 de setembro de 2026 — primeiras versões

### Adicionado

- **Cada organização decide se quer inteligência artificial, e de quem.** Nas
  configurações da organização apareceu a escolha: recusar por completo que IA
  trate os dados dali, usar os provedores que o serviço oferece (o padrão, hoje
  sem custo adicional) ou cadastrar os próprios. Quem escolhe os próprios nunca
  passa a usar os do serviço por socorro automático: se os seus não estiverem
  funcionando, o recurso fica indisponível, com mensagem dizendo isso. Toda
  mudança dessa configuração fica registrada, com quem mudou e quando.
- **Administração do serviço reunida numa porta só.** Quem cuida da instalação
  passou a ter uma área própria, com o painel de contagens, os dois servidores
  de e-mail, a entrada pelo Google, os provedores de IA, a lista de quem
  administra o serviço e o resultado da última cópia de segurança. Antes, parte
  disso dependia de configuração colada direto no servidor.
- **O Realiza entrou no ar** em endereço próprio, com publicação empacotada.

### Corrigido

- **Entrar pelo Google passou a funcionar de ponta a ponta.** Três problemas
  diferentes atrapalhavam essa entrada: ela não saía do navegador em alguns
  casos, falhava quando o vínculo apontava para uma conta que já tinha sido
  removida, e — quando funcionava — mostrava o e-mail no lugar do nome da
  pessoa nas telas.
- **Convite e recuperação de senha passaram a chegar de verdade.** O e-mail
  saía sem sair; agora sai, e há tela própria para configurar o servidor que o
  envia.
- **No celular, a barra superior parou de fugir.** Ela sumia ao rolar a página e
  a tela deslizava para o lado, deixando ícones fora do alcance. As duas coisas
  foram corrigidas.
- **O painel de administração parou de contar zero espaços** quando havia
  espaços.

---

## 19 de setembro de 2026

### Adicionado

- **Quadro, lista e calendário.** O mesmo trabalho passou a ser visto de três
  jeitos, sem duplicar tarefa nenhuma. No quadro dá para arrastar o cartão entre
  as etapas — e arrastar para uma etapa que aprova pede confirmação antes de
  registrar qualquer coisa em seu nome.
- **Meu trabalho.** A tela que abre o dia mostrando o que está parado, com quem
  e há quanto tempo, reunindo itens de todas as organizações de que você
  participa.
- **Aprovação com confirmação explícita.** Enviar material para aprovação passa
  a guardar uma cópia congelada e numerada do conjunto; aprovar registra a
  decisão em nome de quem aprovou, sobre aquela versão; pedir ajuste exige
  escrever o motivo. Silêncio e prazo vencido não aprovam.
- **Avisos**, na central do app e por e-mail, com preferências por tipo e canal.
- **Tarefas com responsável, prazo, subtarefas e dependências**, e a sinalização
  de quem está travando quem.
- **Espaços de projeto e de operação contínua**, cada um com endereço próprio e
  etapas configuráveis.
- **Clientes e carteira.** O projeto passa a poder ser ligado ao parceiro ou
  financiador para quem o trabalho é feito, e há uma visão de todos os espaços
  de um mesmo cliente.
- **Pessoa passou a ter nome e foto** nas telas, no lugar de um código.
- **Identidade visual** de organização, cliente e espaço: logo, razão social e
  contatos.
- **Configurações da organização** em tela própria, e o canal de feedback dentro
  do produto.

### Corrigido

- **A sessão parou de cair depois de uma hora** de trabalho.
- **Quem entrava sem organização ativa deixou de ficar sem saída na tela.**

---

## 18 de setembro de 2026

### Adicionado

- **Entrar no produto**: login por e-mail e senha, entrada pelo Google, convite
  e recuperação de senha.
- **Organizações e vínculos**: uma conta participa de várias organizações, com
  permissões independentes em cada uma, e alterna entre elas sem criar outra
  conta.
- As fundações do produto: isolamento entre organizações, papéis e permissões
  configuráveis, e o desenho da relação entre tarefa, material e o conjunto que
  vai à aprovação.
