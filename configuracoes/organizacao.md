---
title: "Dados e identidade da organização"
nav_order: 3
parent: "Configurações"
permalink: /configuracoes/organizacao/
palavras_chave: "logo, ícone, favicon, razão social, domínio de reconhecimento, ficha da organização, engrenagem, configurações da organização, informações básicas, abas da organização, onde configurar a organização"
---

# Dados e identidade da organização

A ficha da organização — logo, ícone, razão social, contato e site — aparece para todo mundo que
participa dela: na lista de organizações, no cabeçalho do aplicativo e no seletor de organização.
Esta página é sobre como manter esses dados em dia.

{: .note }
Criar uma organização não é algo que você faz por aqui, dentro do produto já logado: o pedido é
feito na tela de entrada, antes de existir conta — veja
[Primeiros passos](/primeiros-passos/), seção "Solicitar a criação da minha organização".

## Onde fica: a engrenagem do cabeçalho

Tudo o que quem administra a organização ajusta nela mora numa área própria, que se abre pela
**engrenagem** do cabeçalho (o ícone chama-se **"Configurações da organização"**), no canto
direito, ao lado dos ícones de avisos e de feedback. Há também o link **"Configurar esta
organização"**, no seletor de organização. A área tem **cinco abas**, cada uma com a sua tela e o
seu endereço:

| Aba | O que tem | Onde está explicado |
|---|---|---|
| **"Informações básicas"** | Logo, ícone, razão social, contato, site e domínio de reconhecimento. | Esta página. |
| **"Membros"** | Quem tem acesso à organização, os papéis, os convites e os **"Pedidos de entrada"**. | [Membros, papéis e convites](/configuracoes/membros-e-papeis/) e [Pedidos de entrada](/configuracoes/pedidos-de-entrada/) |
| **"IA"** | Se e como a organização permite que IA trate os dados dela, os provedores próprios e o consumo. | [Inteligência artificial na sua organização](/configuracoes/inteligencia-artificial/) |
| **"Integrações"** | Chaves de API e webhooks. | [Integrações](/configuracoes/integracoes/) |
| **"Exportação e importação"** | Levar os dados da organização embora. | [Exportar dados](/configuracoes/exportar-dados/) |

Por que são abas: antes, tudo isso ficava empilhado numa tela só, e achar uma configuração era
rolar a página inteira. Agora cada assunto tem o seu lugar, e dá para guardar nos favoritos, ou
mandar a um colega que também administra, o endereço exato do que se quer: `/organizacao/informacoes`,
`/organizacao/membros`, `/organizacao/ia`, `/organizacao/integracoes` e `/organizacao/exportacao`.

{: .note }
O endereço antigo, `/organizacao/configuracoes`, continua funcionando: ele leva a **"Informações
básicas"**. Favorito guardado antes da mudança não quebrou.

{: .tip }
**Pessoas e Membros não são a mesma lista.** **Membros**, aqui, é quem tem **acesso ao sistema**,
com papel e permissões. **[Pessoas](/pessoas/)**, na barra lateral, é quem a organização
**conhece** — pode nunca ter login. Convidar e decidir pedidos de entrada são atos de acesso, e por
isso moram em Membros.

## Quem alcança esta área

Só quem administra a organização ativa vê a engrenagem e o link **"Configurar esta organização"** e
alcança as cinco abas. Quem não administra e chega direto a um endereço da área vê: "Você não
administra [nome da organização] — só quem administra altera as configurações dela." — a mesma
recusa vale mesmo que a pessoa digite o endereço direto, porque quem decide de verdade quem entra é
o servidor, não a tela.

## Informações básicas

Esta aba abre com o título **"Informações básicas de [nome da organização]"**, e o que vem a seguir
é o que ela contém.

## Logo e ícone são dois arquivos diferentes

A organização tem duas imagens independentes, cada uma com o próprio botão de escolher e de
remover:

- **"Logo (qualquer proporção)"** — a imagem que aparece no cabeçalho e no seletor de organização.
  Aceita qualquer proporção: não precisa ser quadrada, e a RIT360 Plataforma não corta nem distorce para
  encaixar num formato fixo.
- **"Ícone/favicon (símbolo, quadrado)"** — o símbolo que aparece onde só cabe um espaço pequeno e
  quadrado, como ao lado do nome numa lista de organizações. Continua precisando ser quadrado,
  diferente da logo.

Trocar uma não afeta a outra: enviar uma logo nova não muda o ícone, e vice-versa.

## Editar a ficha

1. Preencha **"Razão social"**, **"Pessoa de contato"**, **"E-mail de contato"**, **"Telefone de
   contato"** e **"Site"**.
2. Clique em **"Salvar ficha"**.

O site cadastrado aparece como link clicável ao lado do campo, assim que salvo.

{: .note }
As duas imagens abaixo são da tela de configurações **antes das abas**: ela ainda mostra os links
"Pedidos de entrada" e "Integrações" no topo e outras seções empilhadas. O campo **"Domínio de
reconhecimento"** e os demais campos da ficha são os mesmos.

![Tela Configurações de Instituto Semente, com os links Pedidos de entrada e Integrações no topo e o campo Domínio de reconhecimento na ficha (imagem de antes das abas)](/assets/capturas/organizacao-configuracoes-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Tela Configurações de Instituto Semente, com os links Pedidos de entrada e Integrações no topo e o campo Domínio de reconhecimento na ficha — no celular (imagem de antes das abas)](/assets/capturas/organizacao-configuracoes-celular.png){: style="max-width:375px" }

{: .note }
O nome de exibição da organização (o que aparece em toda tela, como "Instituto Semente") não muda
nesta seção — razão social, contato e site são dados de ficha, à parte.

## Domínio de reconhecimento

Em **"Domínio de reconhecimento"**, preencha o domínio do e-mail da sua instituição — por exemplo
`institutosemente.org.br`.

Esse domínio é o que evita que alguém da mesma equipe crie uma organização duplicada ao pedir
acesso: pedindo com um e-mail desse domínio, em vez de nascer uma organização nova, o pedido vira
um [pedido de entrada](/configuracoes/pedidos-de-entrada/) nesta organização, para você decidir.
Veja [Primeiros passos](/primeiros-passos/) para como esse pedido nasce, do lado de quem pede.

{: .note }
"Domínio de reconhecimento" é diferente do campo **"Site"**, ali em cima: o site é texto livre da
ficha, sem efeito em nada; o domínio de reconhecimento é o que a RIT360 Plataforma usa para casar um pedido
novo com esta organização.

## Exportar dados

A exportação dos dados da organização agora é uma aba própria, **"Exportação e importação"** — não
mais um cartão desta tela. Veja [Exportar dados](/configuracoes/exportar-dados/).

## Exemplo

Maria Oliveira, que administra o Instituto Semente, sobe a logo horizontal do instituto e, à parte,
um ícone quadrado para as listas compactas. Preenche a razão social completa, o e-mail de contato
institucional e o site do instituto. A partir daí, a logo aparece para todo mundo que participa do
Instituto Semente — no seletor de organização, na lista de organizações e no cabeçalho.

## Quando dá errado

- **"Não foi possível salvar a ficha."** — os dados de razão social, contato ou site não foram
  salvos; tente de novo.
- **"Não foi possível enviar logo."** ou **"Não foi possível enviar ícone."** — confira o formato
  do arquivo.
- **"Não foi possível remover logo."** ou **"Não foi possível remover ícone."** — tente novamente;
  se persistir, avise outra pessoa que administre a organização.
