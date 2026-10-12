---
title: "Exportar dados"
nav_order: 5.6
parent: "Configurações"
permalink: /configuracoes/exportar-dados/
palavras_chave: "lgpd, portabilidade de dados, baixar meus dados, prestação de contas, auditoria, pacote expirado"
---

# Exportar dados

Baixe um pacote com os seus dados, ou com os dados da organização inteira, para guardar fora da
RIT360 Plataforma.

## Por que isto importa

Às vezes você precisa de uma cópia própria — para uma prestação de contas, uma auditoria, ou só
para guardar uma cópia à parte. Esta tela monta o pacote e avisa quando ele está pronto para
baixar.

{: .note }
Cada exportação leva só o que você alcança navegando no produto — nunca mais do que isso, mesmo
dentro da própria organização.

{: .note }
Se a organização teve um produto desligado (veja [Os produtos na barra lateral](/produtos/)), a
exportação da organização **continua trazendo o conteúdo dele**. Desligar um produto fecha as telas
dele, não o acesso da organização ao que ela mesma criou.

## Acessar

Pelo menu do seu avatar, clique em **"Exportar meus dados"**. Quem administra a organização também
encontra o caminho pelo cartão **"Exportar dados"**, em
[Dados e identidade da organização](/configuracoes/organizacao/).

## Pedir uma exportação

- **"Exportar meus dados"** — qualquer pessoa pode pedir a própria, a qualquer momento, sem
  precisar de permissão especial.
- **"Exportar a organização"** — só aparece para quem tem permissão de exportar dados da
  organização inteira.

Clique no botão correspondente. O pedido entra na fila, e o **"Histórico de pedidos"**, logo
abaixo, mostra o andamento.

## Acompanhar e baixar

Cada pedido no histórico mostra um destes estados:

- **"Preparando"** — o pacote ainda está sendo montado. A tela consulta sozinha a cada poucos
  segundos, sem você precisar recarregar.
- **"Pronto para baixar"** — todas as partes foram tratadas e nenhuma falhou. Clique em **"Baixar
  pacote"** para receber o arquivo. Aparece também até quando ele fica disponível.
