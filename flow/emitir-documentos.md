---
title: "Emitir, ver e anexar documentos"
nav_order: 5
parent: "RIT360 Flow"
permalink: /flow/emitir-documentos/
palavras_chave: "emitir documento, termo de adesão, emitir termo, conferir documento, prévia do documento, ver documento, documento vencido, documento vigente, anexar documento assinado, assinado fora do sistema, assinante externo, testemunha, quem é o responsável legal, falta dizer, antes de emitir falta, aba documentos, validade, assinatura por link"
---

# Emitir, ver e anexar documentos

Na ficha de uma pessoa ou de uma instituição há uma aba, **"Documentos"**, com tudo o que a
organização já emitiu ou guardou sobre ela. É de lá que você **emite** um documento novo, a partir de
um [modelo](/flow/documentos/), **vê** o que já saiu, e **anexa** um documento que foi assinado fora
do sistema.

## Por que isto importa

Um documento emitido é uma prova: diz que, naquele dia, com aquele texto, aquelas pessoas
constavam como signatárias. Por isso a emissão é rígida **antes** de acontecer — confere quem assina e
se há dado faltando — e depois **congela**: o documento emitido guarda o próprio texto, e nem editar o
modelo nem o tempo o alteram. O que você emite hoje é o que estará lá daqui a cinco anos.

## Onde fica

- **Pessoa:** em [Pessoas](/pessoas/), abra a ficha e escolha a aba **"Documentos"** (ao lado de
  **"Dados e contato"** e **"Classificação e situação"**).
- **Instituição:** em [Instituições](/instituicoes/), abra a ficha; o bloco **"Documentos"** fica na
  mesma tela.

A aba só aparece com o **Flow ligado** para a organização e para quem tem permissão sobre documentos
— hoje, quem administra a organização. Sem a permissão, quem abre a aba lê *"Você não tem permissão
para ver os documentos desta organização."*

<!-- CAPTURA: rota=/pessoas/<identificador>?aba=documentos | viewport=1920x1080 | o-que-mostrar=A aba Documentos da ficha de uma pessoa, com os botões "Emitir documento" e "Anexar documento assinado", um documento "Emitido aqui" e "Vigente", o termo de adesão com o distintivo, e um documento anexado com "Anexado — assinado fora do sistema" | arquivo=flow-documentos-aba-desktop.png -->
<!-- CAPTURA: rota=/pessoas/<identificador>?aba=documentos | viewport=375x812 | o-que-mostrar=A mesma aba no celular | arquivo=flow-documentos-aba-celular.png -->

## O que a lista mostra

Cada documento aparece com seu **título** e as marcas que dizem o que ele é:

