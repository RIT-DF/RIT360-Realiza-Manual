---
title: "Dados e identidade da organização"
nav_order: 3
parent: "Configurações"
permalink: /configuracoes/organizacao/
palavras_chave: "logo, ícone, favicon, razão social, domínio de reconhecimento, ficha da organização"
---

# Dados e identidade da organização

A ficha da organização — logo, ícone, razão social, contato e site — aparece para todo mundo que
participa dela: na lista de organizações, no cabeçalho do aplicativo e no seletor de organização.
Esta página é sobre como manter esses dados em dia.

{: .note }
Criar uma organização não é algo que você faz por aqui, dentro do produto já logado: o pedido é
feito na tela de entrada, antes de existir conta — veja
[Primeiros passos](/primeiros-passos/), seção "Solicitar a criação da minha organização".

## Quem alcança esta tela

Só quem administra a organização ativa vê o link **"Configurar esta organização"** e alcança a
tela de configurações. Quem não administra e chega direto ao endereço vê: "Você não administra
[nome da organização] — só quem administra altera as configurações dela." — a mesma recusa vale
mesmo que a pessoa digite o endereço direto, porque quem decide de verdade quem entra é o
servidor, não a tela.

## Os outros dois links desta tela

No topo, ao lado do título, dois links levam a assuntos que também são "da organização" mas têm
página própria:

- [Pedidos de entrada](/configuracoes/pedidos-de-entrada/) — gente com e-mail do mesmo domínio
  pedindo para entrar, esperando sua decisão.
- [Integrações](/configuracoes/integracoes/) — chaves de API e webhooks, para conectar sistemas
  externos a esta organização.


## Logo e ícone são dois arquivos diferentes

A organização tem duas imagens independentes, cada uma com o próprio botão de escolher e de
remover:

- **"Logo (qualquer proporção)"** — a imagem que aparece no cabeçalho e no seletor de organização.
  Aceita qualquer proporção: não precisa ser quadrada, e o Realiza não corta nem distorce para
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

![Tela Configurações de Instituto Semente, com os links Pedidos de entrada e Integrações no topo e o campo Domínio de reconhecimento na ficha](/assets/capturas/organizacao-configuracoes-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Tela Configurações de Instituto Semente, com os links Pedidos de entrada e Integrações no topo e o campo Domínio de reconhecimento na ficha — no celular](/assets/capturas/organizacao-configuracoes-celular.png){: style="max-width:375px" }

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
ficha, sem efeito em nada; o domínio de reconhecimento é o que o Realiza usa para casar um pedido
novo com esta organização.

## Exportar dados

No cartão **"Exportar dados"**, o link **"Exportar a organização"** leva à tela onde você pede o
pacote com os dados da organização inteira. Veja
[Exportar dados](/configuracoes/exportar-dados/).

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
