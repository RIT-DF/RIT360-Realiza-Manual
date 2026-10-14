---
title: "Retenção de convites de assinatura"
nav_order: 17
parent: "Administração do serviço"
permalink: /admin-servico/retencao-convites/
palavras_chave: "retenção, convite de assinatura, convite nunca atendido, e-mail removido, assinante externo, dado pessoal, LGPD, rotina de retenção, processo de fundo, documento assinado, convite encerrado"
---

# Retenção de convites de assinatura

Tela da **Administração do serviço** que define **por quanto tempo o Flow guarda o e-mail de quem foi
chamado a assinar um documento e não assinou** — e mostra se a rotina que remove esse e-mail está de
fato rodando. Para chegar: escudo no cabeçalho, depois **"Manutenção"** e o botão **"Retenção de
convites de assinatura"**, ao lado de "Retenção de candidaturas".

![Tela Manutenção da administração do serviço, com os botões "Retenção de candidaturas", "Retenção de convites de assinatura" e "Apagamento de organização encerrada" no cartão "Mais manutenção"](/assets/capturas/admin-servico-manutencao-desktop.png)
{: .mt-4 }

No celular:

![Tela Manutenção no celular, com o botão "Retenção de convites de assinatura" entre os botões de manutenção](/assets/capturas/admin-servico-manutencao-celular.png){: style="max-width:375px" }
{: .mt-4 }

## Por que isto importa

Quando a organização envia um documento para assinatura, cada parte recebe um **convite** com um link
próprio. Quem recebe, muitas vezes, **não tem conta e não tem nenhuma relação com a organização**: é
um fornecedor, um voluntário em potencial, o representante de outra entidade. Se essa pessoa nunca
assina, o e-mail dela ficaria guardado **para sempre** — e ela não tem como pedir que saia, porque não
sabe nem onde pedir.

O prazo é o que faz esse e-mail sair **sozinho**. Passados **90 dias** da criação do convite (o padrão),
o convite que ninguém atendeu perde o e-mail e o link. O link de assinatura vale 30 dias; 90 dão ao
convite **duas validades inteiras** para a organização cobrar a parte e reenviar. Quem não assinou em
três meses dificilmente vai assinar por aquele convite.

## O que acontece com cada convite

| Situação | O que o sistema faz |
|---|---|
| **Convite nunca atendido, com mais de 90 dias** (prazo padrão), de um documento **sem nenhuma assinatura** | Remove o **e-mail**, o **link** e as **mensagens de erro de envio** (que costumam citar o endereço). Fica um registro mínimo: que houve convite, para qual parte e quando. |
| **Documento com pelo menos uma assinatura** | **Nunca é tocado.** Nenhum convite dele — nem o de quem assinou, nem o das outras partes. |
| **Convite com link recém-enviado e ainda dentro da validade** | Fica de fora: não se corta um link que acabou de ser entregue e ainda funciona. |

{: .important }
**Documento assinado nunca é alcançado.** O acordo assinado é documento jurídico e permanece inteiro.
Basta **um** aceite para proteger **todos** os convites daquele documento: o de quem assinou e os das
outras partes, mesmo que alguma delas nunca tenha respondido. O prazo só alcança o documento em que
**ninguém** assinou.

