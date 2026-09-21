---
title: "Servidor de e-mail do produto"
nav_order: 2
parent: "Administração do serviço"
permalink: /admin-servico/email/
---

# Servidor de e-mail do produto

Esta tela cadastra **um único servidor de e-mail**, usado pelos dois caminhos
de e-mail que o RIT360 Realiza tem: os avisos que a pessoa escolheu receber,
na tela de preferências dela, **e** o convite de conta nova e a recuperação de
senha. Trocar a credencial aqui já vale para os dois — não é preciso configurar
em dois lugares.

{: .important }
**A consequência de errar não é simétrica, mesmo sendo um servidor só.**
Errar e deixar de entregar um **aviso** é um incômodo — a organização deixa
de ser notificada, mas continua usando o produto normalmente. Errar e deixar
de entregar um e-mail de **entrada** (convite ou recuperação de senha) trava
alguém do lado de fora, **sem nenhum jeito de avisar** — porque, sem entrar,
essa pessoa não tem como usar o produto para pedir ajuda. É por isso que esta
tela testa os dois caminhos separadamente, mesmo eles saindo do mesmo
servidor: um teste que prove que os avisos saem não prova que a entrada
também sai.

## Por onde os dois caminhos passam

- **Avisos das organizações** — enviados pelo módulo Comunicação, dono desta
  configuração.
- **Entrada e recuperação de senha** — enviados pelo serviço de Identidade,
  que **herda** esta mesma configuração por padrão. Existe uma exceção para
  quando a Identidade precisar de um servidor diferente — veja a seção
  **"Configuração própria da Identidade (exceção)"**, mais abaixo nesta
  página.

## Passo a passo — configurar o servidor

1. Abra **"Administração geral"**, role até **"Mais configurações"** e
   clique em **"Servidor de e-mail"**.
2. Em **"Servidor primário"**, preencha:
   - **"Endereço do servidor (host)"**
   - **"Porta"**
   - **"Usuário"**
   - **"Senha"**
   - **"Endereço de remetente (o que a pessoa vê como "de")"**
3. Se você tiver um segundo servidor para os casos em que o primeiro falhar,
   ative **"Servidor de reserva"** e preencha os mesmos campos para ele.
4. Clique em **"Salvar configuração"**.

Logo acima do formulário, um aviso mostra o estado atual: **"Configurado —
primário: [endereço do servidor], reserva: [endereço]"** (ou **"(sem
reserva)"**, se você não tiver cadastrado um segundo servidor), ou **"Ainda
não configurado."**, antes do primeiro cadastro.

Ao salvar com sucesso, a tela confirma: **"Configuração salva. Vale para os
avisos das organizações e, se a Identidade não tiver configuração própria,
também para o convite e a recuperação de senha. Use os testes abaixo antes de
contar com ela de verdade."**

![Configuração do servidor de e-mail do produto, com os dois blocos de teste](/assets/capturas/admin-servico-email-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Configuração do servidor de e-mail do produto — no celular](/assets/capturas/admin-servico-email-celular.png){: style="max-width:375px" }

{: .warning }
O servidor de reserva **não é proteção contra spam ou contra entrega
recusada** — ele só entra em ação quando o servidor primário está fora do ar.
Se o primário está no ar mas recusa a mensagem por outro motivo, a reserva
não ajuda.

## Passo a passo — testar os dois caminhos

No bloco **"E-mail de teste"**, digite um endereço em **"Enviar teste para"**.
Dali para baixo há **dois grupos de botões separados**, um para cada caminho:

1. Em **"Avisos das organizações"**, clique em **"Testar primário"** (e, se
   tiver cadastrado, **"Testar reserva"**).
2. Em **"Entrada e recuperação de senha"**, clique em **"Testar primário"**
   (e, se tiver cadastrado, **"Testar reserva"**).
3. Confira se o e-mail de teste chegou de verdade na caixa de entrada
   informada — **para os dois grupos**, não apenas se a tela disse que
   enviou.

Cada teste bem-sucedido confirma pelo servidor usado: **"E-mail de teste
(avisos) enviado pelo servidor primário. Confira a caixa de entrada
informada."** (ou "de reserva", conforme o botão clicado), e o mesmo padrão
para **"E-mail de teste (entrada/recuperação)"**.

