---
title: "Membros, papéis e convites"
nav_order: 4
parent: "Configurações"
permalink: /configuracoes/membros-e-papeis/
palavras_chave: "convite vencido, cancelar convite, remover acesso, trocar de papel, tirar alguém da organização, seleção em lote"
---

# Membros, papéis e convites

Aqui você vê quem faz parte da organização, decide o que cada pessoa pode fazer nela e traz gente
nova. Só quem administra a organização ativa alcança esta tela — veja
[Dados e identidade da organização](/configuracoes/organizacao/) para como essa permissão é
concedida.

## Ver os membros

Na seção **"Membros"**, cada linha mostra uma pessoa e o papel dela na organização.

Para organizações com muita gente, três recursos ajudam a achar quem você procura:

- **"Buscar por nome ou e-mail"** — filtra a lista enquanto você digita.
- **"Ordenar por"** — nome ou papel.
- **Paginação** — a lista mostra um grupo de membros por vez, com **"Anterior"** e **"Próxima"**
  para navegar, e o total ("Página X de Y") sempre visível.

Buscar ou ordenar sempre volta para a primeira página. Só recarregar a lista, sem mudar busca nem
ordenação, mantém a página em que você estava.

![Configurações da organização: identidade, membros e inteligência artificial](/assets/capturas/organizacao-configuracoes-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Configurações da organização: identidade, membros e inteligência artificial — no celular](/assets/capturas/organizacao-configuracoes-celular.png){: style="max-width:375px" }

## Os três papéis na organização

- **Administrador** — administra a organização inteira: ficha, imagem, membros, papéis, convites
  e as configurações de IA.
- **Membro** — participa da organização normalmente, mas não administra nada dela.
- **Convidado** — vínculo mais limitado, tipicamente para quem é de fora e participa de espaços
  específicos.

{: .important }
O papel na organização é uma coisa; o papel no espaço é outra, e as duas não se misturam.
Administrar a organização amplia o que se **lista** — quem administra vê que um espaço existe e
quem está nele — mas nunca o que se **lê** dentro de um espaço do qual a pessoa não é participante.
Para o que cada papel faz dentro de um espaço (Gestor, Executor, Aprovador, Observador), veja
[Chamar pessoas para o espaço](/trabalho/chamar-pessoas/).

## Trocar o papel de alguém

Na linha da pessoa, escolha o novo papel no seletor. A troca vale assim que escolhida, sem
confirmação separada.

## Remover um membro

- **Uma pessoa**: na linha dela, clique no botão **"Remover acesso"**. A confirmação mostra o
  título **"Remover acesso de [nome]"**, e o texto muda conforme o que a pessoa já fez:
  - Sem participação: **"Esta pessoa ainda não participou de nenhum espaço nem tem tarefa
    atribuída — a remoção não afeta mais nada. A conta de login dela continua existindo; ela só
    deixa de acessar esta organização."**
  - Com participação: **"Esta pessoa participa de [quantidade] espaço(s) e tem [quantidade]
    tarefa(s) atribuída(s) — isso continua existindo, atribuído a ela, mesmo sem o vínculo. A
    conta de login dela continua existindo; ela só deixa de acessar esta organização."**
- **Várias de uma vez**: marque as caixas das pessoas (ou **"Selecionar todos desta página"**) e
  clique em **"Remover selecionados"**. Confirme no diálogo, que mostra quantas pessoas serão
  afetadas.

{: .note }
"Selecionar todos desta página" marca só a página visível. Havendo mais gente filtrada do que cabe
numa página, aparece um segundo link — **"Selecionar os [quantidade] encontrados"** — que estende
a seleção a todo o resultado da busca, não só à página aberta; com todos já selecionados, o mesmo
link vira **"Limpar seleção"**.

{: .tip }
Em nenhum dos dois casos a conta de login da pessoa é apagada ou desativada — "Remover acesso"
tira o vínculo com **esta** organização. Se ela participa de outra, continua acessando a outra
normalmente.

Depois da remoção em lote, a tela mostra o resultado detalhado — por exemplo: "2 removido(s), 1
recusado(s) por regra (última pessoa com permissão de administrar), 0 não encontrado(s)."


{: .warning }
A organização nunca fica sem ninguém para administrá-la: remover a última pessoa com permissão de
administrar é recusado pela regra, mesmo dentro de uma remoção em lote — é por isso que o
resultado da ação em lote sempre separa "removido" de "recusado por regra".

## Convidar alguém por e-mail

1. Na seção **"Convidar"**, preencha o campo **"E-mail"**.
2. Escolha o **"Papel"** que a pessoa terá na organização.
3. Clique em **"Convidar"**.

A tela confirma com "Convite enviado para [e-mail]."


### O que acontece do outro lado

A pessoa convidada recebe um e-mail com um link para a tela de aceitar convite. Se ela ainda não
tem conta no Realiza, define uma senha e a conta é criada na hora — veja
[Primeiros passos](/primeiros-passos/#aceitar-um-convite). Se ela já tem conta com aquele e-mail,
o vínculo com a organização passa a valer assim que ela entra.

## Convites pendentes

Enquanto a pessoa convidada não aceita, o convite fica visível numa seção própria, **"Convites
pendentes"** — visivelmente separada de quem já é membro, e sem contar como membro em lugar
nenhum. Cada linha mostra o e-mail, o papel e a situação: **"Convite enviado"** ou **"Convite
vencido"**, quando o prazo do convite passou.

- **Reenviar**: clique em **"Reenviar"** (o botão mostra **"Reenviando…"** enquanto processa). Um
  novo e-mail sai, com um novo link — o link antigo passa a mostrar **"Este convite foi
  substituído por um mais recente. Use o link do último e-mail enviado, ou peça um novo
  convite."**
- **Cancelar**: clique em **"Cancelar convite"**. A confirmação pergunta **"Cancelar o convite
  enviado para [e-mail]? A pessoa não vai conseguir mais entrar por este convite."**, com os
  botões **"Voltar"** e **"Cancelar convite"**. Depois de cancelado, o link do convite mostra
  **"Este convite foi cancelado. Peça um novo convite."**

![Seção "Convites pendentes", com a situação, e os botões de reenviar e cancelar](/assets/capturas/membros-convites-pendentes-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Seção "Convites pendentes" — no celular](/assets/capturas/membros-convites-pendentes-celular.png){: style="max-width:375px" }

{: .tip }
Convite errado — e-mail digitado com erro de digitação, papel trocado — não precisa ser desfeito
por fora: cancele o convite errado e convide de novo com o dado certo.

## Exemplo

Maria Oliveira administra o Instituto Semente. Ela convida Carlos Nunes como **Membro** e, mais
tarde, promove Joana Martins a **Administrador** para dividir a gestão da organização com ela.
Quando Carlos deixa de colaborar com o instituto, Maria remove o acesso dele — o que não afeta os
espaços em que outras pessoas continuam trabalhando.

## Quando dá errado

- **"Não foi possível carregar os membros."** — a lista não carregou; recarregue a página.
- **"Não foi possível trocar o papel."** — a troca não foi salva; tente de novo.
- **"Não foi possível remover."** — a remoção individual falhou; tente novamente.
- **"Não foi possível concluir a remoção em lote."** — nenhuma remoção do lote foi aplicada; tente
  de novo.
- **"Não foi possível enviar o convite."** — confira o e-mail digitado e tente novamente.
- Ao reenviar ou cancelar um convite pendente, a mensagem de erro aparece perto da linha do
  convite; tente de novo.
