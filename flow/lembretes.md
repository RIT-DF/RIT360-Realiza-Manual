---
title: "Lembretes de candidatura"
nav_order: 3
parent: "RIT360 Flow"
permalink: /flow/lembretes/
palavras_chave: "lembretes de candidatura, quem recebe o aviso, régua, insistir, avisar candidatura nova, ninguém foi avisado, intervalo em horas, parar de insistir, aviso por e-mail de candidatura"
---

# Lembretes de candidatura

Quando chega uma candidatura, o sistema avisa quem você escolher — e **volta a insistir enquanto
ninguém decide**. Essa configuração mora no alto da aba **"Configurações"** do [Flow](/flow/), na seção
**"Voluntariado"**, no cartão **"Lembretes de candidatura"**. (Quem tem acesso aos
[documentos](/flow/documentos/) vê, acima do cartão, a faixa **"Voluntariado"** / **"Documentos"**; a
seção **"Voluntariado"** é a que abre primeiro.)

## Por que isto importa

A tela de Candidaturas quase sempre está vazia. Tela assim deixa de ser visitada, e no dia em que
tem alguém esperando, ninguém olha. Quem cutuca, então, precisa ser o sistema — e para cutucar ele
precisa saber **quem avisar**.

{: .important }
**Enquanto ninguém for escolhido, ninguém é avisado.** Esta é a primeira coisa a fazer depois de
ligar o Flow. O cartão diz: **"Ainda ninguém escolheu quem recebe os avisos: enquanto isso o
sistema não avisa ninguém."** E a Visão geral do Flow repete: **"O sistema não tem para quem avisar
quando chega candidatura."** Uma pessoa que se candidata hoje e não é avisada a ninguém fica sem
resposta até alguém, por acaso, abrir a aba.

## Configurar

Você precisa da permissão de configurar candidaturas (hoje, quem administra a organização). Quem só
pode ver o cartão lê a configuração, sem poder alterá-la.

1. No Flow, abra **"Configurações"**; o cartão **"Lembretes de candidatura"** está no alto.
2. Deixe marcado **"Avisar quando chegar candidatura e insistir enquanto esperar"** (desmarque só se
   quiser desligar os avisos por completo).
3. Em **"Quem recebe os avisos"**, marque as pessoas — a lista traz os membros da organização.
4. Em **"Insistir a cada (horas)"**, diga de quanto em quanto tempo o sistema volta a avisar
   enquanto a candidatura estiver esperando. A tela abre com **72** (três dias); aceita de 1 a 720.
5. Em **"Parar de insistir depois de (dias da chegada)"**, diga até quando. A tela abre com **30**;
   aceita de 1 a 365.
6. Clique em **"Salvar"**. A tela confirma com **"Régua salva."**

<!-- CAPTURA: rota=/flow/configuracoes | viewport=1920x1080 | o-que-mostrar=O cartão Lembretes de candidatura com duas pessoas marcadas, 72 horas, 30 dias e o registro "O que o sistema já fez" com alguns avisos | arquivo=flow-lembretes-desktop.png -->
<!-- CAPTURA: rota=/flow/configuracoes | viewport=375x812 | o-que-mostrar=O mesmo cartão no celular | arquivo=flow-lembretes-celular.png -->

{: .note }
**Escolha pessoas que possam ver candidaturas.** Quem recebe o aviso precisa ser membro da
organização e ter a permissão de ver candidaturas, senão o aviso abriria uma tela que ela não
alcança. Se alguém escolhido não puder, o sistema recusa e diz: *"Uma das pessoas escolhidas não
faz parte da organização ou não pode ver candidaturas, então não conseguiria abrir o aviso."* Nada
é alterado.

## O que o sistema avisa, e por onde

São dois avisos, e eles chegam por e-mail **sem ninguém precisar ligar nada**:

- **"Chegou uma candidatura para decidir"** — na chegada de cada candidatura.
- **"Há candidaturas esperando decisão"** — o lembrete, repetido no intervalo que você definiu,
  até a data-limite.

