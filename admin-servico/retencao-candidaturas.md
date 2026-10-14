---
title: "Retenção de candidaturas"
nav_order: 15
parent: "Administração do serviço"
permalink: /admin-servico/retencao-candidaturas/
palavras_chave: "retenção, prazo, apagar candidatura, dado pessoal, menor de idade, candidatura reprovada, candidatura expirada, expirar, LGPD, rotina de retenção, processo de fundo"
---

# Retenção de candidaturas

Tela da **Administração do serviço** que define **por quanto tempo o Flow guarda o que uma pessoa
enviou ao se candidatar** — e mostra se a rotina que apaga esses dados está de fato rodando. Para
chegar: escudo no cabeçalho, depois **"Manutenção"** e o botão **"Retenção de candidaturas"**.

![Tela Manutenção da administração do serviço, com o botão "Retenção de candidaturas" no cartão "Mais manutenção"](/assets/capturas/admin-servico-manutencao-desktop.png)
{: .mt-4 }

No celular:

![Tela Manutenção no celular, com o botão "Retenção de candidaturas" entre os botões de manutenção](/assets/capturas/admin-servico-manutencao-celular.png){: style="max-width:375px" }
{: .mt-4 }

{: .note }
O Flow tem uma segunda rotina parecida, para o e-mail de quem foi convidado a assinar um documento e não
assinou: [Retenção de convites de assinatura](/admin-servico/retencao-convites/).

## Por que isto importa

Quem se candidata deixa nome, data de nascimento, CPF, endereço, contatos e consentimentos. Se a
candidatura é **aprovada**, a pessoa passa a ter relação com a organização, e o dado tem motivo
para ficar. Se é **recusada**, não: ela **não é membro, não tem conta e não tem como pedir que o
dado saia** — ninguém vai bater à porta para pedir a exclusão. Sem prazo, esse dado ficaria
guardado para sempre, de gente que nunca teve relação nenhuma com a organização.

O prazo é o que faz o dado sair **sozinho**. O caso mais sensível é o de quem foi recusado por ser
**menor de idade**: é dado de criança ou adolescente, e por isso é o prazo mais curto.

## O que acontece com cada candidatura

| Situação da candidatura | O que o sistema faz | Prazo padrão |
|---|---|---|
| **Recusada pela regra de idade** (menor de 18 anos, ou sem data de nascimento) | Apaga a candidatura **inteira**. Não sobra nada — nem registro mínimo. | **24 horas** |
| **Reprovada** (uma pessoa decidiu) | Remove o **conteúdo** e deixa um registro mínimo: que houve candidatura, de que tipo, para qual frente, quando, qual o desfecho e quem decidiu. | **90 dias**, contados da decisão |
| **Que ninguém decidiu** (aguardando decisão) | **Expira**. Depois, segue o prazo da reprovada. | **180 dias**, contados da chegada |
| **Retida por conflito** (o e-mail pertence a outra pessoa) | Usa o mesmo prazo da que ninguém decidiu: passado ele, expira e segue o prazo da reprovada. | **180 dias**, contados da chegada |
| **Aprovada** | **Nunca é tocada** por esta rotina. | — |

{: .important }
**Expirar não é reprovar.** Reprovar é decisão de alguém; expirar é a organização **não ter
decidido** a tempo. Por isso a candidatura expirada aparece com o desfecho **"Expirada sem
decisão"**, com a data, e nunca com o nome de alguém como autor. Depois de expirar, ela segue o
mesmo prazo da reprovada: o conteúdo sai e fica o registro mínimo.

**Por que a recusa por idade não deixa nem registro mínimo?** A própria tela explica: não se
guarda resumo para evitar reenvio, porque a recusa é calculada da data de nascimento que chega no
formulário — se a pessoa enviar de novo, o sistema recusa de novo sozinho. O registro seria dado
de uma criança guardado sem necessidade.

## Ajustar os prazos

Cartão **"Prazos"**. Enquanto ninguém mexeu, a tela diz: **"Ninguém alterou ainda: valem os
padrões do produto (24 horas, 90 dias e 180 dias)."** Depois que alguém salva, ela passa a dizer
**"Alterados pela última vez em [data e hora]."**

![Tela "Retenção de candidaturas", com os três prazos nos valores padrão e o cartão "O que a rotina apagou" mostrando "Nada a apagar"](/assets/capturas/admin-servico-retencao-candidaturas-desktop.png)
{: .mt-4 }

![Tela "Retenção de candidaturas" no celular, com os três prazos e o cartão "O que a rotina apagou"](/assets/capturas/admin-servico-retencao-candidaturas-celular.png){: style="max-width:375px" }
{: .mt-4 }

1. Abra **Manutenção** e clique em **"Retenção de candidaturas"**.
2. Altere os campos que quiser:
   - **"Candidatura recusada pela regra de idade — prazo em horas"** (padrão: 24 horas);
   - **"Candidatura reprovada — prazo em dias"** (padrão: 90 dias);
   - **"Candidatura que ninguém decidiu — prazo em dias"** (padrão: 180 dias).
   Abaixo de cada campo, a tela explica o efeito do número e lembra o **"Padrão do produto"**.
3. Clique em **"Salvar prazos"** (o botão muda para **"Salvando…"**). Aparece **"Prazos salvos. A
   próxima passagem da rotina já usa estes números."**

{: .note }
**Os números valem para o serviço inteiro**, para todas as organizações — não há prazo por
organização. Quem administra uma organização não vê esta tela.

### Exemplo

A administradora do serviço quer dar mais tempo para as organizações responderem a quem foi
reprovado e passa a reprovada de **90** para **180** dias. Mantém **24 horas** para a regra de
idade e **180** para a que ninguém decidiu. Na prática, uma candidatura reprovada em 1º de março
tem o conteúdo removido em 28 de agosto, e não mais em 30 de maio — e quem questionar a decisão
em julho ainda encontra o que foi enviado.

