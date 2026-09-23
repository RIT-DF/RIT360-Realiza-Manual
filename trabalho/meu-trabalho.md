---
title: "Meu trabalho"
nav_order: 14
parent: "O trabalho do dia a dia"
permalink: /trabalho/meu-trabalho/
---

# Meu trabalho

Esta é a tela para abrir no começo do dia. Ela junta, num lugar só, tudo que precisa da sua
atenção e tudo que está por vir — em **todas** as organizações de que você participa, sem
precisar trocar a organização ativa para enxergar cada uma. Só quando você clica num item de
outra organização é que o Realiza troca para ela.

## Onde fica

No menu, é a tela que abre com o título **"Meu trabalho"**.

![Tela "Meu trabalho" com as três contagens no topo, os filtros de organização e espaço, e as sete faixas](/assets/capturas/painel-visao-geral-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Tela "Meu trabalho" com as três contagens no topo, os filtros de organização e espaço, e as sete faixas — no celular](/assets/capturas/painel-visao-geral-celular.png){: style="max-width:375px" }
{: .mt-4 }

## As sete faixas, nesta ordem

### 1. Depende de você

Toda tarefa, aprovação, ajuste ou proposta de prazo que espera uma ação sua — **sem limite de
itens**, ordenada por prazo: as vencidas primeiro, depois as demais por data, e as sem prazo por
último.

Cada item mostra o rótulo do que está pendente:

- **"Atribuída a você"** — a descrição diz `"<título da tarefa>" está com você, prazo em
  DD/MM/AAAA` ou, quando não há prazo, `"<título da tarefa>" está com você, sem prazo definido`.
- **"Prazo vencido"** — o prazo acordado já passou.
- **"Aguardando aprovação"** — um material está esperando sua decisão.
- **"Ajuste pedido"** — um material que você enviou voltou com pedido de ajuste.
- **"Reprogramação de prazo pendente"** — alguém propôs um novo prazo e espera sua decisão.
- **"Bloqueada por outra tarefa"** — a tarefa depende de outra que ainda não terminou. Veja
  [Subtarefas e dependências](/trabalho/subtarefas-e-dependencias/).

Cada item também leva um selo de **"Atrasada"** ou **"Aguardando você"**, conforme o caso.

{: .note }
Uma tarefa atrasada que **também** está bloqueada por outra aparece uma única vez na lista, não
duas — o motivo de bloqueio continua na descrição do item, só não vira um item à parte.

Se não houver nada esperando por você, a faixa mostra: **"Nada esperando você por aqui."**

### 2. Parado

O que você está esperando de outra pessoa — aprovação, ajuste ou decisão de prazo que não depende
de você. Mostra até 5 itens, com **"Ver todas"** para o restante.

Se estiver vazia: **"Nada parado esperando outra pessoa."**

### 3. Menções

As vezes em que alguém te citou com "@" numa conversa de tarefa, mais recentes primeiro. Cada
item mostra o texto da mensagem, a organização, o espaço, a tarefa e há quanto tempo. Até 5, com
**"Ver todas"** para o restante.

Se estiver vazia: **"Ninguém te mencionou ainda."**

{: .note }
Menção não entra nas três contagens do topo nem nas faixas **"Depende de você"** ou
**"Parado"** — ela é aviso de que alguém te citou, não um trabalho pendente. Veja
[Conversar dentro da tarefa](/trabalho/conversas/) para como mencionar e ser mencionado.

### 4. Próximas entregas

As entregas com prazo agendado mais próximo, em todos os seus espaços. Até 5, com **"Ver
todas"**.

Se estiver vazia: **"Nenhuma entrega com prazo por vir."**

### 5. Agenda

Os próximos compromissos marcados nos espaços de que você participa. Até 5, com **"Ver todas"**.

Se estiver vazia: **"Nenhum compromisso por vir."**

### 6. Últimas conversas

As mensagens mais recentes nas tarefas dos espaços de que você participa. Até 5, com **"Ver
todas"**.

