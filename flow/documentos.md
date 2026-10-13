---
title: "Modelos de documento"
nav_order: 4
parent: "RIT360 Flow"
permalink: /flow/documentos/
palavras_chave: "modelo de documento, termo de adesão, autorização de imagem, termo de voluntariado, criar modelo, quem assina, testemunha, responsável legal, papel do documento, campos do documento, texto do modelo, baixar modelo de exemplo, validade do documento, apagar modelo, duplicar modelo, cnpj da organização, quem assina pela organização, representante"
---

# Modelos de documento

A organização cadastra os **modelos** dos documentos que emite: o termo de adesão do voluntário,
uma autorização de uso de imagem, um termo de parceria com uma instituição. Cada modelo define o
**título**, **sobre quem é** (uma pessoa ou uma instituição), **quem assina**, e o **texto**, com
os campos que o sistema preenche sozinho. Os modelos ficam no Flow, em **"Configurações"**, na seção
**"Documentos"**. Para emitir um documento a partir de um modelo, veja
[Emitir, ver e anexar documentos](/flow/emitir-documentos/).

## Por que isto importa

Documento que se refaz à mão a cada pessoa — copiar o texto, trocar o nome, conferir o CPF — sai com
erro, mais cedo ou mais tarde: o nome de outra pessoa que sobrou no meio do texto, um CNPJ velho,
um campo em branco. E o que sai errado vira **documento assinado**, difícil de desfazer.

O modelo resolve os dois lados. O texto é escrito **uma vez** e vale para todo mundo. E o sistema se
recusa a emitir um documento com lacuna: se o texto pede o CPF e a ficha não tem, a emissão **para e
diz o que falta**, em vez de imprimir um espaço vazio.

## Onde fica e quem alcança

Abra o Flow, escolha a aba **"Configurações"** e, no alto, a seção **"Documentos"** (a outra seção,
**"Voluntariado"**, guarda os lembretes e as frentes de trabalho). A seção só aparece para quem tem
permissão sobre documentos — hoje, **quem administra a organização**. Quem pode ver mas não
configurar lê os modelos, sem os botões de criar, editar e apagar.

<!-- CAPTURA: rota=/flow/configuracoes?secao=documentos | viewport=1920x1080 | o-que-mostrar=A seção Documentos com a lista de modelos (o termo de adesão com o distintivo "Termo de adesão" e mais um modelo), os botões "Editar", "Duplicar" e "Apagar", e embaixo o bloco "Quem assina pela organização" | arquivo=flow-documentos-modelos-desktop.png -->
<!-- CAPTURA: rota=/flow/configuracoes?secao=documentos | viewport=375x812 | o-que-mostrar=A mesma lista no celular | arquivo=flow-documentos-modelos-celular.png -->

## A lista de modelos

Sob o título **"Modelos de documento"**, cada modelo mostra o título e uma linha como **"Sobre uma
pessoa · 3 documentos emitidos · assinam: Quem assina pela organização, Testemunha"**. Quando ainda
não foi emitido nada, a linha diz **"nenhum documento emitido"**.

- **O termo de adesão vem pronto.** É um modelo como os outros — você edita, duplica e, se quiser,
  apaga —, com o distintivo **"Termo de adesão"** para não se perder entre os demais. Esse
  distintivo é o que diz ao sistema qual é o termo; o título não importa, então você pode mudá-lo.
- **Seleção e ação em lote.** A caixa **"Selecionar todos"** marca todos os modelos, e **"Apagar
  selecionados (N)"** apaga os marcados, depois de uma confirmação que diz quantos são.
- **Por item:** **"Editar"**, **"Duplicar"** (cria **"Cópia de <título>"**, para você partir de um
  modelo que já funciona) e **"Apagar"**.

## Criar um modelo

