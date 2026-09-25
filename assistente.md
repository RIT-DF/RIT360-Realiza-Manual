---
title: "Assistente"
nav_order: 4.5
permalink: /assistente/
palavras_chave: "chatbot, inteligência artificial, telegram, pergunta, criar tarefa por chat, prévia de ação, pedir por escrito, criar tarefa falando, nome do espaço, concluir tarefa pelo assistente, excluir tarefa pelo assistente, reabrir tarefa pelo assistente, comentar tarefa pelo assistente, título da tarefa, responsável por nome, designar responsável pelo assistente, remover participante pelo assistente, listar tarefas por responsável"
---

# Assistente

O assistente responde perguntas sobre o que precisa da sua atenção e pode criar tarefas para
você — sempre dentro da organização ativa, e nunca com mais poder do que você já tem.

## Por que isto importa

Em vez de abrir o quadro, procurar o espaço certo e criar a tarefa campo a campo, você escreve o
que precisa em uma frase e o assistente prepara. Ele também responde perguntas do tipo "o que
está atrasado esta semana" sem você precisar caçar em várias telas.

{: .important }
O assistente **nunca faz mais do que você mesmo poderia fazer** clicando na tela. Se você não tem
permissão para aprovar uma entrega, pedir isso ao assistente também não funciona — ele esbarra na
mesma regra que barraria você no quadro.

## Acessar

Clique no botão redondo no canto inferior direito da tela — ele fica presente em qualquer tela de
dentro do produto. A conversa abre numa janela pequena, ancorada a esse botão, sem escurecer o
resto da tela: dá para continuar lendo e usando o que está atrás enquanto conversa. Fechando a
janela, você continua exatamente onde estava, sem precisar navegar de volta.

Para fechar, use o botão **"Fechar"** (o ✕ no canto do cabeçalho), pressione Esc, ou clique fora da
janela — as três formas funcionam.

<!-- CAPTURA PENDENTE: janela do assistente, desktop e celular, com uma prévia de ação na tela.
     As imagens anteriores mostravam a prévia antiga, de uma linha só, e foram removidas; a da
     0.21.0 cita espaço, prazo e responsável.

     Tentativa de 25/09/2026 (0.30.0): rodei Projeto/bin/capturas/assistente.mjs contra o
     assistente subido com `npm run dev:ia-de-mentira`, pedindo "cria uma tarefa chamada Comprar
     mudas no espaço Campanha do Agasalho 2026 com prazo em 25/09/2026" — 4 tentativas em desktop e
     4 em celular, todas responderam SEM prévia (eco em texto simples). Causa apurada no código: o
     adaptador de mentira só roteia a palavra-chave "pendência" para uma ferramenta de verdade;
     qualquer outro pedido, inclusive criar tarefa, cai num eco de texto e nunca produz a prévia
     "Confirmar"/"Cancelar" que esta captura precisa mostrar. Registrado como
     RIT360-Realiza-Code#186 (adaptador de mentira não gera prévia de ação). A issue #173
     (fuso das datas) já foi corrigida — não é mais bloqueio aqui.

     Refazer só depois de #186 resolvida, ou usando um provedor de IA de verdade (gasta cota). -->

## Conversar

1. No campo **"Mensagem para o assistente"** — o que mostra "Escreva sua mensagem…" enquanto está
   vazio —, escreva o que você precisa: uma pergunta ou um pedido.
2. Clique em **"Enviar"** (ou pressione Enter; Shift+Enter quebra linha sem enviar).

Chegando à conversa sem nenhuma mensagem ainda, o espaço da conversa mostra a dica: "Pergunte o
que precisa da sua atenção, ou peça para criar uma tarefa."

## Exemplo

Carlos Nunes, executor na **Campanha do Agasalho 2026**, escreve: "cria uma tarefa para eu ligar
para o depósito confirmando a entrega das caixas, prazo sexta". O assistente prepara a tarefa e
mostra um resumo do que vai fazer, esperando você confirmar antes de criar qualquer coisa de
verdade.

## Tirar dúvida sobre como usar o Realiza

O assistente também responde "como eu faço X" ou "o que significa Y" — buscando a resposta no
manual publicado, nunca inventando um passo que não existe ali.

