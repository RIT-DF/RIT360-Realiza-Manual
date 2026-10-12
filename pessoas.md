---
title: "Pessoas"
nav_order: 6
permalink: /pessoas/
palavras_chave: "cadastro de pessoas, ficha, voluntário, equipe, cpf, telefone, e-mail da pessoa, tirar alguém, apagar ficha, pessoa sem conta, buscar por cpf, nome social"
---

# Pessoas

A aba **"Pessoas"** é o cadastro de **quem a sua organização conhece**: a equipe, os voluntários,
quem participa de um projeto, quem ainda vai participar. Cada pessoa tem uma **ficha** — nome,
CPF, contatos, endereço — e a ficha existe **mesmo que a pessoa nunca entre no sistema**.

Por que isso importa: o que a organização precisa saber sobre as pessoas com quem trabalha
(quem é, como falar com ela) é uma coisa; quem precisa **entrar no sistema** para ver tarefas e
conversas é outra, bem menor. Separar as duas poupa a organização de convidar, e de dar acesso a,
gente que só precisa estar registrada. É também a base do que vem depois: quando o produto
passar a cuidar de candidatura, termo de voluntário e credencial, todos eles vão se apoiar na
ficha que você cadastrar aqui.

## Ficha não é conta

Esta é a ideia que mais se entende errado, então vale parar nela.

- **Ficha** é o cadastro: quem a pessoa é e como alcançá-la. Qualquer pessoa pode ter uma, sem
  que ninguém a convide para nada.
- **Conta** é o acesso: o login e a senha com que alguém entra na RIT360 Plataforma e vê
  espaços, tarefas e conversas.

Uma ficha pode **não ter conta** (a situação normal) ou **ter conta**. A coluna **"Conta"** da
lista mostra qual é o caso: **"Sem conta"** ou **"Tem conta"**. Quando a conta de alguém passa a
existir, ela se liga à ficha que **já existe** — o sistema não cria uma segunda ficha para a
mesma pessoa.

{: .example }
O Instituto Semente cadastra as cinquenta pessoas da equipe da Campanha do Agasalho 2026: nome,
telefone, e-mail. Só três delas precisam entrar no sistema para acompanhar tarefas. As outras
quarenta e sete têm ficha e continuam sem conta, e ninguém precisou convidá-las, nem elas precisaram
criar senha.

{: .note }
Neste momento a tela **mostra** se a pessoa tem conta, mas não cria nem liga contas: convidar
alguém para a organização continua sendo feito em
[Membros, papéis e convites](/configuracoes/membros-e-papeis/).

## Quem vê esta aba

CPF e contato são dados pessoais, e nem todo mundo deve alcançá-los inteiros. A aba **"Pessoas"**
aparece para **qualquer pessoa com vínculo com a organização** — não só para quem
[administra](/papeis/administrador-da-organizacao/). O que muda de uma pessoa para outra é o que a
tela deixa **fazer**, conforme a permissão que ela tem (veja abaixo). Quem participa da organização
apenas como **convidado**, vindo de fora, continua sem alcançar os dados de pessoas da organização.
A aba fica depois de **"Clientes"**, na barra de cima no computador e na barra de baixo no celular.

Quem chega ao endereço sem nenhuma permissão sobre o cadastro vê apenas: **"Você não tem permissão
para ver as pessoas desta organização."**

A permissão tem quatro partes, e uma pessoa pode ter só algumas: **ver**, **cadastrar**,
**alterar** e **remover**. Quem só pode ver encontra a tela mais enxuta: sem **"Cadastrar pessoa"**, sem caixas de
seleção, sem **"Remover"**, e com **"Abrir"** no lugar de **"Editar"** — a ficha abre **travada**,
com o botão **"Fechar"** no lugar de **"Salvar"**.

![Lista de pessoas da organização, com busca, seleção em lote e as colunas Nome, CPF, Contato, Conta e Ações](/assets/capturas/pessoas-lista-desktop.png)
{: .mt-4 }

No celular, cada pessoa vira um cartão com os mesmos dados e os mesmos botões:

![Lista de pessoas no celular, com um cartão por pessoa](/assets/capturas/pessoas-lista-celular.png){: style="max-width:375px" }

## Cadastrar uma pessoa

1. Abra a aba **"Pessoas"** e clique em **"Cadastrar pessoa"**.
2. Preencha o **"Nome"**. É o único campo obrigatório — a janela diz: *"Informe ao menos o nome.
   Todo o resto é opcional."*
3. Se quiser, preencha **"Nome social"**, **"CPF"** e **"Data de nascimento"**.
4. Em **"Telefones"** e **"E-mails"**, preencha um campo para cada contato (veja abaixo).
5. Preencha o **"Endereço"**, se for útil: **"CEP"**, **"Logradouro"**, **"Número"**,
   **"Complemento"**, **"Bairro"**, **"Cidade"** e **"UF"**.
6. Clique em **"Cadastrar"**. Para desistir, **"Cancelar"**.

A ficha abre numa janela sobre a lista; o endereço do navegador não muda. De propósito: assim o CPF
nunca aparece em endereço de página, em favorito nem em histórico.