### Dicas e armadilhas

- **Encurtar o prazo é mais fácil de desfazer do que alongar.** Quando a rotina apaga, **não há
  como recuperar**: o conteúdo some do banco. Antes de reduzir um prazo, pense no que a
  organização ainda precisaria consultar. Aumentar o número, por outro lado, só adia a remoção.
- **Não deixe o prazo da reprovada curto demais.** Ele existe para a organização poder responder a
  quem questionar a decisão. Se ele vence antes de alguém reclamar, a resposta passa a ser "não
  temos mais o que foi enviado".
- **Cuidado com os 180 dias da que ninguém decidiu.** Uma candidatura esquecida na fila expira — a
  pessoa não é avisada de que o prazo da organização acabou. Se a fila acumula, o problema não é
  este prazo: é a fila. Veja [Candidaturas](/flow/candidaturas/).
- **Aprovada nunca é tocada.** Aprovar uma candidatura antes do prazo é o que a protege de
  expirar.

## "O que a rotina apagou": ler o estado da rotina

Quem apaga os dados é uma **rotina automática de fundo** do Flow, que roda sozinha. O cartão
**"O que a rotina apagou"** mostra o resultado da última passagem — e tem **quatro estados que não
se confundem**. É o que impede alguém de achar que está tudo bem quando não está.

| O que a tela diz | O que significa | O que fazer |
|---|---|---|
| **"A rotina de retenção nunca rodou nesta instalação — nenhum ciclo foi registrado."** (aviso em vermelho) | Nenhuma passagem foi registrada. **Isto não é o mesmo que "não havia nada a apagar":** enquanto ela não roda, nada sai no prazo. | Confira se o processo de fundo do Flow está no ar. |
| **"A rotina rodou em [data e hora] e não havia nada a apagar."** (etiqueta **"Nada a apagar"**) | Rodou, olhou e nenhuma candidatura tinha vencido. É o estado saudável de uma instalação em dia. | Nada. |
| **"A última passagem começou em [data e hora] e não terminou."** (etiqueta **"Começou e não terminou"**) | A rotina começou e **não chegou ao fim**. Também **não é** "nada a apagar". | Confira se o processo de fundo do Flow continua no ar. |
| **"A última passagem, em [data e hora], falhou: [erro]"** (etiqueta **"Falhou"**) | A rotina tentou e deu erro; a mensagem diz qual. | Resolva a causa descrita no erro; a próxima passagem tenta de novo. |

Quando houve trabalho, a tela resume: **"Na última passagem, em [data e hora]: N
candidatura(s) apagada(s) por completo, N com o conteúdo removido, N expirada(s), N
organização(ões) alcançada(s)"** — e, se for o caso, **"N adiada(s) porque o disparo da decisão
ainda estava em curso"**. Uma candidatura é **adiada** quando a decisão dela ainda está sendo
entregue à automação (o n8n): a rotina espera a entrega terminar para não apagar o que ainda está
em uso, e pega a candidatura na passagem seguinte.

![Mesma tela, com o aviso em vermelho "A rotina de retenção nunca rodou nesta instalação" no cartão "O que a rotina apagou"](/assets/capturas/admin-servico-retencao-candidaturas-nunca-rodou-desktop.png)
{: .mt-4 }

Compare as duas capturas: a mesma tela, com o mesmo texto nos prazos. A diferença está só no
cartão de baixo — **"Nada a apagar"** em cinza, de um lado, e o aviso vermelho de **"nunca
rodou"**, do outro. Os dois parecem "nada aconteceu", e só um deles é saudável.

{: .warning }
**"Nada a apagar" e "nunca rodou" parecem iguais e significam o oposto.** Se a rotina não roda, os
prazos que você configurou **não valem de nada**: o dado de quem foi recusado continua guardado, e
a tela de prazos continua mostrando 24 horas, 90 dias e 180 dias como se fosse tudo cumprido.
Depois de ajustar os prazos, confira o cartão de baixo.

## Quando dá errado

- **"Não foi possível consultar a retenção de candidaturas."** — a tela não conseguiu nem
  perguntar quais são os prazos e o que a rotina fez. Recarregue; se continuar, o serviço pode
  estar fora do ar. Isso **não** significa que os prazos foram perdidos.
- **"Não foi possível salvar os prazos."** — nada foi alterado; os prazos anteriores continuam
  valendo. Tente de novo.
- **O aviso vermelho de "nunca rodou" ou "não terminou" não sai.** O processo de fundo do Flow
  precisa estar no ar; ele não se liga por esta tela. Peça a quem cuida do servidor para conferir.
  A tela [Tarefas agendadas](/admin-servico/tarefas/) mostra o estado das rotinas da instalação.

## Limites do papel

Só quem **administra o serviço** vê e altera estes prazos. A administração de uma organização não
os alcança, e nenhuma organização pode escolher um prazo diferente do resto. Quem tentar abrir a
tela sem a permissão vê a recusa de sempre da área: **"Você não administra o serviço."**

## Glossário

- **Retenção** — por quanto tempo um dado fica guardado antes de ser removido.
- **Registro mínimo** — o que sobra depois que o conteúdo sai: que houve candidatura, de que tipo,
  para qual frente, quando, o desfecho e quem decidiu. Sem nome, CPF, data de nascimento,
  contatos, endereço nem consentimentos.
- **Expirada** — candidatura que ninguém decidiu dentro do prazo. Não é uma reprovação.
- **Rotina de fundo** — o processo do Flow que roda sozinho, sem ninguém clicar, e que faz a
  remoção.