### Por que isto importa

Em vez de procurar a página certa do manual, você pergunta com suas próprias palavras e o
assistente traz o trecho que responde, junto com o link para ler o resto.

### Perguntar

1. Escreva a dúvida como preferir — por exemplo, "como eu arquivo um espaço?" ou "o que é uma
   reprogramação de prazo?".
2. O assistente responde com o título da seção do manual que respondeu, o trecho que explica, e
   "Veja mais em:" com um link clicável para a página completa.

### Exemplo

Joana Martins, voluntária na Campanha do Agasalho 2026, pergunta ao assistente: "como eu faço para
reabrir uma tarefa que já concluí sem querer?". O assistente responde com o trecho do manual que
explica o passo, e o link para a página inteira, caso ela queira ver mais.

### Quando não encontra ou não consegue

- **"Não encontrei isso no manual. Você pode dar uma olhada no índice completo: \<endereço do
  manual\>"** — nenhuma seção do manual respondeu à pergunta; o endereço aparece como link
  clicável. Tente reformular com outras palavras, ou abra o índice pelo link.
- **"Não consegui consultar o manual agora — tente de novo em instantes."** — o manual está
  temporariamente fora do alcance do assistente. Tente de novo em alguns instantes.
- **"Sobre qual dúvida de uso do Realiza você quer saber?"** — a pergunta chegou sem nenhum
  conteúdo reconhecível. Escreva a dúvida com mais detalhe.

### Dicas e armadilhas

- **A resposta é sempre um trecho do manual, nunca uma explicação inventada.** Não encontrando
  nada, o assistente diz isso — não tenta "adivinhar" um passo que o manual não descreve, nem
  entrega a página mais parecida quando ela não responde de verdade à pergunta.
- **Funciona nos dois canais**, no app e pelo Telegram, do mesmo jeito.
- Pergunta que mistura dúvida com pedido de ação — por exemplo, "como arquivo um espaço? arquiva o
  Horta pra mim" — também funciona: o assistente responde a dúvida e, entendendo que você também
  quer a ação, oferece a prévia dela junto, esperando sua confirmação como de costume.

## Confirmar ou cancelar uma ação

Quando o pedido envolve uma ação de verdade — criar uma tarefa, por exemplo —, o assistente nunca
executa direto. Ele mostra uma prévia com dois botões:

- **"Confirmar"** — só agora a ação acontece.
- **"Cancelar"** — nada é feito, e a prévia some da conversa.

A prévia diz **o que ele entendeu do seu pedido**, não só o nome da coisa: o espaço em que a
tarefa vai nascer, o prazo e o responsável, quando você tiver dito algum deles. Por exemplo:

> Criar a tarefa "ligar para o depósito confirmando a entrega das caixas", no espaço "Campanha do
> Agasalho 2026", com prazo em 25/09/2026. Confirma?

As prévias de excluir tarefa e de remover participante dizem de qual espaço; as de reprogramação
de prazo e de ajuste de entrega dizem o motivo.

{: .tip }
**Confira o prazo na prévia.** Pedindo com uma palavra — "sexta", "semana que vem" —, o assistente
mostra na prévia a data que entendeu. Não sendo a que você quis dizer, clique em **"Cancelar"** e
peça de novo com a data completa.

Entendendo uma data que **já passou**, ele nem chega a montar a prévia: responde perguntando, com
a data que entendeu à vista — **"Entendi o prazo como [data], mas essa data já passou — a tarefa
nasceria atrasada. Pode confirmar a data certa?"**. Responda com a data certa e ele segue.

{: .note }
Enquanto a prévia está na tela, nada foi criado, alterado ou aprovado ainda. É por isso que ela
existe: para você ver exatamente o que vai acontecer antes de acontecer, em vez de descobrir
depois que o assistente interpretou seu pedido errado.

Criar ou concluir tarefa citando o espaço pelo nome sempre passa por essa prévia, mesmo quando a
mesma ação, com o espaço já certo, executaria direto. O motivo é que o assistente teve que
interpretar qual espaço você quis dizer — a prévia é o momento de conferir se ele entendeu o
espaço certo antes de a ação acontecer de verdade.

