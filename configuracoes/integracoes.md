---
title: "Integrações"
nav_order: 7
parent: "Configurações"
permalink: /configuracoes/integracoes/
---

# Integrações

Chaves de API e webhooks conectam sistemas de fora — uma planilha, um robô de automação como o
n8n, outro produto — a esta organização. Esta página é para quem administra decidir e acompanhar
essas conexões; configurar o sistema externo em si é trabalho de quem cuida dele, com a
documentação técnica linkada no fim desta página.

## Por que isto importa

Sem chave de API nem webhook, tirar um dado do Realiza ou avisar outro sistema quando algo
acontece por aqui exigiria alguém copiando informação manualmente. Com eles, um sistema externo lê
ou grava dentro dos limites que você definiu, e é avisado sozinho quando um evento acontece.

{: .important }
**Token**, aqui, é a **credencial** que um sistema externo usa para se identificar ao falar com o
Realiza — como uma senha, só que feita para máquina, não para pessoa. É esse valor que aparece
como "chave" e como "segredo" nesta página.

## Acessar

Em [Dados e identidade da organização](/configuracoes/organizacao/), clique no link
**"Integrações"**, no topo da tela.

{: .note }
Só quem tem permissão para gerenciar chaves de API, para gerenciar webhooks, ou as duas, alcança
esta tela — cada seção só aparece para quem tem a permissão correspondente.

## Chaves de API

Uma chave de API deixa um sistema externo ler (e, se você permitir, alterar) dados desta
organização, sem usar a senha de ninguém.

### Criar uma chave

1. Clique em **"Nova chave"**.
2. Preencha **"Nome"** — algo que te ajude a lembrar para que serve, como "n8n produção".
3. Em **"O que ela pode"**, escolha **"Só ler"** ou **"Ler e alterar"**.
4. Em **"Em quais espaços"**, deixe marcado **"Todos os espaços da organização"**, ou desmarque e
   escolha só os espaços que essa chave deve alcançar.
5. Clique em **"Criar chave"**.

A tela mostra a chave em claro **uma única vez**, com o aviso: "Copie agora — por segurança, esta
chave não aparece de novo. Se perdê-la, revogue e crie outra." Clique em **"Copiar"** antes de
fechar.

{: .warning }
Perder a chave sem ter copiado significa começar de novo: não existe um jeito de "ver" a chave
depois de fechar essa tela — só revogar a antiga e criar outra.

### O que uma chave nunca pode

"Uma chave nunca pode mais do que a pessoa que a criou. Aprovar entregas, excluir e mudar o acesso
de alguém (papel, membro) não são permitidos por chave nesta versão — essas ações continuam
exigindo login de pessoa."

### Revogar

Na linha da chave, clique em **"Revogar"** e confirme. Revogar é imediato e definitivo: "Ela para
de funcionar imediatamente. Qualquer integração que a use passa a receber 401" — o código que
identifica "chave inválida" para quem programou o sistema externo.

Para revogar várias de uma vez, marque-as e clique em **"Revogar selecionadas"**.

## Webhooks

Um webhook avisa um sistema externo, automaticamente, quando algo acontece no Realiza — uma tarefa
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
aviso recebido realmente veio do Realiza (a documentação técnica explica como).

### Acompanhar as entregas

Na linha do webhook, clique em **"Entregas"** para ver o estado de cada tentativa de aviso:

- **"Na fila"** — ainda não foi tentado.
- **"Entregue"** — o sistema de destino confirmou o recebimento.
- **"Falhou — vai tentar de novo"** — a primeira tentativa não deu certo; o Realiza tenta de novo
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

O Instituto Semente quer que um fluxo no n8n publique, num grupo do Telegram da equipe, sempre que
uma entrega for aprovada. Maria Oliveira cria um webhook com o evento "Entrega aprovada ou
recusada", aponta a URL para o fluxo do n8n e copia o segredo antes de fechar a tela. A partir daí,
toda decisão sobre uma entrega dispara o aviso sozinho, sem ninguém copiar nada manualmente.

## Quando dá errado

- **"Você não administra [organização] — só quem administra gerencia integrações."** — sua conta
  não tem a permissão de chaves nem de webhooks.
- **"Falha ao criar a chave."** ou **"Falha ao criar o webhook."** — confira os dados (a URL do
  webhook, por exemplo, precisa começar com `https://` e não pode ser um endereço interno) e tente
  de novo. O motivo específico da recusa aparece na própria mensagem.
- **"Falha ao carregar as chaves de API."** ou **"Falha ao carregar os webhooks."** — recarregue a
  página.

Para o detalhe técnico de como assinar e verificar as entregas de webhook, veja o link
**"Ver documentação para quem integra"**, no topo desta tela.
