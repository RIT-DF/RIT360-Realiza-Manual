---
title: "Tarefas que se repetem e modelos de ciclo"
nav_order: 17
parent: "O trabalho do dia a dia"
permalink: /trabalho/recorrencias/
---

# Tarefas que se repetem e modelos de ciclo

Trabalho de organização social tem muita coisa que volta: a prestação de contas mensal, o boletim
quinzenal, o relatório de fim de campanha. A aba **"Recorrências"** existe para você não recriar a
mesma tarefa toda vez — e para não esquecer nenhuma vez.

Há duas ferramentas diferentes aqui, para dois problemas diferentes:

- **Série de tarefa recorrente** — uma tarefa que se repete sozinha, num intervalo fixo (a cada
  semana, a cada mês), até uma data.
- **Modelo de ciclo** — um conjunto de tarefas diferentes que sempre acontecem juntas quando um
  ciclo começa (por exemplo: "abrir inscrições", "fechar inscrições", "divulgar resultado"), cada
  uma com seu prazo contado a partir do início do ciclo. Você instancia o modelo cada vez que um
  ciclo novo começa.

## Criar uma tarefa recorrente

1. Abra a aba **"Recorrências"** do espaço.
2. No cartão **"Nova tarefa recorrente"**, preencha **"Título"** e, se quiser, **"Descrição
   (opcional)"**.
3. Em **"Primeiro prazo"**, escolha a data da primeira ocorrência.
4. Em **"Frequência"**, escolha **"Semanal"** ou **"Mensal"**, e em **"A cada quantas"** o
   intervalo (por exemplo, 2 para "a cada duas semanas").
5. Em **"Repetir até"**, escolha até quando a série existe.
6. Se quiser, escolha **"Etapa (opcional)"** e **"Responsável (opcional)"** — do jeito que a série
   nascer, é assim que cada ocorrência nova nasce.
7. Clique em **"Criar série"**.

Cada ocorrência nasce como uma tarefa comum, com andamento próprio: concluir uma não encerra a
série, e as outras seguem chegando nas datas combinadas.

![Cartão "Nova tarefa recorrente" preenchido, e o cartão "Séries de tarefa recorrente" com uma série listada](/assets/capturas/recorrencias-nova-serie-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Cartão "Nova tarefa recorrente" preenchido, e o cartão "Séries de tarefa recorrente" com uma série listada — no celular](/assets/capturas/recorrencias-nova-serie-celular.png){: style="max-width:375px" }

## O selo "Faz parte de uma repetição"

Abrindo o painel de detalhe de uma ocorrência (veja [Criar e organizar
tarefas](/trabalho/criar-tarefas/)), o selo **"Faz parte de uma repetição"** aparece no
cabeçalho. Ele avisa que editar ali é editar **só aquela ocorrência** — para mudar o nome ou a data
de todas as próximas, ou para excluir a série, é aqui na aba "Recorrências", nunca no painel da
tarefa avulsa.

## Alterar esta e as futuras ocorrências

1. Na lista de séries, clique em **"Ver ocorrências"**.
2. Na ocorrência a partir de onde a mudança vale, preencha o novo título e a nova data de
   "Repetir até".
3. Clique em **"Alterar esta e as futuras"**.

A confirmação avisa exatamente o que muda: "A partir de [data], esta série passa a se chamar
'[novo título]', repetindo até [nova data]. O que já aconteceu antes desta ocorrência (inclusive o
que já foi concluído) NÃO muda."

## Excluir ocorrências de uma série

Na ocorrência, você escolhe o alcance:

- **"Excluir só esta"** — remove só aquela ocorrência. Se ela já estiver concluída, a exclusão é
  recusada: o que já foi feito nunca é apagado.
- **"Excluir esta e as futuras"** — remove aquela e todas as seguintes que ainda não foram
  concluídas. Ocorrências já concluídas nunca são apagadas, mesmo dentro deste alcance.

Quando alguma ocorrência selecionada já estava concluída, o resultado avisa quantas foram
removidas e quantas foram preservadas por já estarem concluídas.

{: .warning }
Não existe "excluir a série inteira, incluindo o que já foi concluído". É proposital: apagar
trabalho já feito não é o que "cancelar uma recorrência" deveria fazer.

## Criar um modelo de ciclo

1. No cartão **"Novo modelo de ciclo"**, preencha **"Nome do modelo"**.
2. Para cada item do ciclo, preencha **"Título do item"** e **"Dias após o início"** — quanto
   tempo depois do início do ciclo aquele item vence.
3. Marque **"Gera entrega"** se aquele item, além de virar tarefa, também precisar de um material
   anexado com aprovação (veja [Enviar para aprovação](/trabalho/enviar-para-aprovacao/)) — e
   preencha o **"Nome da entrega"**.
4. Clique em **"Adicionar item"** para incluir mais itens, ou em **"Criar modelo"** quando
   terminar.

![Cartão "Novo modelo de ciclo" com dois itens preenchidos, um deles com "Gera entrega" marcado](/assets/capturas/recorrencias-novo-modelo-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Cartão "Novo modelo de ciclo" com dois itens preenchidos, um deles com "Gera entrega" marcado — no celular](/assets/capturas/recorrencias-novo-modelo-celular.png){: style="max-width:375px" }

## Instanciar um ciclo

Cada vez que um ciclo novo começa de verdade:

1. Em **"Modelos de ciclo deste espaço"**, encontre o modelo.
2. Preencha **"Início do ciclo"** com a data em que este ciclo começa.
3. Clique em **"Instanciar ciclo"**.

Uma tarefa é criada para cada item do modelo, com o prazo de cada uma contado a partir da data que
você informou. O aviso confirma quantas tarefas nasceram.

## Excluir um modelo de ciclo

Clique em **"Excluir modelo"**. A confirmação avisa: "O modelo '[nome]' será excluído. Tarefas já
instanciadas dele NÃO são afetadas." — excluir o modelo não mexe em nenhuma tarefa que já nasceu
dele antes.

## Exemplo

O **Instituto Semente** fecha um relatório de doações todo mês. Carlos Nunes cria a série
recorrente "Fechar relatório de doações do mês", com primeiro prazo no dia 5 do mês seguinte,
frequência mensal, repetindo até dezembro de 2026, com Joana Martins como responsável padrão. Para
a campanha em si, Maria Oliveira monta o modelo de ciclo "Abertura de campanha", com os itens
"Publicar material de divulgação" (2 dias após o início), "Abrir formulário de inscrição" (3 dias)
e "Enviar prestação de contas" (30 dias, gera entrega) — e instancia esse modelo toda vez que uma
campanha nova começa.

## Quando dá errado

- Ao carregar séries e modelos: "Não foi possível carregar as recorrências."
- Ao criar uma série: "Não foi possível criar a série."
- Ao carregar as ocorrências de uma série: "Não foi possível carregar as ocorrências."
- Ao alterar esta e as futuras: "Não foi possível alterar a série."
- Ao excluir uma ocorrência: "Não foi possível excluir."
- Ao criar um modelo: "Não foi possível criar o modelo."
- Ao excluir um modelo: "Não foi possível excluir o modelo."
- Ao instanciar um ciclo: "Não foi possível instanciar o ciclo."

{: .note }
Se você foi convidado de fora para o espaço, a aba mostra outra coisa: "Você não pode ver nem criar
recorrências neste espaço — isso exige executar ou gerenciar o espaço."