- **"Emitido aqui"** — foi emitido por esta organização, neste sistema.
- **"Anexado — assinado fora do sistema"** — veja [Anexar](#anexar-um-documento-assinado-fora-do-sistema).
- **"Termo de adesão"** — veio do modelo marcado como termo de adesão.
- **"Vigente"** ou **"Vencido"** — **todo documento tem validade**, e a lista diz em que pé está.

Embaixo do título, a data: **"Emitido em 13/10/2026 · vale até 13/10/2027"** (ou **"venceu até…"** para
o vencido). Sem nada emitido, a aba diz **"Nenhum documento ainda."**

{: .note }
**Esta lista não tem seleção em lote, de propósito.** Documento emitido nunca se apaga nem se altera,
então não há o que fazer em vários de uma vez além de abrir cada um. As ações são por documento.

## Antes de emitir o primeiro termo de adesão

O termo de adesão do voluntário (**"Termo de Adesão de Trabalho Voluntário"**) usa dados que a
organização precisa ter preenchidos **antes**. Se faltar algum, a emissão **recusa e lista o que
falta**, em vez de imprimir um documento com buraco. Trate isto como um **passo preparatório**, e não
como um erro a descobrir na hora:

1. **A razão social e o e-mail de contato da organização** — em
   [Dados e identidade da organização](/configuracoes/organizacao/).
2. **O CNPJ, o endereço e quem assina pela organização (o representante, com o cargo)** — em Flow ›
   Configurações › Documentos, no bloco **"Quem assina pela organização"** (veja
   [Modelos de documento](/flow/documentos/#quem-assina-pela-organização)). A ficha do representante
   em [Pessoas](/pessoas/) precisa ter **CPF**, porque o termo o cita.
3. **Na ficha da pessoa que vai assinar o termo: o CPF e o endereço**, que o texto também usa.
4. **As frentes de trabalho da pessoa.** O termo cita as áreas em que ela vai atuar, e elas **vêm da
   candidatura aprovada**: uma pessoa cadastrada à mão, sem passar por uma candidatura aprovada, não
   tem frentes, e o termo dela **não sai**. A mensagem é *"a pessoa não tem candidatura de
   voluntariado aprovada que indique as áreas (elas vêm da candidatura)"*. Veja
   [Candidaturas](/flow/candidaturas/).

{: .important }
**Emitir o termo de adesão ainda não muda a situação da pessoa.** O sistema já reconhece o termo — é o
modelo com o distintivo —, mas a regra que o liga à situação (em atuação, afastada, desligada) não
existe ainda. A situação continua mudando só por ato seu, em
[Classificação e situação](/pessoas/classificacao-e-situacao/).

## Emitir um documento

1. Abra a ficha da pessoa (ou da instituição) e a aba **"Documentos"**.
2. Clique em **"Emitir documento"**. A janela diz **"Sobre <nome>. Nada é enviado a ninguém: o
   documento fica guardado aqui, com o texto já preenchido."**
3. Em **"Qual documento"**, escolha o modelo. A lista traz só os modelos daquele tipo de ficha; o
   termo vem marcado **"(termo de adesão)"**. Se não há nenhum, a janela avisa **"Não há modelo para
   pessoas."** (ou **"…para instituições."**) e manda para Flow › Configurações › Documentos.
4. **Responda a cada papel do modelo.** Para cada um, a tela pergunta em português — **"Quem é:
   responsável legal?"**, **"Quem é: testemunha?"** — e você escolhe como preenchê-lo (veja abaixo).
5. Em **"Vale até"**, deixe em branco para valer pelo prazo do modelo (a tela diz quantos dias) ou
   escolha uma data.
6. Clique em **"Conferir"**. Ou a tela mostra **"Tudo certo."** e a **prévia** do documento, com o
   texto já preenchido, ou lista o que falta (próxima seção).
7. Com tudo certo, clique em **"Emitir documento"**. A tela confirma: **"Documento «…» emitido e
   guardado. Nada foi enviado a ninguém."**

O botão **"Emitir documento"** da janela só liga depois de uma conferência que deu certo — e a
conferência se refaz a cada mudança que você faz.

### Como preencher cada papel

Cada papel que o modelo declara pode ser preenchido de **três** maneiras:

- **"Pessoa do cadastro"** — busque pelo nome (ao menos duas letras) em [Pessoas](/pessoas/). O campo
  **"Cargo (só se o texto o usa)"** é opcional.
- **"Instituição do cadastro"** — busque em [Instituições](/instituicoes/). Útil quando quem assina é
  uma empresa ou uma OSC.
- **"Assinante externo (digitar)"** — para quem assina **uma vez e não volta**: a testemunha
  eventual, o responsável de uma instituição que não está no cadastro. Digite **"Nome"**, **"CPF"** e
  **"E-mail"** (obrigatórios), e **"Empresa"** e **"Cargo"** (quando o texto os usa).

{: .important }
**O assinante externo não entra na lista de Pessoas** — e é de propósito. Entrar na lista é virar
pessoa da organização, com situação, classificação, termo e credencial; é peso demais para quem
assinou uma vez. Os dados dele (nome, CPF, e-mail) ficam **só neste documento**. Se a mesma pessoa vai
assinar de novo e de novo, cadastre-a em [Pessoas](/pessoas/) e use **"Pessoa do cadastro"**.

#### Quem assina pela organização

O papel marcado no modelo como **"É quem assina pela organização"** não pergunta nada: a tela diz
**"Assina pela organização: <nome>, <cargo>."** — o representante que você deixou configurado. Se
naquele documento quem assina é outra pessoa da organização (o coordenador que assina no lugar da
presidente, por exemplo), clique em **"Assina outra pessoa da organização"**, escolha quem assina e
o **"Cargo, como deve sair impresso"**. **"Voltar para <nome>"** desfaz a troca.

Se ninguém foi definido, a tela diz **"Ninguém está definido para assinar pela organização. Defina em
Flow › Configurações › Documentos, ou escolha alguém abaixo."**

### Quando a conferência recusa

O **"Conferir"** e o **"Emitir documento"** recusam sem emitir nada, e mostram **"Antes de emitir,
falta:"** seguido da **lista inteira** do que falta, de uma vez — não uma coisa por tentativa:

- **"Falta dizer: <papel>."** — um papel do modelo não foi preenchido. **Isto é uma proteção, não
  um obstáculo:** documento com papel vazio é documento que parece assinado por alguém e não tem quem
  responda por ele.
- **"O texto do documento usa «CPF da pessoa», e a pessoa não tem CPF cadastrado."** — o texto cita um
  dado e a ficha não o tem. Preencha na ficha e confira de novo. O que o texto **não** usa nunca é
  pedido.
- **"Diga quem assina pela organização: escolha uma pessoa aqui, ou defina o representante em Flow ›
  Configurações › Documentos."**
- **"O CNPJ da organização não está informado em Flow › Configurações › Documentos."** (e o mesmo para o
  endereço)
- **"A razão social não está preenchida na ficha da organização"** / **"a organização não tem e-mail
  de contato cadastrado"**.
- **"A pessoa escolhida como «Testemunha» não foi encontrada no cadastro."** — a ficha foi removida
  entre a escolha e a emissão.
- **"O texto do modelo usa `{% raw %}{{campo}}{% endraw %}`, que não existe mais para este modelo. Corrija o modelo antes de
  emitir."** — o modelo foi mudado depois; ajuste-o em [Modelos de documento](/flow/documentos/).
- **"CPF inválido."** / **"E-mail inválido."** — no assinante externo.
- **"A validade não pode ser anterior a hoje."**

## Ver um documento emitido

Em **"Ver documento"**, a janela abre o documento **com o texto da hora da emissão**, as datas e
quem assina (nome e papel de cada um). É o texto congelado: se o modelo mudou depois, você continua
lendo o que foi emitido.

## Anexar um documento assinado fora do sistema

Às vezes o documento foi assinado no papel, ou em outra ferramenta, e a organização quer **guardá-lo
junto da ficha**. Para isso serve **"Anexar documento assinado"**:

1. Na aba **"Documentos"**, clique em **"Anexar documento assinado"**.
2. Preencha o **"Título"**, a **"Descrição (opcional)"** e **"Vale até"** (toda anexação tem validade).
3. Escolha o **"Arquivo (PDF, PNG ou JPEG, até 10 MB)"**.
4. Clique em **"Anexar"**. A tela confirma: **"Documento «…» anexado. Ele não tem trilha de assinatura
   neste sistema."**

O documento anexado aparece com a marca **"Anexado — assinado fora do sistema"** e a frase **"Sem
trilha de assinatura neste sistema: ninguém aceitou nada aqui."** O botão dele é **"Baixar <nome do
arquivo>"**, não "Ver documento".

{: .warning }
**Anexado não é emitido, e a diferença é de garantia.** Num documento emitido aqui, o sistema sabe o
texto exato, quem constava como signatário e quando. Num anexado, **ninguém aceitou nada neste
sistema**: não há registro de quem aceitou, quando e de onde — o arquivo é só o que alguém subiu. Por
isso a marca é diferente e a frase está sempre embaixo: se parecesse igual aos emitidos, alguém suporia
a mesma garantia. Quando precisar provar que alguém aceitou, o documento anexado prova só o que o
arquivo mostra.

## O que ainda não existe

O documento é **emitido e guardado**. Hoje a organização **ainda não consegue**:

- **colher a assinatura ou o aceite por um link**, enviado à pessoa por e-mail ou mensagem;
- aplicar **selo e carimbo do tempo** que atestem o documento;
- gerar o documento em **PDF com cabeçalho e rodapé**.

Nada é enviado a ninguém na emissão — a própria janela diz isso. Quem precisa de uma assinatura de
verdade hoje emite o documento aqui para ter o texto exato, colhe a assinatura por fora e **anexa** o
resultado assinado.

## Exemplo

Maria Oliveira vai emitir o **termo de adesão** de Helena Barros, voluntária cuja candidatura foi
aprovada para a frente **Comunicação**.

1. Abre a ficha da Helena, aba **"Documentos"**, e clica em **"Emitir documento"**.
2. Em **"Qual documento"**, escolhe **"Termo de Adesão de Trabalho Voluntário (termo de adesão)"**. O termo tem um papel, o da
   organização: a tela diz **"Assina pela organização: Maria Oliveira, Presidente."**
3. Clica em **"Conferir"** e vê **"Tudo certo."** com a prévia: o texto já traz o nome da Helena, o CNPJ
   do Instituto Semente e **"Comunicação"** como área de atuação.
4. Clica em **"Emitir documento"**. A aba passa a listar o termo, com **"Emitido aqui"**, **"Termo de
   adesão"** e **"Vigente"**, e a frase **"Documento «Termo de adesão» emitido e guardado. Nada foi
   enviado a ninguém."**

Para um voluntário cuja ficha foi cadastrada à mão, o **"Conferir"** responderia **"Antes de emitir,
falta:"** e, embaixo, a mensagem das áreas de atuação — o sinal de que ele nunca passou por uma
candidatura aprovada.

## Dicas e armadilhas

- **Sempre clique em "Conferir" antes de emitir.** A conferência não grava nada, mostra a prévia
  exata e lista tudo o que falta de uma vez. Emitir, não, é definitivo.
- **Documento emitido não se corrige: emite-se outro.** Errou o nome de uma testemunha? Emita um novo
  com o nome certo. O anterior fica, com a data e o texto que tinha — esse é o ponto de ele existir.
- **Uma testemunha que volta sempre merece cadastro.** Se a mesma pessoa assina em muitos documentos,
  digitá-la como externa a cada vez é retrabalho e abre espaço para erro de CPF.
- **Confira a data do "Vale até".** Todo documento tem validade, e o que vence passa a aparecer como
  **"Vencido"**. Vencer não apaga nem desfaz nada, e **um documento que vence nunca muda a situação de
  ninguém**.
- **Não use "Anexar" para fugir da emissão.** Anexar é para o que **já está** assinado fora. Se o
  documento ainda vai ser assinado, emita aqui e depois anexe a versão assinada.

## Quando dá errado

- **"Você não tem permissão para ver os documentos desta organização."** — a sua permissão não alcança
  documentos; peça a quem administra a organização.
- **"Você não tem permissão para buscar no cadastro de pessoas."** (ou **"…de instituições."**) — você
  pode emitir, mas não consultar o cadastro para escolher quem assina; peça a permissão, ou peça a
  quem a tem que escolha.
- **"Este modelo foi apagado enquanto o documento era emitido."** — alguém apagou o modelo no meio; a
  emissão não saiu. Escolha outro modelo.
- **"Esta pessoa não foi encontrada."** / **"Esta instituição não foi encontrada."** — a ficha foi
  removida. Volte à lista.
- **"Não foi possível carregar os documentos."** / **"Não foi possível emitir."** / **"Não foi possível
  conferir."** — recarregue e tente de novo; se persistir, avise pelo [feedback](/enviar-feedback/).
- **"Escolha o arquivo."** — faltou o arquivo ao anexar.

## Limites do papel

Quem **administra a organização** vê, emite e anexa. Quem tem só a permissão de **ver** documentos lê a
lista e abre os emitidos, mas não encontra **"Emitir documento"** nem **"Anexar documento assinado"**.
Os **modelos** (criar, editar, apagar) e o **"Quem assina pela organização"** pedem outra permissão, a de
configurar, descrita em [Modelos de documento](/flow/documentos/).
