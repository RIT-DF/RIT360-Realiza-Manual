---
title: "Pessoas"
nav_order: 6
has_children: true
permalink: /pessoas/
palavras_chave: "cadastro de pessoas, ficha, voluntário, equipe, cpf, telefone, e-mail da pessoa, tirar alguém, apagar ficha, pessoa sem conta, buscar por cpf, nome social, link da ficha, visão geral, diferença entre pessoa e membro, pessoas ou membros, filtrar por situação, filtrar por classificação, quem está afastado"
---

# Pessoas

**Pessoas** é o cadastro de **quem a sua organização conhece**: a equipe, os voluntários, quem
participa de um projeto, quem ainda vai participar. Cada pessoa tem uma **ficha** — nome, CPF,
contatos, endereço — e a ficha existe **mesmo que a pessoa nunca entre no sistema**.

Por que isso importa: o que a organização precisa saber sobre as pessoas com quem trabalha
(quem é, como falar com ela) é uma coisa; quem precisa **entrar no sistema** para ver tarefas e
conversas é outra, bem menor. Separar as duas poupa a organização de convidar, e de dar acesso a,
gente que só precisa estar registrada. É também a base do que vem depois: a candidatura de um
voluntário, quando aprovada no [Flow](/flow/candidaturas/), **cria a ficha aqui** (ou liga à que já
existe); o termo de voluntário e a credencial, que ainda vão chegar, também se apoiarão nela.

## Onde fica Pessoas

Pessoas é **da casa**, não de um produto: fica no topo da barra lateral, num grupo separado dos
módulos (Realiza, Flow) por um filete — e, ao lado dela, **[Instituições](/instituicoes/)**, o
cadastro de quem a organização conhece além de gente (OSCs, empresas, fornecedores). No celular, está no menu que abre pelo botão **"Abrir
navegação"**. Como não é módulo, **não some quando um módulo é desligado** — veja
[Os produtos na barra lateral](/produtos/).

Ao entrar, a faixa de abas (no alto da tela; embaixo, no celular) passa a mostrar duas abas:

- **"Visão geral"** — o retrato do cadastro. Hoje mostra uma coisa só: o total de **"Pessoas que a
  organização conhece"**, contando todas as fichas, tenham ou não acesso ao sistema. Um link, **"Ver
  a lista de pessoas"**, leva à lista. É só o total porque é só o que existe para contar; números
  por situação ou por vencimento não existem ainda, e a tela não finge que existem.
- **"Lista de pessoas"** — a lista de fichas, com busca, filtros, cadastro e remoção. É o que o
  resto desta página descreve. (Antes dessa mudança, a lista se chamava só "Pessoas" e era uma aba do Realiza.)

Os endereços: `/pessoas` é a lista e `/pessoas/visao-geral` é a visão geral. Quem guardou o
endereço antigo da lista nos favoritos continua chegando nela.

## Pessoas e Membros: duas listas, de propósito

Duas telas da plataforma listam gente, e elas não são a mesma coisa. Confundi-las é a dúvida mais
comum desta área.

| | **Pessoas** | **Membros** |
|---|---|---|
| **Quem aparece** | Quem a organização **conhece** — pode nunca ter login. | Quem tem **acesso ao sistema** nesta organização. |
| **O que cada linha é** | Uma **ficha**: nome, CPF, contatos, endereço. | Uma **conta**, com um **papel** (Administrador, Membro, Convidado). |
| **Para que serve** | Saber quem é e como falar com a pessoa. | Decidir quem entra, e o que cada um pode fazer. |
| **Onde fica** | **Pessoas**, na barra lateral. | Engrenagem do cabeçalho, aba **"Membros"** — veja [Membros, papéis e convites](/configuracoes/membros-e-papeis/). |

A regra para não errar: **dar acesso é ato de acesso, e mora em Membros.** Convidar alguém, trocar o
papel, remover o acesso, decidir um pedido de entrada — tudo isso é Membros. Cadastrar quem a
organização conhece, sem dar acesso a nada, é Pessoas.

Um voluntário que só assina o termo, por exemplo, tem ficha em Pessoas e **nunca aparece em
Membros**. Já quem entra no sistema aparece nas duas: em Membros, com o papel; e, se tiver ficha,
em Pessoas — o nome do membro leva direto à ficha, e quem ainda não tem ficha pode ganhar uma pelo
botão **"Criar ficha"**.

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

## Quem vê Pessoas

CPF e contato são dados pessoais, e nem todo mundo deve alcançá-los inteiros. Pessoas
aparece para **qualquer pessoa com vínculo com a organização** — não só para quem
[administra](/papeis/administrador-da-organizacao/). O que muda de uma pessoa para outra é o que a
tela deixa **fazer**, conforme a permissão que ela tem (veja abaixo). Quem participa da organização
apenas como **convidado**, vindo de fora, continua sem alcançar os dados de pessoas da organização.

