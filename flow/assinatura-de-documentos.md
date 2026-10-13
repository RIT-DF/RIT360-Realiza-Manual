---
title: "Colher a assinatura de um documento"
nav_order: 6
parent: "RIT360 Flow"
permalink: /flow/assinatura-de-documentos/
palavras_chave: "assinar documento, enviar para assinatura, assinatura por link, aceite, aceitar documento, selo, documento selado, código de conferência, conferir documento, certificado digital, hash eletrônico, reenviar link, cópia do documento, assinante externo, termo de adesão assinado, aguardando aceites, sem selo"
---

# Colher a assinatura de um documento

Depois de [emitir um documento](/flow/emitir-documentos/), você o envia **para assinatura**: cada
parte recebe, por e-mail, um link próprio, lê o documento e aceita. Quando todas aceitam, o documento
é **selado** e cada uma recebe a cópia. Esta página mostra o caminho inteiro — e, com a mesma
importância, **o que o selo prova e o que ele não prova**.

## Por que isto importa

Um documento só emitido é um texto guardado: diz o que a organização escreveu, mas não que alguém
concordou. Colher o aceite por link faz o documento ter **trilha** — quem aceitou, quando e de qual
endereço de rede — sem papel, sem impressora e sem a pessoa ter de criar conta. Para a voluntária que
só assina o termo e some por meses, é o jeito de a organização ter um registro que se sustenta quando
alguém perguntar, mais tarde, "ela chegou a concordar com isto?".