{: .warning }
**Testar um grupo não prova o outro.** Os dois usam o mesmo servidor
cadastrado acima, mas cada um sai por um caminho de código diferente
(Comunicação e Identidade) — um problema pode existir num caminho e não no
outro. Não dê a configuração por pronta sem ver os dois testes chegarem.

## Exemplo

A equipe técnica do RIT360 Realiza contrata um servidor de e-mail
transacional. Ela cadastra host, porta, usuário e senha como **"Servidor
primário"**, salva, e dispara um e-mail de teste em **"Avisos das
organizações"**. Vê chegar, mas não para por aí: dispara o mesmo teste em
**"Entrada e recuperação de senha"** e só considera a configuração pronta
depois de ver os dois chegarem na caixa de entrada de teste.

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
nenhum na tela, nos dois caminhos. Use sempre a porta indicada pelo seu
provedor de e-mail como a que exige autenticação, mesmo que a outra pareça
funcionar no teste do primeiro dia.

{: .warning }
**Login aceito não é a mesma coisa que permissão para enviar.** É possível
que usuário e senha sejam aceitos pelo servidor, e mesmo assim a mensagem
seja recusada na hora de sair — porque aquela conta não tem permissão para
enviar em nome do endereço colocado em **"Endereço de remetente"**. Quando
isso acontece, a mensagem de erro costuma ser genérica e não deixa claro
qual é o problema. Se o e-mail de teste falhar mesmo com host, porta,
usuário e senha corretos, o próximo lugar a checar é justamente esse: se a
conta usada tem permissão de assinar como aquele remetente.

## Configuração própria da Identidade (exceção)

No fim da tela existe uma seção recolhida, **"Configuração própria da
Identidade (exceção)"**. Ela só existe para o dia em que **outro produto
RIT360** passar a compartilhar esta mesma Identidade e precisar de um
servidor de e-mail diferente para entrada e recuperação de senha.

{: .note }
O padrão é **herdar** o servidor configurado no topo da tela. Abrir esta
seção e cadastrar algo aqui é a exceção — e volta a valer só para o caminho
de entrada e recuperação de senha, nunca para os avisos das organizações.

### Passo a passo — cadastrar (ou remover) a configuração própria

1. Role até **"Configuração própria da Identidade (exceção)"** e clique para
   abrir.
2. Ative **"Usar configuração própria para entrada"**.
3. Preencha o **"Servidor primário (Identidade)"** com os mesmos campos de
   sempre, e opcionalmente um **"Servidor de reserva (Identidade)"**.
4. Clique em **"Salvar configuração própria"**. A tela confirma:
   **"Configuração própria da Identidade salva. A partir de agora ela é usada
   no lugar da herdada."**
5. Para voltar a herdar o servidor do topo, clique em **"Remover
   configuração própria (voltar a herdar)"**. A tela confirma: **"Configuração
   própria removida. A Identidade volta a herdar o servidor configurado
   acima."**

{: .important }
Enquanto a Identidade estiver usando uma configuração própria, a tela avisa
isso logo no topo: **"A Identidade está usando uma configuração própria para
entrada e recuperação de senha — o servidor acima não vale para esse caminho
enquanto ela existir."** Nesse estado, testar e ajustar o servidor principal
não muda nada para quem está entrando ou recuperando a senha — é a
configuração própria que decide.

## Quando dá errado

- Se você tentar salvar sem preencher um campo obrigatório, o navegador pede
  para completá-lo antes de enviar o formulário.
- Se o salvamento falhar (no servidor principal ou na configuração própria
  da Identidade), a tela mostra uma mensagem de erro acima do formulário, e
  nada é salvo.
- Se um e-mail de teste falhar, a tela mostra a mensagem de erro devolvida
  pelo servidor. Ela nem sempre é clara — veja as duas armadilhas acima
  antes de concluir que a configuração está errada.
- Deixar o campo **"Senha"** em branco ao editar uma configuração já salva
  **mantém a senha anterior** — vale tanto para o servidor principal quanto
  para a configuração própria da Identidade. Não é necessário digitar a
  senha de novo só para alterar outro campo.
