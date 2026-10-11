---
title: "Organizações"
nav_order: 8
parent: "Administração do serviço"
permalink: /admin-servico/organizacoes/
palavras_chave: "criar organização, gestor, suspender contrato, excluir organização, autosserviço desligado, números desatualizados, tarefas agendadas, comparar organizações, ligar módulo, desligar módulo, habilitar flow, módulo não habilitado, habilitação por organização"
---

# Organizações

Esta tela mostra **todas as organizações do serviço**, e é também por aqui que
uma organização nova é criada. Criar organização deixou de ser algo que quem
vai usá-la faz sozinho: agora é uma tarefa de quem administra o serviço —
você cria a organização e convida quem vai administrá-la, e essa pessoa
assume dali em diante.

{: .important }
Como em toda esta área, esta tela mostra **cadastro**, nunca conteúdo. Você
vê nome, gestor, data de entrada, situação do contrato e as contagens de cada
organização — nunca uma tarefa, uma mensagem, um documento ou um material de
dentro dela. Veja [a nota sobre alcance](/admin-servico/).

É também por aqui que você **liga e desliga os módulos** — os produtos da família RIT360 — de
cada organização: veja [Ligar e desligar módulos de uma organização](#ligar-e-desligar-módulos-de-uma-organização).

## Por que criar não é mais autosserviço

Antes, quem queria começar a usar o RIT360 Realiza criava a própria
organização. Agora esse primeiro passo passou para quem administra o
serviço: você cria a organização com o nome dela e o e-mail de quem vai
administrá-la, e o produto cuida de convidar essa pessoa. Ela só passa a
fazer parte da organização quando aceitar o convite — criar não é o mesmo
que já ter alguém dentro.

Boa parte dos pedidos de organização nem chega a esta tela: quando alguém pede a criação pela
tela de entrada com um e-mail de domínio reconhecido, a organização nasce sozinha, e quando o
domínio já pertence a uma organização existente, o pedido vai para quem administra ela. Só quando
o domínio é público, desconhecido, ou diferente do domínio do site informado é que o pedido exige
julgamento — e aí ele aparece em [Pedidos de organização](/admin-servico/pedidos-de-organizacao/),
não aqui. O que você cria por esta tela é a organização que **você mesmo** decide abrir, sem
pedido de ninguém.

![Tela Organizações da administração geral, com o formulário de criação preenchido (incluindo o campo Domínio) e a coluna Domínio na tabela](/assets/capturas/admin-servico-organizacoes-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Tela Organizações da administração geral, com o formulário de criação preenchido e a coluna Domínio na tabela — no celular](/assets/capturas/admin-servico-organizacoes-celular.png){: style="max-width:375px" }
{: .mt-4 }

## Passo a passo — criar uma organização

1. Na administração do serviço, abra a aba **"Organizações"**.
2. No formulário **"Criar organização"**, preencha **"Nome da organização"**.
3. Preencha **"E-mail de quem vai administrar"** com o e-mail da pessoa que
   vai gerir aquela organização a partir de agora.
4. Se quiser, preencha **"Domínio (opcional)"** com o domínio de e-mail da
   organização (por exemplo, `instituto.org.br`).
5. Clique em **"Criar e convidar"**.

A organização aparece na tabela **"Todas as organizações"** imediatamente,
mesmo antes de a pessoa convidada aceitar o convite.

{: .note }
**O domínio é opcional, mas não é decorativo.** É ele que faz o produto
reconhecer um pedido de entrada futuro como "esta pessoa é desta
organização" em vez de tratá-lo como ambíguo. Organização criada sem
domínio nunca recebe pedido de entrada automático — quem quiser entrar
precisa ser convidado à mão.

## Passo a passo — trocar o domínio de uma organização já criada

1. Na coluna **"Domínio"**, clique no valor da organização (ou em **"—
   (editar)"**, se ainda não houver domínio cadastrado).
2. Digite o novo domínio no campo que aparece.
3. Clique em **"Salvar"** para confirmar, ou em **"Cancelar"** para desistir
   sem alterar nada.

## Ligar e desligar módulos de uma organização

A coluna **"Módulos"** da tabela diz, para cada organização, quais produtos da família RIT360 ela
tem habilitados — cada produto é um **módulo**. Hoje são dois: o **Realiza** e o **Flow**. Em cada
linha aparece uma lista com um item por módulo, no formato **"Realiza: ligado"** ou **"Flow:
desligado"**, e ao lado o botão **"Ligar"** ou **"Desligar"**, conforme o estado.

### Por que isto importa

Habilitar um produto é consequência do contrato com a organização, e por isso é **sua decisão, nunca
da própria organização**. Quem administra uma organização não consegue ligar um módulo para si — ela
só vê, apagado e marcado como **"não habilitado"**, o que ainda não tem, e precisa pedir a você (veja
[Os produtos na barra lateral](/produtos/)). Ter um controle simples e visível aqui evita o contrário:
um produto liberado por engano, ou esquecido ligado depois que o contrato acabou.

{: .note }
Uma frase acima da tabela resume o efeito do controle antes de você mexer nele. Leia-a: ela é o
resumo do que está nesta seção.

### Passo a passo — ligar um módulo

1. Na administração do serviço, abra a aba **"Organizações"**.
2. Na tabela **"Todas as organizações"**, ache a linha da organização.
3. Na coluna **"Módulos"**, no item do módulo que está **"desligado"** (por exemplo, **"Flow:
   desligado"**), clique em **"Ligar"**.

Ligar vale na hora, sem confirmação. O texto do item passa para **"ligado"** e o botão vira
**"Desligar"**. Quem administra a organização vê o item deixar de ser apagado na barra lateral na
próxima vez que a página for carregada.

### Passo a passo — desligar um módulo

1. Na coluna **"Módulos"** da organização, no item que está **"ligado"**, clique em **"Desligar"**.
2. Abre uma confirmação com o título **Desligar [módulo] para "[nome da organização]"**. Ela explica
   o efeito: as telas e as ações do módulo deixam de funcionar para todas as pessoas da organização,
   o que estiver em segundo plano para ela fica em espera, **nenhum dado é apagado**, ligar de novo
   devolve exatamente o que estava lá, e a organização continua podendo exportar o conteúdo.
3. Confirme em **"Desligar"** (ou desista em **"Cancelar"**). Enquanto o servidor responde, o botão
   mostra **"Desligando…"**.

![Tabela de organizações rolada até a coluna Módulos: o Instituto Semente com "Realiza: ligado" e "Flow: ligado", as demais com "Flow: desligado", cada item com o botão Desligar ou Ligar](/assets/capturas/admin-servico-organizacoes-modulos-desktop.png)
{: .mt-4 }

A confirmação que aparece ao desligar:

![Janela "Desligar Flow para Instituto Semente", explicando que nenhum dado é apagado, com os botões Cancelar e Desligar](/assets/capturas/admin-servico-organizacoes-desligar-modulo-desktop.png)

No celular, a tabela rola para o lado; a coluna **"Módulos"** fica ao lado de **"Ação"**:

![Coluna Módulos no celular, com Ligar e Desligar em cada organização](/assets/capturas/admin-servico-organizacoes-modulos-celular.png){: style="max-width:375px" }

![Confirmação de desligar o Flow no celular, com os botões Desligar e Cancelar empilhados](/assets/capturas/admin-servico-organizacoes-desligar-modulo-celular.png){: style="max-width:375px" }

{: .note }
Em telas que não comportam a tabela inteira, inclusive em monitores largos, a tabela rola para o lado. Se não achar os botões da coluna **"Módulos"**, role a tabela para a direita.

### O que acontece quando um módulo é desligado

Esta é a dúvida que a pessoa da organização vai ter, e a resposta é a mesma da confirmação:

- **Nenhum dado é apagado.** Tudo o que a organização criou no módulo continua guardado. Ligar de
  novo devolve exatamente o que estava lá — nada precisa ser refeito.
- **As telas e as ações do módulo ficam recusadas** para todas as pessoas da organização, de
  qualquer papel, e o item aparece apagado na barra lateral para quem administra a organização.
- **A organização continua podendo exportar o que já existe no módulo**, pela exportação da
  plataforma ([Exportar dados](/configuracoes/exportar-dados/)) — nunca pelas telas do módulo, que
  ficam recusadas. A diferença é de propósito: "você não usa mais" não pode virar "você perdeu o que
  era seu".
- **As rotinas automáticas daquele módulo** (avisos, lembretes, espelhos) **deixam de rodar para
  aquela organização** enquanto ele estiver desligado, e **retomam ao religar**. O que ficou
  esperando no intervalo não se perde: é processado quando o módulo volta, o que pode levar alguns
  instantes.

### Exemplo

A RIT fecha com o Instituto Semente a habilitação do Flow. Na aba **"Organizações"**, na linha do
Instituto Semente, a coluna **"Módulos"** mostra **"Realiza: ligado"** e **"Flow: desligado"**. Você
clica em **"Ligar"** ao lado do Flow, e o item passa para **"Flow: ligado"**. Maria Oliveira, que
administra o Instituto, recarrega a página e vê o Flow aceso na barra lateral.

Meses depois, o contrato do Flow termina. Você clica em **"Desligar"** ao lado do Flow, lê a
confirmação e confirma. O Instituto não perde nada do que fez ali; se um dia voltar a contratar,
basta **"Ligar"** de novo.

### Dicas e armadilhas

- **Mexa no Flow, não no Realiza.** O Realiza vem ligado em toda organização, existente ou nova, e o
  que você vai ligar e desligar no dia a dia é o Flow. A lista mostra os dois para ficar claro o
  quadro da organização, não porque desligar o Realiza seja uma operação de rotina.
- **Hoje o Flow tem uma tela inicial, mas ainda vazia.** Ligá-lo faz o item acender na barra de
  quem administra a organização e abrir a tela **"RIT360 Flow"**, com quatro contagens em zero
  (**"Pessoas"**, **"Candidaturas em análise"**, **"Termos aguardando assinatura"** e **"Credenciais
  ativas"**). As funções que vão preenchê-las chegam em próximas entregas — avise a organização para
  ela não esperar mais do que isso. Ligar o módulo não basta para todos verem o item: a pessoa também
  precisa da permissão, que hoje é de quem administra a organização.
- **Combine antes de desligar.** Desligar corta o acesso de **todas** as pessoas da organização de
  uma vez. Se a organização não foi avisada, o primeiro sinal para ela será o produto parar de
  responder. O dado fica a salvo, mas a surpresa fica.
- **Uma alteração por vez.** Enquanto uma mudança está em andamento, os botões da tabela ficam
  inativos. Espere a resposta antes de clicar em outro.
- **O pedido chega por fora do produto.** A organização é orientada a falar com a equipe da RIT; o
  produto ainda não tem um botão de pedir. Quem lê isso aqui é quem recebe o pedido.

### Quando dá errado

- **"Não foi possível alterar o módulo."** — ou a mensagem que o servidor devolver — aparece acima
  da tabela quando ligar falha, e dentro da confirmação quando desligar falha. Em ambos os casos
  **nada mudou**: o módulo continua no estado de antes. Tente de novo; se persistir, avise
  pelo [feedback](/enviar-feedback/), dizendo a organização e o módulo.
- **A confirmação não fecha depois de "Desligar".** É de propósito: ela fica aberta até o servidor
  responder, para o erro aparecer ali e não se perder. Se der erro, leia a mensagem no próprio
  diálogo.
- **A organização diz que o item continua apagado depois de você ligar.** Peça que recarregue a
  página.

## Quando os números podem estar desatualizados

{: .warning }
Acima da tabela pode aparecer um aviso sobre as colunas **"Espaços"** e **"Clientes"**:
**"Espaços e Clientes podem estar desatualizados — a comparação com a origem encontrou diferença.
Enquanto isso, comparar uma organização com outra pode confrontar números de épocas diferentes.
Veja em [Tarefas agendadas](/admin-servico/tarefas/)."**, ou, quando nem foi possível verificar:
**"Não foi possível conferir agora se os números de Espaços e Clientes estão atualizados. Veja em
[Tarefas agendadas](/admin-servico/tarefas/)."**

Nenhum rótulo, coluna ou caminho muda por causa disso — é só um aviso acima da tabela, e o link
leva para [Tarefas agendadas](/admin-servico/tarefas/), onde fica a rotina que mantém essas
contagens em dia.

O ponto que importa: **com o aviso na tela, comparar uma organização com outra pode confrontar
números de épocas diferentes** — uma pode ter sido recalculada há pouco e a outra não, então a
diferença entre as duas nem sempre reflete a realidade atual das duas ao mesmo tempo. Espere o
aviso sumir antes de tirar conclusão de uma comparação entre organizações.

## O que cada coluna da tabela mostra

- **"Nome"** — o nome da organização.
- **"Domínio"** — o domínio de e-mail associado à organização, editável
  clicando no valor. Mostra **"— (editar)"** quando ainda não há domínio
  cadastrado.
- **"Gestor"** — o e-mail de quem administra aquela organização. Se a pessoa
  convidada ainda não tiver conta no serviço de identidade, esta coluna
  mostra um travessão até que ela crie a própria conta.
- **"Entrada"** — a data em que a organização foi criada.
- **"Contrato"** — a situação: **"Ativo"**, **"Suspenso"** ou
  **"Encerrado"**.
- **"Espaços"** — quantos espaços (projetos e operações contínuas) a
  organização tem, arquivados ou não.
- **"Clientes"** — quantos clientes a organização tem cadastrados.
- **"Pessoas"** — quantas pessoas têm vínculo com a organização.
- **"Módulos"** — quais produtos da família RIT360 a organização tem habilitados, com **"Ligar"** e
  **"Desligar"** para cada um. Veja [Ligar e desligar módulos de uma
  organização](#ligar-e-desligar-módulos-de-uma-organização).
- **"Ação"** — o botão **"Excluir"**, que apaga a organização inteira. Veja
  abaixo.

## Excluir uma organização

Excluir aqui é definitivo, e é diferente de suspender o contrato: a organização inteira — espaços
(inclusive arquivados), clientes, tarefas e convites externos pendentes — some junto.

1. Na linha da organização, clique em **"Excluir"**.
2. A confirmação mostra o que vai acontecer:
   - Organização sem conteúdo: **"Esta organização ainda não tem nenhum conteúdo — a exclusão não
     afeta mais nada."**
   - Organização com conteúdo: **"Esta organização tem [quantidade] espaço(s) ativo(s),
     [quantidade] espaço(s) arquivado(s), [quantidade] cliente(s), [quantidade] tarefa(s) e
     [quantidade] convite(s) externo(s) pendente(s). TUDO isso — inclusive o conteúdo dos espaços
     arquivados — será excluído junto, sem volta. Confirma a exclusão?"**
3. Confirme em **"Excluir"**.

{: .warning }
O aviso conta o conteúdo real da organização, inclusive o que está dentro de espaços arquivados —
uma organização que só tem trabalho arquivado **não** aparece como vazia. Não há como desfazer
depois de confirmado.

## Exemplo

A equipe da RIT recebe o pedido de adesão de uma nova associação e cria a
organização dela por aqui, com o e-mail da tesoureira que vai administrá-la.
A tesoureira recebe o convite, aceita, e a partir daí é ela quem convida o
resto da equipe da associação — sem precisar de mais nenhuma ação de quem
administra o serviço.

## Quando dá errado

- Se a criação falhar, a tela mostra a mensagem de erro acima do formulário,
  e nenhuma organização é criada.
- Se o e-mail informado não corresponder ao formato de um e-mail, o
  navegador pede correção antes de enviar.
- Se salvar o domínio falhar, a mensagem de erro aparece acima da tabela, e o
  domínio antigo (ou a ausência dele) continua valendo.
- Enquanto a lista de organizações não carrega, a tabela mostra
  **"Carregando…"**; se ainda não existir organização nenhuma, ela mostra
  **"Nenhuma organização cadastrada ainda. Crie uma acima."**
- Se a exclusão falhar, a mensagem de erro aparece dentro do diálogo de
  confirmação, e a organização continua existindo.
