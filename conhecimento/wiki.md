---
title: "Wiki: páginas, histórico e publicação pública"
nav_order: 2
parent: "Conhecimento"
permalink: /conhecimento/wiki/
palavras_chave: "página wiki, ler página, editar página, negrito, formatar texto, colar do word, histórico de versões, publicar página pública, restaurar versão, endereço público"
---

# Wiki: páginas, histórico e publicação pública

A aba **"Wiki"** do Conhecimento é para texto, não para arquivo: o passo a passo de um processo, a
política interna, a apresentação da organização — qualquer coisa que se escreve e se atualiza ao
longo do tempo, em vez de se enviar como arquivo pronto.

## Abrir uma página para ler

Clique no nome da página na lista. Ela abre **para leitura**, com o texto já formatado — títulos,
listas e links do jeito que foram escritos.

### Por que isto importa

A maior parte das vezes em que alguém abre uma página da wiki é para consultar, não para escrever.
Abrindo em leitura, quem só quer conferir um passo não corre o risco de mexer no texto sem querer
— e quem não tem permissão de editar consegue ler normalmente, em vez de esbarrar numa tela que
não é para ela.

Quem pode editar vê o botão **"Editar"** no alto da página. Quem não pode simplesmente não vê o
botão.

<!-- CAPTURA PENDENTE: leitura da página de wiki, desktop e celular. Feita e descartada em
     23/09/2026 porque a tela mostrava título e lista sem formatação (issue #170); refazer quando
     a correção sair, pelas rotas /conhecimento/wiki/:id e /espacos/:id/conhecimento/wiki/:id. -->

{: .tip }
O endereço da página é o mesmo de sempre. Link guardado nos favoritos, ou colado numa conversa,
continua levando à página — agora abrindo em leitura.

## Criar uma página

1. Na aba **"Wiki"**, clique em **"Nova página"**.
2. Digite o título.

Você cai direto no editor da página nova, pronta para escrever.

## Editar uma página

Na página aberta, clique em **"Editar"**.

Escreva no corpo do editor. Ajuste o **"Título"** no campo acima dele quando precisar, e, dentro
de um espaço, escolha a **"Visibilidade"**: **"Interno (só quem administra a organização)"** ou
**"Compartilhado (todo participante do espaço)"**.

Clique em **"Salvar"** para gravar — e você volta para a leitura, já vendo o texto como ficou.
**"Cancelar"** também volta para a leitura, sem gravar nada. Cada vez que você salva, nasce **uma
versão nova** — nada se sobrescreve, e o texto de antes continua acessível no histórico.

### Formatar o texto

A barra acima do texto tem, nesta ordem: **"Negrito"**, **"Itálico"**, **"Título 1"**,
**"Título 2"**, **"Parágrafo"**, **"Lista"**, **"Lista numerada"** e **"Link"**.

Selecione o trecho e clique no botão — o texto muda na hora, na própria tela, sem código nenhum à
vista. Em **"Link"**, uma caixa pergunta **"Endereço do link:"**; cole o endereço e confirme.

{: .tip }
**Pode colar de um documento do Word ou do Google Docs.** O texto chega com a formatação que
importa — negrito, títulos, listas — e sem o lixo invisível que esses programas costumam trazer
junto, que é o que antes deixava a página com fontes e espaçamentos estranhos.

<!-- CAPTURA PENDENTE: editor da página de wiki, desktop e celular. As imagens anteriores mostravam
     a barra de formatação antiga, que saiu na 0.20.0, e foram removidas. As novas ficam para
     quando a issue #170 sair: hoje o corpo do texto aparece sem formatação, e a imagem ensinaria
     o contrário do que a página diz. Rota: /conhecimento/wiki/:id/editar. -->

## Ver o histórico e voltar a uma versão anterior

No cartão **"Histórico"**, embaixo do editor, cada versão aparece com o número e a data em que foi
salva. Para voltar a uma versão antiga:

1. Clique em **"Restaurar"** na versão desejada.
2. Confirme: "Restaurar a versão [número]? Isto cria uma NOVA versão com o conteúdo daquela data —
   nada do que existe hoje é perdido."

Restaurar nunca apaga nada — mesmo o texto atual (o que você está prestes a substituir) continua
guardado no histórico, como a versão anterior a essa restauração.

![Cartão "Histórico" da página de wiki, com três versões listadas](/assets/capturas/conhecimento-wiki-historico-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Cartão "Histórico" da página de wiki, com três versões listadas — no celular](/assets/capturas/conhecimento-wiki-historico-celular.png){: style="max-width:375px" }

## Excluir uma página

Na lista de páginas, clique em **"Excluir"** na linha dela. A confirmação pergunta: "Excluir esta
página da wiki?"

## Publicar uma página pública

Só quem tem a permissão específica de publicar Conhecimento vê o botão **"Publicar"** — ter
permissão ampla na organização, por si só, não é suficiente.

1. No editor da página, clique em **"Publicar"**.
2. Confirme: "Publicar a versão atual desta página? Ela ficará acessível sem conta, por um
   endereço público."

A página passa a existir num endereço no formato **`/p/<código>`**, que aparece como o link
**"Ver página pública"** — tanto no editor quanto na página aberta em leitura, sempre que houver
publicação no ar. Para pegar o link de uma página publicada semanas atrás, basta abri-la.

{: .important }
**"Público" quer dizer público mesmo: qualquer pessoa com o link lê a página, sem entrar no
Realiza e sem ter conta nenhuma.** Não existe senha nem verificação — quem tiver o endereço, lê. O
que fica visível é exatamente o conteúdo daquela página, no estado em que você publicou; nada mais
do Conhecimento, do espaço ou da organização.

{: .warning }
**Não publique página com dado pessoal.** Nome, telefone, e-mail ou qualquer informação de uma
pessoa específica — voluntário, beneficiário, doador — não deve entrar numa página pública: uma
vez publicado, esse dado fica acessível para qualquer um com o link, mesmo que a página seja
despublicada depois (quem já acessou pode ter guardado uma cópia).

![Página pública de wiki aberta sem sessão, com título e conteúdo visíveis](/assets/capturas/conhecimento-wiki-pagina-publica-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Página pública de wiki aberta sem sessão, com título e conteúdo visíveis — no celular](/assets/capturas/conhecimento-wiki-pagina-publica-celular.png){: style="max-width:375px" }

### Se a página é editada depois de publicada

Publicar fixa a **versão atual no momento do clique**. Se você salvar uma nova versão depois, a
página pública **não muda sozinha** — ela continua mostrando o que foi publicado, até você
publicar de novo.

### Retirar do ar

Clique em **"Retirar do ar"**. Confirme: "Retirar esta página do ar? O endereço público deixa de
funcionar (cópias já feitas não são recolhidas)." Quem tentar abrir o link depois disso vê "Página
não encontrada — Ela pode nunca ter sido publicada, ou pode ter sido retirada do ar."

## Exemplo

O **Instituto Semente** escreve a página de wiki "Como fazer a prestação de contas mensal", com o
passo a passo interno. Depois, para a campanha, Maria Oliveira escreve "Sobre a Campanha do
Agasalho 2026" e a publica, para colar o link na divulgação nas redes sociais — a página fala do
projeto, sem citar nome de nenhum beneficiário atendido.

## Dicas e armadilhas

- **O histórico não é um rascunho para descartar.** Toda vez que você salva vira versão definitiva
  — se estiver testando um texto, prefira revisar antes de clicar em "Salvar" a salvar várias vezes
  só para "ver como fica".
- **Publicar não é reversível de fato**, mesmo com o botão "Retirar do ar": alguém pode ter salvo
  ou compartilhado o link enquanto ele esteve no ar. Trate a decisão de publicar como definitiva.

## Quando dá errado

- Ao carregar uma página: "Não foi possível carregar a página."
- Ao salvar: "Não foi possível salvar."
- Sem acesso ao Conhecimento: "Você não tem acesso ao Conhecimento desta organização."
- Página pública inexistente ou despublicada: "Página não encontrada — Ela pode nunca ter sido
  publicada, ou pode ter sido retirada do ar."
