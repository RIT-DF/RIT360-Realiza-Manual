---
title: "Organizações"
nav_order: 8
parent: "Administração do serviço"
permalink: /admin-servico/organizacoes/
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

<!-- CAPTURA: rota=/admin-servico/organizacoes | o-que-mostrar=formulário de criação com o campo "Domínio (opcional)" preenchido e a tabela com a coluna "Domínio" visível | arquivo=admin-servico-organizacoes-desktop.png e admin-servico-organizacoes-celular.png -->
{: .mt-4 }

## Passo a passo — criar uma organização

1. Abra **"Administração geral"** e clique em **"Organizações"**.
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
