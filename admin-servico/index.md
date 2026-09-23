---
title: "Administração do serviço"
nav_order: 7
has_children: true
permalink: /admin-servico/
---

# Administração do serviço

Esta parte do manual é para quem administra o **RIT360 Realiza como um todo** — a
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

No alto de toda tela desta área fica um menu de abas, sempre visível: **"Visão geral"**,
**"Organizações"**, **"Acesso"**, **"Serviços"**, **"Manutenção"** e **"Feedbacks"**. Cada aba
abre uma tela de entrada, e dali saem as telas daquele assunto.

{: .tip }
O menu acompanha você: mesmo três telas adiante, ele continua no alto, e trocar de assunto é um
clique — não é preciso voltar à primeira tela.

## O que você encontra aqui, por aba

**Visão geral** — [as contagens do serviço](/admin-servico/painel/): quantas organizações,
quantas pessoas e quantos espaços.

**Organizações**
- [Organizações](/admin-servico/organizacoes/) — a lista de todas as organizações do serviço, o
  domínio de cada uma, e o cadastro de organização nova.
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

**Serviços**
- [Servidor de e-mail do produto](/admin-servico/email/) — o servidor único por onde saem o
  convite de conta, a recuperação de senha e os avisos que as organizações escolhem receber.
- [Provedores de inteligência artificial](/admin-servico/provedores-de-ia/) — o provedor padrão
  que atende as organizações que não cadastraram o próprio, o modelo que cada um usa, e o consumo
  de IA de todas as organizações.

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

**Feedbacks** — [o que as pessoas enviaram](/admin-servico/feedbacks/) de dentro do produto, e a
resposta a cada um.

<!-- CAPTURA PENDENTE: a tela mudou na 0.20.0 (menu de abas) e os títulos das telas desta área
     ainda vão ser normalizados (issue #168). Refazer depois disso, e sem enquadrar a contagem de
     espaços enquanto a issue #167 não sair — ela mostra zero havendo espaços. -->

## Como se chega aqui

Não existe um link visível para quem não administra o serviço. Quem tenta
acessar qualquer uma das telas desta seção sem essa permissão vê a mesma
recusa, em todas elas: **"Você não administra o serviço — esta tela é para
quem administra o RIT360 Realiza como um todo."**, com um link para **"Voltar
para administração geral"** — nunca um erro técnico, e nunca uma porta
entreaberta.

{: .note }
Ser administrador de uma organização — mesmo de todas as organizações que você
usa — não dá acesso a esta área. São duas permissões completamente
independentes.
