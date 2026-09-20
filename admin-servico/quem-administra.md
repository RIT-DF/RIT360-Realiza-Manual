---
title: "Quem administra o serviço"
nav_order: 6
parent: "Administração do serviço"
permalink: /admin-servico/quem-administra/
---

# Quem administra o serviço

Esta tela concede, lista e revoga o acesso à administração do serviço — o
alcance mais amplo que existe no RIT360 Realiza. Como a própria tela avisa:
**"Administrar o serviço não é uma permissão de organização — é o alcance mais
amplo que existe no produto, e nunca pode chegar a zero pessoas."**

## Passo a passo — conceder

1. Abra **"Administração geral"** e role até **"Quem administra o serviço"**.
2. No campo **"Conceder por e-mail"**, digite o e-mail da pessoa.
3. Clique em **"Conceder"**.

A pessoa passa a administrar o serviço imediatamente — não é preciso ela
aceitar nem confirmar nada.

![Bloco "Quem administra o serviço" com a lista de administradores e o formulário de conceder por e-mail](/assets/capturas/admin-servico-painel-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Bloco "Quem administra o serviço" com a lista de administradores e o formulário de conceder por e-mail — no celular](/assets/capturas/admin-servico-painel-celular.png){: style="max-width:375px" }

{: .warning }
Conceder por e-mail exige que já exista uma conta com esse e-mail no serviço
de identidade. Se a pessoa nunca entrou no RIT360 Realiza antes, a linha dela
na lista aparece como **"(conta não encontrada na Identidade)"** — o acesso
foi concedido, mas ainda não há uma conta para associar a ele até que a pessoa
crie a sua.

## Passo a passo — revogar

1. Na lista de administradores, clique em **"Revogar"** ao lado da pessoa.
2. Confira o aviso em **"Revogar administração do serviço"** e confirme
   clicando em **"Revogar"** de novo, ou cancele em **"Cancelar"**.

## Por que nunca pode chegar a zero

{: .important }
O servidor recusa revogar a **última** pessoa que administra o serviço,
mesmo que quem esteja tentando seja essa própria pessoa. Sem essa regra,
seria possível zerar a administração do serviço inteiro — e, depois disso,
ninguém conseguiria conceder acesso a mais ninguém, porque conceder acesso
também é algo que só quem já administra o serviço pode fazer. Ficaria travado
sem volta, exigindo intervenção direta no banco de dados.

Por isso, revogar a própria administração ou a de outra pessoa só é permitido
enquanto sobrar pelo menos mais uma.

## Exemplo

A equipe técnica concede administração do serviço para duas pessoas, para que
uma sempre consiga agir se a outra estiver de férias. Meses depois, uma delas
sai da equipe: a outra revoga o acesso dela sem problema, porque continua
sobrando uma administradora. Se essa segunda pessoa tentasse revogar a própria
administração sem antes conceder a uma terceira, o servidor recusaria.

## Quando dá errado

- Se o e-mail informado para conceder não corresponder ao formato de um
  e-mail, o navegador pede correção antes de enviar.
- Se a concessão falhar, a tela mostra a mensagem de erro acima do formulário,
  e a lista de administradores não muda.
- Se você tentar revogar a última administradora restante, o servidor recusa a
  ação — confira a mensagem de erro mostrada na tela.
