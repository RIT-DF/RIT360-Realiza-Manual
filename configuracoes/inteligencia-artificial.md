---
title: "Inteligência artificial na sua organização"
nav_order: 5
parent: "Configurações"
permalink: /configuracoes/inteligencia-artificial/
---

# Inteligência artificial na sua organização

{: .important }
Esta tela é a **configuração** de uso de IA pela organização — quem decide se ela é usada, e com
qual provedor. Quem conversa com o assistente é o [Assistente](/assistente/), em separado; esta
página cobre só a configuração, não a conversa.

Só quem administra a organização ativa alcança esta tela — veja
[Dados e identidade da organização](/configuracoes/organizacao/) para como essa permissão é
concedida.

## Recusar IA por completo

Na seção **"Uso de IA por esta organização"**, marque a caixa **"Não quero que IA trate os dados
desta organização."**.

Marcando essa opção, a tela explica: "O assistente está desligado para esta organização — em
qualquer lugar, inclusive por fora desta tela. Os provedores já cadastrados continuam salvos, mas
inertes; desmarque para voltar a usá-los como estavam."

![Cartão "Uso de IA por esta organização", com a caixa "Não quero que IA trate os dados desta organização" marcada](/assets/capturas/organizacao-ia-postura-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Cartão "Uso de IA por esta organização", com a caixa "Não quero que IA trate os dados desta organização" marcada — no celular](/assets/capturas/organizacao-ia-postura-celular.png){: style="max-width:375px" }

{: .note }
Marcar a recusa **não apaga** os provedores que a organização já tinha cadastrado — eles ficam
salvos e inertes, prontos para voltar a funcionar se a recusa for desmarcada depois.

## Escolher de quem são os provedores

Desmarcando a recusa, aparece a pergunta **"De quem são os provedores usados?"**, com duas opções:

- **"Provedores do sistema (padrão)."** — usa o que o RIT360 Realiza já cadastrou. A tela avisa:
  "Hoje está incluído; se um dia isso for cobrado, você será avisado antes."
- **"Provedores próprios desta organização."** — usa só os provedores que a própria organização
  cadastra abaixo. A tela avisa: "Sem nenhum funcionando, o assistente fica indisponível — nunca
  passa a usar os do sistema."


{: .warning }
Uma organização que escolheu "provedores próprios" **nunca** cai de volta para os provedores do
sistema, nem temporariamente. Se todos os provedores próprios pararem de funcionar, o recurso de
IA fica indisponível para a organização, com mensagem clara — em vez de passar a usar, sem avisar,
um provedor que a organização não escolheu.

## Cadastrar um provedor próprio

Essa seção continua disponível mesmo com "Provedores do sistema" escolhido — assim a organização
pode preparar o cadastro antes de trocar para "próprios". Ela só se esconde quando a organização
recusou IA por completo.

1. Em **"Provedores de IA desta organização"**, escolha o **"Provedor"** no menu.
2. Preencha **"Nome (para você identificar depois)"** — um apelido para reconhecer esse cadastro
   mais tarde.
3. Preencha **"Credencial (chave de API)"**.
4. Clique em **"Cadastrar"**.


{: .important }
Depois de salva, a credencial nunca mais é exibida — nem para quem administra. Se precisar trocá-
la, cadastre de novo ou atualize o provedor; não há como "ver" a credencial já salva.

### Escolher o modelo

Por padrão, cada provedor usa o modelo padrão dele. Se quiser escolher outro:

- **Ao cadastrar** — depois de escolher o **"Provedor"** e colar a **"Credencial (chave de
  API)"**, clique em **"Ver modelos disponíveis"**. A tela mostra **"Consultando os modelos do
  provedor…"** enquanto consulta e, ao terminar, o campo **"Modelo"** com a lista que aquela
  credencial alcança — escolha um, ou deixe em **"Usar o padrão ([provedor])"**.
- **Num provedor já cadastrado** — clique em **"Trocar modelo"**, escolha o novo **"Modelo"** e
  clique em **"Salvar modelo"**.

{: .tip }
Se a tela não conseguir listar os modelos direto do provedor, ela avisa **"Não foi possível listar
direto do provedor — mostrando uma lista conhecida."** e mostra, em vez disso, uma lista que o
produto já conhece. Essa lista pode não incluir um modelo lançado recentemente pelo provedor.

### Testar, ligar e desligar, reordenar e remover

Na lista de provedores cadastrados, cada linha tem:

