---
title: "Visão geral"
nav_order: 1
parent: "Administração do serviço"
permalink: /admin-servico/painel/
palavras_chave: "contagens gerais, visão geral, quantas organizações, quantos espaços, limite de alcance, cópia de segurança"
---

# Visão geral

A aba **"Visão geral"** é a primeira coisa que você vê ao abrir a administração
do serviço.
Ele existe para dar um retrato rápido de tamanho — quantas organizações usam o
produto, quantas pessoas, quantos espaços — sem abrir o conteúdo de nenhuma
delas.

## Passo a passo

1. Na administração do serviço, abra a aba **"Visão geral"** — é a que abre por padrão.
2. As três contagens aparecem em **"Números do serviço"**.

<!-- CAPTURA PENDENTE: a tela mudou na 0.20.0 (menu de abas) e os títulos ainda vão ser
     normalizados (issue #168). Refazer depois disso, e sem enquadrar a contagem de espaços
     enquanto a issue #167 não sair — ela mostra zero havendo espaços. -->

## O que cada número conta

- **"Organizações"** — quantas organizações existem no serviço, contando
  também as que ninguém usa mais.
- **"Pessoas com vínculo"** — quantas pessoas têm vínculo com pelo menos uma
  organização. Uma mesma pessoa que participa de duas organizações conta uma
  vez para cada vínculo, não uma vez só.
- **"Espaços"** — quantos espaços **ativos** existem ao todo, somando projetos e
  operações contínuas de todas as organizações. Espaço arquivado **não** entra
  nesta conta: arquivar um espaço faz o número cair.

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

Nada além disso: a **"Visão geral"** tem só o cartão **"Números do serviço"**.
Ela é um retrato de tamanho, não um painel de controle.

Todo o resto — organizações, acesso, serviços, manutenção e feedbacks — fica nas
outras abas. O [índice desta seção](/admin-servico/) lista o que há em cada uma.
O estado da última cópia de segurança, por exemplo, fica na aba
**"Manutenção"**; veja [Cópia de segurança](/admin-servico/copia-de-seguranca/).

## Quando dá errado

Se as contagens não carregarem, a tela mostra uma mensagem de erro no lugar
delas, em vez de números. Recarregue a página; se o problema continuar, é um
problema do serviço, não de configuração sua — avise a equipe técnica.
