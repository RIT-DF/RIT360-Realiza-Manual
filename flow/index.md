---
title: "RIT360 Flow"
nav_order: 5.5
has_children: true
permalink: /flow/
---

# RIT360 Flow

O **RIT360 Flow** cuida do caminho da pessoa — e da instituição — até a organização: quem quer ser
voluntário, quem quer integrar a rede, quem quer oferecer serviços. Hoje ele faz três coisas:

- **Recebe as candidaturas** que chegam pelo site da organização e põe cada uma na frente de quem
  vai decidir, com o parecer automático junto e o registro de **quem decidiu, quando e por quê**.
- **Guarda as frentes de trabalho do voluntariado**: para onde a organização encaminha quem chega,
  com o que se faz ali, quantas pessoas cabem e quem recebe.
- **Emite os documentos da organização** — o termo de adesão do voluntário e os que a organização
  cadastrar — a partir da ficha da pessoa ou da instituição, **colhe o aceite de cada parte por um
  link** (e sela o documento), controla **quanto tempo cada documento vale** e guarda também os que
  foram assinados fora do sistema.

Credencial e capacitação **ainda não existem** no Flow, e a assinatura com **certificado digital** também
não (veja [Colher a assinatura de um documento](/flow/assinatura-de-documentos/)). Quando chegarem,
ganham página aqui — e nenhuma aba aparece antes de ter o que mostrar.

## Por que isto importa

Quem se candidata a voluntário está esperando uma resposta. Candidatura que chega por e-mail ou
planilha e fica parada é pessoa que desiste, ou que escreve de novo, ou que nunca é chamada. O
Flow existe para a candidatura **não depender de alguém lembrar de olhar**: ela chega sem ninguém
redigitar, o sistema avisa quem decide e **insiste enquanto ninguém decide**, e a decisão fica
registrada.

## Onde fica e quem vê

Na barra lateral, em **"MÓDULOS"**, o item **Flow**. Ele aparece aceso quando duas coisas valem ao
mesmo tempo: a organização tem o Flow habilitado e você tem permissão para vê-lo — hoje, quem
administra a organização. Se o item aparece apagado, com a marca **"não habilitado"**, veja
[Os produtos na barra lateral](/produtos/).

Ao entrar, a faixa de abas (no alto da tela; embaixo, no celular) mostra as abas do Flow, e **só o
Flow fica aceso na lateral**:

