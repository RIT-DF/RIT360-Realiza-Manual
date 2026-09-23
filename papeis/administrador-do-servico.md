---
title: "Guia de quem administra o serviço"
nav_order: 6
parent: "Guias por papel"
permalink: /papeis/administrador-do-servico/
---

# Guia de quem administra o serviço

Você cuida da instalação do Realiza — a que atende todas as organizações. É um
papel de operação, diferente de tudo o mais neste manual: você mantém o serviço
de pé, mas **não tem acesso ao conteúdo de organização nenhuma**.

## O que você alcança

- O painel com as contagens gerais do serviço
- O único servidor de e-mail do produto, usado tanto para entrada (convite e senha) quanto para os
  avisos das organizações
- A entrada pelo Google
- Os provedores de inteligência artificial que o serviço oferece como padrão
- Quem mais administra o serviço
- O resultado da última cópia de segurança do banco, e para onde ela é enviada
- Os [pedidos de organização](/admin-servico/pedidos-de-organizacao/) que o produto não conseguiu
  decidir sozinho — domínio de e-mail público ou desconhecido, por exemplo
- Os [domínios autorizados](/admin-servico/dominios-autorizados/) a criar conta sem convite
- O estado de toda [rotina automática da instalação](/admin-servico/tarefas/) — nunca rodou,
  falhou, reprocessando ou deu certo

## O que você **não** alcança

{: .important }
Conteúdo de organização: tarefas, materiais, conversas, aprovações. O painel
devolve contagens agregadas, e nada além disso. Se precisar entrar no conteúdo
de uma organização para dar suporte, isso depende de autorização dela — não é
algo que o seu papel conceda.

## Por onde começar

Leia a seção inteira: [Administração do serviço](/admin-servico/).

## A armadilha deste papel

{: .warning }
**É um servidor só, mas com dois caminhos — e confundi-los custa caro.** O
mesmo servidor entrega convite e recuperação de senha **e** os avisos das
organizações. Errar e deixar os avisos sem sair incomoda; errar e deixar o
e-mail de entrada sem sair impede alguém de entrar no produto — e essa
pessoa não tem como avisar você, porque não entrou. Leia
[Servidor de e-mail do produto](/admin-servico/email/) antes de mexer nele,
e teste os dois caminhos separadamente, não só um.
