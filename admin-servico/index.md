---
title: "Administração do serviço"
nav_order: 7
has_children: true
permalink: /admin-servico/
---

# Administração do serviço

Esta parte do manual é para quem administra a **RIT360 Plataforma como um todo** — a
instalação que atende todas as organizações, não uma organização específica. Se
você cuida só da sua organização (membros, espaços, configurações dela), o que
você procura está em [Quem administra a organização](/papeis/administrador-da-organizacao/),
não aqui.

{: .important }
**Administrar o serviço não dá acesso ao conteúdo de organização nenhuma.**
Você não vê conversas, tarefas, materiais nem documentos de nenhuma organização
por estar aqui. A tela de administração do serviço mostra só contagens — quantas
organizações existem, quantas pessoas têm vínculo, quantos espaços foram
criados — nunca o que está dentro deles.

## Como navegar

A administração não pertence a produto nenhum: ela cuida de todas as organizações e de todos os
produtos de uma vez. Por isso ela tem um lugar próprio, e não fica pendurada na navegação do
RIT360 Realiza.

**Para entrar:** quem administra o serviço vê, no cabeçalho, um **ícone de escudo** — entre a engrenagem
da organização e o seu avatar. É nele que se clica. O escudo existe em qualquer tela de dentro do aplicativo, no computador
e no celular, e quem não administra o serviço nunca o vê. A administração **não** está na barra
lateral: a lateral é o lugar de trabalhar, e cuidar da instalação não é trabalho de uma
organização.

**Estando dentro:** a barra principal muda. No lugar de Para mim, Espaços, Conhecimento e
Clientes, ela passa a mostrar **"Visão geral"**, **"Organizações"**, **"Acesso"**, **"Serviços"**,
**"Manutenção"** e **"Feedbacks"** — em cima, no computador; embaixo, no celular. Enquanto você
está ali, nenhum produto fica aceso na lateral. Cada item abre uma tela de entrada, e dali saem as
telas daquele assunto.

**Para voltar ao trabalho:** clique em **Realiza** (ou em **Flow**) na barra lateral. No celular,
abra o menu pelo botão **"Abrir navegação"** e escolha o produto.

{: .tip }
A barra acompanha você: mesmo três telas adiante, ela continua no alto (embaixo, no celular), e
trocar de assunto é um clique — não é preciso voltar à primeira tela. O escudo só leva **para** a
administração; o caminho de volta é **Realiza** (ou **Flow**) na lateral, ou a logo do cabeçalho,
que leva a "Para mim".

{: .note }
Nenhum endereço mudou. Link guardado nos favoritos para qualquer tela desta área continua
funcionando.

## O que você encontra aqui, por item da barra

**Visão geral** — [o que está esperando decisão sua](/admin-servico/painel/) e, abaixo, as
contagens do serviço: quantas organizações, quantas pessoas e quantos espaços.

**Organizações**
- [Organizações](/admin-servico/organizacoes/) — a lista de todas as organizações do serviço, o
  domínio de cada uma, o cadastro de organização nova e, na coluna **"Módulos"**, quais produtos
  da família RIT360 cada organização tem ligados.
- [Pedidos de organização](/admin-servico/pedidos-de-organizacao/) — os pedidos de criação que o
  produto não conseguiu decidir sozinho, para você aprovar ou recusar. O número de pedidos
  esperando decisão aparece no próprio cartão.

**Acesso**
- [Quem administra o serviço](/admin-servico/quem-administra/) — conceder, listar e revogar esse
  acesso.
- [Entrada pelo Google](/admin-servico/entrada-pelo-google/) — liga ou desliga o botão de entrar
  com conta Google, para todo mundo.
- [Domínios autorizados](/admin-servico/dominios-autorizados/) — os domínios de e-mail que
  dispensam convite para criar conta.

**Serviços** — esta tela traz as duas configurações **na própria tela**: no computador, lado a
lado; no celular, uma abaixo da outra, recolhidas, com um botão **"Mostrar configuração"** em cada
cartão. Abrir uma não carrega a outra.
- [Servidor de e-mail do produto](/admin-servico/email/) — o servidor único por onde saem o
  convite de conta, a recuperação de senha e os avisos que as organizações escolhem receber.
- [Provedores de inteligência artificial](/admin-servico/provedores-de-ia/) — o provedor padrão
  que atende as organizações que não cadastraram o próprio, o modelo que cada um usa, e o consumo
  de IA de todas as organizações.

{: .tip }
Os dois assuntos também têm endereço próprio, e ele continua valendo: abrir
`/admin-servico/email` ou `/admin-servico/ia` leva à tela cheia daquele assunto, sem o outro ao
lado. Link guardado nos favoritos não quebrou.

![Tela "Serviços" no celular, com os cartões "Servidor de e-mail" e "Provedores de IA" recolhidos, cada um com o botão "Mostrar configuração"](/assets/capturas/admin-servico-servicos-celular.png){: style="max-width:375px" }
{: .mt-4 }

**Manutenção**
- [Cópia de segurança](/admin-servico/copia-de-seguranca/) — o que a tela mostra sobre a cópia de
  segurança do banco, e o que ela ainda não faz.
- [Destinos da cópia de segurança](/admin-servico/destinos-backup/) — para onde a cópia do banco é
  enviada fora do servidor, e o teste que grava, lê e apaga de verdade.
- [Tarefas agendadas](/admin-servico/tarefas/) — o estado de toda rotina automática da instalação:
  nunca rodou, falhou, reprocessando ou deu certo — com o botão para reprocessar o que falhou e o
  de conferir o espelho com a origem.
- [Mudar de servidor](/admin-servico/mudar-de-servidor/) — exporta a instalação inteira num pacote
  cifrado, ou importa um pacote numa instalação vazia, sempre com ensaio antes de gravar de
  verdade.
- [Retenção de candidaturas](/admin-servico/retencao-candidaturas/) — por quanto tempo o Flow
  guarda o que uma pessoa enviou ao se candidatar, e se a rotina que apaga isso está rodando.
- [Apagamento de organização encerrada](/admin-servico/apagamento-organizacao-encerrada/) — como
  encerrar e reabrir o contrato de uma organização, os dois avisos ao gestor, o prazo de 30 dias
  e como conferir se a rotina que apaga está rodando.

**Feedbacks** — [o que as pessoas enviaram](/admin-servico/feedbacks/) de dentro do produto, e a
resposta a cada um.

<!-- CAPTURA PENDENTE: a tela mudou na 0.20.0 (menu de abas) e os títulos das telas desta área
     ainda vão ser normalizados (issue #168). Refazer depois disso, e sem enquadrar a contagem de
     espaços enquanto a issue #167 não sair — ela mostra zero havendo espaços. -->

## Como se chega aqui

Não existe um item visível para quem não administra o serviço. Quem tenta
acessar qualquer uma das telas desta seção sem essa permissão (por um endereço
guardado, por exemplo) vê a mesma recusa, em todas elas: **"Você não administra
o serviço — esta tela é para quem administra a RIT360 Plataforma como um
todo."** — nunca um erro técnico, e nunca uma porta entreaberta.

{: .note }
Ser administrador de uma organização — mesmo de todas as organizações que você
usa — não dá acesso a esta área. São duas permissões completamente
independentes.