Quem chega ao endereço sem nenhuma permissão sobre o cadastro vê apenas: **"Você não tem permissão
para ver as pessoas desta organização."**

A permissão tem quatro partes, e uma pessoa pode ter só algumas: **ver**, **cadastrar**,
**alterar** e **remover**. Quem só pode ver encontra a tela mais enxuta: sem **"Cadastrar pessoa"**, sem caixas de
seleção, sem **"Remover"**, e com **"Abrir"** no lugar de **"Editar"** — a ficha abre **travada**,
sem o botão **"Salvar"** e com **"Voltar à lista"** no lugar de **"Cancelar"**.

A lista tem as colunas **"Nome"**, **"CPF"**, **"Contato"**, **"Situação"**, **"Classificações"**,
**"Conta"** e **"Ações"**. **"Situação"** e **"Classificações"** vêm da aba
[Classificação e situação](/pessoas/classificacao-e-situacao/) da ficha; onde a pessoa não tem
nenhuma das duas, a coluna mostra um travessão (—). A coluna **"Classificações"** mostra só as que
**estão valendo hoje** — a ficha mostra também as encerradas.

{: .note }
As duas imagens abaixo são de antes das colunas **"Situação"** e **"Classificações"** e dos
filtros: mostram a lista só com Nome, CPF, Contato, Conta e Ações. O resto — busca, seleção, botões
— segue como está nelas.

![Lista de pessoas da organização, com busca, seleção em lote e as colunas Nome, CPF, Contato, Conta e Ações (imagem de uma versão anterior, sem as colunas Situação e Classificações)](/assets/capturas/pessoas-lista-desktop.png)
{: .mt-4 }

No celular, cada pessoa vira um cartão com os mesmos dados e os mesmos botões — a situação e as
classificações aparecem nele como **"Situação: …"** e **"Classificação: …"**:

![Lista de pessoas no celular, com um cartão por pessoa (imagem de uma versão anterior, sem situação e classificações)](/assets/capturas/pessoas-lista-celular.png){: style="max-width:375px" }

## Cadastrar uma pessoa

1. Em **"Lista de pessoas"**, clique em **"Cadastrar pessoa"**.
2. Preencha o **"Nome"**. É o único campo obrigatório — a tela diz: *"Informe ao menos o nome.
   Todo o resto é opcional."*
3. Se quiser, preencha **"Nome social"**, **"CPF"** e **"Data de nascimento"**.
4. Em **"Telefones"** e **"E-mails"**, preencha um campo para cada contato (veja abaixo).
5. Preencha o **"Endereço"**, se for útil: **"CEP"**, **"Logradouro"**, **"Número"**,
   **"Complemento"**, **"Bairro"**, **"Cidade"** e **"UF"**.
6. Em **"Classificação e situação"** (opcional), marque o que a pessoa é para a organização — por
   exemplo, **Voluntário** — e, se quiser, escolha a **"Situação"** de partida; a opção **"Sem
   situação por enquanto"** deixa em branco. As classificações marcadas começam hoje; depois, tudo se
   ajusta na ficha. Veja [Classificação e situação](/pessoas/classificacao-e-situacao/).
7. Clique em **"Cadastrar"**. Para desistir, **"Cancelar"** — ou o link **"← Lista de pessoas"**, no
   alto da tela.

O cadastro é uma **tela própria**, com o título **"Cadastrar pessoa"**, e não mais uma janela por
cima da lista. **Depois de cadastrar, você vai para a ficha da pessoa** que acabou de criar, e não
de volta à lista — assim dá para conferir o que ficou salvo antes de seguir.

{: .note }
As imagens desta página mostram o cadastro e a ficha como **janelas sobre a lista**, que era como
eram antes. Os campos e os botões de dentro continuam os mesmos; muda o que está em volta: agora é
uma tela inteira, com o link "← Lista de pessoas" no alto.

![Janela Cadastrar pessoa, com todos os campos em branco (imagem de uma versão anterior, em que o cadastro era uma janela)](/assets/capturas/pessoas-ficha-nova-desktop.png)
{: .mt-4 }

![A mesma janela no celular (imagem de uma versão anterior)](/assets/capturas/pessoas-ficha-nova-celular.png){: style="max-width:375px" }

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
**"Abrir"** no lugar). A ficha abre numa **tela própria**: o título é o **nome da pessoa**, e no
alto há o link **"← Lista de pessoas"** para voltar. A tela diz *"Altere o que for preciso e
salve."* — ou, para quem só pode ver, *"Você pode ver esta ficha, mas não alterá-la."*