Se estiver vazia: **"Nenhuma conversa recente."**

### 7. Movimento nos meus espaços

Os espaços com atividade recente, com a data da última movimentação. Até 5, com **"Ver todas"**.

Se estiver vazia: **"Nenhum espaço com atividade recente."**

## As três contagens do topo

- **"Atrasadas"** — o prazo já venceu.
- **"Aguardando você"** — outra pessoa está esperando uma ação sua.
- **"Esperando outra pessoa"** — você está esperando uma ação de alguém.

Essas contagens são o mesmo cálculo que sustenta as faixas **"Depende de você"** e
**"Parado"** — nunca um número solto.

## Atravessa todas as organizações

Se você participa de mais de uma organização, todas as faixas juntam os itens delas,
identificados por organização e espaço. Use os seletores **"Organização"** e **"Espaço"**, acima
das faixas, para filtrar — o filtro vale para as seis faixas ao mesmo tempo, não só para a
primeira.

{: .important }
Clicar num item de outra organização **troca a organização ativa** para aquela, e só então abre a
tarefa. Se você notar que sua organização ativa mudou sem ter feito isso de propósito, foi um
clique nesta tela.

## Exemplo

Maria Oliveira abre "Meu trabalho" pela manhã. Em **"Depende de você"**, o primeiro item é
**"'Arte do cartaz para redes' está com você, prazo em 24/09/2026"**, com o selo **"Aguardando
você"** — está no topo porque o prazo é o mais próximo. Ela também vê **"'Prestação de contas de
agosto' está aguardando aprovação"**, com o selo **"Aguardando você"**. Em **"Parado"**, aparece
**"'Convite para Carlos Nunes' está travada esperando 'Levantamento de doações'"**, com o selo
**"Esperando outra pessoa"** — ela não precisa fazer nada ali, só sabe que está represado do lado
de Carlos.

## Dicas e armadilhas

{: .tip }
**"Depende de você" não tem teto.** Diferente das outras cinco, ela mostra tudo — é de propósito:
é a lista do que exige decisão, e cortar em 5 esconderia trabalho pendente.

{: .warning }
**"Ver todas" busca de novo.** Ao clicar, a tela pede ao servidor a lista completa daquela faixa —
não é instantâneo em conexão lenta. Se a busca falhar, a faixa continua mostrando os 5 itens que
já tinha carregado, em vez de ficar vazia.

{: .warning }
**Trocar o filtro de organização não muda a organização ativa.** Filtrar por outra organização
aqui só recorta o que a tela mostra; a organização em que você está trabalhando continua sendo a
mesma até você clicar num item dela.

## Quando dá errado

Se a tela não conseguir atualizar, aparece: **"Não foi possível atualizar agora. Mostrando os
últimos dados carregados."** — e ela continua exibindo a última lista que conseguiu carregar, em
vez de ficar vazia.

## O que quem é convidado de fora vê

Beatriz Lima, convidada de fora do Instituto Semente, só participa do espaço **"Campanha do
Agasalho 2026"** — então todas as sete faixas do painel dela mostram só o que é desse espaço,
nunca de outro espaço ou de outra organização. Em **"Últimas conversas"**, ela só vê a conversa
compartilhada das tarefas em que participa: a conversa interna da equipe não aparece para ela em
lugar nenhum do painel. Vale o mesmo para **"Menções"**: só aparecem ali as vezes em que alguém a
citou na conversa compartilhada — ninguém consegue mencioná-la na conversa interna, porque ela não
alcança essa aba.

![Painel de Beatriz Lima, convidada de fora, restrito ao espaço "Campanha do Agasalho 2026"](/assets/capturas/painel-convidado-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Painel de Beatriz Lima, convidada de fora, restrito ao espaço "Campanha do Agasalho 2026" — no celular](/assets/capturas/painel-convidado-celular.png){: style="max-width:375px" }
{: .mt-4 }
