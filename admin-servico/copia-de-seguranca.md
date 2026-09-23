---
title: "Cópia de segurança"
nav_order: 7
parent: "Administração do serviço"
permalink: /admin-servico/copia-de-seguranca/
---

# Cópia de segurança

Na administração geral, o cartão **"Cópia de segurança do banco"** mostra o
resultado da cópia de segurança (também chamada de **backup**) do banco de
dados do RIT360 Realiza — a rotina que existe para que os dados do produto
não se percam se o servidor falhar.
Logo abaixo do título, o cartão explica: **"Roda sozinha, de madrugada, fora
do produto. Aqui só se vê o resultado que a última rodada reportou."**

{: .note }
A cópia de segurança **roda sozinha, de madrugada, fora do produto**. Esta
tela não a dispara nem a configura — ela só mostra o que a última rodada
reportou.

## O que a tela mostra

Um dos três estados abaixo aparece sempre que você abre **"Administração
geral"**:

- **Nunca rodou uma cópia de segurança reportada por este mecanismo.** —
  significa que, até agora, nenhuma rodada de cópia chegou a informar um
  resultado a este painel.
- **Última cópia concluída com sucesso em [data e hora].** — a rotina mais
  recente terminou bem.
- **A última cópia, em [data e hora], FALHOU[: mensagem].** — a rotina mais
  recente não terminou bem, com a mensagem de erro que ela reportou, quando
  houver uma.


{: .warning }
Se a tela mostrar que a última cópia **FALHOU**, trate isso como algo a
resolver, não como uma informação a arquivar. Uma cópia de segurança que falha
sem que ninguém aja continua parecendo que existe, mas não existe.

## O que esta tela não faz

Para não prometer mais do que existe hoje, veja com clareza os limites desta
funcionalidade:

- **Não é possível agendar, adiar ou disparar uma cópia por aqui.** A
  frequência e o horário são definidos fora do produto, pela equipe técnica
  que cuida do servidor.
- **Esta tela não mostra prova de que uma cópia restaura o produto de
  verdade.** A equipe técnica testa isso separadamente, fora do produto; o
  resultado desse teste não aparece aqui. O que você vê é apenas se a rodada
  de cópia foi concluída, não se ela foi restaurada com sucesso. O teste que
  a tela de destinos oferece (veja abaixo) prova que **gravar, ler e apagar**
  no destino funciona — não prova que uma cópia real do banco inteiro
  restaura o produto.

{: .note }
**Levar a cópia para fora do servidor original já tem tela própria.** Veja
[Destinos da cópia de segurança](/admin-servico/destinos-backup/) para
cadastrar um destino externo (S3 e compatíveis, SFTP ou WebDAV), testá-lo de
verdade e acompanhar a última cópia enviada a cada um.

{: .important }
Se a sua organização depende de garantias formais sobre cópia de segurança —
para um contrato, uma auditoria ou um doador —, trate essas informações como
perguntas para a equipe técnica do RIT360 Realiza, não como algo que esta
tela comprova sozinha.

## Quando dá errado

Se a tela não conseguir consultar o resultado da cópia de segurança, ela
mostra uma mensagem de erro no lugar do estado. Isso é diferente de
**"Nunca rodou uma cópia de segurança reportada por este mecanismo."** — esse
segundo caso é uma resposta válida, só que vazia; o erro é a tela não ter
conseguido nem perguntar.