![Janela Cadastrar pessoa, com todos os campos em branco](/assets/capturas/pessoas-ficha-nova-desktop.png)
{: .mt-4 }

![A mesma janela no celular](/assets/capturas/pessoas-ficha-nova-celular.png){: style="max-width:375px" }

### Telefones e e-mails

Cada telefone e cada e-mail tem **o seu próprio campo**. Não existe uma caixa onde se separam
vários por vírgula.

- **"Adicionar telefone"** e **"Adicionar e-mail"** abrem mais um campo (**"Telefone 2"**,
  **"E-mail 2"**…). **"Remover"**, na linha, tira aquele contato.
- O **"Rótulo (opcional)"** diz de quê é o contato — "celular", "trabalho", "da mãe" — e ajuda
  quem vai ligar a escolher o número certo.
- O limite é de dez por tipo: no décimo aparece **"Limite de 10."**
- Sem nenhum contato, a ficha mostra *"Nenhum telefone informado."* ou *"Nenhum e-mail
  informado."* — o que é permitido.

### A máscara

CPF, telefone e CEP têm máscara: você digita só os números e a pontuação aparece sozinha.
Digitar os pontos e o traço também funciona.

## Abrir e alterar uma ficha

Clique no **nome** da pessoa ou em **"Editar"** na linha dela (quem só pode ver encontra
**"Abrir"** no lugar). A janela mostra *"Altere o que for preciso e salve."* — ou, para quem só
pode ver, *"Você pode ver esta ficha, mas não alterá-la."*

Ao salvar, o que você **trocou nas listas de telefones e e-mails** vale por inteiro: a lista que está
na tela é a lista que fica. Se você removeu um telefone da tela e clicou em **"Salvar"**, ele deixa
de existir na ficha.

No rodapé da janela, uma frase diz se a pessoa tem conta: *"Esta pessoa não tem conta de acesso.
Isso é normal: a ficha não depende de conta."* ou *"Esta pessoa também tem conta de acesso à
organização."*

![Ficha aberta para alteração, com nome social, vários telefones e e-mails](/assets/capturas/pessoas-ficha-desktop.png)
{: .mt-4 }

![A ficha no celular](/assets/capturas/pessoas-ficha-celular.png){: style="max-width:375px" }

## Buscar

O campo **"Buscar por nome, nome social ou CPF"** filtra a lista enquanto você digita.

- **Texto** procura pedaço do nome ou do nome social, sem distinguir maiúscula nem acento:
  "joao" acha "João".
- **Números** procuram pedaço do CPF, com ou sem pontos: "982.247" e "982247" dão o mesmo
  resultado.

Sem resultado, a tela diz *"Nenhuma pessoa encontrada para esta busca."* Com a lista vazia e nenhuma
busca: *"Nenhuma pessoa cadastrada ainda. Use "Cadastrar pessoa"."*

A lista mostra **50 pessoas por vez**, em ordem alfabética. A frase acima da tabela diz quantas
você está vendo — **"N pessoa(s) em ordem alfabética"** — e acrescenta **", há mais a mostrar"**
quando houver mais. Clique em **"Mostrar mais"** (o botão vira **"Carregando…"** enquanto
busca) para trazer o próximo grupo.

![Busca por 982.247 achando uma única pessoa](/assets/capturas/pessoas-busca-cpf-desktop.png)
{: .mt-4 }

{: .important }
**Na lista, o CPF aparece só com o miolo** — por exemplo `•••.982.247-••` — e inteiro só dentro
da ficha. É de propósito: a lista é o que fica à vista de quem passa atrás da tela. **A busca por
pedaço de CPF continua funcionando assim mesmo**, porque ela acontece no servidor, não pelo que
está desenhado na tela.

Na coluna **"Contato"** aparece o primeiro telefone e o primeiro e-mail. Quando a pessoa tem mais
contatos do que esses dois, a linha acrescenta **"+ N contato(s)"**. O **nome social** aparece
abaixo do nome, como **"Nome social: …"**.

## Remover uma pessoa

{: .warning }
**Remover apaga de verdade, e não há como desfazer.** A ficha e os contatos somem. Se a pessoa tem
conta de acesso, **a conta continua existindo** — remover a ficha **não** tira o acesso dela à
organização. Para tirar o acesso, use [Membros, papéis e convites](/configuracoes/membros-e-papeis/).

1. Na linha da pessoa, clique em **"Remover"**.
2. Leia a pergunta, na janela **"Remover pessoa"**: *"Remover <nome>? A ficha e os contatos dela
   serão apagados e não há como desfazer. Se ela tiver conta de acesso, a conta continua existindo."*
3. Confirme em **"Remover"**, ou desista em **"Cancelar"**.

Se a remoção for recusada, a janela **fica aberta** e mostra o motivo.

![Confirmação para remover uma pessoa](/assets/capturas/pessoas-remover-desktop.png)
{: .mt-4 }

### Remover várias de uma vez

1. Marque a caixa de cada pessoa — ou **"Selecionar todas (N na tela)"**, que marca as que
   estão visíveis.