| Aba | Para que serve |
|---|---|
| **"Visão geral"** | O retrato do que espera por você: quantas candidaturas aguardam decisão e há quanto tempo espera a mais antiga, e como estão as frentes de trabalho. |
| **"Candidaturas"** | A fila de candidaturas e a decisão de cada uma. Veja [Candidaturas: receber e decidir](/flow/candidaturas/). |
| **"Documentos"** | Todos os documentos da organização numa lista só, do mais recente para o mais antigo — inclusive os de fichas já removidas, marcados **"Ficha removida"**. Veja [Todos os documentos da organização](/flow/emitir-documentos/#todos-os-documentos). |
| **"Configurações"** | Duas seções. **"Voluntariado"**: quem é avisado quando chega candidatura e as frentes do voluntariado — veja [Lembretes de candidatura](/flow/lembretes/) e [Frentes de trabalho do voluntariado](/flow/frentes/). **"Documentos"**: os modelos de documento da organização e quem assina por ela — veja [Modelos de documento](/flow/documentos/). |

São só essas quatro abas porque aba sem conteúdo ensina a não voltar: cada nova aba só aparece
quando tem o que mostrar. **A aba "Documentos" do Flow serve para consultar**: os modelos ficam em
**"Configurações"**, e emitir um documento é na aba **"Documentos"** **da ficha** da pessoa ou da
instituição — veja [Emitir, ver e anexar documentos](/flow/emitir-documentos/).

A seção **"Documentos"**, em "Configurações", só aparece para quem tem permissão sobre documentos
— hoje, quem administra a organização. Para quem não tem, "Configurações" mostra só o que sempre
mostrou, sem a faixa de seções.

<!-- CAPTURA: rota=/flow | viewport=1920x1080 | o-que-mostrar=Visão geral do Flow com o cartão Candidaturas (algumas aguardando, a mais antiga com há quantos dias) e o cartão Frentes de trabalho | arquivo=flow-visao-geral-desktop.png -->
<!-- CAPTURA: rota=/flow | viewport=375x812 | o-que-mostrar=a mesma Visão geral no celular, com a barra de abas embaixo | arquivo=flow-visao-geral-celular.png -->

## A Visão geral

É a primeira tela do Flow, e ela mostra só o que existe — nunca um número que ainda não tem de onde
sair.

**O cartão "Candidaturas"** (para quem pode vê-las) diz:

- **"N candidaturas esperam decisão"** (ou **"1 candidatura espera decisão"**) e, logo abaixo, **"A
  mais antiga espera há N dias"** (ou **"desde hoje"**). O tempo da mais antiga é o número que
  importa: três candidaturas esperando desde hoje é uma fila normal; três esperando há quinze dias é
  gente sendo ignorada.
- Se não há nenhuma: **"Nenhuma candidatura aguardando decisão."**
- Quando houver, avisos extras: **"N estão retidas por conflito de e-mail, esperando alguém
  resolver"** e **"N decisões não chegaram ao n8n e precisam ser repetidas"**. Os dois estão
  explicados em [Candidaturas](/flow/candidaturas/).
- **"O sistema não tem para quem avisar quando chega candidatura."**, com o link **"Escolher quem
  recebe"** — este é o aviso mais importante da tela. Veja abaixo.

**O cartão "Frentes de trabalho"** diz quantas frentes estão ativas e quantas ainda têm algo por
definir — por exemplo, **"13 frentes ativas — 13 com algo ainda por definir."** —, com o link
**"Ver nas configurações"**.

Se o cartão não puder contar (um problema momentâneo), a tela diz **"Não foi possível contar as
candidaturas agora."** ou **"Não foi possível carregar as frentes agora."** — ela nunca mostra zero
no lugar de uma contagem que falhou, porque "zero candidaturas" e "não consegui contar" pedem ações
opostas.

## O primeiro passo depois de ligar o Flow

{: .important }
**Escolha quem recebe os avisos antes de qualquer outra coisa.** Enquanto ninguém for escolhido, o
sistema **não avisa ninguém** quando chega candidatura — e, como a tela de Candidaturas quase
sempre está vazia, ninguém vai olhar por conta própria. A Visão geral acusa a falta ("O sistema não
tem para quem avisar…"), mas só quem abrir o Flow a vê. O passo está em
[Lembretes de candidatura](/flow/lembretes/).

Depois, defina as frentes de trabalho ([Frentes de trabalho do voluntariado](/flow/frentes/)): as
treze que vêm de partida nascem incompletas, e quem se candidata a voluntário precisa saber se há
lugar e o que vai fazer.

Antes de emitir o primeiro **termo de adesão**, preencha os dados da organização que o termo
usa — razão social, CNPJ, endereço e e-mail de contato, em **Organização › Informações básicas**, e
quem assina por ela, em Flow › Configurações › Documentos. A emissão recusa
enquanto faltar algum, listando o que falta; o passo a passo está em
[Emitir, ver e anexar documentos](/flow/emitir-documentos/#antes-de-emitir-o-primeiro-termo-de-adesão).

E marque, em **Pessoas › Classificações e situações**, a situação em que a pessoa fica quando o termo
acaba: sem ela, encerrar ou deixar vencer um termo **não muda a situação de ninguém** (veja
[Quanto tempo vale, encerrar e reabrir](/flow/vigencia-do-termo/)).

## Exemplo

O Instituto Semente liga o Flow. Maria Oliveira abre a Visão geral e lê: "O sistema não tem para
quem avisar quando chega candidatura". Ela clica em **"Escolher quem recebe"**, marca a si mesma e
Joana Martins, e salva. Na semana seguinte chegam duas candidaturas de voluntário: ambas aparecem
na Visão geral — "2 candidaturas esperam decisão; a mais antiga espera há 2 dias" —, e Maria já
tinha recebido o aviso por e-mail no dia em que cada uma chegou.

## Dicas e armadilhas

- **Olhe a Visão geral pelo "há quanto tempo", não pelo "quantas".** A quantidade varia com a
  semana; o tempo da mais antiga diz se a fila está andando.
- **Candidatura não é conta.** Quem se candidata não ganha acesso ao sistema; a candidatura aprovada
  vira uma **ficha** em [Pessoas](/pessoas/) (ou uma instituição em
  [Instituições](/instituicoes/)), sem login.
- **O item Flow não aparece para membros comuns.** Hoje só quem administra a organização o alcança.
  Quem precisar decidir candidaturas precisa dessa permissão — fale com quem administra.

## Quando dá errado

- **"O módulo RIT360 Flow não está habilitado para esta organização. Para pedir a habilitação, fale
  com a equipe da RIT."** — a organização não tem o Flow (ou você está na organização errada:
  confira o seletor no alto da tela).
- **Abri o Flow e não vejo a aba "Candidaturas" ou "Configurações".** A aba só aparece para quem tem
  a permissão correspondente. Quem administra a organização tem todas.
- **A Visão geral diz "Não foi possível abrir o Flow."** — recarregue a página; se persistir, avise
  pelo [feedback](/enviar-feedback/).
