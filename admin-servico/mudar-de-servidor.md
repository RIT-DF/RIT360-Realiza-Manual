---
title: "Mudar de servidor"
nav_order: 14
parent: "Administração do serviço"
permalink: /admin-servico/mudar-de-servidor/
palavras_chave: "migração, exportar instalação, importar instalação, pacote cifrado, ensaio, zip.enc"
---

# Mudar de servidor

Esta tela leva a instalação inteira do RIT360 Realiza — todas as organizações, pessoas, vínculos,
conteúdo e configurações — de um servidor para outro. Serve para uma migração planejada, não para
uso do dia a dia.

## Por que isto existe

Trocar de servidor sem uma ferramenta assim significa mexer direto no banco de dados, ação que só
quem tem acesso técnico ao servidor consegue fazer, e sem nenhuma checagem própria do produto. Esta
tela faz isso de dentro do produto, com o mesmo ensaio que protege outras importações do Realiza: o
que vai entrar aparece antes de qualquer gravação de verdade.

## Exportar a instalação

1. Abra **"Administração geral"** e clique em **"Mudar de servidor"**.
2. Na aba **"Exportar"**, escolha **"Senha do pacote"** e repita em **"Confirme a senha"** — pelo
   menos 8 caracteres.
3. Clique em **"Gerar pacote de exportação"**.
4. Acompanhe o selo de estado: **"Preparando"**, **"Pronto para baixar"**, **"Falhou"** ou
   **"Expirado"**.
5. Com o selo **"Pronto para baixar"**, clique em **"Baixar pacote"**.

![Aba "Exportar" da tela "Mudar de servidor", com um pedido no estado "Pronto para baixar"](/assets/capturas/admin-servico-mudar-servidor-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Aba "Exportar" da tela "Mudar de servidor", com um pedido no estado "Pronto para baixar" — no celular](/assets/capturas/admin-servico-mudar-servidor-celular.png){: style="max-width:375px" }

{: .warning }
**A senha nunca é guardada pelo produto.** Sem ela, ninguém abre o pacote — nem quem tem acesso ao
servidor onde ele fica. Guarde essa senha num lugar seguro e separado do arquivo baixado: perdendo
a senha, o pacote se torna inútil.

## Importar uma instalação

1. No servidor de destino, abra a aba **"Importar"**.
2. Escolha o **"Pacote (.zip.enc)"** baixado na exportação e informe a **"Senha do pacote"**.
3. Clique em **"Fazer ensaio (não grava nada)"**.
4. Confira o resultado, tabela por tabela: quantos registros **entrariam**, quantos seriam
   **recusados** e quantos **falhariam**. Se houver segredos que não podem ser trazidos (veja
   abaixo), a lista **"Precisa redigitar"** aparece também.
5. Estando tudo certo, clique em **"Confirmar e gravar de verdade"**. Para desistir sem gravar
   nada, clique em **"Cancelar"**.

{: .important }
**Importar só funciona numa instalação vazia** — sem organização nenhuma cadastrada. É a mesma
checagem que decide se aquele servidor pode receber o pacote; num servidor que já tem uso, a
importação é recusada.

## Dicas e armadilhas

- **Segredos não atravessam a migração.** Chaves de API, credenciais de provedor de IA e outros
  segredos são cifrados com a chave do servidor de origem, e por isso não podem ser trazidos junto.
  A lista **"Precisa redigitar"**, no ensaio, diz exatamente quais são — cadastre-os de novo, nas
  telas de configuração correspondentes, depois de confirmar a importação. Esquecer este passo
  deixa a organização sem aquela integração funcionando, em silêncio, até alguém precisar dela.
- **O ensaio é a sua única chance de conferir antes.** Depois de clicar em **"Confirmar e gravar de
  verdade"**, os registros aceitos ficam gravados; não existe desfazer pela própria tela.
- **Pacote e senha são dois segredos separados.** Perder o arquivo ainda deixa você sem nada
  útil sem a senha, e vice-versa — trate os dois com o mesmo cuidado que trataria uma senha de
  banco.

## Quando dá errado

- Ao pedir a exportação, senha curta ou confirmação que não bate: a tela avisa antes de enviar
  qualquer coisa ao servidor.
- Se a exportação falhar, o selo muda para **"Falhou"** e a mensagem de erro aparece junto.
- Um pacote pronto que não foi baixado a tempo expira — o selo muda para **"Expirado"**; gere um
  pacote novo.
- Ao rodar o ensaio, senha errada ou instalação de destino não vazia chegam como recusa clara, não
  como tela em branco.
- Se a confirmação final falhar, a tela mostra a mensagem de erro devolvida pelo servidor.