Fechando a conversa com uma prévia pendente e voltando depois, ela continua lá, esperando sua
decisão — não desaparece sozinha. Já uma prévia que você **confirmou ou cancelou** não volta: a
conversa guarda o que aconteceu, e a caixa com os dois botões só aparece quando há mesmo algo
esperando você.

## Citar o espaço pelo nome

Pedindo para criar ou concluir uma tarefa, você pode dizer o nome do espaço em vez de precisar
abrir o quadro certo primeiro.

### Por que isto importa

Você não precisa navegar até o espaço certo antes de pedir a ação — basta citar o nome dele na
própria frase, do jeito que você já o reconhece.

### Como funciona

1. Diga o que quer fazer e cite o espaço pelo nome — por exemplo, "crie uma tarefa chamada Comprar
   mudas no espaço Campanha do Agasalho 2026".
2. Existindo só um espaço com esse nome (ou parecido) entre os que você participa, o assistente
   mostra a prévia da ação — veja [Confirmar ou cancelar uma ação](#confirmar-ou-cancelar-uma-ação).

### Nome ambíguo

Mais de um espaço parecido com o nome que você disse? O assistente pergunta qual, nomeando as
opções — por exemplo: "Encontrei mais de um espaço parecido com \"Agasalho\": \"Campanha do
Agasalho 2025\", \"Campanha do Agasalho 2026\". Qual deles?"

### Nome que não existe, ou que você não alcança

Nome que não bate com nenhum espaço que você participa — inclusive um espaço que existe na
organização, mas que você não alcança — o assistente diz que não encontrou e lista os espaços que
você participa: "Não encontrei nenhum espaço chamado \"Chá Beneficente\". Você participa de:
\"Campanha do Agasalho 2026\", \"Horta Comunitária\", entre outros."

Se você não participar de nenhum espaço nesta organização, a resposta diz isso também: "Não
encontrei nenhum espaço chamado \"X\" — e você não participa de nenhum espaço nesta organização."

### Exemplo

Maria Oliveira, coordenadora no Instituto Semente, escreve ao assistente: "crie uma tarefa chamada
Confirmar fornecedor de mudas no espaço Horta". Como a organização dela tem dois espaços com
"Horta" no nome — "Horta Comunitária" e "Horta Escolar" —, o assistente responde: "Encontrei mais
de um espaço parecido com \"Horta\": \"Horta Comunitária\", \"Horta Escolar\". Qual deles?"
Maria responde "a Comunitária", e o assistente mostra a prévia da tarefa, esperando confirmação.

### Dicas e armadilhas

- **Quanto mais parecido o nome que você usa com o nome real do espaço, menor a chance de
  ambiguidade.** Citar um trecho distintivo ("Agasalho 2026" em vez de só "Agasalho") já evita boa
  parte das perguntas de desempate.
- **Entrega ainda não se resolve pelo nome.** Espaço, tarefa e pessoa (veja [Citar a tarefa pelo
  título](#citar-a-tarefa-pelo-título) e [Citar a pessoa pelo nome](#citar-a-pessoa-pelo-nome),
  a seguir) já funcionam assim.

## Citar a tarefa pelo título

Além de criar, você pode pedir ao assistente para **concluir, excluir, reabrir, mudar o título,
comentar ou pedir o detalhe** de uma tarefa já existente — dizendo o título dela, sem precisar
abrir a tarefa na tela primeiro.

### Por que isto importa

Antes, agir sobre uma tarefa pelo assistente exigia um identificador que ninguém guarda de
cabeça. Agora basta dizer o título do jeito que você já o reconhece — o mesmo nome que aparece no
quadro.

### Como funciona

1. Diga o que quer fazer e cite a tarefa pelo título — por exemplo, "conclui a tarefa Revisar
   arte", "exclui a tarefa Revisar arte", "reabre a tarefa Revisar arte", "muda o título da tarefa
   Revisar arte para Revisar arte final", "comenta na tarefa Revisar arte que o andamento está
   ok", ou "me dá o detalhe da tarefa Revisar arte".
2. Existindo só uma tarefa com esse título entre as que você alcança, o assistente mostra a
   prévia da ação, esperando sua confirmação — veja [Confirmar ou cancelar uma
   ação](#confirmar-ou-cancelar-uma-ação). Por exemplo:

   > Marcar a tarefa "Revisar arte" (espaço "Campanha do Agasalho 2026") como concluída. Confirma?

   Para excluir, reabrir, mudar o título ou comentar, a prévia muda de acordo:

   > Excluir a tarefa "Revisar arte" (espaço "Campanha do Agasalho 2026"). Esta ação não pode ser
   > desfeita por aqui. Confirma?

   > Alterar a tarefa "Revisar arte" (espaço "Campanha do Agasalho 2026"): novo título "Revisar
   > arte final". Confirma?

   > Reabrir a tarefa "Revisar arte" (espaço "Campanha do Agasalho 2026"), que volta para uma
   > etapa em andamento. Confirma?

   > Registrar o comentário "o andamento está ok" na tarefa "Revisar arte" (espaço "Campanha do
   > Agasalho 2026"). Confirma?

Depois de confirmar, o assistente diz o que fez — por exemplo, "Pronto — alterei a tarefa 'Revisar
arte'." ou "Pronto — reabri a tarefa 'Revisar arte' (voltou para a etapa 'Em andamento')."

### Restringir a busca pelo espaço

Dizendo também o espaço, a busca pela tarefa fica restrita a ele — útil quando o mesmo título se
repete em espaços diferentes: "conclui a tarefa Revisar arte no espaço Campanha do Agasalho 2026".

### Título ambíguo

Mais de uma tarefa com esse título entre as que você alcança? O assistente pergunta qual, nomeando
o espaço de cada uma: "Encontrei mais de uma tarefa com esse título: \"Revisar arte\" (espaço
\"Campanha do Agasalho 2026\"), \"Revisar arte\" (espaço \"Comunicação institucional\"). Qual
delas?"

### Título que não existe, ou que você não alcança

Nenhuma tarefa com esse título entre as que você alcança? O assistente lista as tarefas que você
tem: "Não encontrei nenhuma tarefa chamada \"Revisar arte\". Você tem: \"Confirmar fornecedor de
mudas\" (espaço \"Horta Comunitária\"), \"Texto do release para a imprensa\" (espaço \"Campanha do
Agasalho 2026\")." Dizendo o espaço, a resposta nomeia onde ele procurou: "…chamada \"Revisar
arte\" no espaço \"Comunicação institucional\"." Não tendo nenhuma tarefa na organização, a
resposta diz isso também: "Não encontrei nenhuma tarefa chamada \"Revisar arte\" — e você não tem
nenhuma tarefa nesta organização."

{: .note }
Essa mesma resposta também aparece quando a tarefa existe, mas está fora do que você alcança — o
assistente nunca lista o que você não pode ver, então "não encontrei" cobre os dois casos sem
diferenciar um do outro.

### Quando o assistente não consegue verificar

**"Não consegui verificar as tarefas agora — pode tentar de novo em instantes?"** — uma falha de
comunicação impediu a busca. Tente de novo em alguns instantes.

### Exemplo

Carlos Nunes escreve ao assistente: "conclui a tarefa Revisar arte". Como duas tarefas com esse
título existem em espaços diferentes, o assistente responde: "Encontrei mais de uma tarefa com
esse título: \"Revisar arte\" (espaço \"Campanha do Agasalho 2026\"), \"Revisar arte\" (espaço
\"Comunicação institucional\"). Qual delas?" Carlos responde citando o espaço, e o assistente
mostra a prévia, esperando confirmação.

### Dicas e armadilhas

- **Dizer o espaço junto com o título evita a maior parte das perguntas de desempate** — do mesmo
  jeito que ajuda ao citar o espaço para criar uma tarefa nova.
- **Mencionar alguém dentro do texto de um comentário ainda não é reconhecido como destinatário.**
  "Comenta na tarefa Revisar arte marcando a Joana" grava "marcando a Joana" como parte do texto
  do comentário — não designa nem notifica ninguém. Para designar responsável, use a forma
  dedicada: veja [Citar a pessoa pelo nome](#citar-a-pessoa-pelo-nome), a seguir.

## Citar a pessoa pelo nome

Pedindo para listar tarefas de alguém, criar uma tarefa com responsável, designar responsável numa
tarefa existente ou remover um participante, você pode dizer o nome da pessoa em vez de escolhê-la
numa lista.

### Por que isto importa

Você não precisa abrir a tela de participantes para lembrar o nome exato ou escolher a pessoa
certa — basta citá-la do jeito que você já a reconhece, na própria frase do pedido.

### Onde o assistente procura

O assistente procura o nome **entre quem participa do espaço daquele pedido** — nunca entre todo
mundo da organização. Alguém que existe na organização mas não participa daquele espaço é tratado
como se não existisse: vem a mesma resposta de "não encontrei" que valeria para um nome inventado.
Isso vale até para quem administra a organização — administrar amplia o que se **lista** nas
telas, nunca o que o assistente alcança por nome num espaço.

Nas quatro formas de pedido abaixo, **o espaço que vale é sempre o do trabalho em questão**:
designar responsável alterando uma tarefa usa o espaço **daquela tarefa**, não o último espaço
citado na conversa.

### Como funciona

- **Listar tarefas de um responsável** — por exemplo, "quais tarefas são da Maria na Campanha do
  Agasalho 2026?". O assistente responde direto, sem prévia — é uma consulta.
- **Criar tarefa com responsável** — por exemplo, "cria a tarefa Montar release na Campanha do
  Agasalho 2026 para a Maria" ou, já dentro da conversa sobre um espaço, "cria a tarefa Montar
  release nesse espaço para a Maria".
- **Designar responsável numa tarefa existente** — por exemplo, "passa a tarefa Revisar arte para
  a Maria".
- **Remover participante** — por exemplo, "remove a Maria da Campanha do Agasalho 2026".

Existindo só uma pessoa com esse nome (ou parecido) entre os participantes do espaço, criar,
designar responsável e remover participante mostram a prévia da ação, esperando sua confirmação —
veja [Confirmar ou cancelar uma ação](#confirmar-ou-cancelar-uma-ação). Por exemplo:

> Alterar a tarefa "Revisar arte" (espaço "Campanha do Agasalho 2026"): responsável Maria
> Oliveira. Confirma?

Listar tarefas de um responsável é consulta e responde direto, sem "Confirma?".

### Nome ambíguo

Mais de uma pessoa parecida com o nome que você disse? O assistente lista até 8 opções, nomeando
o **papel** de cada uma no espaço para ajudar a distinguir — nunca o e-mail, porque a própria tela
de participantes não mostra e-mail, e o assistente não concede mais do que a tela concede:

> Encontrei mais de uma pessoa chamada "Maria Silva" neste espaço: "Maria Silva" (papel
> "gestor"), "Maria Silva" (papel "executor"). Qual delas?

Quando nem o papel distingue — duas pessoas com o mesmo nome e o mesmo papel —, o assistente
admite em vez de oferecer duas opções idênticas:

> Há mais de uma pessoa chamada "Maria Silva" com o mesmo papel neste espaço — pelo nome não dá
> para distinguir. Dá para escolher na tela do espaço, em Participantes.

### Nome que não existe, ou que a pessoa não participa deste espaço

Nome que não bate com ninguém que participa do espaço — o assistente diz que não encontrou e
lista até 5 participantes, para ajudar (acima de 5, acrescenta ", entre outras"):

> Não encontrei ninguém chamado "Maria" neste espaço. Participam: "Beatriz Lima", "João Pedro".

Não havendo ninguém a listar, a resposta é mais curta:

> Não encontrei ninguém chamado "Maria" neste espaço.

Filtrar tarefas por um responsável que não tem nenhuma naquele espaço não é erro — é resposta
vazia, como qualquer consulta sem resultado:

> Nenhuma tarefa de Maria Oliveira neste espaço.

### Quando o assistente não consegue verificar

- **"Não consegui verificar quem participa desse espaço agora — pode tentar de novo em
  instantes?"** — uma falha de comunicação impediu checar os participantes.
- **"Não consegui verificar essa tarefa agora — pode tentar de novo em instantes?"** — uma falha
  de comunicação impediu checar a tarefa, ao designar responsável.

### Exemplo

Carlos Nunes, gestor na Campanha do Agasalho 2026, escreve ao assistente: "passa a tarefa Revisar
arte para a Maria". Só há uma Maria participando desse espaço — Maria Oliveira —, então o
assistente mostra a prévia: "Alterar a tarefa 'Revisar arte' (espaço 'Campanha do Agasalho 2026'):
responsável Maria Oliveira. Confirma?" Carlos confirma, e o assistente diz o que fez.

### Dicas e armadilhas

- **Quanto mais distintivo o nome que você usa, menor a chance de ambiguidade** — do mesmo jeito
  que ajuda ao citar espaço ou tarefa.
- **Remover participante não é sobre uma tarefa — é sobre o acesso da pessoa ao espaço.** Por
  isso passa pela mesma prévia de confirmação das outras ações, e vale conferir com atenção antes
  de confirmar: é a única das quatro formas que não se desfaz reabrindo ou recriando algo.
- **A busca só alcança quem participa do espaço em questão.** Precisando designar ou remover
  alguém que ainda não participa, adicione a pessoa primeiro — veja [Chamar pessoas para o
  espaço](/trabalho/chamar-pessoas/).
- **A pessoa por nome funciona nestas quatro formas de pedido, e só nelas** — listar, criar,
  designar responsável e remover. **Entrega ainda não se resolve pelo nome** em nenhuma forma;
  espaço e tarefa, sim, cada um na sua seção acima.

## Limites do assistente

- **A mesma permissão que você tem na tela.** Pedir para o assistente aprovar uma entrega, mudar
  o papel de alguém ou excluir um espaço só funciona se a sua conta já pudesse fazer isso
  clicando. Sem a permissão, a recusa que aparece é a mesma que apareceria na tela correspondente.
- **Só a organização ativa.** O assistente não vê nem mistura dados de outra organização de que
  você participe — a mesma regra que separa as organizações em qualquer outra tela.
- **Citar pelo nome já funciona para espaço, tarefa e pessoa** — veja [Citar o espaço pelo
  nome](#citar-o-espaço-pelo-nome), [Citar a tarefa pelo título](#citar-a-tarefa-pelo-título) e
  [Citar a pessoa pelo nome](#citar-a-pessoa-pelo-nome). **Só entrega por nome ainda não** — para
  ela, aponte a partir de uma lista que o assistente já tenha mostrado, ou prefira a própria
  tela.
- **A busca por pessoa alcança só quem participa do espaço em questão.** Administrar a
  organização amplia o que se lista nas telas, nunca o que o assistente encontra por nome dentro
  de um espaço.

## Quando a organização desligou a inteligência artificial

Quem administra a organização pode recusar o uso de inteligência artificial por completo — veja
[Inteligência artificial na sua organização](/configuracoes/inteligencia-artificial/). Com a
recusa ativa, o ícone do assistente continua visível, mas ao tentar enviar qualquer mensagem a
resposta é: "O assistente está desligado para esta organização."

{: .warning }
Isso vale para **qualquer pessoa** da organização, inclusive quem administra — a recusa não tem
exceção por papel.

## Quando dá errado

- **"Não foi possível abrir o assistente."** — a conversa não carregou. Recarregue a página.
- **"Não foi possível enviar agora."** — a mensagem não chegou ao servidor; o texto volta para o
  campo, para você tentar de novo sem reescrever.
- **"O assistente está desligado para esta organização."** — veja a seção acima.
- **"O assistente está indisponível no momento. Tente novamente em instantes."** — a inteligência
  artificial que atende sua organização falhou agora. Tentar de novo em alguns instantes
  costuma resolver.
- **"O assistente não está configurado nesta organização. Peça a quem administra para cadastrar um
  provedor de IA."** — não há inteligência artificial nenhuma cadastrada, e insistir não vai
  adiantar. Fale com quem administra a organização; o caminho está em [Inteligência artificial na
  sua organização](/configuracoes/inteligencia-artificial/).
- Confirmar ou cancelar uma ação pode recusar com a mesma mensagem que a tela de origem daria —
  por exemplo, falta de permissão para aprovar. Nesse caso, é a mesma regra de sempre, só que
  vinda pela conversa.
