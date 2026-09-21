---
title: "Indicadores do espaço"
nav_order: 18
parent: "O trabalho do dia a dia"
permalink: /trabalho/indicadores/
---

# Indicadores do espaço

Um indicador é um número que sua organização acompanha ao longo do tempo — pessoas atendidas,
cestas básicas entregues, atendimentos realizados. A aba **"Indicadores"** guarda esse número por
período, para você ver a evolução e para ele entrar automaticamente nos
[relatórios](/trabalho/relatorios/) do espaço.

{: .note }
Só quem gerencia o espaço vê e mexe em indicadores — é dado de trabalho interno da organização,
não algo que um convidado de fora acompanha.

## Criar um indicador

1. Na aba **"Indicadores"**, clique em **"Novo indicador"**.
2. Preencha **"Nome"** (por exemplo, "Pessoas atendidas"), **"Unidade"** (por exemplo,
   "pessoas") e **"Origem"** — de onde vem esse número (por exemplo, "Controle da equipe").
3. Escolha a **"Periodicidade"**: **"Mensal"**, **"Trimestral"** ou **"Único"**.
4. Clique em **"Criar"**.

<!-- CAPTURA: rota=/espacos/:id/indicadores | o-que-mostrar=diálogo "Novo indicador" preenchido |
     arquivo=indicadores-novo-desktop.png e indicadores-novo-celular.png -->

## Registrar um valor

Clique em **"Ver valores"** na linha do indicador. Você tem dois jeitos de entrar com o número de
um período:

### À mão

1. Preencha **"Período (AAAA-MM)"** — por exemplo, "2026-08".
2. Preencha **"Valor"**.
3. Clique em **"Registrar à mão"**.

### Por planilha (CSV)

1. Clique em **"Importar CSV"** e escolha o arquivo.
2. O produto mostra um **ensaio** antes de gravar qualquer coisa: "Ensaio de '[arquivo]':
   [quantidade] linha(s) entrariam, [quantidade] seria(m) recusada(s)." — com a lista do que
   entraria e, para cada linha recusada, o motivo.
3. Confira a lista. Clique em **"Confirmar importação"** para gravar as linhas aceitas, ou em
   **"Cancelar"** para desistir sem gravar nada.

{: .tip }
O ensaio é o que protege você de uma planilha com erro de formatação: nada entra no indicador
antes de você ver exatamente o que vai entrar e o que a planilha tem de errado.

<!-- CAPTURA: rota=/espacos/:id/indicadores | o-que-mostrar=painel de valores de um indicador com
     o ensaio de importação de CSV mostrando linhas aceitas e recusadas | arquivo=indicadores-ensaio-csv-desktop.png
     e indicadores-ensaio-csv-celular.png -->

Cada valor registrado mostra o período, o valor com a unidade, e a origem: **"à mão"** ou
**"planilha"** — para você sempre saber de onde aquele número veio.

## Remover um valor ou um indicador

- **Um valor**: na tabela de valores, clique em **"Remover"** na linha dele.
- **O indicador inteiro**: clique em **"Remover"** na linha do indicador, na lista principal.

{: .warning }
Remover o indicador tira ele de qualquer relatório que ainda vá ser gerado — relatórios já
publicados não mudam retroativamente.

## Exemplo

A **Campanha do Agasalho 2026** cria o indicador "Peças arrecadadas", unidade "peças",
periodicidade mensal, origem "Planilha do ponto de coleta". Todo início de mês, Carlos Nunes
exporta a planilha do ponto de coleta em CSV e importa: o ensaio mostra 3 linhas aceitas e 1
recusada ("Linha 4: valor não é um número"), ele corrige a planilha na origem e reimporta.

## Quando dá errado

- Ao carregar os indicadores: "Não foi possível carregar os indicadores."
- Ao criar um indicador: "Não foi possível criar o indicador."
- Ao registrar um valor à mão: "Não foi possível gravar o valor."
- Ao ler o arquivo para o ensaio: "Não foi possível ler o arquivo."
- Ao confirmar a importação: "Não foi possível importar."