1. Em **"Documentos"**, clique em **"Novo modelo"**.
2. Preencha o **"Título"** (até 120 caracteres). É o nome que aparece no documento e na tela.
3. Em **"Sobre quem é"**, escolha **"Uma pessoa"** ou **"Uma instituição"**. A escolha decide **quais
   campos** o texto pode usar e **em qual ficha** o documento é emitido: o das pessoas, na ficha da
   pessoa; o das instituições, na ficha da instituição.
4. Em **"Validade, em dias"**, diga por quantos dias o documento vale (de 1 a 3660; o padrão é 365).
   Todo documento tem validade. Na emissão dá para escolher outra data.
5. Declare **quem assina** (próxima seção).
6. Escreva o **texto** (mais adiante).
7. Clique em **"Salvar modelo"**.

## Quem assina: os papéis, com nome

O modelo não numera quem assina; dá **nome** a cada um. É o que torna o texto legível, a emissão
compreensível e — principalmente — a conferência possível: o sistema **exige que todo papel
declarado seja preenchido** antes de emitir.

Em **"Quem assina (os papéis)"**, clique em **"Acrescentar papel"** (até 10) e preencha:

- **"Nome do papel"** — o que a pessoa que emite vai ler na pergunta: **"Autorizante"**,
  **"Responsável legal"**, **"Testemunha"**.
- **"Como o texto o chama"** — a palavra curta que o texto usa para falar desse papel. Vem
  preenchida sozinha a partir do nome (**"Responsável legal"** vira `responsavel_legal`), e você só
  mexe nela se precisar.
