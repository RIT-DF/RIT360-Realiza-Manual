---
title: "Apagamento de organização encerrada"
nav_order: 16
parent: "Administração do serviço"
permalink: /admin-servico/apagamento-organizacao-encerrada/
palavras_chave: "encerrar contrato, reabrir contrato, apagamento, trigésimo dia, 30 dias, aviso ao gestor, segundo aviso, exportar dados, rotina de apagamento, nada a apagar, nunca rodou, apagamento parou, LGPD"
---

# Apagamento de organização encerrada

Quando um contrato com uma organização termina, os dados dela **não ficam guardados para sempre**: a RIT360 Plataforma os apaga sozinha, por completo, **no trigésimo dia depois do encerramento**. Esta página explica como quem administra o serviço **encerra** um contrato, **reabre** antes que seja tarde, e como conferir se a rotina que apaga está de fato funcionando.

{: .important }
Tudo aqui é feito por quem **administra o serviço**. Quem administra uma organização não encerra o contrato da própria organização, nem vê estas telas.

## Por que isto importa

A política de privacidade da plataforma promete a quem encerra o contrato que os dados serão apagados no trigésimo dia. Quem saiu **não volta para conferir** se a promessa foi cumprida — por isso ela não pode depender de alguém lembrar. O encerramento passa a ser um ato registrado, com data e motivo, e uma rotina automática cuida do resto.

Do outro lado, o apagamento **não tem volta**. Por isso o gestor da organização é avisado **duas vezes**, e você pode desfazer o encerramento enquanto o apagamento não começou.

## Como funciona, em ordem

