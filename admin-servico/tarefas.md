---
title: "Tarefas agendadas"
nav_order: 12
parent: "Administração do serviço"
permalink: /admin-servico/tarefas/
palavras_chave: "rotina automática, fila de eventos, reprocessar, espelho, reconciliar, cron, módulo"
---

# Tarefas agendadas

Esta tela mostra o estado de **toda rotina automática** da instalação: a
cópia de segurança do banco, o envio dela a cada destino externo cadastrado
em [Destinos da cópia de segurança](/admin-servico/destinos-backup/), e as
filas de eventos de cada módulo do produto. **Módulo** é cada uma das partes em que o
Realiza é dividido por dentro — entre elas o Trabalho (espaços e tarefas), a Comunicação (avisos e
e-mails), o Núcleo (organizações e pessoas) e os Relatórios (o rascunho mensal); a tela usa esses
nomes.

## Por que isto importa

Rotina automática que falha em silêncio é o pior tipo de falha: ninguém
percebe até o dia em que precisa dela e ela não está lá. Esta tela existe
para que **"Nunca rodou"**, **"Falhou"**, **"Reprocessando"** e **"Deu
certo"** sejam sempre selos visivelmente diferentes — nunca um estado vazio
disfarçado de sucesso, e nunca "está na fila" disfarçado de "já foi feito".

A lista reúne as rotinas de **todos os módulos** do produto — hoje inclui,
por exemplo, **"Fila de avisos do Trabalho"**, **"Sincronização do espelho
no Núcleo"**, **"Lembrete de evento da agenda"**, **"Envio de e-mail de
aviso"**, **"Envio de notificação push"** e **"Geração periódica de
relatório"** — sem que você precise saber de qual módulo cada uma vem para
acompanhar se está tudo funcionando.

## O que cada cartão mostra

Cada rotina aparece num cartão, com:

- O **nome** e a **descrição** da rotina.
- A **frequência** com que ela roda.
- Um selo de estado: **"Nunca rodou"**, **"Falhou"**, **"Reprocessando"**,
  **"Deu certo"** ou **"Não foi possível consultar"**.
- Quando já rodou ao menos uma vez: a data e hora da última execução, e
  quanto tempo ela durou.
- Quando a rotina alimenta uma fila (eventos de um módulo, por exemplo): o
  número de itens **pendentes** agora, se houver algum.
- Se o estado for **"Falhou"**, a mensagem de erro que a própria rotina
  reportou.

![Tela Tarefas agendadas, com a rotina do espelho em "Falhou" mostrando o botão "Conferir com a origem agora"](/assets/capturas/admin-servico-tarefas-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Tela Tarefas agendadas, com a rotina do espelho em "Falhou" mostrando o botão "Conferir com a origem agora" — no celular](/assets/capturas/admin-servico-tarefas-celular.png){: style="max-width:375px" }
{: .mt-4 }

{: .important }
**"Nunca rodou" e "Não foi possível consultar" não são a mesma coisa.**
"Nunca rodou" é uma resposta válida, só que vazia — a rotina existe e ainda
não teve sua primeira execução. "Não foi possível consultar" é a tela não
tendo conseguido nem perguntar o estado — trate isso como um problema a
investigar, não como ausência de rotina.

Quando isso acontece, o cartão mostra a causa real, em uma destas duas
mensagens:

- **"[Módulo] respondeu, mas ainda não conhece esta rota — provável versão
  antiga publicada. Não foi possível consultar as rotinas dele agora."** —
  o módulo está no ar, mas com uma versão desatualizada. Avise quem cuida
  da instalação para publicar a versão certa.
- **"Não foi possível alcançar [Módulo] agora — verifique se o módulo está
  no ar (erro de rede ou tempo esgotado)."** — o módulo não respondeu.
  Avise quem cuida da instalação para conferir se ele está no ar.

## A única rotina que se dispara à mão

Entre todas as rotinas, uma tem um botão próprio: a que mantém o **espelho**
de espaços e clientes do módulo Núcleo em dia com a origem (módulo
Trabalho). O cartão dela mostra **"Conferir com a origem agora"**.

### Passo a passo — reconciliar o espelho

1. No cartão da rotina do espelho, clique em **"Conferir com a origem
   agora"**.
