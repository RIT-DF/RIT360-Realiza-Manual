---
title: "Domínios autorizados"
nav_order: 9
parent: "Administração do serviço"
permalink: /admin-servico/dominios-autorizados/
palavras_chave: "domínio público, gmail.com, subdomínio, criar conta sem convite, autosserviço"
---

# Domínios autorizados

Esta tela cadastra os **domínios de e-mail que dispensam convite** para criar
conta no RIT360 Realiza. Convite continua funcionando para qualquer pessoa,
de qualquer domínio — o que esta lista faz é abrir uma segunda porta: quem
tem e-mail de um domínio autorizado cria a própria conta sozinho, sem
precisar que ninguém a convide primeiro, tanto pela entrada com senha quanto
pela [entrada pelo Google](/admin-servico/entrada-pelo-google/).

{: .important }
Autorizar um domínio não coloca ninguém dentro de organização nenhuma. A
conta nasce **sem vínculo**: entrar pelo domínio autorizado não é o mesmo que
ser aceito numa organização — alguém ainda precisa vincular essa pessoa
depois.

## Por que isto importa

Sem domínio autorizado, toda conta nova depende de um convite específico —
seguro, mas lento quando uma organização inteira precisa entrar de uma vez.
Autorizar o domínio de e-mail dela (por exemplo, o domínio institucional de
uma OSC) deixa qualquer pessoa daquele domínio criar a própria conta na hora,
sem esperar convite individual.

![Tela de domínios autorizados, com dois domínios já liberados](/assets/capturas/admin-servico-dominios-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Tela de domínios autorizados, com dois domínios já liberados — no celular](/assets/capturas/admin-servico-dominios-celular.png){: style="max-width:375px" }

## Passo a passo — autorizar um domínio

1. Na administração do serviço, abra a aba **"Acesso"**. No computador, esta
   configuração já aparece direto na tela, num card próprio — role até
   **"Domínios autorizados"**. No celular, toque no botão **"Abrir"** do card
   **"Domínios autorizados"**.
2. No campo **"Autorizar domínio (ex.: rit.org.br)"**, digite o domínio, sem
   o `@`.
3. Clique em **"Autorizar"**.


## Dicas e armadilhas

- **A comparação é exata — autorizar um domínio não autoriza os
  subdomínios dele.** Autorizar `rit.org.br` não autoriza `filiada.rit.org.br`:
  são domínios diferentes, e um subdomínio pode pertencer a outra
  organização, com outro dono. Se você precisa autorizar mais de um, cadastre
  cada um separadamente.
- **Autorizar um provedor de e-mail público (gmail.com, outlook.com e
  afins) abre o produto para qualquer pessoa**, não só para a sua
  organização — qualquer pessoa com conta naquele provedor passa a poder
  criar conta no RIT360 Realiza. Por isso o produto pede uma confirmação
  explícita antes de aceitar um domínio assim: veja o aviso **"Este é um
  provedor de e-mail público"** e confirme em **"Autorizar mesmo assim"**
  só se for isso mesmo que você quer.
- **Remover um domínio da lista não apaga as contas que já nasceram por
  causa dele.** Quem já criou conta continua entrando normalmente; o que
  muda é que, dali em diante, alguém novo com e-mail daquele domínio volta a
  precisar de convite.
- **Revise a lista de tempos em tempos.** Todo mundo do domínio pode criar
  conta a qualquer momento, inclusive quem já saiu da organização mas ainda
  tem o e-mail institucional ativo.

## Passo a passo — remover um domínio

1. Na lista de domínios autorizados, clique em **"Remover"** ao lado do
   domínio.
2. Confira o aviso em **"Remover domínio autorizado"** e confirme clicando
   em **"Remover"** de novo, ou cancele em **"Cancelar"**.

## Removendo vários domínios de uma vez

Havendo mais de um domínio na lista, você não precisa remover um a um.

1. Marque a caixa de cada domínio que quer remover, ou marque **"Selecionar
   todos"** para marcar a lista inteira.
2. Clique em **"Remover selecionados (N)"** — o número entre parênteses é
   quantos você marcou.
3. Confira o aviso em **"Remover domínios autorizados"** e confirme em
   **"Remover"**, ou cancele em **"Cancelar"**.
4. O resultado aparece logo acima da lista: **"N removido(s)[, M com
   falha]."** — se algum domínio não puder ser removido, ele continua na
   lista, e o número de falhas aparece separado do número de removidos.

{: .tip }
O resultado nunca esconde uma falha parcial atrás de um "pronto" genérico: se
3 de 5 domínios selecionados forem removidos, a mensagem diz exatamente isso,
para você saber quais dois ainda precisam de atenção.

## Exemplo

A equipe da RIT autoriza o domínio `rit.org.br` para que qualquer pessoa da
equipe crie a própria conta sem esperar convite individual. Meses depois,
percebe que `parceira.org.br` também precisa desse caminho — autoriza esse
segundo domínio separadamente, porque autorizar o primeiro não alcançaria o
segundo.

## Quando dá errado

- Enquanto não houver nenhum domínio autorizado cadastrado, a lista mostra
  **"Nenhum domínio autorizado ainda. Autorize um acima."**
- Se o domínio informado já for público e ainda não confirmado, a tela
  mostra o aviso **"Este é um provedor de e-mail público"** antes de
  cadastrar — não é um erro, é uma confirmação pendente.
- Se o cadastro falhar, a tela mostra a mensagem de erro acima do
  formulário, e nada é salvo.
- Se a remoção falhar, a tela mostra a mensagem de erro, e o domínio
  continua na lista.
