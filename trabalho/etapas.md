---
title: "Ajustar as etapas do espaço"
nav_order: 3
parent: "O trabalho do dia a dia"
permalink: /trabalho/etapas/
palavras_chave: "colunas do quadro, kanban, renomear etapa, aciona aprovação, fluxo de trabalho, correspondência de etapa"
---

# Ajustar as etapas do espaço

As etapas são as colunas do quadro de tarefas — "A fazer", "Fazendo" e assim por diante. Todo
espaço nasce com um conjunto pronto, mas nada impede de mudar esse conjunto para refletir como sua
equipe realmente trabalha.

## Onde ficam

Abra o espaço, vá na aba **"Configurar"** e role até a seção **"Etapas"**.

![Tela de configuração do espaço, com as etapas e os participantes](/assets/capturas/configurar-espaco-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Tela de configuração do espaço, com as etapas e os participantes — no celular](/assets/capturas/configurar-espaco-celular.png){: style="max-width:375px" }

## Criar, renomear, remover e reordenar

- **Criar** — no formulário abaixo da lista, digite o nome em **"Nova etapa"**, escolha a
  correspondência e clique em **"Acrescentar etapa"**.
- **Renomear** — clique no campo de nome da etapa, edite e clique em **"Salvar"**, ao lado. O
  botão fica apagado enquanto você não muda nada, e acende quando há algo a salvar; sair do campo
  sem clicar **não grava**.
- **Remover uma etapa** — clique em **"Remover"** na linha dela.
- **Remover em lote** — marque as caixas das etapas e clique em **"Remover selecionadas"**.
- **Reordenar** — use as setas ↑ e ↓ na linha de cada etapa para mover para cima ou para baixo.

{: .warning }
Remover etapas em lote pode recusar alguns casos "por regra (última etapa daquela
correspondência)": o sistema exige que sempre exista pelo menos uma etapa para cada um dos três
estados abaixo. O resultado mostra separadamente quantas foram removidas, quantas foram recusadas
por essa regra e quantas não foram encontradas.

## A correspondência de cada etapa

Cada etapa aponta para um dos três estados que o produto entende de verdade:

- **Não iniciado**
- **Em andamento**
- **Concluído**

Isso é o que permite comparar o andamento de espaços diferentes, mesmo que cada um tenha nomeado
suas etapas de um jeito distinto. Uma etapa chamada "Aguardando revisão" pode corresponder a "Em
andamento", enquanto "Publicado" corresponde a "Concluído" — o nome que aparece no quadro é livre,
a correspondência é o que conta para o sistema.

## "Aciona aprovação"

Esta é a configuração mais delicada da tela. Quando uma etapa tem **"Aciona aprovação"**
marcado, mover um cartão para ela **registra a aprovação do material pendente daquele cartão em
nome de quem moveu** — não é só uma mudança de coluna.

{: .important }
Isso vale tanto arrastando o cartão no quadro quanto usando "Mover para…" na lista. Antes de
registrar a aprovação, o sistema sempre mostra uma confirmação nomeando a versão e a entrega que
serão aprovadas — nunca aprova em silêncio. Veja [Ver o trabalho em quadro, lista ou
calendário](/trabalho/visoes/) para o comportamento dessa confirmação ao arrastar.

## Exemplo

No espaço **"Campanha do Agasalho 2026"**, Maria Oliveira marca **"Aciona aprovação"** na etapa
"Em aprovação". Quando Carlos Nunes termina a arte do cartaz e move o cartão para essa etapa, o
sistema mostra a confirmação **"Esta coluna aprova ao receber o cartão"**, avisando: "Ao mover
"Arte do cartaz" para "Em aprovação", você aprova a versão [número] da entrega "[nome]", em seu
nome." Só depois de Carlos confirmar em **"Mover e aprovar"** é que a aprovação é registrada.

{: .warning }
Se você marcar "Aciona aprovação" numa etapa que sua equipe usa como parada intermediária comum —
não como aprovação de verdade — qualquer pessoa que mova um cartão para lá estará aprovando
material em nome próprio sem perceber a gravidade disso. Reserve essa marcação só para a etapa que
realmente representa uma decisão de aprovação.

## Quando dá errado

- **"Você não administra "[nome do espaço]" — só quem gerencia o espaço configura etapas,
  participantes e convites."** — você chegou direto no endereço de "Configurar" sem ser gestor
  deste espaço. Peça a quem gerencia o espaço.
- Ao criar: "Não foi possível criar a etapa."
- Ao renomear: "Não foi possível renomear a etapa."
- Ao trocar a correspondência: "Não foi possível trocar a correspondência."
- Ao marcar/desmarcar "Aciona aprovação": "Não foi possível alterar."
- Ao reordenar: "Não foi possível reordenar."
- Ao remover uma etapa: "Não foi possível remover a etapa."
- Ao remover em lote: "Não foi possível concluir a remoção em lote."
