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

Pela engrenagem do cabeçalho (**"Configurações da organização"**), abra a aba **"Integrações"**. A
tela abre com o título **"Integrações de [nome da organização]"**, e o endereço dela é
`/organizacao/integracoes`. Veja a área inteira em
[Dados e identidade da organização](/configuracoes/organizacao/#onde-fica-a-engrenagem-do-cabeçalho).

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
   escolha só os espaços que essa chave deve alcançar. A lista oferece **só espaços ativos**: um
   espaço arquivado não aparece (veja [Só espaços ativos](#só-espaços-ativos)). Se a organização não
   tem nenhum espaço ativo, a lista diz **"Nenhum espaço ativo encontrado."**
5. Em **"O que esta chave alcança"**, marque cada informação que a integração precisa. A lista é
   agrupada por módulo — **Organização, Trabalho, Conhecimento, Relatórios, Comunicação,
   Assistente e Flow** — e cada item aparece como **"<Recurso>: <ação>"**, por exemplo
   *"Cadastro de pessoas: ver"*, *"Chaves de API: gerenciar"* ou *"Tarefas: criar"*. À direita do
   título, **"Marcar todas"** e **"Desmarcar todas"** marcam ou limpam a lista de uma vez. A
   explicação na tela é: "Nada vem marcado: a chave alcança só o que você escolher aqui. Marque o
   mínimo que a integração precisa."
6. Clique em **"Criar chave"**.

![Janela "Nova chave de API" com "Todos os espaços da organização" desmarcado e a lista mostrando só dois espaços ativos, "Comunicação institucional" e "Campanha do Agasalho 2026", ambos marcados](/assets/capturas/integracoes-chave-nova-desktop.png)

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

O cartão da chave é empilhado, de cima para baixo: o nome e o início da chave, **"Só ler"** ou
**"Ler e alterar"**, **onde** a chave vale, **"Último uso"** e **"Limite"**, o **"O que ela alcança:"**
e, por último, **"Revogar"**. Onde a chave vale vem numa linha própria: **"Todos os espaços"**, ou
**"Espaço:"** (um só) / **"Espaços:"** (vários), seguido de **uma etiqueta com o nome de cada
espaço**. Você não precisa abrir nada para saber *quais* — a tela nomeia. Se o espaço foi removido,
ou a lista não o traz, a etiqueta diz **"Espaço não encontrado"**.

Nada passa da largura da tela, nem no celular, e **"Último uso"** e os botões ficam sempre à vista.
É o **"Último uso"** que diz se a integração está viva: uma chave que ninguém usa há semanas é
candidata a revogar.

![Cartão "Chaves de API" com a chave "planilha da equipe", "Só ler", a linha "Espaços:" com as etiquetas "Comunicação institucional" e "Campanha do Agasalho 2026", "Último uso: nunca", "O que ela alcança" e o botão "Revogar", tudo dentro da largura do cartão](/assets/capturas/integracoes-chave-lista-desktop.png)

![Cartão "Chaves de API" no celular, empilhado: as etiquetas de espaço quebram para a linha de baixo e o botão "Revogar" aparece por inteiro](/assets/capturas/integracoes-chave-lista-celular.png){: style="max-width:375px" }

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
4. Em **"Em quais espaços"**, escolha todos ou só alguns, como na chave de API — a lista oferece só
   espaços ativos (**"Nenhum espaço ativo encontrado."** quando não há nenhum). Leia antes a regra
   do filtro, logo abaixo: ela não vale para todos os eventos.
5. Clique em **"Criar webhook"**.

![Janela "Novo webhook" aberta, com a lista de eventos — "Candidatura aprovada" e "Candidatura reprovada" trazem a marca "(não pertence a um espaço)" — e o campo "Em quais espaços" com "Todos os espaços da organização" marcado](/assets/capturas/integracoes-webhook-novo-desktop.png)

![Janela "Novo webhook" no celular, com os eventos de candidatura marcados como "(não pertence a um espaço)"](/assets/capturas/integracoes-webhook-novo-celular.png){: style="max-width:375px" }

Os eventos disponíveis hoje: tarefa criada, responsável da tarefa alterado, entrega criada, versão
de entrega enviada para aprovação, entrega aprovada ou recusada, ajuste solicitado numa entrega,
pedido de triagem recebido, pedido de triagem decidido e — desde a versão 0.54.0 — **"Candidatura
aprovada"** e **"Candidatura reprovada"**.

Os dois eventos de **candidatura** são os do [Flow](/flow/candidaturas/): disparam quando uma pessoa
decide uma candidatura em tela. É por eles que uma automação (o n8n, por exemplo) fica sabendo da
decisão e dá o passo seguinte, como escrever à pessoa.

#### O filtro de espaços vale só para os eventos de espaço

Alguns eventos acontecem **dentro de um espaço** — uma tarefa criada, uma entrega aprovada. Outros
não acontecem em espaço nenhum: **"Candidatura aprovada"** e **"Candidatura reprovada"** (as do
[Flow](/flow/candidaturas/)) pertencem à organização, não a um espaço. A tela marca esses eventos
com **"(não pertence a um espaço)"**, e a regra é esta:

- **Evento de espaço** — respeita o filtro. Com **"Em quais espaços"** limitado, o aviso só sai se
  o fato aconteceu num dos espaços escolhidos.
- **Evento que não pertence a um espaço** — é entregue **sempre**, com filtro ou sem filtro.

Por que é assim: quem marca um evento o marca de propósito — quer ser avisado quando ele acontece. O
filtro de espaços responde a outra pergunta, "de quais espaços eu quero as coisas?", que não faz
sentido para um fato que não aconteceu em espaço nenhum, como a decisão de uma candidatura. Tratar
o filtro como se ele também excluísse esses eventos entregaria menos do que você pediu, em silêncio.

A tela deixa isso à vista. Sob **"Em quais espaços"** aparece sempre: *"O filtro de espaços só vale
para os eventos de espaço. Os eventos que não pertencem a um espaço (como as candidaturas) são
entregues sempre, com ou sem filtro."* E, quando você limita os espaços e marca um evento desses,
aparece também *"Dos eventos marcados, não são filtrados por espaço: …"*, com o nome dos eventos.

![Janela "Novo webhook" com "Entrega aprovada ou recusada" e "Candidatura aprovada" marcados, o filtro limitado ao espaço "Campanha do Agasalho 2026" e a linha "Dos eventos marcados, não são filtrados por espaço: Candidatura aprovada."](/assets/capturas/integracoes-webhook-filtro-desktop.png)

![Janela "Novo webhook" no celular, com o filtro limitado a um espaço e a linha que avisa quais eventos marcados não são filtrados](/assets/capturas/integracoes-webhook-filtro-celular.png){: style="max-width:375px" }

Na lista de webhooks, cada cartão é empilhado e diz, em linhas separadas, **o que** e **onde**:

- **"Evento:"** (um) ou **"Eventos:"** (vários), seguido de **uma etiqueta por evento**.
- **"Espaço:"** (um) ou **"Espaços:"** (vários), seguido de **uma etiqueta com o nome de cada
  espaço** — ou **"Todos os espaços"**, quando não há filtro. Espaço removido, ou que a lista não
  traz, aparece como **"Espaço não encontrado"**.
- **"Último uso"** e os botões, sempre visíveis.

O rótulo em cada linha existe para que ninguém confunda uma etiqueta de espaço com uma de evento: as
duas têm o mesmo formato, e sem o rótulo um webhook com três eventos e um espaço parece ter quatro
eventos.

Um webhook limitado a espaços repete também o aviso numa linha própria —
*"Sem filtro de espaços (entregues sempre): …"* —, para que ninguém precise lembrar o que marcou.

![Cartão "Webhooks" com o webhook "Automação de decisões": "Eventos:" com duas etiquetas, "Espaço:" com "Campanha do Agasalho 2026", "Último uso: nunca", a linha "Sem filtro de espaços (entregues sempre): Candidatura aprovada." e os botões "Entregas" e "Excluir"](/assets/capturas/integracoes-webhook-lista-desktop.png)

![Cartão "Webhooks" no celular, empilhado, com "Eventos:", "Espaço:", "Último uso" e os botões, sem nada cortado](/assets/capturas/integracoes-webhook-lista-celular.png){: style="max-width:375px" }

{: .tip }
Quer receber **só** as candidaturas, sem nenhum evento de espaço? Marque apenas os dois eventos de
candidatura; o filtro de espaços fica sem efeito sobre eles, então pode deixar **"Todos os espaços
da organização"** marcado — é o mais simples.

{: .warning }
Se a decisão de uma candidatura aparece no Flow como *"concluído, mas nenhum destino de integração
está inscrito neste evento"*, o problema **não** é o filtro de espaços (ele não alcança esses
eventos): confira se há um webhook **ativo** com o evento de candidatura marcado.

{: .note }
Antes da versão 0.60.0 não era assim: um webhook limitado a espaços **nunca** recebia as
candidaturas, mesmo com o evento marcado, e a tela não avisava. Se você tinha um webhook assim, ele
passa a receber as decisões a partir da 0.60.0 — confira se é isso que a sua automação espera.

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

- **"Na fila"** — ainda não foi tentado, e está esperando a vez normal.
- **"Adiada — módulo desligado"** — o aviso não vai sair **por enquanto**, e a própria linha diz por
  quê. Veja a explicação logo abaixo.
- **"Entregue"** — o sistema de destino confirmou o recebimento.
- **"Falhou — vai tentar de novo"** — a primeira tentativa não deu certo; a RIT360 Plataforma tenta de novo
  sozinho.
- **"Esgotou as tentativas"** — todas as tentativas falharam. Aparece o botão **"Reenviar"**, para
  você forçar uma nova tentativa depois de corrigir o que estava impedindo o recebimento do outro
  lado.

#### Quando a entrega aparece como "Adiada — módulo desligado"

Cada aviso nasce em algum módulo — o RIT360 Realiza, por exemplo. Se esse módulo está **desligado**
para a organização, os avisos que ele originou ficam parados, e a linha da entrega mostra, em vez
de "Na fila", o selo **"Adiada — módulo desligado"** e uma frase como esta:

> O módulo RIT360 Realiza está desligado nesta organização, então esta entrega fica adiada — não se
> perde, mas só sai quando o módulo for religado pela administração do serviço.

(O nome do módulo na frase muda conforme a origem.)

Por que isso importa: "Na fila" faz esperar um aviso que está prestes a sair. Quando o módulo está
desligado, **ele não vai sair** enquanto não for religado — e achar o contrário leva a procurar o
defeito no webhook, na URL ou no sistema de destino, onde ele não está.

- **Nada se perde.** A entrega adiada sai quando o módulo for religado.
- **Quem religa é quem administra o serviço**, não a organização: ligar e desligar módulos é decisão
  contratual. Peça a quem administra o serviço (veja [Organizações](/admin-servico/organizacoes/#ligar-e-desligar-módulos-de-uma-organização)).
- **Se o módulo já foi religado**, a entrega deixa de aparecer como adiada e volta a seguir o curso
  normal ("Na fila", e depois "Entregue" ou uma das falhas).

### Ligar, desligar e excluir

- O interruptor na linha do webhook liga ou desliga o recebimento de avisos, sem apagar o
  cadastro.
- **"Excluir"** apaga de vez: "Ele para de receber eventos imediatamente. Esta ação não pode ser
  desfeita."
- Para desligar vários de uma vez, marque-os e clique em **"Desativar selecionados"**.

## Só espaços ativos

Ao criar uma chave de API ou um webhook, a lista de espaços oferece **só os espaços ativos**. Por que
isso importa: um espaço arquivado já terminou, e uma integração limitada a ele ficaria vigiando algo
que não recebe mais nada — e você acharia que ela está funcionando.

Se mesmo assim a criação chegar ao servidor com um espaço arquivado (a lista na tela estava aberta
havia tempo e o espaço foi arquivado nesse intervalo, por exemplo), o servidor recusa e **diz qual
espaço é o problema**, pelo nome — veja as mensagens em "Quando dá errado".

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
- **"Carregando eventos…"** na janela **"Novo webhook"** que não sai — a lista de eventos vem do
  servidor e ainda não chegou; se falhar, a janela mostra **"Falha ao carregar os eventos
  disponíveis."** — recarregue a página.
- **"Não foi possível resolver o endereço informado."** — a URL de destino não existe (erro de
  digitação no domínio, por exemplo). Corrija e crie de novo.
- **"O espaço "Formação de educadores" está arquivado. Escolha só espaços ativos."** — o espaço
  marcado no filtro foi arquivado. No plural: **"Os espaços "A", "B" estão arquivados. Escolha só
  espaços ativos."** Desmarque os citados e crie de novo.
- **"Um dos espaços escolhidos não existe nesta organização. Escolha só espaços ativos."** — um
  espaço marcado já não existe aqui. No plural: **"N dos espaços escolhidos não existem nesta
  organização. Escolha só espaços ativos."** Recarregue a página para ver a lista atual.
  Quando há as duas situações ao mesmo tempo, as duas frases vêm juntas, na mesma mensagem.
- **"Falha ao carregar as chaves de API."** ou **"Falha ao carregar os webhooks."** — recarregue a
  página.

Para o detalhe técnico de como assinar e verificar as entregas de webhook, veja o link
**"Ver documentação para quem integra"**, no topo desta tela.