A ficha tem **duas abas** (a faixa **"Abas da ficha"**, no alto; embaixo, no celular):

- **"Dados e contato"** — nome, CPF, contatos e endereço. É o que esta página descreve.
- **"Classificação e situação"** — o que a pessoa é para a organização (voluntária, associada…) e em
  que pé ela está (em atuação, afastada, desligada), com o histórico. Veja
  [Classificação e situação](/pessoas/classificacao-e-situacao/).

Cada aba salva por conta própria: o **"Salvar"** de "Dados e contato" não leva junto o que se fez
na outra aba, e vice-versa.

Ao salvar, a tela confirma com **"Ficha salva."** e você continua na ficha. O que você **trocou nas
listas de telefones e e-mails** vale por inteiro: a lista que está na tela é a lista que fica. Se
você removeu um telefone da tela e clicou em **"Salvar"**, ele deixa de existir na ficha. Para sair
sem salvar, **"Cancelar"** (ou **"Voltar à lista"**, para quem só pode ver).

No rodapé da ficha, uma frase diz se a pessoa tem conta: *"Esta pessoa não tem conta de acesso.
Isso é normal: a ficha não depende de conta."* ou *"Esta pessoa também tem conta de acesso à
organização."*

![Ficha aberta para alteração, com nome social, vários telefones e e-mails (imagem de uma versão anterior, em que a ficha era uma janela)](/assets/capturas/pessoas-ficha-desktop.png)
{: .mt-4 }

![A ficha no celular (imagem de uma versão anterior)](/assets/capturas/pessoas-ficha-celular.png){: style="max-width:375px" }

### Mandar o link de uma ficha

Cada ficha tem **endereço próprio** (`/pessoas/` seguido de um identificador). Copie o endereço do
navegador e **mande para quem precisa olhar aquela ficha** — uma colega que vai ligar para a
pessoa, por exemplo. Quem abrir precisa **estar logada, na mesma organização, e ter permissão de
ver pessoas**.

Por que isso é seguro: o identificador no endereço não é o CPF nem o nome — é um código sem
significado. O CPF **nunca** aparece em endereço de página, em favorito ou em histórico.

- Para quem **não** tem permissão de ver pessoas, o link mostra *"Você não tem permissão para ver
  as pessoas desta organização."*
- Para uma ficha que foi removida, ou aberta na organização errada, a tela diz *"Esta ficha não foi
  encontrada. Ela pode ter sido removida, ou o endereço está incorreto."* — a **mesma** frase nos
  dois casos, de propósito: a tela não revela se a ficha existe em outra organização.

## Buscar e filtrar

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

### Filtrar por situação e por classificação

Abaixo da busca há dois seletores, **"Situação"** e **"Classificação"**, cada um com a opção
**"Todas"**. Escolha uma situação — por exemplo, **Afastado** — e a lista mostra só quem está nela
**agora**; escolha uma classificação e ela mostra só quem a tem **em vigor**. Os dois juntos
combinam: "classificação Voluntário e situação Afastado" lista os voluntários afastados. O botão
**"Limpar filtros"** aparece quando há filtro ligado. Sem ninguém, a tela diz *"Nenhuma pessoa
encontrada para estes filtros."*

Os seletores só aparecem se a organização tem ao menos uma situação ou uma classificação
cadastrada. Itens arquivados continuam na lista
de filtro, com a marca **"(arquivada)"** — é assim que se acha quem ainda os tem.

**O filtro vai no endereço da página** (`?situacao=` e `?classificacao=`), com um código sem
significado, nunca o nome. Por isso dá para **guardar nos favoritos ou mandar a uma colega o link de
"quem está afastada agora"**, e quem abrir vê a mesma lista — desde que tenha permissão de ver
pessoas.

{: .warning }
**Um endereço com filtro que não existe nesta organização é recusado, não ignorado.** A tela diz,
em vermelho, por exemplo: *"A situação do endereço não existe nesta organização. A lista não foi
filtrada: limpe os filtros ou escolha de novo."* Isso é de propósito: um link de "quem está
afastada" que, errado, mostrasse **todo mundo** sem avisar levaria quem o abre a concluir que
ninguém está afastado.

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
- **Ficha e acesso são decisões separadas.** Cadastrar alguém aqui não dá acesso a nada; para dar
  acesso, convide em [Membros](/configuracoes/membros-e-papeis/). E remover a ficha não tira o
  acesso de quem já é membro.
- **Prefira o rótulo a um telefone sem explicação.** Quando uma ficha acumula três números, o rótulo
  ("celular", "recados") evita ligar para o lugar errado.
