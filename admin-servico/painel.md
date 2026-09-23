---
title: "O painel"
nav_order: 1
parent: "Administração do serviço"
permalink: /admin-servico/painel/
palavras_chave: "contagens gerais, painel administrativo, limite de alcance, duas colunas"
---

# O painel

O painel é a primeira coisa que você vê ao abrir a administração do serviço.
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
- **"Espaços"** — quantos espaços existem ao todo, somando projetos e
  operações contínuas de todas as organizações, arquivados ou não.

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

## Uma tela só, em duas colunas

No computador, tudo o que você administra no serviço fica numa **tela só**,
organizada em duas colunas — nada de entrar e sair de tela em tela para ver
cada assunto. No celular, as colunas empilham, uma abaixo da outra.

Alguns assuntos aparecem **direto na tela**, com o conteúdo completo:

- **"Números do serviço"** — as três contagens, explicadas abaixo.
- **"Cópia de segurança do banco"** — mostra, direto nesta tela, um destes
  estados: **"Nunca rodou uma cópia de segurança reportada por este
  mecanismo."**, **"Última cópia concluída com sucesso em [data e hora]."** ou
  **"A última cópia, em [data e hora], FALHOU[: mensagem]."**. Enquanto a
  consulta não termina, o cartão mostra **"Carregando…"**; se ela falhar, mostra
  a mensagem de erro no lugar do estado. Veja [Cópia de
  segurança](/admin-servico/copia-de-seguranca/) para o que cada estado
  significa e os limites desta funcionalidade.
- **"Quem administra o serviço"** — veja [Quem administra o
  serviço](/admin-servico/quem-administra/).
- **"Login por Google"** — veja [Entrada pelo
  Google](/admin-servico/entrada-pelo-google/).
- **"Domínios autorizados"** — veja [Domínios
  autorizados](/admin-servico/dominios-autorizados/).

{: .note }
No celular, **"Login por Google"** e **"Domínios autorizados"** não cabem
inteiros na tela — em vez do conteúdo completo, você vê um resumo de uma linha
e um botão **"Abrir"**, que leva à tela própria daquele assunto.

Outros assuntos são grandes demais para caber ao lado de outro card sem
espremer — esses continuam em telas próprias, e o caminho até eles é o bloco
**"Mais configurações"**, no fim da tela, com um botão para cada um:

- **"Servidor de e-mail"**
- **"Provedores de IA"**
- **"Organizações"**
- **"Pedidos de organização"**
- **"Feedbacks"**
- **"Destinos da cópia de segurança"**
- **"Tarefas agendadas"**
- **"Mudar de servidor"**

Cada um deles é explicado na página própria, linkada no
[índice desta seção](/admin-servico/).

## Quando dá errado

Se as contagens não carregarem, a tela mostra uma mensagem de erro no lugar
delas, em vez de números. Recarregue a página; se o problema continuar, é um
problema do serviço, não de configuração sua — avise a equipe técnica.
