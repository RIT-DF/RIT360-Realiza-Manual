---
title: "Visão geral"
nav_order: 1
parent: "Administração do serviço"
permalink: /admin-servico/painel/
palavras_chave: "pendências, o que precisa de decisão, pedidos esperando, feedback sem resposta, rotina falhou, cópia atrasada, contagens gerais, quantas organizações, quantos espaços"
---

# Visão geral

A aba **"Visão geral"** é a primeira coisa que você vê ao abrir a administração do serviço. Ela
responde duas perguntas, nesta ordem: **o que está esperando você**, e **qual o tamanho do
serviço**.

## Pendências

O primeiro cartão da tela, **"Pendências"**, lista o que precisa de decisão sua. Cada item é um
link que leva direto à tela onde se resolve, com a contagem ao lado:

- **"Pedidos de organização"** — pedidos de criação esperando você aprovar ou recusar.
- **"Feedbacks sem resposta"** — o que as pessoas mandaram de dentro do produto e ninguém
  respondeu.
- **"Rotina automática que falhou ou está represada"** — alguma rotina da instalação parou
  com falha, ou parou de consumir a fila e está acumulando. Veja
  [Tarefas agendadas](/admin-servico/tarefas/).
- **"Cópia de segurança atrasada"** — a última cópia do banco passou de 48 horas. A linha diz
  desde quando: **"Cópia de segurança atrasada — última em [data e hora]"**, ou **"Cópia de
  segurança atrasada — nunca rodou"** quando nenhuma cópia foi reportada ainda.

### Por que isto importa

Antes, esta tela abria com contagens — quantas organizações, quantas pessoas — que não pedem ação
nenhuma. Quem administra o serviço não precisa saber o tamanho dele todo dia; precisa saber se
alguém está esperando uma decisão. Por isso o que espera vem primeiro, e os números desceram.

**Item zerado some da lista.** A tela não mostra "0 pedidos" — se não há pedido esperando, aquela
linha simplesmente não existe, e o que sobra é o que precisa de você.

### Quando não há nada esperando

Estando tudo zerado, a seção continua na tela e mostra:

**"Nenhuma pendência agora — tudo em dia."**

{: .important }
**Essa frase só aparece quando os quatro itens foram apurados com sucesso.** Falhando a apuração
de um deles, ela não aparece — mesmo que todo o resto esteja zerado. É deliberado: uma tela que diz
"tudo em dia" porque a consulta falhou é pior do que uma tela que não diz nada.

### Quando um item não pôde ser apurado

O item aparece com o rótulo **"Não foi possível apurar"** no lugar da contagem, e continua sendo um
link — para você abrir a tela e olhar por conta própria. É o terceiro estado, e o mais fácil de
confundir com "está tudo bem": **não é**. Significa que ninguém sabe, nem você nem a tela.

## Números do serviço

Abaixo das pendências, o cartão **"Números do serviço"** dá o retrato de tamanho — quantas
organizações usam o produto, quantas pessoas, quantos espaços — sem abrir o conteúdo de nenhuma
delas.

![Aba "Visão geral" da administração do serviço, com o cartão "Pendências" em cima e "Números do serviço" abaixo](/assets/capturas/admin-servico-painel-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Aba "Visão geral" da administração do serviço, com as pendências em cima e as contagens abaixo — no celular](/assets/capturas/admin-servico-painel-celular.png){: style="max-width:375px" }
{: .mt-4 }

## O que cada número conta

- **"Organizações"** — quantas organizações existem no serviço, contando
  também as que ninguém usa mais.
- **"Pessoas com vínculo"** — quantas pessoas têm vínculo com pelo menos uma
  organização. Uma mesma pessoa que participa de duas organizações conta uma
  vez para cada vínculo, não uma vez só.
- **"Espaços"** — quantos espaços **ativos** existem ao todo, somando projetos e
  operações contínuas de todas as organizações. Espaço arquivado **não** entra
  nesta conta: arquivar um espaço faz o número cair.

{: .important }
**O número de espaços avisa quando pode estar errado.** Havendo diferença entre a contagem e a
origem, aparece logo abaixo dele: **"Este número pode estar desatualizado — a comparação com a
origem encontrou diferença. Veja em Tarefas agendadas."**, com o nome da tela como link. **Sem
diferença, a frase não existe** — a ausência dela é a afirmação de que o número está em dia.


## Quando as contagens não carregam

Se o painel não conseguir buscar as contagens, elas ficam paradas em **"Carregando…"**
e a mensagem **"Não foi possível carregar o painel."** aparece no cartão de
introdução, acima das contagens. Recarregue a página; se o problema continuar,
avise a equipe técnica.

## O que esses números não dizem

- Não dizem quantas organizações estão **ativas de verdade** — só quantas
  existem. Uma organização cadastrada há um ano e sem uso nenhum entra na
  mesma contagem que uma em uso todos os dias.
- Não dizem nada sobre o **conteúdo** de nenhuma organização: quantas tarefas
  estão atrasadas, quanto material foi aprovado, quem está sobrecarregado. Essa
  informação não existe nesta tela, e por decisão de produto — não é um recurso
  que falta, é um limite deliberado. Veja [a nota sobre alcance](/admin-servico/).

{: .tip }
Se você precisa saber como uma organização específica está usando o produto, a
resposta não está aqui. Peça a quem administra aquela organização — só ela
enxerga o próprio conteúdo.

## O que mais existe nesta aba

Nada além dos dois cartões: **"Pendências"** e **"Números do serviço"**.

Todo o resto — organizações, acesso, serviços, manutenção e feedbacks — fica nas
outras abas. O [índice desta seção](/admin-servico/) lista o que há em cada uma.

## Quando dá errado

Se as contagens não carregarem, a tela mostra uma mensagem de erro no lugar
delas, em vez de números. Recarregue a página; se o problema continuar, é um
problema do serviço, não de configuração sua — avise a equipe técnica.
