---
title: "E-mail de entrada (convite e senha)"
nav_order: 2
parent: "Administração do serviço"
permalink: /admin-servico/email-de-entrada/
---

# E-mail de entrada (convite e senha)

{: .important }
Esta é a configuração do e-mail que leva alguém **para dentro** do produto:
convite de conta nova e recuperação de senha. Ela é **diferente** do
[e-mail de avisos das organizações](/admin-servico/email-de-avisos/), que é
outro servidor, com outra credencial, configurado em outra tela. Confundir as
duas é o erro mais caro desta área — veja por quê, logo abaixo.

Sem este servidor funcionando, alguém que acabou de ser convidado para uma
organização não recebe o e-mail com o convite, e alguém que esqueceu a senha
não recebe o e-mail para trocá-la. Nos dois casos a pessoa fica travada do lado
de fora, **sem conseguir avisar ninguém** — porque, sem entrar, ela não tem
como usar o produto para pedir ajuda.

## Por que existem dois servidores, e não um só

O e-mail de entrada é enviado por um serviço diferente do e-mail de avisos, e
os dois foram construídos de propósito como configurações independentes: uma
organização que muda seu servidor de avisos não pode, sem querer, afetar quem
está tentando entrar no produto pela primeira vez. A consequência de errar,
porém, não é simétrica:

- Errar o e-mail de **avisos** é um incômodo — a organização deixa de receber
  notificações por e-mail, mas continua usando o produto normalmente.
- Errar o e-mail de **entrada** impede alguém de entrar, e essa pessoa não tem
  nenhum outro caminho para avisar que algo deu errado.

Por isso esta configuração pede mais cuidado que a outra.

## Passo a passo

1. Abra **"Administração geral"** e clique em **"E-mail de entrada"**.
2. Em **"Servidor primário"**, preencha:
   - **"Endereço do servidor (host)"**
   - **"Porta"**
   - **"Usuário"**
   - **"Senha"**
   - **"Endereço de remetente (o que a pessoa vê como "de")"**
3. Se você tiver um segundo servidor para os casos em que o primeiro falhar,
   ative **"Servidor de reserva"** e preencha os mesmos campos para ele.
4. Clique em **"Salvar configuração"**.
5. No bloco **"E-mail de teste"**, digite um endereço em **"Enviar teste
   para"** e clique em **"Testar primário"** (e, se tiver cadastrado,
   **"Testar reserva"**).
6. Confira se o e-mail de teste chegou de verdade na caixa de entrada
   informada — não apenas se a tela disse que enviou.

![Configuração do servidor de e-mail de entrada e recuperação de senha](/assets/capturas/admin-servico-email-entrada-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Configuração do servidor de e-mail de entrada e recuperação de senha — no celular](/assets/capturas/admin-servico-email-entrada-celular.png){: style="max-width:375px" }

{: .warning }
O servidor de reserva **não é proteção contra spam ou contra entrega
recusada** — ele só entra em ação quando o servidor primário está fora do ar.
Se o primário está no ar mas recusa a mensagem por outro motivo, a reserva não
ajuda.

## Exemplo

A equipe técnica do RIT360 Realiza contrata um servidor de e-mail transacional
para o serviço. Ela cadastra o endereço, a porta, o usuário e a senha desse
servidor como **"Servidor primário"**, salva, e só então dispara um e-mail de
teste para uma conta que ela mesma controla. Só depois de ver o teste chegar
de verdade é que considera a configuração pronta para o primeiro convite real.

## A armadilha da porta

{: .warning }
**Nem toda porta que "funciona" entrega da mesma forma.** Alguns servidores
oferecem duas portas: uma que **exige** login e senha antes de aceitar
qualquer mensagem, e outra que aceita mensagens apenas por confiar no
endereço de rede de quem está enviando, sem checar credencial nenhuma. As
duas parecem funcionar igual no dia do cadastro. A diferença aparece depois:
a porta que confia no endereço de rede depende de uma autorização que não
fica visível em lugar nenhum desta tela e que pode ser retirada sem aviso —
e, quando isso acontece, o e-mail para de sair **em silêncio**, sem erro
nenhum na tela. Use sempre a porta indicada pelo seu provedor de e-mail como
a que exige autenticação, mesmo que a outra pareça funcionar no teste do
primeiro dia.

{: .warning }
**Login aceito não é a mesma coisa que permissão para enviar.** É possível que
usuário e senha sejam aceitos pelo servidor, e mesmo assim a mensagem seja
recusada na hora de sair — porque aquela conta não tem permissão para enviar
em nome do endereço colocado em **"Endereço de remetente"**. Quando isso
acontece, a mensagem de erro costuma ser genérica e não deixa claro qual é o
problema. Se o e-mail de teste falhar mesmo com host, porta, usuário e senha
corretos, o próximo lugar a checar é justamente esse: se a conta usada tem
permissão de assinar como aquele remetente.

## Quando dá errado

- Se você tentar salvar sem preencher um campo obrigatório, o navegador pede
  para completá-lo antes de enviar o formulário.
- Se o salvamento falhar, a tela mostra uma mensagem de erro acima do
  formulário, e nada é salvo.
- Se o e-mail de teste falhar, a tela mostra a mensagem de erro devolvida pelo
  servidor. Ela nem sempre é clara — veja as duas armadilhas acima antes de
  concluir que a configuração está errada.
- Deixar o campo **"Senha"** em branco ao editar uma configuração já salva
  **mantém a senha anterior** — o campo mostra isso na dica abaixo dele. Não é
  necessário digitar a senha de novo só para alterar outro campo.