1. **Você encerra o contrato**, informando o motivo. O relógio dos 30 dias começa nesse momento.
2. **No mesmo instante, o gestor recebe um e-mail** com a data do apagamento e o caminho para exportar os dados.
3. **Sete dias antes do apagamento**, o gestor recebe um **segundo e-mail**, de lembrete.
4. **No trigésimo dia**, a rotina apaga a organização em **todos os módulos, com os arquivos** — o mesmo alcance da exclusão feita à mão (veja [Excluir uma organização](/admin-servico/organizacoes/#excluir-uma-organização)). Sobra só um registro mínimo, sem conteúdo.

Os números **30** e **7** são os padrões; quem administra o serviço pode ajustá-los (veja [Ajustar os prazos](#ajustar-os-prazos)).

## Encerrar o contrato de uma organização

O encerramento é feito no **detalhe da organização**, na tela **Organizações**.

![Janela de detalhe do Instituto Semente, com o bloco "Contrato com o serviço": o texto "Contrato em vigor", o campo "Motivo do encerramento" e o botão "Encerrar contrato"](/assets/capturas/admin-servico-organizacoes-contrato-vigor-desktop.png)
{: .mt-4 }

No celular:

![Detalhe da organização no celular, com o bloco "Contrato com o serviço" e o botão "Encerrar contrato"](/assets/capturas/admin-servico-organizacoes-contrato-vigor-celular.png){: style="max-width:375px" }
{: .mt-4 }

### Passo a passo

1. Abra **Organizações** na administração do serviço (escudo no cabeçalho).
2. Na linha da organização, clique em **"Detalhes"**.
3. Role até **"Contrato com o serviço"**. Enquanto o contrato está em vigor, a janela diz **"Contrato em vigor."** e explica o efeito do encerramento.
4. Preencha **"Motivo do encerramento"**. O botão **"Encerrar contrato"** só liga depois que o motivo é preenchido (até 500 caracteres).
5. Clique em **"Encerrar contrato"** (o botão passa a **"Encerrando…"**).
6. A janela confirma com **"Contrato encerrado. Os dados serão apagados em [data e hora], e o gestor foi avisado."**

A tabela de organizações passa a mostrar **"Encerrado"** na coluna **"Contrato"**.

### Exemplo

A diretoria da Associação Girassol comunica que encerra o convênio com a RIT. A administradora do serviço abre os **Detalhes** da Girassol, escreve no motivo **"Fim do convênio, pedido da diretoria em 10/10"** e clica em **"Encerrar contrato"**. A tela informa que os dados serão apagados em 12/11 e que o gestor foi avisado. A partir daí, o motivo, quem encerrou e a data ficam registrados na própria janela, no histórico do contrato.

### Dicas e armadilhas

- **Escreva um motivo que alguém entenda daqui a um ano.** Ele fica no histórico do contrato, junto da data; é o que explica por que uma organização foi encerrada (ou reaberta).
- **Encerrar não é suspender.** Suspender interrompe o uso e o dado continua sendo da organização, que volta de onde parou; só o **encerramento** faz o prazo de apagamento correr.
- **Confirme que o gestor sabe antes de clicar**, se puder. O e-mail automático chega no ato, mas uma conversa antes evita susto.
- **Encerrar a organização errada é desfeito reabrindo — mas só enquanto o apagamento não começou.** Veja abaixo.

## O que o gestor recebe por e-mail

São **dois e-mails**, ambos para o gestor da organização:

| Quando | Assunto | O que diz |
|---|---|---|
| **No ato do encerramento** | *[Organização] — contrato encerrado e prazo para levar os dados* | Que o contrato foi encerrado, **em que data os dados serão apagados**, o que será apagado (pessoas, instituições, espaços, tarefas, documentos, relatórios, mensagens e arquivos), o caminho da exportação, e que reabrir o contrato antes da data cancela o apagamento. |
| **Sete dias antes** | *[Organização] — os dados serão apagados em [data]* | Que é o **último aviso**, a data do apagamento e o caminho da exportação. |

Os dois explicam que a exportação existe e levam o endereço para fazê-la (a aba **"Exportação e importação"** da organização — veja [Exportar dados](/configuracoes/exportar-dados/)). Quem administra o serviço **não alcança o conteúdo** das organizações: só o gestor consegue tirar a cópia.

{: .warning }
**O prazo corre mesmo que o e-mail não chegue.** Se o servidor de e-mail estiver fora do ar, se o gestor não tiver conta com e-mail ou se a organização não tiver gestor, o aviso **não sai — e o apagamento segue no prazo de qualquer forma**. A tela mostra isso (veja [Quando o aviso não sai](#quando-o-aviso-não-sai)), e é você quem precisa avisar o gestor por outro caminho.

## Reabrir o contrato

Reabrir **cancela o apagamento** e devolve o contrato a **"Ativo"**. Só é possível **antes** de o apagamento começar.

![Janela de detalhe da organização com contrato encerrado: a data do apagamento, o campo "Motivo da reabertura", o botão "Reabrir contrato e cancelar o apagamento" e o histórico do contrato](/assets/capturas/admin-servico-organizacoes-contrato-encerrado-desktop.png)
{: .mt-4 }

### Passo a passo

1. Abra o **detalhe** da organização encerrada, em **Organizações**.
2. Em **"Contrato com o serviço"**, preencha **"Motivo da reabertura"**.
3. Clique em **"Reabrir contrato e cancelar o apagamento"** (o botão passa a **"Reabrindo…"**).
4. A janela confirma: **"Contrato reaberto: o apagamento foi cancelado."** A organização volta a **"Contrato em vigor"** e o histórico guarda os dois atos: **encerrado** e **reaberto**, cada um com o motivo.

![Detalhe da organização depois de reaberta: a mensagem "Contrato reaberto: o apagamento foi cancelado." e o contrato em vigor de novo](/assets/capturas/admin-servico-organizacoes-contrato-reaberto-desktop.png)
{: .mt-4 }

### Depois que o apagamento começa, não há volta

Quando a rotina começa a apagar, parte do conteúdo pode já ter saído em definitivo. Reabrir aí devolveria **uma organização pela metade** — por isso a tela **não oferece o botão**. Em vez dele, mostra:

> O apagamento já começou em [data e hora]: parte do conteúdo pode já ter sido apagada em definitivo, então não há mais como reabrir — reabrir devolveria uma organização pela metade.

Se alguém tentar reabrir por outro caminho, a resposta é a mesma recusa: *"O apagamento desta organização já começou… Conclua o apagamento (a rotina retenta) em vez de reabrir."*

E depois que o apagamento termina, a organização deixou de existir: *"Esta organização não existe mais. Se ela estava com o contrato encerrado, a rotina já cumpriu o prazo e apagou todos os dados — não há o que reabrir."*

{: .warning }
**O apagamento é definitivo.** Não existe "desapagar", nem para quem administra o serviço. A única proteção é reabrir **antes** do começo. Se o gestor pediu para voltar atrás, faça isso **na hora**, sem esperar o último dia.

### Dicas e armadilhas

- **Reabrir pede motivo**, como encerrar. É o que deixa a trilha completa.
- **Reabrir duas vezes não existe**: se o contrato já está em vigor, a tela não mostra o botão. Se alguém tentar, aparece **"O contrato desta organização não está encerrado: não há apagamento para cancelar."**
- **Encerrar de novo uma organização já encerrada** é recusado: **"O contrato desta organização já está encerrado."**

## Quando o aviso não sai

Se o e-mail de um dos avisos falhar, a tela diz — em vermelho, no detalhe da organização e na tela de acompanhamento. Exemplo real do ambiente de teste, sem servidor de e-mail configurado:

![Detalhe da organização encerrada com a mensagem em vermelho "O aviso do encerramento NÃO saiu: Não foi possível enviar o e-mail: Nenhum servidor de e-mail configurado. O apagamento segue no prazo de qualquer forma."](/assets/capturas/admin-servico-organizacoes-contrato-encerrado-desktop.png)
{: .mt-4 }

As mensagens possíveis:

- **"O aviso do encerramento NÃO saiu: [motivo]. O apagamento segue no prazo de qualquer forma."**
- **"O segundo aviso NÃO saiu: [motivo]. O apagamento segue no prazo de qualquer forma."**

Os motivos mais comuns, e o que fazer:

| O motivo diz | O que significa | O que fazer |
|---|---|---|
| *"Nenhum servidor de e-mail configurado."* | O produto não tem servidor de e-mail cadastrado. | Configure em [Servidor de e-mail do produto](/admin-servico/email/) — e avise o gestor por outro meio. |
| *"A organização não tem gestor cadastrado (nenhum membro com o papel de administrador): não há a quem avisar."* | Ninguém administra a organização. | Avise a organização por outro canal; considere reabrir se o encerramento foi precipitado. |
| *"O gestor da organização não tem conta com e-mail: não há a quem avisar."* | O gestor existe, mas não tem e-mail utilizável. | Idem: o contato precisa ser feito por fora. |

Falha de aviso **não cancela nem adia** o apagamento — a rotina prometida na política de privacidade não espera o e-mail chegar.

## Acompanhar: a tela "Apagamento de organização encerrada"

Para ver o serviço inteiro de uma vez: escudo no cabeçalho, **"Manutenção"** e o botão **"Apagamento de organização encerrada"** (ou o link **"Prazos e o que a rotina já apagou"** no fim do bloco de contrato).

![Tela Manutenção da administração do serviço, com o novo botão "Apagamento de organização encerrada" entre os botões de manutenção](/assets/capturas/admin-servico-manutencao-desktop.png)
{: .mt-4 }

No celular:

![Tela Manutenção no celular, com o botão "Apagamento de organização encerrada" no fim da lista](/assets/capturas/admin-servico-manutencao-celular.png){: style="max-width:375px" }
{: .mt-4 }

A tela tem **três partes**:

1. **"Prazos"** — os dois números, com a explicação do efeito de cada um.
2. **"Organizações com contrato encerrado"** — uma linha por organização encerrada: quando foi encerrada, **quando será apagada**, se cada aviso saiu, e o que deu errado, se algo deu.
3. **"O que a rotina apagou"** — o que a rotina automática fez em cada passagem.

![Tela "Apagamento de organização encerrada", com os prazos 30 e 7, uma organização encerrada com a data do apagamento e o cartão "O que a rotina apagou"](/assets/capturas/admin-servico-retencao-organizacoes-desktop.png)
{: .mt-4 }

No celular:

![Tela "Apagamento de organização encerrada" no celular](/assets/capturas/admin-servico-retencao-organizacoes-celular.png){: style="max-width:375px" }
{: .mt-4 }

### Ajustar os prazos

Enquanto ninguém mexeu, a tela diz **"Ninguém alterou ainda: valem os padrões do produto (30 dias para apagar, aviso 7 dias antes)."**

1. Altere **"Apagar depois de — dias"** (padrão: 30) e/ou **"Segundo aviso, com antecedência de — dias"** (padrão: 7).
2. Clique em **"Salvar prazos"**. Aparece **"Prazos salvos. A próxima passagem da rotina já usa estes números."**

{: .warning }
**Os 30 dias são a promessa publicada na política de privacidade.** Os campos existem para o jurídico poder ajustar um número sem mexer no produto — não para você encurtar o prazo de uma organização específica: os números valem para **todas** as organizações. O segundo aviso precisa ser **menor** que o prazo de apagamento, senão ele sairia depois do fim; a tela recusa essa combinação.

### Ler o cartão "O que a rotina apagou"

Como no caso das [candidaturas](/admin-servico/retencao-candidaturas/#o-que-a-rotina-apagou-ler-o-estado-da-rotina), o cartão distingue estados que **parecem iguais e significam o oposto**:

| O que a tela diz | O que significa | O que fazer |
|---|---|---|
| **"A rotina de apagamento nunca rodou nesta instalação — nenhum ciclo foi registrado."** (aviso em vermelho) | Nenhuma passagem foi registrada. **Não é o mesmo que "não havia nada a apagar":** enquanto ela não roda, nenhuma organização encerrada é apagada no prazo, e a promessa da política de privacidade não está sendo cumprida. | Peça a quem cuida do servidor para conferir se o processo de fundo do Núcleo está no ar. |
| **"A rotina rodou em [data e hora] e não havia nada a apagar."** (etiqueta **"Nada a apagar"**) | Rodou, olhou e nenhuma organização tinha vencido. É o estado saudável. | Nada. |
| **"A última passagem começou em [data e hora] e não terminou"** (etiqueta **"Começou e não terminou"**) | A rotina começou e não chegou ao fim. Também **não é** "nada a apagar". | Confira se o processo de fundo continua no ar. |
| **"A última passagem, em [data e hora], falhou: [erro]"** (etiqueta **"Falhou"**) | A rotina tentou e deu erro. | Resolva a causa descrita; a próxima passagem tenta de novo. |

Quando houve trabalho, a tela resume, por exemplo: **"1 organização(ões) apagada(s), 1 com contrato encerrado acompanhada(s), 2 aviso(s) enviado(s)"** — e, se for o caso, **"N aviso(s) que NÃO saíram"** e **"N apagamento(s) interrompido(s) por falha de módulo"**.

{: .warning }
**"Nada a apagar" e "nunca rodou" são vizinhos enganosos.** Uma instalação onde a rotina não roda mostra uma lista de encerradas bem-comportada, com datas futuras — e **nada acontece quando a data chega**. Depois de encerrar o primeiro contrato numa instalação nova, confira o cartão de baixo.

## Quando o apagamento falha no meio

Se algum módulo **não confirmar** a remoção, o apagamento **daquela organização para ali**. Ela **continua marcada como encerrada**, a rotina **tenta de novo** na próxima passagem, e **nada fica pela metade e dado por pronto**. Na tela de acompanhamento, a organização ganha as etiquetas **"Apagamento em curso"** e **"Falhou"**, e uma frase em vermelho:

> O apagamento parou no módulo [nome], em [data e hora]: [erro] A organização continua marcada e a rotina tenta de novo — nada ficou pela metade e dado por pronto.

O que fazer: **nada, no primeiro momento** — a rotina retenta sozinha. Se a mesma frase continuar aparecendo passagem após passagem, o módulo citado está com problema (fora do ar, por exemplo) e precisa ser resolvido por quem cuida do servidor; depois disso, a próxima passagem conclui. **Não tente reabrir**: depois que o apagamento começou, o botão não existe — e é assim que deve ser.

## Quando dá errado

- **"Diga o motivo: decisão sem motivo não se audita."** — o motivo ficou em branco. Preencha e tente de novo.
- **"Não foi possível consultar o contrato desta organização."** — a janela não conseguiu perguntar o estado do contrato e, por isso, **não mostra botão nenhum** (para não decidir com informação velha). Feche e abra de novo; se persistir, o serviço pode estar fora do ar.
- **"Não foi possível mudar o contrato."** — nada foi alterado. Confira o estado atual na janela antes de tentar de novo.
- **"Não foi possível consultar o apagamento de organizações encerradas."** / **"Não foi possível salvar os prazos."** — na tela de acompanhamento; os prazos anteriores continuam valendo.
- **A antecedência do segundo aviso precisa ser menor que o prazo de apagamento** — ajuste os dois números para que o aviso saia antes do fim.

## Limites do papel

- Só quem **administra o serviço** encerra, reabre e ajusta prazos. A administração de uma organização não alcança nada disto.
- Quem administra o serviço **vê o cadastro e o estado do apagamento, nunca o conteúdo** da organização. Não há como "dar uma olhada" nos dados antes de apagar nem exportá-los em nome do gestor.
- Quem tentar abrir a tela sem a permissão vê a recusa de sempre da área: **"Você não administra o serviço."**

## Glossário

- **Encerrar o contrato** — marcar o fim da relação com a organização. É o que inicia a contagem de 30 dias. Diferente de **suspender**, que só interrompe o uso.
- **Reabrir o contrato** — desfazer o encerramento e cancelar o apagamento; só vale antes de o apagamento começar.
- **Apagamento** — a remoção definitiva dos dados da organização em todos os módulos, com os arquivos.
- **Registro mínimo** — o que sobra depois: a trilha de quem habilitou e desabilitou cada módulo e o pedido de criação da organização. Sem conteúdo.
- **Rotina de apagamento** — o processo automático do Núcleo que, sozinho, avisa e apaga no prazo.
- **Segundo aviso** — o lembrete por e-mail, sete dias antes (por padrão), que dá tempo de exportar.
