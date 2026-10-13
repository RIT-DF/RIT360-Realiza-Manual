---
title: "Mudar de servidor"
nav_order: 14
parent: "Administração do serviço"
permalink: /admin-servico/mudar-de-servidor/
palavras_chave: "migração, exportar instalação, importar instalação, pacote cifrado, ensaio, zip.enc"
---

# Mudar de servidor

Esta tela leva os dados da instalação inteira da RIT360 Plataforma — todas as organizações, os cadastros
de pessoas e de instituições, os clientes, as tarefas e aprovações, o conhecimento, os relatórios, os
avisos, as conversas do assistente e os arquivos — de um servidor para outro. Serve para uma migração
planejada, não para uso do dia a dia.

{: .important }
**O que não viaja está dito na tela, com o motivo.** Segredos, filas pendentes, links temporários e as
cópias de segurança da instalação ficam de fora de propósito. No ensaio da importação, a lista **"O que
este pacote não leva"** mostra, por módulo e por item, o que não veio e por quê — leia-a **antes** de
desligar o servidor de origem.

## Por que isto existe

Trocar de servidor sem uma ferramenta assim significa mexer direto no banco de dados, ação que só
quem tem acesso técnico ao servidor consegue fazer, e sem nenhuma checagem própria do produto. Esta
tela faz isso de dentro do produto, com o mesmo ensaio que protege outras importações da RIT360 Plataforma: o
que vai entrar aparece antes de qualquer gravação de verdade.

## Exportar a instalação

1. Na administração do serviço, abra **"Manutenção"** na barra principal e clique em
   **"Mudar de servidor"**.
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
   **recusados** e quantos **falhariam**. Três listas podem aparecer embaixo:
   - **"O que este pacote não leva"** — o que ficou de fora de propósito, item por item, com o motivo;
   - **"Arquivos que já faltavam na origem"** — arquivos que os dados citavam mas que **já não existiam**
     no armazenamento do servidor de origem: os registros vêm, os arquivos não;
   - **"Precisa redigitar"** — os segredos que não podem ser trazidos (veja abaixo).
5. Estando tudo certo, clique em **"Confirmar e gravar de verdade"**. Para desistir sem gravar
   nada, clique em **"Cancelar"**.

{: .warning }
**Se o ensaio encontrou falhas, a tela avisa: "O ensaio encontrou falhas. Confirmar grava o mesmo
resultado, e a importação não se refaz."** Ou seja: confirmar **não** conserta o que falhou no ensaio, e
depois de gravar a instalação deixa de estar vazia — **não dá para importar de novo por cima**. Se houver
falhas, não confirme: gere um pacote novo na origem ou avise pelo [feedback](/enviar-feedback/) com as
tabelas e os motivos que a tela mostra.

{: .important }
**Importar só funciona numa instalação vazia** — sem organização nenhuma cadastrada. É a mesma
checagem que decide se aquele servidor pode receber o pacote; num servidor que já tem uso, a
importação é recusada com a mensagem **"Só é possível importar numa instalação vazia (nenhuma
organização cadastrada)."**

{: .warning }
**Um pacote gerado antes da versão 0.56.0 não serve mais — gere de novo.** Os pacotes antigos não levavam
o cadastro de pessoas com CPF, as instituições, os clientes e o texto das páginas de conhecimento, e
alguns registros chegavam com o estado errado. O produto recusa o pacote antigo e manda gerar outro. Se
você tem um pacote guardado de antes, **não o use**: exporte de novo no servidor de origem.

## Dicas e armadilhas

- **A mudança de servidor leva o que está na lista da tela — e tudo o que está nela.** Até a versão
  0.55.0 ela deixava de fora o cadastro de pessoas (com CPF e histórico), as instituições, os clientes e
  o **texto** das páginas de conhecimento. E uma **versão aprovada** podia chegar ao servidor novo
  **parecendo pendente**, como se ninguém a tivesse decidido — quem a aprovou continuava registrado, mas
  a decisão sumia. Agora tudo isso viaja. Mesmo assim, a regra de conferência é a lista **"O que este
  pacote não leva"**: ela diz, item por item, o que ficou de fora e por quê.

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
  como tela em branco. A recusa por instalação com uso é **"Só é possível importar numa instalação
  vazia (nenhuma organização cadastrada)."** — importe num servidor novo, ainda sem organização.
- **Pacote antigo.** Um pacote gerado antes da 0.56.0 é recusado, com a orientação de gerar outro na
  origem.
- **"Importação incompleta."** — depois de confirmar, alguma linha não foi gravada. A tela lista quantas
  e em quais tabelas, e avisa: *não desligue o servidor de origem antes de conferir o que faltou*, porque o
  que não entrou só existe lá.
- Se a confirmação final falhar, a tela mostra a mensagem de erro devolvida pelo servidor.
