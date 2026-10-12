---
title: "Integrações"
nav_order: 5.5
parent: "Configurações"
permalink: /configuracoes/integracoes/
palavras_chave: "chave de api, webhook, token, n8n, automação, segredo, credencial de máquina, erro 401"
---

# Integrações

Chaves de API e webhooks conectam sistemas de fora — uma planilha, um robô de automação como o
n8n, outro produto — a esta organização. Esta página é para quem administra decidir e acompanhar
essas conexões; configurar o sistema externo em si é trabalho de quem cuida dele, com a
documentação técnica linkada no fim desta página.

## Por que isto importa

Sem chave de API nem webhook, tirar um dado da RIT360 Plataforma ou avisar outro sistema quando algo
acontece por aqui exigiria alguém copiando informação manualmente. Com eles, um sistema externo lê
ou grava dentro dos limites que você definiu, e é avisado sozinho quando um evento acontece.

{: .important }
**Token**, aqui, é a **credencial** que um sistema externo usa para se identificar ao falar com a
RIT360 Plataforma — como uma senha, só que feita para máquina, não para pessoa. É esse valor que aparece
como "chave" e como "segredo" nesta página.

## Acessar

Em [Dados e identidade da organização](/configuracoes/organizacao/), clique no link
**"Integrações"**, no topo da tela.

{: .note }
Só quem tem permissão para gerenciar chaves de API, para gerenciar webhooks, ou as duas, alcança
esta tela — cada seção só aparece para quem tem a permissão correspondente.

## Chaves de API

Uma chave de API deixa um sistema externo ler (e, se você permitir, alterar) dados desta
organização, sem usar a senha de ninguém. Desde a versão 0.41.0, ela alcança **só o que você
marcar ao criá-la** — e nada vem marcado de início.

Por que isso importa: uma chave vive num sistema que não é este, muitas vezes numa planilha ou num
fluxo que várias pessoas mexem. Se ela alcançasse tudo o que quem a criou alcança, um vazamento
entregaria a organização inteira. Marcando só o mínimo que a integração precisa, o estrago de um
vazamento fica do tamanho da integração.

### Criar uma chave

1. Clique em **"Nova chave"**. A janela **"Nova chave de API"** diz: "A chave alcança só o que você
   marcar aqui — e nunca mais do que você, que a está criando."
2. Preencha **"Nome"** — algo que te ajude a lembrar para que serve, como "n8n produção".
3. Em **"O que ela pode"**, escolha **"Só ler"** ou **"Ler e alterar"**.
4. Em **"Em quais espaços"**, deixe marcado **"Todos os espaços da organização"**, ou desmarque e
   escolha só os espaços que essa chave deve alcançar.
5. Em **"O que esta chave alcança"**, marque cada informação que a integração precisa. A lista é
   agrupada por módulo — **Organização, Trabalho, Conhecimento, Relatórios, Comunicação,
   Assistente e Flow** — e cada item aparece como **"<Recurso>: <ação>"**, por exemplo
   *"Cadastro de pessoas: ver"*, *"Chaves de API: gerenciar"* ou *"Tarefas: criar"*. À direita do
   título, **"Marcar todas"** e **"Desmarcar todas"** marcam ou limpam a lista de uma vez. A
   explicação na tela é: "Nada vem marcado: a chave alcança só o que você escolher aqui. Marque o
   mínimo que a integração precisa."
6. Clique em **"Criar chave"**.

A tela mostra a chave em claro **uma única vez**, com o aviso: "Copie agora — por segurança, esta
chave não aparece de novo. Se perdê-la, revogue e crie outra." Clique em **"Copiar"** antes de
fechar.

{: .warning }
Perder a chave sem ter copiado significa começar de novo: não existe um jeito de "ver" a chave
depois de fechar essa tela — só revogar a antiga e criar outra.

{: .warning }
**Chave criada sem marcar nada autentica, mas é recusada em toda chamada.** O sintoma é enganoso:
parece credencial errada, e não é — a chave é válida, só não alcança informação nenhuma. A janela
avisa: "Sem nada marcado, esta chave autentica mas não alcança informação nenhuma — toda chamada é
recusada." Se uma integração nova só recebe recusa, olhe primeiro o que a chave alcança (veja
abaixo), antes de desconfiar do valor copiado.

{: .warning }
**O alcance não pode ser editado depois de criada a chave.** Precisando ampliar, revogue a chave e
crie outra, marcando o que faltava — e atualize o valor no sistema externo. As chaves que já existiam
antes da versão 0.41.0 mantiveram o alcance que tinham, congelado: uma permissão que a pessoa que
as criou ganhar depois **não entra nelas sozinha**.

### Ver o que cada chave alcança

Cada chave da lista traz uma linha **"O que ela alcança:"**, seguida dos itens marcados — por
exemplo, *"Organização · Cadastro de pessoas: ver"*. Quando nada foi marcado, a linha diz: "O que
ela alcança: nada — esta chave não alcança nenhuma informação." É o primeiro lugar a olhar quando
uma integração começa a receber recusas.

### O que uma chave nunca pode

O aviso no topo do cartão **"Chaves de API"** diz: "Uma chave alcança só o que foi marcado ao
criá-la — e nunca mais do que a pessoa que a criou. Aprovar, excluir, remover e alterar o acesso
de alguém não são permitidos por chave nesta versão, nem marcados — essas ações continuam
exigindo login de pessoa."