- **Remover não é arquivar.** Não existe um jeito de "guardar" uma ficha fora da lista: o que sai,
  sai. Se a pessoa **deixou de participar**, não a remova: mude a situação dela para **Desligado**,
  com o motivo — a ficha continua, com o histórico, e dá para filtrar a lista por situação e ver só
  quem está em atuação. Se a dúvida é se a pessoa ainda vai participar, deixe a ficha onde está.
- **Situação e classificação são coisas diferentes.** Classificação é *o que a pessoa é* (voluntária,
  associada) e pode haver várias ao mesmo tempo; situação é *em que pé ela está* (em atuação,
  afastada, desligada) e é uma só por vez. Veja
  [Classificação e situação](/pessoas/classificacao-e-situacao/).

## Quando dá errado

- **"CPF inválido."** — os dígitos do CPF não conferem. Reveja o número; erro de digitação é o
  motivo mais comum.
- **"Já existe uma ficha com este CPF nesta organização."** — a pessoa já está cadastrada. Busque
  pelo CPF e abra a ficha que existe.
- **"Não foi possível listar as pessoas."** — a lista não carregou. Recarregue a página; se
  persistir, avise quem administra a organização.
- **"Não foi possível abrir esta pessoa."** — a ficha não carregou. Recarregue a página; se
  persistir, volte à lista por **"← Lista de pessoas"** e abra a ficha de novo.
- **"Esta ficha não foi encontrada. Ela pode ter sido removida, ou o endereço está incorreto."** — o
  link aponta para uma ficha que não existe nesta organização: foi removida, o endereço foi copiado
  pela metade, ou você está na organização errada (confira o seletor no alto da tela). Volte à
  lista e busque a pessoa pelo nome.
- **"Você não tem permissão para cadastrar pessoas nesta organização."** — você abriu o endereço de
  cadastro sem a permissão de cadastrar. Peça a quem administra a organização.
- **"Não foi possível salvar."** — o servidor não aceitou o cadastro; quando houver detalhe (um
  campo inválido, por exemplo), ele vem junto, na mesma faixa vermelha no alto da ficha. Corrija e
  tente de novo.
- **"A situação do endereço não existe nesta organização. A lista não foi filtrada: limpe os
  filtros ou escolha de novo."** (ou **"A classificação do endereço…"**) — o link traz um filtro que
  não se reconhece: foi digitado à mão, ou é de outra organização. Clique em **"Limpar filtros"** e
  escolha de novo nos seletores.
- **"Nenhuma pessoa encontrada para estes filtros."** — a combinação de situação e classificação não
  tem ninguém agora. Experimente um filtro de cada vez.
- **"Não foi possível remover."** — a remoção não foi feita. Tente de novo; se continuar, avise quem
  administra a organização.
- **"Você não tem permissão para ver as pessoas desta organização."** — o seu papel não alcança o
  cadastro. Peça a quem administra a organização.
- **"Nenhuma organização ativa. Escolha uma no seletor, ao lado da logo."** — escolha a organização
  antes de abrir Pessoas. Se você ainda não participa de nenhuma, a mensagem é *"Você ainda não tem
  vínculo com nenhuma organização."*, e o caminho é [Primeiros passos](/primeiros-passos/).
- **"Não vejo Pessoas na barra lateral."** — confira se o seletor, no alto da tela, está na
  organização certa. Quem participa só como convidado, de fora da organização, não alcança o
  cadastro de pessoas, e o item não aparece. (Pessoas **não** depende de módulo: se o Flow ou o
  Realiza não aparecem, isso não é a causa.)
- **"Pessoa que eu conheço não aparece aqui, mas está em Membros."** — Membros lista quem tem
  acesso; Pessoas lista as fichas. Quem entrou por convite pode não ter ficha ainda: em
  **Membros**, o botão **"Criar ficha"**, ao lado do nome, cria uma a partir dos dados da conta — ele
  aparece para quem tem permissão de cadastrar pessoas.

## Limites do papel

Quem administra a organização cadastra, altera e remove fichas. Os demais membros veem Pessoas, mas o
que fazem nela depende das quatro partes da permissão (ver, cadastrar, alterar, remover): quem só
pode ver consulta a lista e abre a ficha travada, sem os botões de cadastrar e remover. Classificar
uma pessoa e mudar a situação dela é de quem pode **alterar** fichas; já o botão **"Classificações e
situações"** — que mantém as listas da organização — só aparece para quem pode **configurar** o
cadastro, hoje quem administra a organização. Convidados de
fora da organização não alcançam o cadastro. O botão que você não pode usar simplesmente não
aparece — ou aparece só **"Abrir"**, no lugar de **"Editar"**.