2. Clique em **"Remover selecionadas (N)"**.
3. Na janela **"Remover pessoas"**, a pergunta diz **quantas** serão afetadas: *"Remover N
   pessoa(s)? As fichas e os contatos delas serão apagados e não há como desfazer. Quem tiver conta
   de acesso continua com a conta."* Confirme em **"Remover N"**.

![Confirmação de remoção em lote, dizendo quantas pessoas serão afetadas](/assets/capturas/pessoas-lote-confirmar-celular.png){: style="max-width:375px" }

Quando termina, um quadro acima da lista conta o que aconteceu, em três grupos:

> **2 removida(s), 1 recusada(s) pela regra do sistema, 0 com falha.**
> Recusada: Paulo Henrique Duarte — Esta ficha já não existia.

- **Removidas** — apagadas.
- **Recusadas pela regra do sistema** — o sistema disse que não pode, e disse por quê: a ficha já
  tinha sido removida por outra pessoa, ou a sua permissão não alcança aquela ficha. Tentar de
  novo não muda nada.
- **Com falha** — algo deu errado no caminho (conexão, por exemplo). Ao contrário da recusada, essa
  vale tentar de novo.

Cada recusada e cada falha aparece numa linha própria, com o **nome** e o **motivo**.

![Resultado de uma remoção em lote: duas removidas e uma recusada, com o nome e o motivo](/assets/capturas/pessoas-lote-resultado-desktop.png)
{: .mt-4 }

{: .warning }
**A remoção em lote não é "tudo ou nada".** Ela remove uma pessoa por vez, em sequência. Se a
conexão cair no meio, parte da lista **já foi removida** — e o quadro de resultado diz exatamente
quantas. Antes de remover muitas fichas, confira a seleção: o quadro mostra o que aconteceu, mas
não devolve o que foi apagado.

## Dicas e armadilhas

- **Cadastre quem a organização precisa conhecer, não só quem vai entrar.** Convidar para o sistema
  é outra decisão; a ficha não depende dela.
- **CPF repetido na mesma organização é recusado.** Não dá para ter duas fichas com o mesmo CPF na
  sua organização — a mensagem é **"Já existe uma ficha com este CPF nesta organização."** Antes de
  cadastrar de novo, **busque** pelo CPF: provavelmente a pessoa já está lá.
- **A mesma pessoa pode ter ficha em organizações diferentes, e isso é normal.** Quem é voluntária
  em duas organizações tem uma ficha em cada, e as duas não se enxergam: o que uma organização
  cadastra nunca aparece para a outra.
- **O CPF é conferido.** Um número que não passa na conferência dos dígitos é recusado — veja abaixo.
  Se a pessoa não tem CPF à mão, deixe o campo em branco: ele é opcional.
- **Prefira o rótulo a um telefone sem explicação.** Quando uma ficha acumula três números, o rótulo
  ("celular", "recados") evita ligar para o lugar errado.
- **Remover não é arquivar.** Não existe, hoje, um jeito de "guardar" uma ficha fora da lista: o que
  sai, sai. Se a dúvida é se a pessoa ainda vai participar, deixe a ficha onde está.

## Quando dá errado

- **"CPF inválido."** — os dígitos do CPF não conferem. Reveja o número; erro de digitação é o
  motivo mais comum.
- **"Já existe uma ficha com este CPF nesta organização."** — a pessoa já está cadastrada. Busque
  pelo CPF e abra a ficha que existe.
- **"Não foi possível listar as pessoas."** — a lista não carregou. Recarregue a página; se
  persistir, avise quem administra a organização.
- **"Não foi possível abrir esta pessoa."** — a ficha não carregou, ou foi removida enquanto você
  olhava a lista. Feche a janela e atualize a lista.
- **"Não foi possível salvar."** — o servidor não aceitou o cadastro; quando houver detalhe (um
  campo inválido, por exemplo), ele vem junto, na mesma faixa vermelha no alto da janela. Corrija e
  tente de novo.
- **"Não foi possível remover."** — a remoção não foi feita. Tente de novo; se continuar, avise quem
  administra a organização.
- **"Você não tem permissão para ver as pessoas desta organização."** — o seu papel não alcança o
  cadastro. Peça a quem administra a organização.
- **"Nenhuma organização ativa. Escolha uma no seletor, ao lado da logo."** — escolha a organização
  antes de abrir a aba. Se você ainda não participa de nenhuma, a mensagem é *"Você ainda não tem
  vínculo com nenhuma organização."*, e o caminho é [Primeiros passos](/primeiros-passos/).
- **"Não vejo a aba Pessoas."** — confira se o seletor, no alto da tela, está na organização certa.
  Quem participa só como convidado, de fora da organização, não alcança o cadastro de pessoas.

## Limites do papel

Quem administra a organização cadastra, altera e remove fichas. Os demais membros veem a aba, mas o
que fazem nela depende das quatro partes da permissão (ver, cadastrar, alterar, remover): quem só
pode ver consulta a lista e abre a ficha travada, sem os botões de cadastrar e remover. Convidados de
fora da organização não alcançam o cadastro. O botão que você não pode usar simplesmente não
aparece — ou aparece só **"Abrir"**, no lugar de **"Editar"**.