Na lista de **"O que esta chave alcança"**, os itens dessas ações sérias aparecem **desabilitados**,
com a frase **"Não permitido por chave de API nesta versão."** — não adianta tentar marcá-los. E,
para marcar um item, **você mesmo precisa ter essa permissão**: ninguém concede a uma chave o que
não tem.

### Revogar

Na linha da chave, clique em **"Revogar"** e confirme. Revogar é imediato e definitivo: "Ela para
de funcionar imediatamente. Qualquer integração que a use passa a receber 401" — o código que
identifica "chave inválida" para quem programou o sistema externo.

Para revogar várias de uma vez, marque-as e clique em **"Revogar selecionadas"**.

## Webhooks

Um webhook avisa um sistema externo, automaticamente, quando algo acontece na RIT360 Plataforma — uma tarefa
criada, uma entrega enviada para aprovação, um pedido de triagem decidido.

### Criar um webhook

1. Clique em **"Novo webhook"**.
2. Preencha **"Nome"** e **"URL de destino"** — o endereço do sistema que vai receber o aviso. A
   URL precisa começar com `https://`; endereços internos são recusados.
3. Em **"Eventos"**, marque os que você quer que disparem um aviso.
4. Em **"Em quais espaços"**, escolha todos ou só alguns, como na chave de API.
5. Clique em **"Criar webhook"**.

Os eventos disponíveis hoje: tarefa criada, responsável da tarefa alterado, entrega criada, versão
de entrega enviada para aprovação, entrega aprovada ou recusada, ajuste solicitado numa entrega,
pedido de triagem recebido e pedido de triagem decidido.

Como na chave de API, o **segredo** do webhook aparece **uma única vez**, para verificar que um
aviso recebido realmente veio da RIT360 Plataforma (a documentação técnica explica como).

{: .warning }
**O aplicativo mudou de nome, mas o cabeçalho de assinatura dos avisos não.** Ele continua se
chamando `X-Realiza-Assinatura` (e o do tipo de evento, `X-Realiza-Evento`), de propósito: quem já
tem uma integração pronta verifica a assinatura procurando esse nome, e trocá-lo faria toda
verificação existente passar a falhar sem aviso. Se você mantém uma integração, não precisa mudar
nada; se vai criar uma nova, procure o cabeçalho com o nome antigo, não um com "Plataforma".

### Acompanhar as entregas

Na linha do webhook, clique em **"Entregas"** para ver o estado de cada tentativa de aviso:

- **"Na fila"** — ainda não foi tentado.
- **"Entregue"** — o sistema de destino confirmou o recebimento.
- **"Falhou — vai tentar de novo"** — a primeira tentativa não deu certo; a RIT360 Plataforma tenta de novo
  sozinho.
- **"Esgotou as tentativas"** — todas as tentativas falharam. Aparece o botão **"Reenviar"**, para
  você forçar uma nova tentativa depois de corrigir o que estava impedindo o recebimento do outro
  lado.

### Ligar, desligar e excluir

- O interruptor na linha do webhook liga ou desliga o recebimento de avisos, sem apagar o
  cadastro.
- **"Excluir"** apaga de vez: "Ele para de receber eventos imediatamente. Esta ação não pode ser
  desfeita."
- Para desligar vários de uma vez, marque-os e clique em **"Desativar selecionados"**.

## Exemplo

Para um relatório semanal, Maria Oliveira cria no Instituto Semente uma chave chamada "planilha da
equipe", como **"Só ler"**, e em **"O que esta chave alcança"** marca apenas *"Cadastro de pessoas:
ver"* — a planilha só precisa dos nomes. Se o fluxo um dia precisar também de tarefas, ela não
edita a chave: revoga e cria outra com o item a mais.

Em outro caso, o Instituto Semente quer que um fluxo no n8n publique, num grupo do Telegram da equipe, sempre que
uma entrega for aprovada. Maria Oliveira cria um webhook com o evento "Entrega aprovada ou
recusada", aponta a URL para o fluxo do n8n e copia o segredo antes de fechar a tela. A partir daí,
toda decisão sobre uma entrega dispara o aviso sozinho, sem ninguém copiar nada manualmente.

## Quando dá errado

- **"Você não administra [organização] — só quem administra gerencia integrações."** — sua conta
  não tem a permissão de chaves nem de webhooks.
- **"Estas ações não são permitidas por chave de API nesta versão: …"** — você marcou algo da
  lista de ações sérias (aprovar, excluir, remover, alterar acesso). Desmarque os itens citados na
  mensagem e crie de novo.
- **"Você não tem estas permissões, então não pode concedê-las a uma chave: …"** — você marcou um
  item que a sua própria conta não alcança. Desmarque os citados, ou peça a quem administra que lhe
  dê a permissão antes de criar a chave.
- **Integração recebe recusa em toda chamada, mesmo com a chave certa.** — a chave é válida e não alcança o
  que a chamada pede (talvez nada, se foi criada sem marcar). Confira a linha **"O que ela
  alcança:"** na lista; precisando ampliar, revogue e crie outra.
- **"Falha ao criar a chave."** ou **"Falha ao criar o webhook."** — confira os dados (a URL do
  webhook, por exemplo, precisa começar com `https://` e não pode ser um endereço interno) e tente
  de novo. O motivo específico da recusa aparece na própria mensagem.
- **"Falha ao carregar as chaves de API."** ou **"Falha ao carregar os webhooks."** — recarregue a
  página.

Para o detalhe técnico de como assinar e verificar as entregas de webhook, veja o link
**"Ver documentação para quem integra"**, no topo desta tela.
