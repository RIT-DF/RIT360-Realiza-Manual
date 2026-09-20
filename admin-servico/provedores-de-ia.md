---
title: "Provedores de inteligência artificial"
nav_order: 5
parent: "Administração do serviço"
permalink: /admin-servico/provedores-de-ia/
---

# Provedores de inteligência artificial

Esta tela cadastra o **provedor padrão do serviço** — o que atende toda
organização que não tiver cadastrado o próprio. A descrição da tela resume
bem: **"Este é o provedor que atende toda organização que não cadastrar o
próprio. Falhando o primeiro da lista, o pedido é refeito no seguinte,
automaticamente."**

## Por que cadastrar mais de um

Cadastrando só um provedor, uma instabilidade dele deixa todas as organizações
sem resposta ao mesmo tempo. Cadastrando vários, em ordem de prioridade, o
produto tenta o primeiro e, se ele falhar, tenta o seguinte sozinho — sem que
ninguém precise perceber e trocar manualmente.

## Passo a passo — cadastrar um provedor

1. Abra **"Administração geral"** e clique em **"Provedores de IA"**.
2. No formulário **"Cadastrar novo provedor"**, escolha o provedor em
   **"Provedor"**.
3. Ao escolher, aparece uma explicação de onde conseguir a credencial daquele
   provedor, com um link **"Conseguir credencial"**.
4. Preencha **"Nome (para você identificar depois)"** com um nome que ajude
   você a reconhecer este cadastro na lista mais tarde.
5. Cole a chave de API no campo **"Credencial (chave de API)"**.
6. Clique em **"Cadastrar"**.

![Provedores de inteligência artificial do serviço](/assets/capturas/admin-servico-ia-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Provedores de inteligência artificial do serviço — no celular](/assets/capturas/admin-servico-ia-celular.png){: style="max-width:375px" }

## Passo a passo — reordenar, testar, ligar e desligar

Cada provedor já cadastrado aparece numa lista numerada, na ordem em que é
tentado.

- Para mudar a posição de um provedor, use as setas **↑** e **↓** ao lado
  dele.
- Para verificar se a credencial realmente funciona, clique em **"Testar
  conexão"**. O resultado aparece logo abaixo do provedor testado —
  **"Conexão confirmada."** quando funciona, ou a mensagem de erro devolvida
  pelo provedor quando não funciona.
- Para desativar um provedor sem apagar o cadastro, use a chave ao lado dele.
  Um provedor desligado não entra na fila de tentativas, mas continua na
  lista, pronto para ser religado.
- Para remover de vez, clique em **"Remover"** e confirme em **"Remover
  provedor"**. Esta ação não pode ser desfeita.


## Exemplo

A equipe técnica cadastra um provedor como principal e, semanas depois,
cadastra um segundo, de outra empresa, como reserva — movendo-o para a segunda
posição da lista com a seta **↓** no primeiro provedor (ou **↑** no segundo).
Quando o provedor principal apresenta instabilidade num certo dia, o produto
passa a responder pelo segundo automaticamente, sem que ninguém precise agir
naquele momento.

## O que isso significa para o conteúdo das organizações

{: .warning }
**Quando o primeiro provedor da lista falha, o pedido é refeito no seguinte —
automaticamente, e sem ninguém decidir naquilo naquele momento.** Isso quer
dizer que o conteúdo de uma organização pode ser processado por uma empresa
diferente da que seria a primeira escolha, e possivelmente sediada em outro
país, sem que essa troca seja combinada com a organização antes de acontecer.
É uma decisão de produto conhecida, e a forma de responder por ela é esta:
**toda chamada registra qual provedor respondeu.** É esse registro que
permite, depois, dizer para onde foi o conteúdo de uma organização num
momento específico.

{: .important }
**Depois de salva, a credencial nunca mais é exibida** — nem de forma
mascarada. Se precisar trocar uma credencial, é preciso gerar uma nova no
provedor e cadastrá-la de novo; não há como recuperar a anterior por aqui.

## Quando dá errado

- Cadastrar com uma credencial inválida não impede o cadastro — o cadastro
  entra na lista mesmo assim. É o **"Testar conexão"** que revela se ela
  funciona. Sempre teste um provedor novo antes de contar com ele.
- Se o teste falhar, a mensagem mostrada é a que o próprio provedor devolveu,
  traduzida para algo legível — confira antes de mais nada se a credencial foi
  colada corretamente, sem espaços a mais.