{: .warning }
**Depois que o convite é esvaziado, aquela pessoa não assina mais por ele.** Para convidá-la de novo é
preciso **emitir um documento novo** — não existe "reativar" o convite. Na ficha do documento, a parte
aparece como convite encerrado e o botão **"Reenviar o link"** deixa de aparecer para ela (veja
[Assinatura de documentos](/flow/assinatura-de-documentos/#convite-encerrado)).
O documento em si não é alterado.

**Esvaziado, não apagado.** A linha do convite continua existindo porque é por ela que o link público
resolve, que a cópia selada chega às partes e que a lista de partes de um documento é montada. Apagá-la
faria a parte sumir da conferência pública, que mostraria menos partes do que o documento tem.

## Ajustar o prazo

Cartão **"Prazo"**. Enquanto ninguém mexeu, a tela diz: **"Ninguém alterou ainda: vale o padrão do
produto (90 dias)."** Depois que alguém salva, ela passa a dizer **"Alterado pela última vez em [data
e hora]."**

![Tela "Retenção de convites de assinatura" com o prazo "Convite de assinatura nunca atendido — prazo em dias" em 90, a explicação do efeito, o botão "Salvar prazo" e o cartão "O que a rotina esvaziou" com "Nada a esvaziar"](/assets/capturas/admin-servico-retencao-convites-desktop.png)
{: .mt-4 }

![Tela "Retenção de convites de assinatura" no celular, com o prazo em 90 dias e a explicação do efeito](/assets/capturas/admin-servico-retencao-convites-celular.png){: style="max-width:375px" }
{: .mt-4 }

1. Abra **Manutenção** e clique em **"Retenção de convites de assinatura"**.
2. Altere o campo **"Convite de assinatura nunca atendido — prazo em dias"**. Aceita de **1 a 3650**
   dias; o padrão é **90**. Abaixo do campo, a tela explica o efeito do número e lembra o **"Padrão do
   produto"**.
3. Clique em **"Salvar prazo"** (o botão muda para **"Salvando…"**). Aparece **"Prazo salvo. A próxima
   passagem da rotina já usa este número."**

{: .note }
**O número vale para o serviço inteiro**, para todas as organizações — não há prazo por organização.
Quem administra uma organização não vê esta tela.

### Exemplo

A administradora do serviço mantém os **90** dias. A Associação Mãos Amigas envia, em 3 de março, um
termo para três pessoas: duas assinam em março e a terceira nunca responde. Como o documento **tem
assinaturas**, nenhum dos três convites é tocado — nem o da pessoa que não respondeu. Já um orçamento
enviado em 3 de março a um fornecedor que **ninguém** assinou tem o e-mail removido em 1º de junho, e,
se o fornecedor resolver assinar em julho, a organização precisa emitir o orçamento de novo.

### Dicas e armadilhas

- **Alongar o prazo é o lado seguro; encurtar não tem volta.** Quando a rotina esvazia o convite, o
  e-mail **não se recupera**. Antes de reduzir o número, pense em quanto a organização costuma levar para
  cobrar uma parte — reduzir para 30 dias, o mesmo da validade do link, tira da organização a chance de
  reenviar.
- **Não escolha um prazo menor que a validade do link (30 dias).** Seria esvaziar o convite quando o
  link ainda está bom.
- **Os 90 dias são uma hipótese de trabalho.** A revisão jurídica pode pedir outro número; quando isso
  acontecer, é só mudar aqui.
- **Esta tela não resolve tudo.** Documento que **nunca foi assinado** continua guardando o texto e os
  dados do assinante externo (CPF e e-mail da lista de partes) sem prazo. Apagar isso é apagar o
  documento, e é uma decisão separada, ainda aberta.

## "O que a rotina esvaziou": ler o estado da rotina

Quem remove o e-mail é uma **rotina automática de fundo** do Flow, que passa de hora em hora e grava
**uma linha por passagem, inclusive quando não havia nada a fazer**. O cartão **"O que a rotina
esvaziou"** mostra o resultado — com **quatro estados que não se confundem**, os mesmos de
[Retenção de candidaturas](/admin-servico/retencao-candidaturas/#o-que-a-rotina-apagou-ler-o-estado-da-rotina).

| O que a tela diz | O que significa | O que fazer |
|---|---|---|
| **"A rotina de retenção de convites nunca rodou nesta instalação — nenhum ciclo foi registrado."** (aviso em vermelho) | Nenhuma passagem foi registrada. **Não é o mesmo que "não havia nada a esvaziar":** enquanto ela não roda, nenhum e-mail sai no prazo. | Confira se o processo de fundo do Flow está no ar. Passada mais de uma hora no ar sem nenhum ciclo, este aviso é o sinal de que ele não subiu. |
| **"A rotina rodou em [data e hora] e não havia nada a esvaziar."** (etiqueta **"Nada a esvaziar"**) | Rodou, olhou e nenhum convite tinha vencido. É o estado saudável. | Nada. |
| **"A última passagem começou em [data e hora] e não terminou."** (etiqueta **"Começou e não terminou"**) | A rotina começou e **não chegou ao fim**. Também não é "nada a esvaziar". | Confira se o processo de fundo do Flow continua no ar. |
| **"A última passagem, em [data e hora], falhou: [erro]"** (etiqueta **"Falhou"**) | A rotina tentou e deu erro; a mensagem diz qual. | Resolva a causa descrita; a próxima passagem tenta de novo. |

Quando houve trabalho, a tela resume: **"N convite(s) com o e-mail removido, N organização(ões)
alcançada(s)."** e, embaixo, de onde vieram as partes: **"pessoa cadastrada"**, **"instituição
cadastrada"** e **"pessoa de fora"**. Ciclo com efeito não leva etiqueta.

{: .warning }
**"Nada a esvaziar" e "nunca rodou" parecem iguais e significam o oposto.** Se a rotina não roda, o
prazo que você configurou **não vale de nada**: os e-mails continuam guardados e a tela de prazo
continua mostrando 90 dias como se fosse tudo cumprido. Depois de ajustar o prazo, confira o cartão de
baixo.

{: .note }
**Organização que desligou o Flow é pulada**, e o prazo dela fica adiado até ela religar. A **exclusão
de organização**, por sua vez, continua apagando tudo, inclusive os convites.

## Quando dá errado

- **"Não foi possível consultar a retenção de convites."** — a tela não conseguiu nem perguntar o
  prazo e o que a rotina fez. Recarregue; se continuar, o serviço pode estar fora do ar. Isso **não**
  significa que o prazo foi perdido.
- **"Não foi possível salvar o prazo."** — nada foi alterado; o prazo anterior continua valendo. Tente
  de novo.
- **Uma recusa com a mensagem do servidor** (por exemplo, número fora de 1 a 3650) — a tela mostra a
  mensagem que o servidor devolveu. Corrija o número.
- **O aviso vermelho de "nunca rodou" ou "não terminou" não sai.** O processo de fundo do Flow precisa
  estar no ar; ele não se liga por esta tela. Peça a quem cuida do servidor para conferir. A tela
  [Tarefas agendadas](/admin-servico/tarefas/) mostra o estado das rotinas da instalação.

## Limites do papel

Só quem **administra o serviço** vê e altera este prazo. A administração de uma organização não o
alcança e nenhuma organização pode escolher um prazo diferente. Quem tentar abrir a tela sem a
permissão vê a recusa de sempre da área: **"Você não administra o serviço."**

## Glossário

- **Convite de assinatura** — o e-mail com o link que leva uma parte a aceitar um documento.
- **Nunca atendido** — convite de um documento em que **nenhuma** parte assinou.
- **Esvaziar** — remover do convite o e-mail, o link e as mensagens de erro de envio, mantendo só o
  registro mínimo. Não é apagar a linha.
- **Registro mínimo** — o que sobra: que houve convite, para qual parte e quando.
- **Rotina de fundo** — o processo do Flow que roda sozinho, sem ninguém clicar, e faz a remoção.
