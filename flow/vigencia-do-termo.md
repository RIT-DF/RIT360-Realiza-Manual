---
title: "Quanto tempo vale, encerrar e reabrir"
nav_order: 7
parent: "RIT360 Flow"
permalink: /flow/vigencia-do-termo/
palavras_chave: "vigência, validade do documento, termo vencido, termo de adesão vencido, encerrar termo, encerrar documento, reabrir documento, não renovar, renovação automática, renova sozinho, desligar voluntário, situação da pessoa, fim de termo, termo encerrado, histórico de encerramento, voluntário saiu"
---

# Quanto tempo vale, encerrar e reabrir

Todo documento tem uma **vigência**: o período em que ele vale. O **termo de adesão** vai além — quando
ele acaba, **a situação da pessoa pode mudar com ele**. Esta página explica como a vigência é contada,
como encerrar e reabrir um documento, e o que acontece com a pessoa.

## Por que isto importa

Um termo de voluntariado que vence e continua parecendo valer é um risco calado: a organização acha que
tem uma voluntária com termo em dia, e não tem. Ao contrário, um termo que a pessoa encerrou (ou que a
organização encerrou) e que ninguém registrou deixa a ficha dizendo "em atuação" para quem já saiu. Dar
ciclo de vida ao termo — vale, vence, encerra, reabre, renova — faz a ficha dizer a verdade **sem
depender de alguém lembrar**, e deixa cada mudança com data, motivo e autor.

## Como se conta quanto tempo vale

A conta é feita **a partir do texto do modelo**, e não de uma regra genérica. No modelo
(**Flow › Configurações › Documentos**), o campo **"Como o texto conta a vigência"** tem três opções:

- **"Até 31 de dezembro do ano da emissão"** — o documento vale até o fim do ano em que foi emitido.
  Renovando, vale até 31 de dezembro de cada ano seguinte.
- **"Um período fixo, em dias, a partir da emissão"** — aparece o campo **"Validade, em dias"**
  (de 1 a 3660). Renovando, vale outro período igual.
- **"O texto não diz o prazo (vale um ano)"** — a regra de reserva, para quando o texto do documento
  cala: vale um ano a partir da emissão.

E há a caixa **"O texto renova o acordo sozinho, por períodos iguais, salvo manifestação em contrário"**.
Marcada, o documento continua valendo ao fim de cada período até alguém encerrá-lo.

{: .important }
**Quando o texto do documento diz um prazo, é ele que manda.** A conta genérica (um ano) só entra quando
o texto cala. A razão é prática: o documento é o que a pessoa tem na mão. Se o texto diz "até 31 de
dezembro" e o sistema contasse "365 dias", a primeira conferência mostraria duas datas — e a que está no
papel é a que vale. Por isso o modelo pergunta **o que o texto diz**; se o texto e a escolha discordarem,
vale o texto que a pessoa assina.

