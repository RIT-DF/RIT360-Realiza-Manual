---
title: "Ações em lote"
nav_order: 3
parent: "Instituições"
permalink: /instituicoes/acoes-em-lote/
palavras_chave: "ações em lote, selecionar várias instituições, arquivar várias, mudar situação de várias, acrescentar relação a várias, selecionar todas, recusada pela regra do sistema, com falha"
---

# Ações em lote

Na lista de instituições você marca várias de uma vez e faz **uma ação em todas**: arquivar,
desarquivar, mudar a situação ou acrescentar uma relação. Cada ação diz **quantas** instituições
afeta antes de executar e, no fim, conta **o que aconteceu com cada uma**.

## Por que isto importa

Uma campanha termina e vinte fornecedores ficam inativos. Um edital credencia quinze empresas de uma
vez. Fazer isso uma por uma é repetir o mesmo clique trinta vezes — e é onde os erros aparecem, por
cansaço. Em lote, você decide **uma vez** e a tela cuida de aplicar. O que o lote **não** faz é
esconder falha parcial: o resultado separa o que concluiu, o que o sistema recusou e o que falhou.

## Passo a passo

1. Na **"Lista de instituições"**, marque a caixa de cada instituição — ou **"Selecionar todas (N na
   tela)"**, que marca as que estão visíveis. (Só aparecem as caixas para quem pode alterar
   instituições.)
2. Clique em uma das ações, cada uma com a quantidade escolhida entre parênteses:
   - **"Arquivar (N)"** — as instituições saem da lista em uso. Nenhum dado é apagado, e dá para
     desarquivar depois.
   - **"Desarquivar (N)"** — voltam para a lista em uso.
   - **"Mudar situação… (N)"** — escolha a **"Nova situação"** e escreva o **"Motivo"** (obrigatório).
     A mudança vale para todas as marcadas, com o mesmo motivo, e fica no histórico de cada uma. As que
     já estão nessa situação são recusadas.
   - **"Acrescentar relação… (N)"** — escolha a **"Relação"**. Ela começa hoje em cada uma. As que já
     a têm em vigor são recusadas.
3. A janela confirma com a **quantidade** no título — por exemplo, **"Arquivar 12 instituição(ões)"** —
   e o texto do que vai acontecer. Confirme em **"Confirmar (N)"**, ou desista em **"Cancelar"**.

## O resultado: três grupos

Quando termina, um quadro acima da lista conta o que aconteceu, em três grupos:

> **10 arquivada(s), 1 recusada(s) pela regra do sistema, 1 com falha.**
> Recusada: Gráfica Boa Impressão — [motivo]
> Falha: Contabilidade Prado — [motivo]

(A primeira palavra muda com a ação: **arquivada(s)**, **desarquivada(s)**, **com a situação
mudada** ou **com a relação acrescentada**.)

- **Concluídas** — a ação foi aplicada.
- **Recusadas pela regra do sistema** — o sistema disse que não pode, e disse por quê: a instituição
  já estava na situação escolhida, já tinha a relação, não existia mais ou a sua permissão não a
  alcança. **Tentar de novo não muda nada.**
- **Com falha** — algo deu errado no caminho (a conexão caiu, por exemplo). Ao contrário da recusada,
  **vale tentar de novo**.

Cada recusada e cada falha aparece numa linha própria, com o **nome** e o **motivo**.

<!-- CAPTURA: rota=/instituicoes | viewport=1920x1080 | o-que-mostrar=Instituições marcadas, a janela "Mudar a situação de 3 instituição(ões)" com a nova situação e o motivo preenchidos | arquivo=instituicoes-lote-confirmar-desktop.png -->
<!-- CAPTURA: rota=/instituicoes | viewport=1920x1080 | o-que-mostrar=O quadro de resultado com concluídas, uma recusada pela regra do sistema e uma com falha, cada uma com nome e motivo | arquivo=instituicoes-lote-resultado-desktop.png -->

{: .warning }
**O lote não é "tudo ou nada".** Ele aplica a ação **uma instituição por vez**, em sequência. Se a
conexão cair no meio, parte da seleção **já foi alterada** — e o quadro de resultado diz
exatamente quantas. Antes de agir sobre muitas, confira a seleção: o quadro mostra o que aconteceu,
mas não desfaz.

## Exemplo

A campanha do agasalho acabou, e a Gráfica Boa Impressão e mais dois fornecedores só existiam por
causa dela. Maria Oliveira filtra por **Relação: Fornecedora**, marca os três, clica em **"Mudar
situação… (3)"**, escolhe **Encerrada** e escreve o motivo: "Fornecimento da campanha do agasalho
2026, encerrada". A tela responde: "2 com a situação mudada, 1 recusada(s) pela regra do sistema,
0 com falha. Recusada: Gráfica Boa Impressão — A instituição já está nesta situação." Maria
descobre que a Gráfica já estava encerrada, e a história confere.

## Dicas e armadilhas

- **Filtre antes de marcar.** "Selecionar todas" marca só as que estão na tela; filtrar por
  **Relação** ou **Situação** antes é o jeito de ter na tela exatamente as que importam.
- **Atenção à seleção depois de mudar de filtro ou de busca.** Mudar o filtro limpa a seleção — de
  propósito, para você não agir sobre instituições que saíram da tela.
- **O motivo é o mesmo para todas.** Se as razões são diferentes, faça lotes separados, ou mude a
  situação de uma em uma na ficha.
- **Lote de "relação" não encerra a anterior.** Acrescentar **Integrada** a quem já era **Fornecedora**
  dá duas relações ao mesmo tempo (o que é permitido). Para trocar uma pela outra, encerre a antiga
  na ficha.

## Quando dá errado

- **Os botões de ação estão apagados.** Eles só ligam depois de marcar ao menos uma instituição (e,
  durante a execução, ficam apagados até terminar).
- **Falta "Confirmar".** Em **"Mudar situação"**, o botão só liga com a **"Nova situação"** e o
  **"Motivo"** preenchidos; em **"Acrescentar relação"**, com a **"Relação"** escolhida.
- **Várias recusadas com o mesmo motivo.** Leia a linha: provavelmente a ação não se aplicava (já
  estavam na situação, já tinham a relação). Não é falha.
- **Falhas.** Tente de novo só com as que falharam: filtre, marque e repita.

## Limites do papel

Quem administra a organização marca e age em lote. Quem só pode ver não encontra as caixas de seleção
nem os botões de ação.