2. Na caixa de diálogo **"Conferir o espelho com a origem agora?"**, leia o
   que vai acontecer: **"O Núcleo vai perguntar ao Trabalho o estado atual
   de todos os espaços e clientes e corrigir as contagens que estiverem
   diferentes. Nenhuma mensagem é enviada e nenhum conteúdo de organização é
   alterado."**
3. Clique em **"Conferir agora"** para confirmar, ou em **"Cancelar"** para
   desistir.
4. Aguarde a conclusão. A tela mostra quantos espaços e quantos clientes
   foram conferidos.

{: .note }
Reconciliar **lê** a origem e corrige o espelho — não manda aviso a
ninguém e não toca no conteúdo de organização nenhuma. É seguro rodar a
qualquer momento, mesmo sem suspeitar de nada errado.

## Reprocessar uma rotina que falhou

Diferente de reconciliar, **reprocessar aparece em qualquer rotina de fila
que "Falhou"** — não só na do espelho. O cartão de uma rotina falhada
mostra o botão **"Reprocessar (\<quantidade e o que é\>)"**, por exemplo
**"Reprocessar (3 e-mails de aviso que não saíram)"**: o próprio botão já
diz o que vai voltar para a fila, porque reprocessar pode significar
reenviar algo para fora do sistema.

### Passo a passo — reprocessar

1. No cartão da rotina com o selo **"Falhou"**, clique em **"Reprocessar
   (\<rótulo\>)"**.
2. Na caixa de diálogo **"Tentar de novo \<rótulo\>?"**, leia o aviso:
   **"Os itens voltam para a fila agora, mas isto NÃO é o mesmo que dar
   certo — a rotina só volta a ficar verde quando eles forem processados de
   verdade. Se a causa da falha continuar, eles falham de novo."**
3. Clique em **"Tentar de novo"** para confirmar, ou em **"Cancelar"** para
   desistir.
4. Enquanto o pedido está em curso, o botão mostra **"Reprocessando…"**.
   Depois, a tela mostra quantos itens voltaram: por exemplo, **"3 itens de
   volta à fila — aguardando novo processamento."**

{: .warning }
**"De volta à fila" não é "deu certo".** Assim que você confirma, o selo do
cartão muda para **"Reprocessando"** — não para "Deu certo". Só a próxima
consulta, depois que os itens forem processados de verdade, mostra se a
rotina voltou a funcionar ou se falhou de novo pela mesma causa.

## Dicas e armadilhas

- **Pendente não é falha.** Um número em "pendente(s) na fila agora" é
  esperado em uso normal — ele mostra o trabalho que ainda será processado,
  não um problema. Só vire atenção se o número crescer sem parar de crescer.
- **Uma rotina "Falhou" não se corrige sozinha só por você olhar de novo.**
  A mensagem de erro no cartão é o ponto de partida para investigar — não
  espere que o próximo ciclo automático resolva sem que a causa tenha sido
  tratada.
- **O botão de reconciliar existe só para a rotina do espelho.** As demais
  rotinas rodam sozinhas, na frequência informada; para elas, **"Reprocessar"**
  é a única ação que você pode disparar, e só quando há item esgotado numa
  falha.
- **Reprocessar só aparece quando há mesmo o que reprocessar.** Uma rotina
  "Nunca rodou", "Deu certo" ou "Não foi possível consultar" não mostra o
  botão — só "Falhou" com itens definitivamente esgotados mostra.

## Quando dá errado

- Se a lista de rotinas não carregar, a tela mostra a mensagem de erro no
  lugar dela.
- Se **"Conferir com a origem agora"** falhar, a tela mostra a mensagem de
  erro devolvida, e o espelho continua como estava — nada fica pela metade.
- Se **"Reprocessar"** falhar, a tela mostra **"Não foi possível reprocessar
  agora."** (ou a mensagem devolvida pelo servidor), e nenhum item volta
  para a fila.
- Se o cartão do espelho mostrar **"N organização(ões) sem correspondência
  aqui (dado residual do Trabalho para uma organização que não existe mais,
  ou nunca existiu, neste Núcleo) — 'Conferir com a origem agora' não
  resolve isto: é preciso investigar de onde vieram e removê-las."**, não
  adianta clicar em **"Conferir com a origem agora"**: sobraram registros de
  espaços de uma organização que já não existe. Avise quem cuida da
  instalação — é preciso investigar a origem e apagar esses restos com
  cuidado, e isso não se faz por esta tela.