Na emissão, o campo **"Vale até"** continua podendo ser preenchido com uma data específica; em branco, o
documento vale como o modelo diz, e a tela explica (por exemplo, *"Em branco, vale como o modelo diz:
até 31 de dezembro do ano da emissão, e renova sozinho ao fim de cada período."*).

### O que a lista de documentos mostra

Na aba **"Documentos"** da ficha, cada documento traz uma destas marcas:

| Marca | Quer dizer |
|---|---|
| **"Vigente"** | Está valendo hoje. |
| **"Vencido"** | O período acabou e nada o renovou. Vencer não apaga nada. |
| **"Encerrado"** | Alguém o encerrou (veja abaixo). |
| **"Ainda não vale — faltam aceites"** | Foi enviado para [assinatura](/flow/assinatura-de-documentos/) e ainda falta alguma parte aceitar. |
| **"Termina em 31/12/2026"** | Está vigente, mas já foi encerrado para uma data futura. |

E a linha de datas ganha complementos: **"· renovado 2 vezes"** (quantas vezes o termo já se renovou) e
**"· renova sozinho"** (o modelo renova automaticamente e ninguém o encerrou). A data aparece como
**"vale até …"** ou, no passado, **"valeu até …"**.

{: .note }
A vigência é **calculada na hora**, a partir das datas: ela nunca fica guardada como um rótulo que
alguém esquece de atualizar. Quando o dia vira, a marca muda sozinha.

<!-- CAPTURA: rota=/pessoas/<identificador>?aba=documentos | viewport=1920x1080 | o-que-mostrar=A aba Documentos com um termo "Vigente" e "Termina em …", outro "Encerrado", e os botões "Encerrar" e "Reabrir (foi engano)" | arquivo=flow-vigencia-lista-desktop.png -->
<!-- CAPTURA: rota=/pessoas/<identificador>?aba=documentos (janela Encerrar) | viewport=1920x1080 | o-que-mostrar=A janela "Encerrar «Termo de adesão»" com as duas opções, o campo de data e o motivo | arquivo=flow-vigencia-encerrar-desktop.png -->

## Encerrar um documento

Encerrar não apaga o documento: ele continua guardado como estava, com a data em que deixou de valer e o
motivo. É o ato de dizer "este documento não vale mais daqui para a frente".

1. Na aba **"Documentos"**, clique em **"Encerrar"** na linha do documento. O botão só aparece para quem
   tem a permissão de encerrar documentos e enquanto o documento não está vencido nem já encerrado.
2. Em **"Como encerrar"**, escolha:
   - **"Encerrar numa data."** — o documento deixa de valer no dia escolhido (**"Deixa de valer em"**).
     Pode ser hoje ou **uma data anterior ao fim previsto**; nunca depois do fim previsto.
   - **"Não renovar."** — o documento vale **até o fim do período em curso** (a janela mostra a data) e
     não se renova. É a manifestação em contrário que o texto de um acordo com renovação sozinha prevê.
3. Em **"Por que está sendo encerrado"**, escreva o motivo. **É obrigatório** (até 500 caracteres).
4. Clique em **"Encerrar documento"**.

O encerramento entra num histórico com o seu nome e o motivo. Em **"Ver documento"**, a seção
**"Encerramentos e reaberturas"** lista cada ato, com data e hora — por exemplo, *"Encerrado em
13/10/2026 14:05, vale até 30/09/2026. Motivo: Pediu para sair, por mudança de cidade."*

### Reabrir, se foi engano

Num documento encerrado, o botão **"Reabrir (foi engano)"** desfaz o encerramento. O histórico **não é
apagado**: ele ganha uma linha, *"Reaberto em …"*, e o encerramento anterior continua lá. É o mesmo
princípio da situação da pessoa: o erro e a correção ficam os dois à vista.

{: .warning }
**O histórico só recebe linhas novas.** Não dá para editar nem apagar um encerramento ou uma reabertura,
nem por quem administra. Escreva o motivo pensando em quem vai lê-lo depois, e evite opinião ou dado
pessoal que a organização não precisa guardar.

## O que o encerramento faz com a pessoa

{: .important }
**Só o termo de adesão mexe na situação da pessoa.** Um documento de outro tipo — uma autorização de
imagem, um termo de parceria — que vence ou é encerrado **não desliga ninguém**. A regra vale para o
documento que o sistema reconhece como termo (o modelo com o distintivo **"Termo de adesão"**).

Quando o termo de adesão de uma pessoa é encerrado ou vence, **e não resta nenhum outro termo vigente
para ela**, a situação da pessoa muda — para **a situação que a organização indicou** como fim de termo.
Duas condições valem: o termo precisa ter sido **aceito** (um termo emitido que nunca recebeu os aceites
e é encerrado não desliga ninguém, porque nunca valeu), e o documento precisa ser de **uma pessoa** — um
documento de instituição com a mesma marca não muda a situação de ninguém.

### Dizer para qual situação a pessoa vai

Para qual situação ela vai é **escolha da organização**, porque "Afastado" e "Desligado" querem dizer
coisas diferentes em cada casa. Quem tem permissão para configurar o cadastro faz isso em
**Pessoas › Classificações e situações**: ao criar ou editar uma situação, marque a caixa **"É a
situação em que a pessoa fica quando o termo de adesão dela acaba"**. Só uma situação pode ser essa —
marcar uma tira a marca da outra — e ela aparece na lista com a etiqueta **"fim de termo"**. Veja
[Classificação e situação](/pessoas/classificacao-e-situacao/).

{: .warning }
**Enquanto ninguém marcar nenhuma situação, a mudança fica pendente.** O termo é encerrado, mas a
situação da pessoa **não muda**, e a tela diz isso (veja abaixo). A razão é a mesma de sempre no
produto: o sistema não adivinha o que a sua organização chama de "fim de termo". Deixar sem marcar não
quebra nada — só significa que ninguém será desligado automaticamente.

### O que aparece na tela

- Quando a mudança é aplicada, o aviso do encerramento diz qual situação a pessoa assumiu. A mudança
  entra no **histórico de situação** da pessoa, marcada como **"Automático (Flow: termo de adesão)"**,
  com o motivo — para o histórico não parecer ato de alguém.
- Quando **não pôde ser aplicada**, o aviso diz: **"Documento «…» encerrado. Mas a situação da pessoa
  ainda NÃO foi mudada: <motivo> A plataforma tenta de novo sozinha."** O encerramento **não é
  desfeito** por isso — o termo está encerrado de qualquer modo, e a plataforma repete a mudança, em
  intervalos que vão crescendo, até conseguir. O motivo mais comum é não haver situação marcada como fim
  de termo; nesse caso a mensagem diz: *"A organização ainda não indicou a situação em que a pessoa fica
  quando o termo acaba. Indique em Pessoas › Classificações e situações; a mudança fica pendente e é
  feita em seguida."*
- **Reabrir devolve a pessoa só quando a mudança foi do próprio termo.** Se a pessoa ainda está na
  situação de fim de termo e a última mudança foi a automática, a reabertura a devolve à situação
  anterior. Se alguém mudou a situação à mão depois, a reabertura **não mexe** — o aviso diz que não
  havia mudança do termo a desfazer. O aviso depois de reabrir sempre diz o que aconteceu.

### Mais de um termo vigente

A mesma pessoa pode ter **mais de um termo vigente** ao mesmo tempo (por exemplo, o termo geral e um
aditivo emitido depois). **Encerrar um deles não desliga a pessoa enquanto outro valer.** A situação só
muda quando não resta nenhum termo em vigor.

## Exemplo

Joana Martins, voluntária do Instituto Semente, tem um termo de adesão **"Vigente"**, que **renova
sozinho**. Em setembro ela pede para encerrar o voluntariado.

1. Maria Oliveira abre a ficha da Joana, aba **"Documentos"**, e clica em **"Encerrar"** no termo.
2. Escolhe **"Não renovar."**: a janela mostra que o termo vale até 31/12/2026. Escreve o motivo, "Pedido
   da voluntária, por mudança de cidade", e confirma.
3. O termo passa a mostrar **"Vigente"** e **"Termina em 31/12/2026"**. Nada mudou ainda na situação da
   Joana: o termo ainda vale.
4. Em 1º de janeiro, o termo está **"Vencido"**. Como não há outro termo vigente e o Instituto marcou
   **"Desligado"** como **"É a situação em que a pessoa fica quando o termo de adesão dela acaba"**, a
   situação da Joana muda para **Desligado**. No histórico dela aparece a mudança, marcada **"Automático
   (Flow: termo de adesão)"**.

Se, em vez disso, Maria tivesse clicado em **"Encerrar numa data."** e escolhido hoje como o dia em que o
termo deixa de valer, ele deixaria de valer de imediato, e a situação da Joana mudaria em seguida.

## Dicas e armadilhas

- **Marque a situação de fim de termo antes de emitir o primeiro termo.** Sem ela, o encerramento fica
  "pendente" e ninguém é desligado — e o aviso só aparece para quem estiver olhando na hora de
  encerrar.
- **Escreva o prazo do documento no próprio texto.** A vigência segue o que o texto diz; um texto que
  cala cai na regra de um ano, que talvez não seja o que a organização queria dizer.
- **"Não renovar" não encerra hoje.** O documento continua valendo até o fim do período em curso. Se a
  pessoa precisa deixar de ter o termo válido agora, use **"Encerrar numa data."**.
- **Cuidado com o "renova sozinho".** Um termo que renova sozinho nunca vence por conta própria; se a
  pessoa saiu e ninguém o encerrou, ele continua vigente e a ficha continua dizendo "em atuação".
- **Documento vencido não muda a situação de ninguém, exceto o termo de adesão.** Um modelo comum que
  vence só passa a aparecer como **"Vencido"**.
- **Reabrir devolve o que o encerramento mudou?** Não necessariamente: leia o aviso após reabrir, que diz
  o que foi feito com a situação da pessoa. Se a situação precisar voltar, mude-a em
  [Classificação e situação](/pessoas/classificacao-e-situacao/).

## Quando dá errado

- **"Documento «…» encerrado. Mas a situação da pessoa ainda NÃO foi mudada: … A plataforma tenta de novo
  sozinha."** — a mudança ficou pendente. Veja o motivo no aviso; se for a falta de uma situação de fim de
  termo, marque-a em **Pessoas › Classificações e situações**, e a plataforma conclui na próxima
  tentativa.
- **"Não foi possível encerrar o documento."** — recarregue e tente de novo; se persistir, avise pelo
  [feedback](/enviar-feedback/).
- **"Não foi possível reabrir o documento."** — idem.
- **A janela não aceita a data.** O dia de **"Deixa de valer em"** precisa estar entre o início da
  vigência e o fim previsto; a janela mostra os dois limites.
- **O botão "Encerrar" não aparece.** Falta a permissão de encerrar documentos, ou o documento já está
  vencido ou encerrado. Documento encerrado mostra **"Reabrir (foi engano)"** no lugar.

## Limites do papel

Encerrar e reabrir pedem uma **permissão própria** (a de encerrar documentos), que hoje tem quem
**administra a organização**. Quem só pode ver ou emitir lê a lista e as marcas de vigência, mas não
encontra **"Encerrar"** nem **"Reabrir (foi engano)"**. Marcar a situação de fim de termo é de quem
configura o cadastro de pessoas.
