---
title: "Candidaturas: receber e decidir"
nav_order: 1
parent: "RIT360 Flow"
permalink: /flow/candidaturas/
palavras_chave: "candidatura, voluntário, quero ser voluntário, aprovar candidatura, reprovar candidatura, parecer, conflito de e-mail, mesma pessoa, consentimento, adesão de OSC, credenciamento, fila de candidaturas, retida, repetir a entrega, quem decidiu"
---

# Candidaturas: receber e decidir

Aba **"Candidaturas"** do [Flow](/flow/). É onde chega, e onde se decide, o pedido de quem quer
entrar na órbita da organização: **uma pessoa** que quer ser voluntária (ou colaborar por uma
organização integrada), **uma OSC** que quer aderir à rede, ou **uma empresa ou profissional** que
quer ser credenciado para oferecer serviços. Os três chegam ao **mesmo lugar**, porque é o mesmo
ato: alguém pede, o sistema faz um parecer automático, e **uma pessoa decide**.

## Por que isto importa

Antes, a candidatura chegava por e-mail, e quem recebia redigitava os dados numa planilha, decidia
por um link dentro da mensagem e perdia o rastro do que tinha acontecido. Três coisas mudaram:

- **Ninguém redigita.** O que a pessoa preencheu no site chega inteiro aqui, com o parecer
  automático ao lado.
- **A decisão é em tela, e fica registrada: quem decidiu, quando e por quê.** Decidir por um link
  de e-mail funcionava para **qualquer pessoa que recebesse a mensagem encaminhada** e não
  registrava quem foi. Em tela, só decide quem tem a permissão — e a decisão leva o nome de quem a
  tomou.
- **Aprovar não duplica ninguém.** Aprovar cria a ficha da pessoa (ou a instituição) no cadastro,
  ou **liga à que já existe** — o sistema acha pelo CPF ou pelo CNPJ.

## A fila

A aba abre em **"Aguardando decisão"**. No alto, a frase que importa: **"N candidaturas esperam
decisão — a mais antiga espera há N dias."**

