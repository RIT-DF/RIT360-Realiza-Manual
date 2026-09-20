---
title: "E-mail de avisos"
nav_order: 3
parent: "Administração do serviço"
permalink: /admin-servico/email-de-avisos/
---

# E-mail de avisos

{: .important }
Esta é a configuração do e-mail que leva os **avisos que a pessoa escolheu
receber por e-mail**, na tela de preferências dela. Ela é **diferente** do
[e-mail de entrada](/admin-servico/email-de-entrada/), que cuida de convite de
conta nova e recuperação de senha, em outra tela, com outra credencial. As duas
configurações não têm nenhuma relação entre si.

Sem este servidor funcionando, quem já usa o produto deixa de receber os
avisos por e-mail — mas continua entrando e trabalhando normalmente. É um
incômodo, não um bloqueio: por isso o cuidado aqui pode ser menor do que no
e-mail de entrada, embora o passo a passo seja o mesmo.

## Passo a passo

1. Abra **"Administração geral"** e clique em **"E-mail de avisos"**.
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
   informada.

![Formulário completo, servidor primário preenchido com valores de exemplo (host fictício "smtp.exemplo.org.br"), mensagem "Configurado" visível](/assets/capturas/admin-servico-email-avisos-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Formulário completo, servidor primário preenchido com valores de exemplo (host fictício "smtp.exemplo.org.br"), mensagem "Configurado" visível — no celular](/assets/capturas/admin-servico-email-avisos-celular.png){: style="max-width:375px" }

{: .warning }
O servidor de reserva **não é proteção contra spam ou contra entrega
recusada** — ele só entra em ação quando o servidor primário está fora do ar.

## Exemplo

A equipe técnica do RIT360 Realiza troca de provedor de e-mail transacional.
Ela atualiza aqui o **host**, a **porta**, o **usuário** e a **senha** do novo
servidor, salva, e dispara um e-mail de teste para uma conta própria antes de
considerar a troca concluída — sem esse teste, a única forma de descobrir que
algo ficou errado seria uma organização inteira parar de receber avisos, em
silêncio.

## A armadilha da porta

{: .warning }
**Nem toda porta que "funciona" entrega da mesma forma.** Alguns servidores
oferecem duas portas: uma que **exige** login e senha antes de aceitar
qualquer mensagem, e outra que aceita mensagens apenas por confiar no
endereço de rede de quem está enviando. As duas parecem funcionar igual no
dia do cadastro, mas a porta que confia no endereço de rede depende de uma
autorização que não aparece em lugar nenhum desta tela e que pode ser
retirada sem aviso — e, quando isso acontece, os avisos param de sair **em
silêncio**. Use sempre a porta indicada pelo seu provedor como a que exige
autenticação.

{: .warning }
**Login aceito não é a mesma coisa que permissão para enviar.** É possível que
usuário e senha sejam aceitos, e mesmo assim a mensagem seja recusada na hora
de sair, porque a conta não tem permissão de assinar como o endereço colocado
em **"Endereço de remetente"**. A mensagem de erro nem sempre deixa isso
claro — se o teste falhar com host, porta, usuário e senha corretos, é o
próximo lugar a checar.

## Quando dá errado

- Se você tentar salvar sem preencher um campo obrigatório, o navegador pede
  para completá-lo antes de enviar o formulário.
- Se o salvamento falhar, a tela mostra uma mensagem de erro acima do
  formulário, e nada é salvo.
- Se o e-mail de teste falhar, a tela mostra a mensagem de erro devolvida pelo
  servidor — veja as duas armadilhas acima antes de concluir que a
  configuração está errada.
- Deixar o campo **"Senha"** em branco ao editar uma configuração já salva
  **mantém a senha anterior**.
