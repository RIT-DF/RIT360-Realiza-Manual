---
title: "Telegram"
nav_order: 2.5
parent: "Configurações"
permalink: /configuracoes/telegram/
---

# Telegram

Ligue seu Telegram à sua conta do Realiza para conversar com o assistente por lá — em conversa
privada, nunca dentro de um grupo.

## Por que isto importa

Nem sempre você está com o aplicativo aberto. Com o Telegram ligado, você pergunta ao assistente
"o que está atrasado hoje" ou pede para criar uma tarefa direto do celular, sem abrir o navegador.

{: .note }
Este cartão só aparece se o serviço tiver o Telegram habilitado. Onde não estiver, o cartão
mostra: "O Telegram não está disponível neste serviço."

## Ligar

1. No seu [perfil](/configuracoes/perfil/), no cartão **"Telegram"**, clique em **"Ligar
   Telegram"**.
2. A tela mostra dois botões — **"Abrir no aplicativo do Telegram"** e **"Abrir no Telegram
   Web"** — e o aviso: "O Telegram vai abrir — é só tocar em 'Iniciar'. O código vale por 10
   minutos e só pode ser usado uma vez."
3. Clique no botão que combina com o aparelho em que você está e toque em **"Iniciar"** dentro do
   Telegram.

{: .tip }
**Vai ligar de outro aparelho** — por exemplo, gerou o link no computador mas quer ligar pelo
celular? Use o endereço copiável que aparece discretamente abaixo dos dois botões, com **"Vai
ligar de outro aparelho? Use este endereço:"** e um botão **"Copiar"** (que vira **"Copiado!"**
depois do clique).

Concluído o vínculo, o robô responde: "Pronto — seu Telegram está ligado à sua conta no Realiza." A
tela do perfil reconhece sozinha que o vínculo foi concluído, sem precisar recarregar a página. Se
você participa de mais de uma organização, o robô pede para você escolher com qual quer falar
antes de responder qualquer pergunta.

## Escolher a organização, pelo Telegram

Participando de mais de uma organização, envie o comando `/organizacao` a qualquer momento para
trocar com qual delas o assistente está falando. O robô lista as organizações numeradas; responda
com o número da que você quer.

## Exemplo

Carlos Nunes liga o Telegram do celular pessoal. Como ele participa só do Instituto Semente, o
vínculo já sai pronto, sem precisar escolher organização. A partir daí, ele pergunta ao robô sobre
suas tarefas da semana sem abrir o Realiza no navegador.

## Desligar

No cartão **"Telegram"**, clique em **"Desligar Telegram"**. O vínculo é removido, e o robô deixa
de responder até você ligar de novo.

## Dicas e armadilhas

- **Só funciona em conversa privada.** Adicionar o robô a um grupo não funciona: ele responde
  "Eu só respondo em conversa privada — abra uma conversa comigo (fora de grupos) para usar o
  assistente do Realiza." e ignora qualquer comando ali.
- **Uma conta do Telegram só liga a uma pessoa do Realiza por vez.** Tentando ligar uma conta do
  Telegram que já está vinculada a outra pessoa, o robô responde: "Esta conta do Telegram já está
  ligada a outra pessoa no Realiza. Desligue-a no perfil dela antes de ligar aqui." — quem
  desliga é a outra pessoa, no perfil dela.
- **O link de vinculação expira em 10 minutos e vale uma vez só.** Demorou para abrir, ou já usou?
  Gere um link novo clicando em **"Ligar Telegram"** de novo.

## Quando dá errado

- **"Para ligar sua conta, toque em 'Ligar Telegram' no Meu perfil do Realiza e use o link que
  aparecer lá."** — você mandou `/start` direto no Telegram, sem passar pelo link do perfil.
- **"Este código é inválido, já venceu ou já foi usado. Volte ao Meu perfil no Realiza e gere um
  novo link."** — o link expirou ou já foi usado; gere outro.
- **"Você ainda não ligou seu Telegram a uma conta do Realiza. Abra o Meu perfil no app e toque em
  'Ligar Telegram'."** — você mandou uma pergunta ou comando sem ter concluído a vinculação ainda.
- **"Não consegui verificar o Telegram agora."** — o cartão não conseguiu consultar o estado
  atual; recarregue a página do perfil.
- **"Não consegui gerar o link de vinculação."** ou **"Não consegui desligar o Telegram."** —
  tente de novo; se persistir, avise quem administra o serviço.