Acima da lista há três botões para escolher o que mostrar — **"Aguardando decisão"**,
**"Decididas"** e **"Todas"** — e um seletor **"Tipo"** (**"Todos"**, **"Voluntariado"**,
**"Colaborador de organização integrada"**, **"Adesão de organização"** e **"Credenciamento"**).
Cada candidatura é um cartão com o nome, o tipo, o parecer (**"Parecer: apto"**, **"Parecer:
inapto"**, **"Parecer: inconclusivo"** ou **"Parecer não disponível"**), há quanto tempo espera e a
situação:

| Situação | O que significa |
|---|---|
| **Aguardando decisão** | Chegou e ninguém decidiu. |
| **Retida por conflito** | O e-mail dela já pertence a outra pessoa. Veja [Conflito de e-mail](#conflito-de-e-mail). |
| **Aprovada** / **Reprovada** | Decidida; a decisão é definitiva. |
| **Aprovada — disparo em andamento** / **Reprovada — disparo em andamento** | A decisão foi tomada, mas o aviso dela ainda não terminou de seguir para a automação. |
| **Aprovada — disparo falhou** / **Reprovada — disparo falhou** | A decisão está registrada, mas **não chegou** a quem precisa. Veja [Quando a decisão não chega](#quando-a-decisão-não-chega). |

{: .note }
Esta lista **não tem ação em lote, de propósito.** Aprovar e reprovar levam mensagem à pessoa,
motivo e escolhas próprias de cada candidatura; decidir "todas de uma vez" esconderia exatamente o
que a decisão em tela existe para registrar.

<!-- CAPTURA: rota=/flow/candidaturas | viewport=1920x1080 | o-que-mostrar=A fila com a frase "N candidaturas esperam decisão — a mais antiga espera há N dias", os filtros e cartões de tipos e pareceres diferentes (uma retida por conflito) | arquivo=flow-candidaturas-fila-desktop.png -->
<!-- CAPTURA: rota=/flow/candidaturas | viewport=375x812 | o-que-mostrar=A mesma fila no celular | arquivo=flow-candidaturas-fila-celular.png -->

Fila vazia não é defeito: em **"Aguardando decisão"** a tela diz **"Nenhuma candidatura aguardando
decisão."** (nas outras duas, **"Nenhuma candidatura por aqui."**) e, abaixo, que quando chegar uma
o sistema avisa quem foi escolhido — não é preciso ficar procurando.

## Abrir uma candidatura

Clique no cartão. A tela de uma candidatura tem, de cima para baixo:

1. **O cabeçalho** — o nome, o tipo, quanto tempo espera e quando chegou.
2. **"Parecer automático"** — o resultado (**Apto**, **Inapto**, **Inconclusivo** ou **Não
   disponível**), o resumo e os itens que o sustentam.
3. **"O que foi enviado"** — o que a pessoa preencheu, em blocos (por exemplo, **"Quem se
   candidata"**, **"A organização"** ou **"A empresa ou o profissional"** e **"Outras respostas do
   formulário"**), e as **"Frentes de interesse"** que ela marcou.
4. **"Consentimentos"** — o que ela autorizou, um por um.
5. **"Decidir"** — os botões **"Aprovar"** e **"Reprovar"**.
6. **"Avisos do sistema"** — quem o sistema já avisou sobre esta candidatura.

{: .important }
**O parecer é um insumo, não uma decisão.** A inteligência artificial **não reprova sozinha**
voluntário nem instituição: ela diz o que encontrou, e quem decide é uma pessoa. A **única
exceção** é o credenciado (empresa ou profissional) com parecer **"inapto"**, que é reprovado
automaticamente — a própria tela avisa isso na página dele.

### Consentimentos: três respostas, e uma delas engana

Cada consentimento aparece com o nome, a resposta e a **versão do texto** que a pessoa viu quando
aceitou — por exemplo, **"(texto na versão 2)"**. O nome é o **código que o formulário do site
enviou**, em letras minúsculas e sublinhado (algo como `uso_de_imagem`), e não uma frase: é o site que
decide como chamá-lo. As respostas possíveis são:

- **Autorizou** — marcou que sim.
- **Não autorizou** — marcou que não.
- **Não marcou** — não respondeu.

**"Não marcou" não é "não autorizou".** Quem não marcou nunca disse não; só deixou em branco. Tratar
os dois como recusa tira da pessoa algo que ela não recusou (e tratar os dois como aceite faz o
contrário). Se o consentimento é necessário para o que você vai fazer com os dados dela, a resposta
em branco pede que você pergunte — não que presuma.

## Decidir

Só decide quem tem a permissão de decidir candidaturas (hoje, quem administra a organização). Quem
só pode ver a candidatura lê **"Você pode ver esta candidatura, mas não tem a permissão de
decidir."**

### Aprovar

1. Abra a candidatura e clique em **"Aprovar"**.
2. Na janela **"Aprovar candidatura"**, que explica: *"Cria a ficha da pessoa no cadastro — ou liga
   à ficha que já existe, sem duplicar."* (para instituição: *"Cria a instituição no cadastro — ou
   liga a que já existe, sem duplicar."*):
   - Se for **adesão de organização** ou **credenciamento**, escolha a **"Relação com a
     organização"** — é obrigatória (**"Escolha a relação com a organização…"** se faltar), porque é
     ela que diz o que aquela instituição passa a ser para vocês: integrada, credenciada,
     fornecedora.
   - Escolha, se quiser, a **"Situação inicial"** (**"Nenhuma"** é válido).
   - Se for **colaborador**, dá para ligar a pessoa à **"Organização a que a pessoa fica ligada"**
     (busque por nome ou CNPJ e clique em **"Buscar"**).
   - Preencha, se quiser, os dois campos de texto descritos logo abaixo.
3. Clique em **"Aprovar"**.

### Reprovar

1. Clique em **"Reprovar"**.
2. Na janela **"Reprovar candidatura"**, preencha o **"Motivo da reprovação"** — obrigatório.
3. Preencha, se quiser, os dois campos de texto abaixo e clique em **"Reprovar"**.

A janela avisa: *"Fica registrado quem reprovou, quando e por quê. Uma candidatura decidida não se
decide de novo."*

### Dois campos que não se confundem

Aprovar e reprovar têm os mesmos dois campos de texto, e **errar de campo tem consequência**:

- **"Mensagem para a pessoa (esta SAI: é a única)"** — vai para quem se candidatou.
- **"Observação interna (NÃO sai da organização)"** — fica guardada com a candidatura, para quem
  decidir depois entender o que se pensou. Nunca chega à pessoa.

{: .warning }
**Escreva a observação interna no campo da observação.** Um comentário como "parece instável, não
indicaria para trabalho com criança" escrito no campo da mensagem **sai para a pessoa que se
candidatou** — e não há como recolher um e-mail. O contrário (a mensagem de acolhimento no campo
interno) faz a pessoa nunca receber a resposta. Releia qual campo é qual antes de confirmar.

### Depois de decidir: o que fica registrado

A candidatura passa a mostrar o quadro **"Decisão"**: o **Resultado**, **Como** foi decidida
(*"Decidida por uma pessoa"*, *"Reprovada pelo parecer automático (credenciado inapto)"* ou
*"Reprovada no recebimento, pela regra de idade"*), **Quem decidiu**, **Quando**, **Por quê**, a
**"Mensagem enviada à pessoa"** e a **"Observação interna (não sai)"**. Se a aprovação criou ou
ligou uma ficha, aparece o link **"abrir a ficha"** (ou **"abrir a instituição"**).

{: .tip }
**Aprovar uma voluntária é o que dá ao termo de adesão as frentes dela.** As áreas de atuação que o
termo cita vêm da candidatura aprovada. Para emitir o termo, abra a ficha e siga
[Emitir, ver e anexar documentos](/flow/emitir-documentos/).

## Conflito de e-mail

Quando o e-mail da candidatura já pertence a **outra** pessoa já cadastrada, o sistema **não junta
nem descarta**: ele **retém** a candidatura (**"Retida por conflito"**) e pergunta. A tela diz:
*"O e-mail desta candidatura já pertence a outra pessoa. Nada foi juntado nem descartado: alguém
precisa dizer quem é quem."*

Por que reter: juntar sem perguntar poderia misturar os dados de duas pessoas diferentes que
compartilham um e-mail (um casal, uma mãe e uma filha); descartar sem perguntar apagaria a
candidatura de alguém que só errou o e-mail. Quem resolve escolhe uma de duas saídas:

- **"É a mesma pessoa"** — ao lado da ficha que o conflito aponta (dá para **abrir** a ficha e
  conferir antes). A candidatura passa a ligar-se àquela ficha, sem criar outra.
- **"São pessoas diferentes"** — pede o motivo (**"Por que são pessoas diferentes?"**, obrigatório).
  A candidatura volta a esperar decisão e, se aprovada, ganha uma ficha própria. Fica registrado
  quem disse isso e por quê.

Enquanto o conflito não é resolvido, **"Aprovar" fica desabilitado**. **"Reprovar" continua
possível.**

## Quem tem menos de 18 anos

A candidatura de **voluntário e de colaborador** de menor de 18 anos (ou **sem data de nascimento**)
é **reprovada no recebimento**, sem ninguém precisar olhar, com o motivo registrado — por exemplo,
*"Menor de 18 anos (16 anos completos na data do recebimento)"*. A pessoa recebe a mensagem *"Para
participar é preciso ter 18 anos completos."* Na tela da candidatura, o quadro **"Decisão"** diz
**"Reprovada no recebimento, pela regra de idade"**.

Se a data foi só esquecida no formulário, a mensagem orienta a pessoa a enviar de novo com a data.
Para o profissional autônomo credenciado, a data só barra quando é informada e faz a pessoa menor.

## Quando a decisão não chega

Decidir uma candidatura não termina quando você clica: a decisão **precisa seguir para a
automação** ligada à plataforma (o **n8n**, como a tela escreve), que é quem dá o passo seguinte —
por exemplo, escrever à pessoa. O que essa automação faz depois é configurado **fora** da
plataforma; o que a plataforma garante é que a decisão foi entregue, e é por isso que ela só diz
"concluída" quando a entrega termina:

- **Em andamento.** *"A decisão está na fila para ser entregue ao n8n; só é concluída quando a
  entrega termina."* Não faça nada.
- **Concluído.** *"O aviso da decisão foi entregue ao n8n."*
  Se aparecer *"mas nenhum destino de integração está inscrito neste evento"*, a entrega saiu, mas
  **não há automação ouvindo** a decisão: veja [Integrações](/configuracoes/integracoes/) — os
  eventos **"Candidatura aprovada"** e **"Candidatura reprovada"**.
- **Falhou.** *"A entrega ao n8n falhou depois de várias tentativas, e a decisão ainda não chegou a
  quem precisa."* — com o motivo. Resolva o problema do outro lado (a automação estava fora do ar,
  por exemplo) e clique em **"Repetir a entrega"**. A Visão geral do Flow também conta as decisões
  nesse estado.

{: .warning }
**"Aprovada" na lista não quer dizer que a pessoa já foi avisada.** Quer dizer que a organização
decidiu. Uma aprovada com **"disparo falhou"** é uma pessoa que continua esperando uma resposta
que já foi dada. Passe os olhos pelas candidaturas decididas de vez em quando.

## Exemplo

Chega a candidatura de **Helena Barros**, 29 anos, para voluntariado na frente **Comunicação**. O
sistema avisa Maria Oliveira por e-mail. Maria abre a candidatura: parecer **Apto**, consentimento
`uso_de_imagem` **Não marcou**, frente de interesse **Comunicação**. Ela aprova, escolhe a
situação inicial **Em atuação** e escreve na mensagem para a pessoa: *"Seja bem-vinda, Helena!
A Joana Martins entra em contato para combinar o primeiro encontro."* No campo interno escreve:
*"Perguntar sobre o uso de imagem no primeiro encontro."* A candidatura passa a **Aprovada —
disparo em andamento** e, minutos depois, **Aprovada**. Em Pessoas, Helena tem ficha nova.

Outro caso: a candidatura da **Associação Mãos Amigas** chega retida, porque o e-mail do
representante já é de **Valéria Cordeiro**, que tem ficha. Maria abre a ficha, vê que é a mesma
pessoa (Valéria é a presidente da associação) e clica em **"É a mesma pessoa"**. Aprova com a
relação **Integrada**: a instituição é criada e Valéria continua com uma ficha só.

## Dicas e armadilhas

- **Decida pela fila "Aguardando decisão", e olhe "Decididas" de vez em quando** para ver se algum
  disparo falhou.
- **Candidatura decidida não se decide de novo.** Aprovou por engano? Não há botão de desfazer na
  candidatura; o ajuste é feito na ficha (em [Pessoas](/pessoas/)) ou na
  [instituição](/instituicoes/). Reprovou por engano? A candidatura continua reprovada; o caminho é
  cadastrar a pessoa diretamente em [Pessoas](/pessoas/).
- **Reprove com motivo que você sustentaria diante da pessoa.** O motivo fica registrado e é parte
  do que a organização responde se alguém perguntar por quê.
- **O CPF ou o CNPJ evita duplicata; o nome não.** Se a mesma pessoa se candidata duas vezes com
  e-mails diferentes e o mesmo CPF, a aprovação liga à ficha que existe, sem criar outra.

## Quando dá errado

- **"O módulo RIT360 Flow não está habilitado para esta organização."** — veja o
  [Flow](/flow/#quando-dá-errado).
- **"Candidatura não encontrada."** — o endereço está incompleto, ou a candidatura é de outra
  organização (confira o seletor no alto da tela).
- **"Esta candidatura já foi aprovada em [data] e não se decide de novo."** (ou **"reprovada"**) —
  outra pessoa decidiu antes de você. Abra a candidatura e veja o quadro **"Decisão"**.
- **"Esta candidatura está retida por conflito (o e-mail pertence a outra pessoa). Resolva o
  conflito antes de decidir — ou reprove."** — resolva em **"É a mesma pessoa"** ou **"São pessoas
  diferentes"**.
- **"Escolha a relação com a organização (por exemplo, a de organização integrada) antes de
  aprovar."** — numa adesão ou credenciamento, escolha a **"Relação com a organização"** na janela
  de aprovar.
- **"O cadastro da casa recusou: … Peça a permissão a quem administra a organização."** — para
  criar a ficha ou a instituição, você também precisa de permissão no cadastro (Pessoas ou
  Instituições). A candidatura **continua aguardando**; nada foi decidido.
- **"O cadastro da casa não respondeu, e nada foi decidido … Tente de novo em instantes."** — o
  cadastro estava ocupado. Clique de novo.
- **"Não foi possível concluir. Nada foi decidido."** — a decisão não foi gravada; tente de novo.
- **"A ficha ligada a esta candidatura não existe mais no cadastro de pessoas. Resolva o conflito de
  novo ou reprove."** — alguém removeu a ficha que você tinha escolhido em "É a mesma pessoa".
  Resolva o conflito outra vez.

## Limites do papel

Quem administra a organização vê e decide candidaturas. Os demais membros não têm a aba. Uma chave
de API (integração) pode **entregar** candidaturas ao sistema, mas **não pode aprovar nem
reprovar**: decidir é ato de uma pessoa.

{: .note }
Dois rótulos desta tela dizem "organização" onde o resto do produto diz **instituição** —
**"Adesão de organização"** e **"Colaborador de organização integrada"**, no seletor **"Tipo"**.
Neste manual, a palavra **organização** é quem usa a plataforma (o Instituto Semente); a OSC que
adere à rede é uma **instituição**. A tela ainda não segue essa distinção; o texto acima cita os
rótulos como aparecem.