- **"É quem assina pela organização"** — marque no papel em que a **própria organização** assina.
  **Só um papel por modelo** pode ser esse. Na emissão, ele já vem preenchido (veja
  [Quem assina pela organização](#quem-assina-pela-organização)).

**"Remover papel"** tira o papel da lista.

No texto, os dados de cada papel entram com a palavra do papel na frente: `{% raw %}{{responsavel_legal_nome}}{% endraw %}`,
`{% raw %}{{responsavel_legal_cpf}}{% endraw %}`, `{% raw %}{{responsavel_legal_cargo}}{% endraw %}`. Na emissão, a tela pergunta **em
português** — algo como **"Quem é: responsável legal?"** —, e não "escolha a pessoa 2".

{: .note }
**A pessoa ou a instituição de cuja ficha o documento é emitido não é um papel.** Ela já vem
preenchida: quem emite o termo de adesão a partir da ficha de Helena Barros não precisa dizer quem é
a Helena. Papel é só **quem mais** assina.

### Exemplo de papéis

O Instituto Semente cadastra o modelo **"Termo de parceria"**, sobre **uma instituição**, com dois
papéis:

| Nome do papel | Como o texto o chama | Quem é |
|---|---|---|
| **Responsável legal** | `responsavel_legal` | Quem responde pela instituição parceira. |
| **Testemunha** | `testemunha` | Alguém que assiste à assinatura. |

No texto: *"…representada por `{% raw %}{{responsavel_legal_nome}}{% endraw %}`, CPF `{% raw %}{{responsavel_legal_cpf}}{% endraw %}`, e com
a presença de `{% raw %}{{testemunha_nome}}{% endraw %}` como testemunha…"* Na emissão, para a Associação Mãos Amigas, a
tela pergunta **"Quem é: responsável legal?"** e **"Quem é: testemunha?"**, uma de cada vez. Sem as
duas respostas, o documento não sai.

## O texto

O texto do modelo é **HTML simples**: títulos, parágrafos, listas, negrito, itálico, tabelas e
links. Scripts e estilos livres são retirados ao salvar.

Os **campos que o sistema preenche** vão entre chaves duplas, em letras minúsculas e sem acento:
`{% raw %}{{nome}}{% endraw %}`, `{% raw %}{{cpf}}{% endraw %}`, `{% raw %}{{organizacao_razao_social}}{% endraw %}`. Para não digitar, abra **"Campos que o sistema
preenche (clique para inserir no texto)"**, escolha o campo, e ele entra onde está o cursor. A lista
traz os dados da organização, da pessoa (ou da instituição) e, para cada papel que você declarou, os
dados dele.

**O texto decide o que é exigido, nos dois sentidos.** Campo que o texto usa vira exigência — se
falta o dado, a emissão para. Dado que o texto **não** usa não é pedido a ninguém: um modelo que
não cita o telefone não recusa uma ficha sem telefone.

### Por que não há importação de arquivo

Não existe botão para importar um arquivo do Word ou de PDF, **de propósito**. Converter um arquivo
prometeria um resultado que decepciona — quebra de formatação, parágrafo trocado, cláusula
perdida — e o que sai errado aqui vira **documento assinado**. No lugar, o botão **"Baixar modelo de
exemplo"** entrega um arquivo que mostra o formato e lista todos os campos disponíveis: você copia o
texto dele, cola no campo **"Texto"** e troca pelas suas cláusulas.

{: .tip }
Antes de usar um modelo novo de verdade, emita um documento de teste e olhe a **prévia** (o botão
**"Conferir"** da [emissão](/flow/emitir-documentos/)): é ali que aparece o campo digitado errado ou o
dado que falta na ficha. A prévia não grava nada.

## Quem assina pela organização

Abaixo da lista de modelos há o bloco **"Quem assina pela organização"**. Ele guarda os dados da
organização que entram nos documentos e **quem assina por ela** por padrão:

- **"CNPJ da organização"** e **"Endereço da organização"**. Se o texto os usa e estão em branco, a
  emissão para.
- **"Quem assina pela organização"** — a pessoa do cadastro de [Pessoas](/pessoas/) (busque pelo
  nome, com ao menos duas letras) e **"Cargo, como deve sair impresso"**, por exemplo *"Presidente"*.

A **razão social** e o **e-mail de contato** da organização **não** são preenchidos aqui: vêm da
ficha da organização (veja [Dados e identidade da organização](/configuracoes/organizacao/): **"Razão social"** e **"E-mail de contato"**), e o bloco mostra
os que estão lá — ou diz que não estão preenchidos.

Clique em **"Salvar"**; a tela confirma com **"Salvo."** Se a pessoa escolhida sair do cadastro, o
bloco avisa **"A pessoa escolhida como representante não está mais no cadastro. Escolha outra."**

## Editar, duplicar e apagar

- **Editar** abre o mesmo formulário. Se o modelo já foi usado, a tela avisa: **"Já foi emitido 1
  documento com este modelo. Mudar o texto não altera o que já foi emitido: cada documento guarda o
  próprio texto. A mudança vale para os próximos."**
- **Duplicar** cria uma cópia chamada **"Cópia de …"**, que você edita à vontade.
- **Apagar** pede confirmação (**"Apagar o modelo «…»?"** ou **"Apagar N modelos?"**) e diz quantos
  documentos já emitidos existem com aquele modelo — eles **continuam como estão**. Depois de
  apagar, não dá para desfazer. Apagando o termo de adesão que veio pronto, a confirmação avisa que
  ele **não volta sozinho**; para ter outro, você cadastra um modelo.

{: .important }
**Modelo pode ser apagado; documento emitido, nunca.** São duas regras que andam juntas: o documento
emitido guarda o próprio texto, congelado, e por isso apagar o modelo não o afeta. E nenhum caminho
do sistema apaga um documento emitido — nem quem administra.

## Exemplo

Maria Oliveira, do Instituto Semente, vai cadastrar a **autorização de uso de imagem** dos
voluntários.

1. Em **Flow › Configurações › Documentos**, clica em **"Novo modelo"**.
2. Título: **"Autorização de uso de imagem"**. Sobre quem é: **"Uma pessoa"**. Validade: **730** dias.
3. Acrescenta dois papéis: **"Quem assina pela organização"** (marcando **"É quem assina pela
   organização"**) e **"Testemunha"**.
4. Clica em **"Baixar modelo de exemplo"**, abre o arquivo, copia o texto, cola em **"Texto"** e
   adapta: *"Eu, `{% raw %}{{nome}}{% endraw %}`, autorizo o Instituto Semente a usar minha imagem… até
   `{% raw %}{{validade_fim}}{% endraw %}`. `{% raw %}{{data_aprovacao}}{% endraw %}`."*
5. Salva. Na lista, o novo modelo aparece com **"nenhum documento emitido"** e **"assinam: Quem
   assina pela organização, Testemunha"**.

## Dicas e armadilhas

- **Preencha o bloco "Quem assina pela organização" antes de emitir o primeiro documento.** Sem
  o CNPJ, o endereço e o representante, todo modelo que os cita recusa a emissão — e a recusa chega
  na hora de emitir, com a pessoa à espera.
- **Dê ao papel o nome que quem emite vai entender.** *"Responsável legal"* é uma pergunta
  compreensível; *"Assinante 2"*, não. É a pergunta da tela de emissão que o nome vira.
- **Escolha chaves de papel bem diferentes entre si.** Duas chaves que, juntas, gerariam o mesmo
  campo no texto são recusadas ao salvar (veja "Quando dá errado"); chaves claras e distintas, como
  *"responsavel_legal"* e *"testemunha"*, evitam isso.
- **Mudar o texto de um modelo não conserta documento já emitido.** Se um documento saiu com erro,
  a correção é emitir outro com o modelo certo; o antigo continua como está. A [emissão](/flow/emitir-documentos/)
  não substitui nem apaga o anterior.
- **Duplique o termo de adesão em vez de editá-lo, quando quiser testar.** Mexer no termo que veio
  pronto muda os próximos termos de verdade.
- **Salvar o modelo não envia nada a ninguém.** Modelo é só o molde.

## Quando dá errado

Ao salvar, a tela lista **de uma vez** tudo o que está errado, para você corrigir de uma vez:

- **"O modelo precisa de um texto."** — o campo "Texto" está vazio.
- **"O texto ficou vazio depois de retirar o que o documento não aceita (scripts, por exemplo)."** — o
  que você colou só tinha marcações que o modelo descarta.
- **"O campo `{% raw %}{{xyz}}{% endraw %}` não existe para um documento sobre uma pessoa com estes papéis. Se ele é de um
  papel, declare o papel antes de usá-lo."** — o nome do campo está errado, ou é de um papel que você
  ainda não acrescentou. Use a lista **"Campos que o sistema preenche"** para não errar o nome.
- **"O trecho … não é um campo: use só letras minúsculas sem acento, números e sublinhado, como
  `{% raw %}{{nome}}{% endraw %}`."** — há um campo com maiúscula, acento ou espaço.
- **"Há chaves duplas ({% raw %}{{ ou }}{% endraw %}) soltas, que não fecham um campo."** — uma chave aberta sem fechar,
  ou o contrário.
- **"O papel «x» aparece duas vezes."** / **"Só um papel pode ser o da organização."** — corrija os
  papéis.
- **"A chave «x» gera o campo …, que já é um campo fixo do documento. Escolha outra chave."** —
  o nome que você deu ao papel colide com um campo que já existe; mude **"Como o texto o chama"**.
- **"A validade é de ao menos 1 dia."** / **"A validade é de no máximo 3660 dias (10 anos)."**
- **"CNPJ inválido."** — no bloco "Quem assina pela organização", o CNPJ não passou na conferência.
- **"Não foi possível carregar os modelos."** / **"Não foi possível salvar o modelo."** — recarregue
  a página e tente de novo; se persistir, avise pelo [feedback](/enviar-feedback/).

## Limites do papel

Quem **administra a organização** vê, cria, edita e apaga modelos e preenche "Quem assina pela
organização". Outras pessoas só ganham isso se receberem a permissão: sem ela, a seção
**"Documentos"** nem aparece em "Configurações". Quem **vê mas não configura** lê os modelos e não
encontra **"Novo modelo"**, **"Editar"**, **"Duplicar"** nem **"Apagar"**.
