---
title: "Pedidos de organização"
nav_order: 13
parent: "Administração do serviço"
permalink: /admin-servico/pedidos-de-organizacao/
---

# Pedidos de organização

Esta tela reúne os pedidos de criação de organização que **precisam da sua decisão** — os que o
produto não conseguiu resolver sozinho.

## Por que alguns pedidos chegam aqui e outros não

Quando alguém pede a criação de uma organização pela tela de entrada, o produto tenta decidir
sozinho, pelo domínio do e-mail confirmado:

- Domínio reconhecido e que ainda não pertence a nenhuma organização: a organização nasce na
  hora, sem passar por ninguém.
- Domínio que já pertence a uma organização existente: o pedido vira um pedido de entrada para
  quem administra **aquela** organização decidir — não chega até você.
- **Domínio público ou desconhecido, ou domínio do site informado diferente do domínio do
  e-mail confirmado:** o produto não tem como decidir sozinho, e é só este caso que aparece
  nesta tela.

{: .note }
Um domínio público (por exemplo, gmail.com) não identifica organização nenhuma — qualquer pessoa
com uma conta ali poderia estar pedindo em nome de qualquer instituição. É por isso que esses
pedidos exigem julgamento humano em vez de decisão automática.

## O que a tela mostra

Cada pedido pendente aparece numa linha, com o **nome da organização** pedida, o **e-mail** de
quem pediu, o **domínio** desse e-mail e, quando informado e diferente, o **domínio do site**.

## Passo a passo — decidir um pedido

1. Abra **"Administração geral"** e clique em **"Pedidos de organização"**.
2. Avalie o pedido: o nome da organização é plausível, o e-mail e o domínio do site (quando
   informado) fazem sentido para a mesma instituição.
3. Clique em **"Aprovar"** ou em **"Recusar"**, na linha do pedido.
4. Se aprovar, confirme em **"Confirmar"** na caixa **"Aprovar pedidos"**, que avisa: **"Criar 1
   organização(ões) e convidar quem pediu como administrador?"**
5. Se recusar, preencha **"Motivo (a pessoa recebe este texto por e-mail)"** — o campo é
   obrigatório — e confirme em **"Confirmar"** na caixa **"Recusar pedidos"**, que avisa: **"Recusar
   1 pedido(s)? Cada pessoa recebe um e-mail com o motivo. Nenhuma organização é criada."**

Ao final, a tela mostra o resultado, por exemplo **"1 aprovado(s), 0 recusado(s), 0 falha(s)."**

## Decidir vários pedidos de uma vez

1. Marque **"Selecionar todos"**, ou marque cada pedido que quer decidir junto.
2. Clique em **"Aprovar selecionados"** ou em **"Recusar selecionados"**, no topo da lista.
3. Confirme como no passo a passo individual.

{: .tip }
Aprovar em lote só faz sentido quando os pedidos selecionados são igualmente claros. Um lote com
um pedido duvidoso no meio é motivo para separar aquele e decidir os outros primeiro — a
confirmação em lote não mostra o nome de cada organização, só a quantidade.

## O que acontece com quem pediu, em cada desfecho

- **Aprovado:** a organização é criada agora, e quem pediu recebe um novo e-mail para concluir o
  próprio acesso como administrador dela.
- **Recusado:** ninguém é criado. Quem pediu recebe um e-mail com o motivo que você escreveu no
  campo de recusa — é esse texto, e não uma mensagem genérica, que a pessoa lê.
- Enquanto o pedido não é decidido, quem pediu já viu a mensagem de que o pedido "foi encaminhado
  para quem administra o serviço decidir" e que "recebe um e-mail assim que houver decisão" — ela
  está esperando, sem prazo visível para você.

## Dicas e armadilhas

- **Recusar sem preencher o motivo não é possível** — o campo é obrigatório porque é o texto que
  a pessoa recebe. "Não se aplica" ainda assim é melhor que deixar a pessoa sem explicação
  nenhuma.
- **Aprovar cria a organização imediatamente**, sem outra confirmação depois desta. Revise o nome
  antes de confirmar: ele não é editável nesta tela.

## Quando dá errado

- Se a lista de pedidos não carregar, a tela mostra a mensagem de erro.
- Sem pedido nenhum pendente, a tela mostra **"Nenhum pedido pendente."**
- Se a decisão falhar, a mensagem de erro aparece na tela, e o resultado pode mostrar falha(s)
  dentro de um lote — nem todo item de um lote falha junto.
