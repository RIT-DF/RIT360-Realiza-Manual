---
title: "Destinos da cópia de segurança"
nav_order: 11
parent: "Administração do serviço"
permalink: /admin-servico/destinos-backup/
---

# Destinos da cópia de segurança

Esta tela cadastra **para onde a cópia de segurança do banco é enviada, fora
do servidor original** — o que faltava na [página sobre a cópia de
segurança](/admin-servico/copia-de-seguranca/). Antes, levar a cópia para
longe do servidor dependia inteiramente de uma etapa feita à parte pela
equipe técnica; agora isso tem uma tela própria, com teste de verdade.

## Por que isto importa

Uma cópia de segurança que só existe **no mesmo servidor** do banco original
não protege contra a perda do servidor inteiro — só contra a perda do banco.
Cadastrar um destino externo (um serviço de armazenamento, um servidor
próprio, uma nuvem privada) é o que fecha essa lacuna.

## Passo a passo — cadastrar um destino

1. Abra **"Administração geral"**, role até **"Mais configurações"** e
   clique em **"Destinos da cópia de segurança"**.
2. Clique em **"Cadastrar destino"**.
3. Em **"Mecanismo"**, escolha um dos três: **"S3 e compatíveis (AWS,
   Backblaze, Wasabi, MinIO, R2…)"**, **"SFTP (servidor próprio, NAS)"** ou
   **"WebDAV (Nextcloud, ownCloud…)"**.
4. Preencha **"Nome (para reconhecer na lista)"** e os campos próprios do
   mecanismo escolhido — bucket e chaves para S3, servidor e pasta para
   SFTP, endereço da pasta para WebDAV.
5. Em **"Retenção (dias)"**, informe por quantos dias uma cópia enviada a
   este destino deve ser mantida.
6. Se quiser, ligue **"Cifrar a cópia antes de enviar"** e preencha
   **"Senha de cifragem"**.
7. Clique em **"Salvar destino"**.

![Tela de destinos da cópia de segurança, com um destino já cadastrado e testado](/assets/capturas/admin-servico-destinos-backup-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Tela de destinos da cópia de segurança — no celular](/assets/capturas/admin-servico-destinos-backup-celular.png){: style="max-width:375px" }

![Destinos da cópia de segurança](/assets/capturas/admin-servico-destinos-backup-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Destinos da cópia de segurança — no celular](/assets/capturas/admin-servico-destinos-backup-celular.png){: style="max-width:375px" }


{: .warning }
**Sem a senha de cifragem, uma cópia cifrada é inútil.** A tela avisa: "Sem
esta senha, a cópia enviada é inútil — ninguém consegue restaurá-la." Guarde
essa senha num lugar seguro **fora** deste produto — depois de salva, ela
nunca mais é exibida aqui, nem de forma mascarada.

## Passo a passo — testar, ligar/desligar e remover

Cada destino já cadastrado aparece num cartão, com o mecanismo, o nome, se
está cifrado e se está ligado.

- Para verificar se o destino funciona de verdade, clique em **"Testar
  destino"**. O teste **grava, lê de volta e apaga** um arquivo pequeno no
  destino — não é apenas uma checagem de conexão. O resultado aparece logo
  abaixo, com a mensagem de sucesso ou a de erro devolvida pelo destino.
- Cada cartão também mostra a **última cópia enviada de verdade** para
  aquele destino: quando foi, se deu certo, e se estava cifrada. Um destino
  sem histórico mostra **"Nenhuma cópia enviada para este destino ainda."**
- Para desativar um destino sem apagar o cadastro, clique em **"Desligar"**
  (ou **"Ligar"**, se já estiver desligado). Um destino desligado não recebe
  novas cópias, mas continua na lista, pronto para ser religado.
- Para remover de vez, clique em **"Remover"** e confirme em **"Confirmar
  remoção"**. A configuração some; o histórico de envios que já aconteceram
  não é apagado.

## Dicas e armadilhas

- **"Testar destino" não é o mesmo que "a última cópia real chegou lá".**
  O teste usa um arquivo pequeno, criado na hora, só para provar que
  gravar, ler e apagar funcionam com aquela credencial. Confira sempre o
  campo **"Última cópia enviada"** do cartão para saber se a cópia de
  segurança de verdade — a do banco inteiro — já foi entregue a este
  destino.
- **Cifrar sem guardar a senha em outro lugar é o mesmo que não ter cópia
  nenhuma.** A tela recusa salvar a cifragem com uma senha de menos de 8
  caracteres, mas não impede você de esquecer a senha depois de salva — e
  não há como recuperá-la por aqui.
- **Desligar não é a mesma coisa que remover.** Se você está apenas
  suspendendo o uso de um destino por um tempo (troca de fornecedor,
  manutenção), desligue em vez de remover — evita recadastrar tudo depois.

## O que ainda não existe aqui

{: .important }
Esta tela prova que **o mecanismo de envio funciona** (grava, lê, apaga).
Ela não é a prova de que uma cópia de segurança real **restaura o produto**
de ponta a ponta — esse teste continua sendo feito separadamente pela
equipe técnica, fora do produto, como já descrito em [Cópia de
segurança](/admin-servico/copia-de-seguranca/).

## Quando dá errado

- Se você ligar **"Cifrar a cópia antes de enviar"** e a senha tiver menos
  de 8 caracteres, a tela recusa salvar e mostra: "Ligando a cifragem, a
  senha é obrigatória (mínimo 8 caracteres) — sem ela a cópia fica inútil."
- Se o cadastro falhar por outro motivo, a tela mostra a mensagem de erro
  acima do formulário, e nada é salvo.
- Se **"Testar destino"** falhar, a mensagem mostrada é a que o próprio
  destino devolveu — confira credencial, permissão de escrita e caminho
  informado antes de mais nada.
- Enquanto não houver destino nenhum cadastrado, a tela mostra **"Nenhum
  destino cadastrado ainda. Cadastre um abaixo."**