- Um interruptor para ligar ou desligar o provedor.
- **"Testar conexão"** — confirma se a credencial cadastrada funciona agora. Ao funcionar, a tela
  mostra **"Conexão confirmada."**
- As setas **↑** e **↓** para mudar a ordem entre os provedores.
- **"Remover"** — abre a confirmação **""[nome do provedor]" deixa de ser usado. Esta ação não
  pode ser desfeita."**


## Consumo de IA desta organização

No cartão **"Consumo de IA desta organização"**, você vê, por pessoa, quantas chamadas de IA
foram feitas, quantos **tokens** (a unidade que os provedores usam para medir o tamanho de um
texto processado) e o custo estimado, mês a mês.

Use as setas **"← Mês anterior"** e **"Mês seguinte →"** para navegar entre os meses.

![Cartão "Consumo de IA desta organização", navegação por mês e aviso de que os números são estimativas](/assets/capturas/organizacao-ia-consumo-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Cartão "Consumo de IA desta organização", navegação por mês e aviso de que os números são estimativas — no celular](/assets/capturas/organizacao-ia-consumo-celular.png){: style="max-width:375px" }

{: .important }
"Tokens e custo são ESTIMATIVAS (nenhum provedor devolve contagem exata) — não há franquia nem
teto por enquanto: o assistente nunca para por causa do consumo." Este cartão é só medição: ele
não bloqueia ninguém, mesmo que o consumo suba bastante.

Sem nenhuma chamada de IA registrada no mês, o cartão mostra "Nenhuma chamada de IA registrada
neste mês." em vez de uma tabela vazia.

## Quem autorizou isso, e quando

Toda mudança nesta configuração — recusar IA, trocar de nível, cadastrar ou remover um provedor —
fica registrada, com quem mudou e quando. É essa a resposta para "quem autorizou a IA a tratar os
nossos dados": a organização decide aqui, e a decisão fica registrada.

## Exemplo

O Instituto Semente começa usando "Provedores do sistema (padrão)", sem custo. Mais adiante, um
financiador exige que a organização use um provedor de IA próprio, contratado por ela. Maria
Oliveira cadastra a credencial desse provedor, testa a conexão e só então muda a opção para
"Provedores próprios desta organização". A partir daí, se esse provedor ficar fora do ar, o
assistente fica indisponível para o instituto até ela resolver — nunca passa a usar, sem avisar, o
provedor padrão do sistema.

## Quando dá errado

- **"Não foi possível carregar a configuração de IA."** — a tela não conseguiu buscar o estado
  atual; recarregue a página.
- **"Não foi possível salvar a configuração de IA."** — a recusa ou a troca de nível não foi
  salva; tente novamente.
- **"Não foi possível carregar os provedores de IA."** — a lista de provedores não carregou.
- **"Não foi possível cadastrar o provedor."** — confira os dados e tente de novo.
- **"Não foi possível atualizar o provedor."** — ligar/desligar não foi aplicado; tente novamente.
- **"Não foi possível reordenar."** — a nova ordem não foi salva.
- **"Não foi possível remover."** — a remoção falhou; tente novamente.
- Ao testar a conexão, uma falha mostra o motivo relatado pelo provedor, ou "Falha inesperada ao
  testar." quando não há detalhe — confira a credencial cadastrada.
- **"Você não tem permissão para administrar isto."** — sua conta não administra esta organização;
  peça a quem administra.
- **"Não foi possível carregar o consumo."** — a tabela de consumo de IA não carregou; recarregue
  a página.

## O que está escrito na política, e por que você deveria ler antes de decidir

Esta é uma decisão sobre para onde vai o conteúdo da sua organização. Três pontos da
[Política de Privacidade](/privacidade/) mudam a decisão, e é melhor conhecê-los antes:

1. **As três empresas que podem receber o conteúdo** ficam todas nos Estados Unidos.
2. **Quando a primeira falha, o pedido é refeito na seguinte, automaticamente** — o conteúdo pode
   acabar processado por uma empresa diferente da que você esperava, sem aviso naquele momento.
   Toda chamada registra qual delas respondeu, e é esse registro que permite saber depois para
   onde o conteúdo foi.
3. **Nenhuma delas usa o conteúdo para treinar os modelos**, segundo a documentação oficial de
   cada uma, e cada uma o retém por um prazo limitado — de 30 a 55 dias — apenas para monitorar
   abuso e segurança.

{: .important }
Se a sua organização tem compromisso com um doador, ou política própria, que impeça o conteúdo de
sair para empresas de fora, **a recusa completa é o caminho** — e ela funciona no servidor, não só
na tela.
