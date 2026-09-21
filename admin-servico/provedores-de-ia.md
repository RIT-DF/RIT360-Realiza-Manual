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

Os provedores disponíveis hoje são **Gemini**, **OpenAI** e **Claude**.

## Passo a passo — cadastrar um provedor

1. Abra **"Administração geral"** e clique em **"Provedores de IA"**.
2. No formulário **"Cadastrar novo provedor"**, escolha o provedor em
   **"Provedor"**.
3. Ao escolher, aparece uma explicação de onde conseguir a credencial daquele
   provedor, com um link **"Conseguir credencial"**.
4. Preencha **"Nome (para você identificar depois)"** com um nome que ajude
   você a reconhecer este cadastro na lista mais tarde.
5. Cole a chave de API no campo **"Credencial (chave de API)"**.
6. Se quiser escolher qual modelo daquele provedor será usado — em vez de
   deixar o produto decidir —, clique em **"Ver modelos disponíveis"**. A
   tela consulta a credencial que você acabou de colar e mostra, no campo
   **"Modelo"**, a lista que aquela credencial alcança. Escolha um, ou deixe
   em **"Usar o padrão (\<provedor\>)"**.
7. Clique em **"Cadastrar"**.

{: .note }
**"Ver modelos disponíveis"** só funciona depois de escolher o provedor e
colar a credencial — os dois são necessários para perguntar ao provedor quais
modelos aquela chave alcança.

![Provedores de inteligência artificial do serviço](/assets/capturas/admin-servico-ia-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Provedores de inteligência artificial do serviço — no celular](/assets/capturas/admin-servico-ia-celular.png){: style="max-width:375px" }

## Passo a passo — reordenar, testar, ligar e desligar

Cada provedor já cadastrado aparece numa lista numerada, na ordem em que é
tentado. Abaixo do nome de cada um aparece **"ligado"** ou **"desligado"**, e
embaixo disso o modelo em uso — com **"(padrão)"** ao lado quando você deixou o
produto escolher, em vez de fixar um modelo específico.

- Para mudar a posição de um provedor, use as setas **↑** e **↓** ao lado
  dele.
- Para verificar se a credencial realmente funciona, clique em **"Testar
  conexão"**. O resultado aparece logo abaixo do provedor testado —
  **"Conexão confirmada."** quando funciona, ou a mensagem de erro devolvida
  pelo provedor quando não funciona.
- Para desativar um provedor sem apagar o cadastro, use a chave ao lado dele.
  Um provedor desligado não entra na fila de tentativas, mas continua na
  lista, pronto para ser religado.
- Para remover de vez, clique em **"Remover"**. Aparece a confirmação
  **"Remover provedor"**, avisando: **""[nome do provedor]" deixa de ser
  usado. Esta ação não pode ser desfeita."** Clique em **"Remover"** de novo
  para confirmar, ou em **"Cancelar"** para desistir.

{: .note }
Antes de qualquer provedor ser cadastrado, a lista mostra **"Nenhum provedor
cadastrado ainda."** no lugar dela.

## Passo a passo — trocar o modelo de um provedor já cadastrado

1. Na lista de provedores, clique em **"Trocar modelo"** ao lado do provedor
   que você quer mudar.
2. A tela consulta os modelos que a credencial já salva alcança e mostra a
   lista no campo **"Modelo"**.
3. Escolha um modelo, ou **"Usar o padrão (\<provedor\>)"** para deixar o
   produto decidir.
4. Clique em **"Salvar modelo"**.

{: .tip }
Se a tela não conseguir listar os modelos direto do provedor, ela avisa
**"Não foi possível listar direto do provedor — mostrando uma lista
conhecida."** e mostra, em vez disso, uma lista que o produto já conhece.
Essa lista pode não incluir um modelo lançado recentemente pelo provedor.

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
- Se **"Ver modelos disponíveis"** ou **"Trocar modelo"** falhar, a tela
  mostra a mensagem de erro no lugar da lista. Uma credencial inválida é a
  causa mais comum — o mesmo problema que o **"Testar conexão"** revelaria.