Mas existe um limite que você precisa conhecer antes de mandar um documento a um terceiro: **o selo da
plataforma registra o aceite eletrônico; ele não é uma assinatura com certificado digital e não
confirma a identidade de ninguém.** A seção [O que o selo diz e o que ele não diz](#o-que-o-selo-diz-e-o-que-ele-não-diz)
detalha.

## Antes de enviar

O documento precisa estar **emitido** — o botão de assinatura não existe para os
[anexados](/flow/emitir-documentos/#anexar-um-documento-assinado-fora-do-sistema). E precisa de
permissão para emitir documentos: quem só pode ver acompanha a assinatura, mas não encontra o botão de
enviar.

Confira também a **forma de assinatura** que a organização escolheu (veja
[Escolher com que assinar](#escolher-com-que-assinar)). Hoje só o selo da plataforma funciona.

## Enviar para assinatura

1. Abra a ficha da pessoa (ou da instituição) e a aba **"Documentos"**.
2. Na linha do documento, clique em **"Assinatura"**. Abre a janela **"Assinatura — <título do
   documento>"**.
3. A janela lista **quem vai receber**: cada pessoa que assina (com o papel entre parênteses) e a pessoa
   ou instituição de quem o documento trata. Confira os nomes — cada uma recebe **o próprio link**, e o
   link dá acesso só ao documento dela.
4. Leia o aviso da janela: *abrir o link só mostra o documento; o aceite é um segundo passo, que a própria
   pessoa dá na página*.
5. Clique em **"Enviar para assinatura"**. A tela confirma **"Convites criados. Os e-mails saem em
   instantes."**

<!-- CAPTURA: rota=/pessoas/<identificador>?aba=documentos (botão "Assinatura") | viewport=1920x1080 | o-que-mostrar=A janela "Assinatura" antes do envio, com os nomes e papéis de quem vai receber e o botão "Enviar para assinatura" | arquivo=flow-assinatura-enviar-desktop.png -->

{: .note }
A tela de assinatura não tem seleção em lote, de propósito: a unidade é **um documento** e as poucas
partes dele. As ações são por parte (reenviar o link) e do documento (enviar, tentar selar de novo,
baixar).

## O que cada parte vê e por que abrir não basta

<!-- CAPTURA: rota=/assinar/<token> (link de teste) | viewport=1920x1080 e 375x812 | o-que-mostrar=A página do link com o documento, o aviso "nada foi assinado ainda", o campo "Seu nome completo", a caixa de concordância e o botão "Aceitar o documento" | arquivo=flow-assinatura-aceite-desktop.png / flow-assinatura-aceite-celular.png -->

A parte recebe um e-mail com o link. Ao abri-lo, vê o documento inteiro e, embaixo, a seção **"Aceitar o
documento"**. A página avisa: **"nada foi assinado ainda"**. Para aceitar, a pessoa precisa:

1. **Digitar o nome completo** em **"Seu nome completo"**; e
2. **Marcar a caixa** *"Li o documento acima e concordo com o que está escrito nele."*; e
3. Clicar em **"Aceitar o documento"**.

O aceite registra o nome digitado, o dia, a hora e o endereço de rede de onde a pessoa acessou.

{: .important }
**Abrir o link não é aceitar — e isso é de propósito.** Programas de antivírus e de segurança de e-mail
abrem os links das mensagens sozinhos, para verificar se são seguros. Se abrir bastasse, um robô
poderia dar o aceite no lugar da pessoa, e o documento ficaria "assinado" sem que ninguém o tivesse lido.
Por isso o aceite é um segundo ato, que só um humano faz: digitar o nome e marcar a caixa.

Quem **não tem conta** assina do mesmo jeito — o assinante externo (a testemunha, o responsável de uma
instituição que não está no cadastro) recebe o link e aceita sem criar nada.

Depois do aceite, a página diz quantas partes ainda faltam. Quando todas aceitam, ela passa a mostrar
**"Documento aceito por todas as partes e selado"**, com o código de conferência, o botão **"Baixar o PDF
com o histórico"** e o link **"Conferir o documento"**.

### Quem tem conta também assina pelo "Para mim"

Se a parte **tem conta** na plataforma, o documento também aparece na tela [Para mim](/para-mim/), na
seção **"Flow"**, com o título, **"Espera a sua assinatura há N dias."** e o botão **"Assinar"**. É a
segunda porta, para o e-mail que se perdeu: o documento aparece lá **mesmo que o e-mail nunca tenha
chegado**.

- **O link do e-mail continua valendo.** Assinar ou abrir pelo "Para mim" não o invalida, e as duas
  portas dão o mesmo aceite, com o mesmo registro.
- **A página é a mesma, e abrir também não assina:** *"Abrir esta página só mostra o documento: nada foi
  assinado ainda."* O aceite é o segundo ato, com nome e caixa marcada.
- **Quem não tem conta não tem "Para mim"** — o assinante externo só tem o e-mail, e é para ele que o
  **"Reenviar o link"** existe.
- **Pelo "Para mim" não há botão de baixar o PDF.** O PDF selado continua indo por e-mail e pelo link, e
  **"Conferir o documento"** continua na página.
- **Documento encerrado ou vencido não aparece**; pelo endereço direto a tela diz **"Documento não
  encontrado"** / **"Este documento não está esperando a sua assinatura."**

Passo a passo e capturas em [Assinar um documento pelo "Para mim"](/para-mim/#assinar-um-documento-pelo-para-mim).

## Acompanhar

Volte à janela **"Assinatura"** (ou abra a aba "Documentos": a lista já mostra o estado). O resumo diz,
por exemplo, **"Hash eletrônico da plataforma · 1 de 3 aceitaram"**, com um destes selos:

- **"Aguardando aceites"** — falta pelo menos uma parte.
- **"Todos aceitaram — falta selar"** — os aceites estão completos e o selo está a caminho.
- **"Selado"** — pronto: o documento foi selado.
- **"Sem selo"** — todos aceitaram, mas o documento não pôde ser selado (veja
  [Quando dá errado](#quando-dá-errado)).

Embaixo, **cada parte** aparece com a situação dela:

| O que a tela diz | O que significa |
|---|---|
| **"link ainda não enviado"** | O convite foi criado e o e-mail ainda não saiu. A tela diz para qual endereço será enviado. |
| **"link enviado, aguardando o aceite"** | O e-mail saiu (com o dia e o endereço de destino) e a pessoa ainda não aceitou. |
| **"aceitou em 13/10/2026 …"** | A parte aceitou, com dia e hora. |
| **"Cópia entregue em …"** | Depois do selo: a cópia do documento chegou a essa parte. |

Se uma parte demora, o botão **"Reenviar o link"** manda um novo e-mail — e **o link anterior deixa de
valer**. Use quando o e-mail se perdeu ou o link expirou: a página do link vencido avisa que ele já não
aceita o documento e que é preciso pedir a quem enviou que mande de novo.

### Falha nunca aparece como entrega

Cada parte recebe, depois do selo, **a cópia do documento por um link**. Se essa entrega falha, a tela
diz a verdade na linha da parte: **"A cópia do documento ainda não foi entregue: <motivo>. A plataforma
tenta de novo."** Do mesmo modo, se o convite não conseguiu sair, a linha diz **"O e-mail ainda não
saiu: <motivo>. A plataforma tenta de novo."**

{: .tip }
O produto prefere dizer que **não conseguiu** a deixar você achando que a pessoa recebeu. Uma linha sem
a data de **"Cópia entregue em …"** não é detalhe de acabamento: é a pessoa que ainda não tem o
documento nas mãos. Se persistir por muitas horas, avise pelo [feedback](/enviar-feedback/).

## O que o selo diz e o que ele não diz

Quando todas as partes aceitam, a plataforma **sela** o documento. Na janela, a seção **"Selo"** mostra
o texto exato, a data e a hora e o **código de conferência**. O texto do selo diz, em resumo:

- que o documento foi **aceito eletronicamente** pelas partes listadas no histórico, **em cada data e
  hora ali registradas**;
- que foi **selado pela plataforma RIT360** em tal instante (horário de Brasília);
- o **código de conferência** e um **resumo do conteúdo** (um código de 64 caracteres que muda se uma
  única vírgula do documento mudar);
- e, **com todas as letras**: *"Este selo é da plataforma e registra o aceite eletrônico das partes: não
  é assinatura com certificado digital, e a plataforma não verificou, junto a nenhuma autoridade, a
  identidade de quem aceitou."*

{: .warning }
**Leia isto de novo antes de mandar um documento selado a um terceiro.** O selo prova que, **naquela
data, com aquele texto, alguém que abriu aquele link digitou aquele nome e marcou a caixa**. Ele
**não** prova que a pessoa que digitou é a pessoa que o nome indica: a plataforma **não conferiu a
identidade de ninguém** junto a nenhuma autoridade, e o documento **não é assinado com certificado
digital** (aquele que a lei reconhece como assinatura qualificada). Também **não há carimbo do tempo de
autoridade externa**: a tela do selo diz, à parte, *"Sem carimbo do tempo de autoridade externa"*.

O que isso significa na prática:

- Para a maioria dos usos internos — o termo de adesão de uma voluntária, uma autorização de imagem —,
  o aceite por link é uma **trilha séria e muito melhor do que um documento só guardado**. Mas é um
  registro de aceite eletrônico, não uma prova de identidade.
- Se o documento será apresentado a um banco, a um órgão público ou a um juiz, **ou se a lei ou o
  contrato exigem assinatura com certificado digital**, o selo da plataforma não basta. Peça orientação a
  quem cuida do jurídico da organização antes.
- Um documento **anexado** — assinado fora do sistema — **não tem nem esta trilha**. Ele aparece com a
  marca *"Sem trilha de assinatura neste sistema: ninguém aceitou nada aqui."* O sistema só guardou o
  arquivo.

## Conferir um documento selado

Qualquer pessoa pode conferir um documento selado, **sem entrar no sistema e sem ter conta**, pela
página **"Conferir um documento"**. O caminho mais curto é o link **"Conferir o documento"** que a
própria parte vê depois do selo; quem tem a janela de assinatura aberta usa **"Abrir a conferência
pública"**.

<!-- CAPTURA: rota=/conferir/<codigo> | viewport=1920x1080 | o-que-mostrar=A página "Conferir um documento" de um documento selado de teste, com quem aceitou e a seção "O que o selo afirma" | arquivo=flow-conferir-documento-desktop.png -->

1. Na página **"Conferir um documento"**, digite o **"Código de conferência"** (o formato é
   `XXXX-XXXX-XXXX-XXXX`) e clique em **"Conferir"**.
2. A página mostra o título do documento, a organização, **quando foi selado**, **quem aceitou e quando**
   e a seção **"O que o selo afirma"** — o mesmo texto do selo, com o limite à vista.
3. Para saber se **o arquivo que você tem** é o documento selado, use a seção **"O seu arquivo é este
   documento?"** e escolha o PDF. A resposta é **"O arquivo é idêntico ao documento selado."** ou **"Este
   arquivo NÃO é o documento selado: o conteúdo é diferente."**

{: .tip }
A conferência vale para quem **recebe** o documento: um banco, um parceiro ou a própria organização
daqui a três anos podem digitar o código e ver se o PDF que têm em mãos é o que foi selado — um
documento alterado depois do selo não confere.

## Escolher com que assinar

A organização escolhe a **forma de assinatura** em **Flow › Configurações › Documentos**, no bloco
**"Quem assina pela organização"**, na parte **"Com que assinar os documentos"**. Há duas:

- **"Hash eletrônico da plataforma"** — o selo descrito acima. **É o que funciona hoje.**
- **"Certificado A1 da ICP-Brasil"** — a assinatura com o certificado digital da organização.
  **Ainda não está disponível**: a opção aparece com a explicação *"Indisponível: …"*.

{: .important }
**Se a organização escolher o certificado digital, o envio para assinatura é recusado com uma
explicação, e nada é enviado a ninguém — e isso é de propósito.** O documento **nunca sai selado pela
outra forma sem a organização pedir**: a plataforma não troca, em silêncio, uma assinatura com
certificado por um selo mais fraco só para "dar certo". A mensagem diz que o certificado não está
disponível nesta instalação e orienta a escolher o selo da plataforma, se for essa a vontade da
organização. A tela da assinatura também mostra a forma configurada e mantém o botão **"Enviar para
assinatura"** parado enquanto ela estiver indisponível.

## Exemplo

Maria Oliveira emitiu o termo de adesão de **Helena Barros** e quer colher o aceite da Helena e o de
uma testemunha, **Carlos Nunes**, que também trabalha no Instituto Semente.

1. Na aba **"Documentos"** da ficha da Helena, Maria clica em **"Assinatura"** no termo e confere a
   lista: Maria (pela organização), Carlos (testemunha) e Helena (a pessoa de quem o documento trata).
2. Clica em **"Enviar para assinatura"**. A tela confirma que os convites foram criados.
3. Cada um recebe um e-mail com o **próprio** link. Helena abre, lê, digita o nome completo, marca a caixa
   e clica em **"Aceitar o documento"**. Carlos faz o mesmo. (Se a testemunha fosse alguém de fora, sem
   conta — um assinante externo —, o caminho dela seria idêntico.)
4. Maria acompanha: **"2 de 3 aceitaram"**, depois **"3 de 3"**, e o selo **"Selado"** aparece com o
   código de conferência.
5. Duas das três linhas mostram **"Cópia entregue em …"**. Na terceira, a tela diz **"A cópia do
   documento ainda não foi entregue: …"**. Maria sabe que essa parte ainda não tem o documento e espera a
   plataforma tentar de novo — em vez de supor que todas receberam.

## Dicas e armadilhas

- **Confira os e-mails antes de enviar.** O link vai para o endereço que consta no documento. Um e-mail
  digitado errado na emissão manda o link para outra pessoa — que poderia aceitar no lugar da certa. Em
  caso de dúvida, emita de novo com o endereço correto.
- **Digitar o nome não é o mesmo que provar quem é.** Para documento de pouco risco isso basta; para
  documento de muito risco, combine com outra forma de identificar a pessoa.
- **Se a parte tem conta, ela não depende só do e-mail.** O documento aparece no "Para mim" dela. Se
  alguém diz que não recebeu, peça que abra "Para mim" antes de reenviar o link — reenviar invalida o
  anterior. Para quem não tem conta, reenviar é o único caminho.
- **"Reenviar o link" invalida o anterior.** Se a pessoa já abriu o e-mail antigo, ela precisa usar o
  novo.
- **Não mande o PDF selado como se fosse assinado digitalmente.** Quem o receber pode presumir
  assinatura qualificada. Diga o que ele é: um documento aceito eletronicamente e selado pela plataforma,
  com código de conferência.
- **Documento que ainda espera aceite não vale.** Enquanto falta alguma parte aceitar, a lista de
  documentos o marca como **"Ainda não vale — faltam aceites"**. Veja
  [Quanto tempo vale, encerrar e reabrir](/flow/vigencia-do-termo/).

## Quando dá errado

- **A janela mostra um aviso vermelho com o motivo, e o botão "Enviar para assinatura" não liga.** A
  forma de assinatura escolhida não pode ser aplicada. Em Flow › Configurações › Documentos, escolha
  **"Hash eletrônico da plataforma"**, se for essa a vontade da organização.
- **"Você pode acompanhar a assinatura, mas não enviar: falta a permissão de emitir documentos."** —
  peça a quem administra a organização.
- **"O documento ficou sem selo."** — todos aceitaram, mas o selo não pôde ser aplicado. O motivo aparece
  na mesma caixa. Quem tem permissão de emitir vê o botão **"Tentar selar de novo"**, que devolve o
  documento à fila (**"Devolvido à fila: a plataforma tenta selar de novo."**). Os aceites continuam
  registrados.
- **"O PDF ainda não foi gerado e a plataforma vai tentar de novo."** — o selo existe, mas o arquivo ainda
  não. Aguarde e clique em **"Atualizar"**.
- **"A cópia do documento ainda não foi entregue: <motivo>. A plataforma tenta de novo."** — a parte
  ainda não recebeu o documento selado. Nada a fazer além de esperar; se o motivo apontar um endereço
  de e-mail errado, corrija o cadastro e avise pelo [feedback](/enviar-feedback/).
- **"O e-mail ainda não saiu: <motivo>. A plataforma tenta de novo."** — o convite não saiu. Se o motivo
  indicar o endereço, verifique-o.
- **Na página do link — "Este link expirou e já não aceita o documento."** — peça a quem enviou que mande
  o link de novo ("Reenviar o link").
- **"Não há documento selado com este código."** (na conferência) — confira se digitou o código inteiro.
  Um documento só tem código depois que todas as partes aceitam e ele é selado.
- **"Não foi possível carregar a assinatura."** / **"Não foi possível concluir."** — recarregue; se
  persistir, avise pelo [feedback](/enviar-feedback/).

## Limites do papel

Quem **administra a organização** emite, envia para assinatura, reenvia links e manda selar de novo.
Quem tem só a permissão de **ver** documentos acompanha a assinatura, mas não encontra os botões de
envio. Escolher a **forma de assinatura** pede a permissão de configurar documentos, descrita em
[Modelos de documento](/flow/documentos/). **A parte que assina não precisa de conta nem de permissão
nenhuma**: o link é o acesso, e só ao documento dela.