- **"Pronto, mas incompleto"** — o pacote existe e pode ser baixado, mas **uma ou mais partes
  falharam e não estão nele**. Logo abaixo do selo vem a frase **"Uma ou mais partes falharam e não
  estão no pacote. Você pode baixar o que deu para levar; confira abaixo o que ficou de fora."**
  O botão **"Baixar pacote"** continua lá, de propósito: levar o que deu é melhor do que não levar
  nada. Veja [Quando o pacote sai incompleto](#quando-o-pacote-sai-incompleto).
- **"Falhou"** — o motivo aparece junto, quando o sistema souber dizer.
- **"Expirado"** — o prazo para baixar passou; peça uma exportação nova.

## O resultado de cada parte do pacote

Quando o pedido é da organização inteira, o histórico lista, embaixo dele, cada parte do pacote
com o resultado dela — por exemplo, **"Núcleo (organização, membros): concluído"** e **"Trabalho
(espaços, tarefas, entregas): concluído"**. Cada parte é chamada pelo nome que você lê na
plataforma: Conhecimento, Relatórios, Assistente, Comunicação, RIT360 Flow. Cada linha termina em
um destes três resultados:

- **"concluído"** — a parte foi exportada e o pacote traz conteúdo dela.
- **"estava vazio"** — a parte foi considerada, mas a organização não tinha nada nela para levar.
  Não é falha, e o pacote não está incompleto: não havia o que incluir. Uma organização que ainda
  não usou o Conhecimento, por exemplo, vê **"Conhecimento: estava vazio"**; e, enquanto ninguém
  cadastrar nada no RIT360 Flow, vê **"RIT360 Flow: estava vazio"**. A frase vale para qualquer
  parte, não só para o Flow.
- **"falhou (motivo)"** — a parte não pôde ser exportada, e o motivo aparece entre parênteses. Não
  conte com ela no pacote.

![Histórico de pedidos de exportação com dois pedidos da organização: o primeiro com o selo "Pronto para baixar", as partes "RIT360 Flow: estava vazio" e "Assistente: estava vazio" e as demais "concluído"; o segundo com o selo vermelho "Pronto, mas incompleto", a frase explicando que partes falharam e a linha "Relatórios: falhou"](/assets/capturas/exportar-dados-resultado-desktop.png)
{: .mt-4 }

No celular:

![Histórico de pedidos de exportação no celular, com os dois pedidos empilhados: "Pronto para baixar" e "Pronto, mas incompleto"](/assets/capturas/exportar-dados-resultado-celular.png){: style="max-width:375px" }

## Quando o pacote sai incompleto

O selo do pedido resume as linhas abaixo dele, e a regra é uma só: **se alguma parte "falhou", o
pedido aparece como "Pronto, mas incompleto"; se nenhuma falhou, aparece como "Pronto para
baixar".**

Repare no que **não** conta: parte que **"estava vazio"** não torna o pedido incompleto. Ela foi
considerada e a organização não tinha nada nela — o pacote está inteiro. Só **"falhou"** deixa uma
lacuna no pacote.

### Por que isto importa

Antes, o pedido dizia "Pronto para baixar" mesmo com uma parte falhada, e quem lia só o selo
concluía que o pacote estava completo. Quem arquivava esse pacote para uma prestação de contas ou
uma auditoria descobria a falta no dia em que precisava do que faltava. Agora o selo conta a
verdade antes de você baixar.

### O que fazer

1. Leia as linhas do pedido e ache a que diz **"falhou (motivo)"**.
2. Decida: o que falhou é importante para o que você vai fazer com o pacote? Se não for, baixe o
   pacote e siga — ele traz tudo o que deu para levar.
3. Se for, **peça uma exportação nova** (veja abaixo). Se a mesma parte falhar de novo, avise
   pelo [feedback](/enviar-feedback/), dizendo o nome da parte e o motivo.

A notificação por e-mail acompanha o selo. Quando o pacote sai completo, o assunto é **"Sua
exportação de dados está pronta"**. Quando sai incompleto, o assunto é **"Sua exportação de dados
está pronta, mas incompleta"**, com o resumo **"O pacote pode ser baixado, mas uma ou mais partes
falharam e não estão nele. Abra o pedido para ver quais."** O e-mail não diz quais partes — isso
está no pedido, na tela.

{: .note }
**Produto desligado continua sendo exportado.** Se a organização desligou o RIT360 Flow mas já
tinha dados nele, a linha mostra **"RIT360 Flow: concluído"** e o pacote leva tudo. O que decide
entre "concluído" e "estava vazio" é o que de fato foi exportado, nunca o produto estar ligado ou
desligado: "você não usa mais" não pode virar "você perdeu o que era seu".

Pedidos feitos antes da versão 0.37.0 podem continuar mostrando "concluído" no histórico mesmo para
uma parte que estava vazia — a frase nova vale para os pedidos feitos daqui em diante.

## Exemplo

Maria Oliveira, encerrando a Formação de educadores, pede a exportação da organização inteira para
guardar um registro do que foi feito. Ela acompanha o "Preparando" virar "Pronto para baixar" e lê
as linhas do histórico: "Núcleo" e "Trabalho" aparecem como "concluído", e "RIT360 Flow: estava
vazio" — o Instituto Semente nunca cadastrou nada nele. É exatamente o que ela esperava, então
baixa o pacote com tranquilidade.

## Dicas e armadilhas

- **A exportação não é instantânea.** Organizações com muito histórico levam mais tempo para
  preparar o pacote — a tela nunca mostra "pronto" enquanto ainda está montando.
- **O pacote expira.** Baixe assim que ele ficar pronto; deixando passar o prazo, é preciso pedir
  de novo.
- **Leia as linhas antes de baixar.** "estava vazio" é normal; "falhou" não é. Baixar o pacote com
  uma parte que falhou e arquivá-lo como se estivesse completo deixa a organização sem aquela parte
  no dia em que precisar dela. O selo **"Pronto, mas incompleto"** existe para avisar disso, mas o
  botão de baixar continua disponível: a decisão é sua.

{: .important }
O que acontece com os dados exportados depois do fim do contrato com a RIT360 Plataforma ainda está sendo
definido — esta exportação vale enquanto o contrato está ativo.

## Quando dá errado

- **"Falha ao carregar o histórico de exportações."** — recarregue a página.
- **"Falha ao pedir a exportação."** — tente novamente.
- **"Falha ao baixar o pacote."** — tente de novo; se o pedido já estiver **"Expirado"**, peça uma
  exportação nova em vez de tentar baixar a antiga.
- **Uma linha do histórico diz "falhou (motivo)".** Aquela parte não entrou no pacote. Peça uma
  exportação nova; se a mesma linha voltar a falhar, avise pelo [feedback](/enviar-feedback/),
  dizendo o nome da parte e o motivo que aparece.