{: .warning }
**Estes dois avisos saem por e-mail por padrão — ao contrário da maioria dos avisos do produto, que
nascem desligados.** O motivo: candidatura é coisa que fica esperando, e um aviso que só aparece
dentro do sistema não alcança quem não entrou nele. Quem recebe pode, em **"Seu perfil"**, desligar
o e-mail desses avisos como de qualquer outro (veja
[Seu perfil](/configuracoes/perfil/#escolher-o-que-recebe-e-por-onde)) — mas, se desligar, a
candidatura continua esperando e só o aviso deixa de chegar. A notificação no aparelho, como em todo
aviso, nasce desligada.

## O registro: "O que o sistema já fez"

No fim do cartão, a lista **"O que o sistema já fez"** conta cada aviso que ele tentou dar, com
data e hora:

- *"Aviso de candidatura nova: avisou 2 pessoas."* — saiu como esperado.
- *"Lembrete (3 esperando): avisou 2 pessoas."* — o lembrete, com quantas candidaturas esperavam.
- *"… NINGUÉM foi avisado — não havia para quem avisar."* — o aviso foi tentado e não havia
  destinatário. É o sinal para voltar a **"Quem recebe os avisos"**.
- *"… NÃO foi enviado — falhou (motivo)."* — o envio falhou. Quem recebe não ficou sabendo.

O registro existe porque **"ninguém foi avisado"** e **"avisaram e ninguém decidiu"** pedem ações
opostas: no primeiro, a correção é na configuração; no segundo, é cobrar quem recebeu.

## Exemplo

Maria Oliveira marca a si mesma e Joana Martins, deixa **72 horas** e **30 dias**. Chega uma
candidatura numa terça: as duas recebem o aviso por e-mail. Na sexta, ninguém decidiu; o sistema
avisa de novo — **"Há candidaturas esperando decisão"**. Joana aprova na sexta mesmo, e o sistema
para de insistir sobre aquela. No registro, Maria lê: *"Aviso de candidatura nova: avisou 2
pessoas"* e, na sexta, *"Lembrete (1 esperando): avisou 2 pessoas."*

## Dicas e armadilhas

- **Escolha mais de uma pessoa.** Se a única escolhida está de férias, a candidatura espera
  igual — e o registro vai dizer "avisou 1 pessoa" como se estivesse tudo certo.
- **Um intervalo curto demais cansa e vira ruído.** Quem recebe um lembrete por dia aprende a
  ignorá-lo. Os três dias que a tela sugere são um bom ponto de partida.
- **"Parar de insistir" não decide nada.** Passada a data-limite o sistema se cala, mas a
  candidatura continua esperando. A Visão geral do Flow continua mostrando há quanto tempo ela
  espera.
- **O registro mostra o que o sistema fez, não o que as pessoas leram.** "Avisou 2 pessoas" quer
  dizer que o aviso saiu para duas; não diz que alguém abriu.

## Quando dá errado

- **"Não foi possível carregar a régua de lembretes."** — recarregue a página; se persistir, avise
  pelo [feedback](/enviar-feedback/).
- **"Não foi possível salvar. Nada foi alterado."** — a configuração antiga continua valendo.
  Tente de novo.
- **"Uma das pessoas escolhidas não faz parte da organização ou não pode ver candidaturas…"** —
  desmarque quem não tem a permissão (ou peça a quem administra que a dê).
- **"Não foi possível confirmar quem faz parte da organização, e a régua não foi alterada."** — o
  cadastro de membros não respondeu naquele instante. Tente de novo.
- **Estou na tela e não vejo "Salvar".** Você tem só a permissão de ver. A tela mostra quem recebe,
  mas só quem administra altera.

## Limites do papel

Quem administra a organização escolhe quem recebe e configura os intervalos. Os demais membros não
alcançam a aba **"Configurações"** do Flow.
