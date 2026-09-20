---
title: "Inteligência artificial na sua organização"
nav_order: 5
parent: "Configurações"
permalink: /configuracoes/inteligencia-artificial/
---

# Inteligência artificial na sua organização

{: .important }
O que existe hoje nesta tela é a **configuração** de uso de IA pela organização — quem decide se
ela é usada, e com qual provedor. Um assistente que conversa com você dentro do Realiza ainda não
existe. Esta página documenta o que está na tela agora, não o que está planejado.

Só quem administra a organização ativa alcança esta tela — veja
[Dados e identidade da organização](/configuracoes/organizacao/) para como essa permissão é
concedida.

## Recusar IA por completo

Na seção **"Uso de IA por esta organização"**, marque a caixa **"Não quero que IA trate os dados
desta organização."**.

Marcando essa opção, a tela explica: "O assistente está desligado para esta organização — em
qualquer lugar, inclusive por fora desta tela. Os provedores já cadastrados continuam salvos, mas
inertes; desmarque para voltar a usá-los como estavam."

![Caixa "Não quero que IA trate os dados desta organização" marcada, com a explicação abaixo](/assets/capturas/organizacao-configuracoes-desktop.png)
{: .mt-4 }

A mesma tela no celular:

![Caixa "Não quero que IA trate os dados desta organização" marcada, com a explicação abaixo — no celular](/assets/capturas/organizacao-configuracoes-celular.png){: style="max-width:375px" }

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

### Testar, ligar e desligar, reordenar e remover

Na lista de provedores cadastrados, cada linha tem:

- Um interruptor para ligar ou desligar o provedor.
- **"Testar conexão"** — confirma se a credencial cadastrada funciona agora.
- As setas **↑** e **↓** para mudar a ordem entre os provedores.
- **"Remover"** — abre a confirmação "[Nome do provedor] deixa de ser usado. Esta ação não pode
  ser desfeita."


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
