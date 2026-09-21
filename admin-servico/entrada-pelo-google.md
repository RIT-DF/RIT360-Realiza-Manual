---
title: "Entrada pelo Google"
nav_order: 4
parent: "Administração do serviço"
permalink: /admin-servico/entrada-pelo-google/
---

# Entrada pelo Google

Esta configuração liga ou desliga o botão de entrar no RIT360 Realiza usando
uma conta Google, para o produto inteiro — não é algo que se ativa por
organização. Ela existe para quem prefere não criar mais uma senha: a pessoa
entra com a conta Google que já usa no dia a dia.

## O que se cadastra

Cadastrar aqui um identificador e um segredo obtidos no próprio Google, feitos
especificamente para autorizar o RIT360 Realiza a aceitar contas Google como
forma de entrada.

## Passo a passo

1. Abra **"Administração geral"**. No computador, esta configuração já
   aparece direto na tela, num card próprio — role até **"Login por
   Google"**. No celular, toque no botão **"Abrir"** do card **"Login por
   Google"** para chegar à tela própria dela.
2. Copie o endereço mostrado no topo da tela, ao lado de **"Endereço de
   retorno a cadastrar no Google"**, exatamente como aparece, sem acrescentar
   nem remover a barra do fim.
3. Cadastre esse endereço no painel de desenvolvedor do Google, para obter um
   **identificador do aplicativo (client id)** e um **segredo do aplicativo
   (client secret)**.
4. Volte a esta tela e preencha:
   - **"Identificador do aplicativo (client id)"**
   - **"Segredo do aplicativo (client secret)"**
5. Clique em **"Salvar credenciais"**.

![Configuração da entrada pelo Google](/assets/capturas/admin-servico-google-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Configuração da entrada pelo Google — no celular](/assets/capturas/admin-servico-google-celular.png){: style="max-width:375px" }

{: .tip }
As credenciais entram em uso assim que salvas — não é preciso reiniciar nada
nem esperar. A mensagem **"Credenciais salvas. A entrada por Google já está
usando estes valores — nada mais a reiniciar."** confirma isso.

## O efeito na tela de entrada

Assim que uma credencial válida é salva aqui, o botão de entrar com Google
passa a aparecer na tela de entrada do produto, **para todas as pessoas de
todas as organizações**. Enquanto não houver credencial cadastrada, esse botão
simplesmente não aparece — ninguém vê uma opção quebrada, ela só existe depois
de configurada.

{: .warning }
Se o identificador digitado aqui não corresponder exatamente ao que foi
cadastrado no Google — inclusive o endereço de retorno, que precisa ser
idêntico, sem barra a mais nem a menos — quem tentar entrar pelo Google
recebe uma recusa do próprio Google, antes mesmo de voltar ao RIT360 Realiza.

## Quando dá errado

- Se o salvamento falhar, a tela mostra uma mensagem de erro acima do
  formulário, e as credenciais anteriores (se houver) continuam em uso.
- O **segredo do aplicativo** não é reexibido depois de salvo — a tela mostra
  apenas se está **"Configurado"** e qual é o identificador atual. Para trocar
  o segredo, é preciso gerar um novo no Google e cadastrá-lo aqui de novo.
