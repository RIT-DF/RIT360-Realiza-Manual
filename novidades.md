---
title: "Novidades"
nav_order: 9
permalink: /novidades/
---

# Novidades

O que mudou no RIT360 Realiza, em linguagem de quem usa. As mudanças mais
recentes vêm primeiro.

{: .note }
O produto está em construção, e por isso estas primeiras entradas descrevem
capacidades chegando pela primeira vez, não ajustes em cima do que já existia.
Conforme o Realiza amadurecer, esta página vai virar o que ela é nos outros
produtos da casa: o registro do que mudou de uma versão para a outra.

---

## 20 de setembro de 2026 — versão 0.8.0

### Adicionado

- **Convidar quem não é da organização, direto pelo espaço.** Na configuração do espaço, basta o
  e-mail e o papel: a pessoa recebe o convite, entra, e aparece na lista com o rótulo
  "(convidado externo)". Ela alcança **aquele espaço e nada mais** — não vira membro da
  organização, não descobre os outros espaços, não vê a equipe nem as configurações. Antes eram
  dois passos, e a pessoa precisava entrar na organização inteira.
- **Reunião na agenda, com repetição.** Compromisso com hora, gente convidada e confirmação de
  presença — diferente de prazo de tarefa, que continua sendo "isto precisa estar pronto até tal
  dia". No calendário, cada dia ganhou os botões para criar um ou outro. Reuniões podem repetir
  toda semana ou todo mês.
- **Duas telas novas para quem administra o serviço:** destinos da cópia de segurança, e as
  tarefas agendadas — onde se vê se as rotinas automáticas estão vivas.
- **As preferências de aviso passaram a ter um cartão no seu perfil**, com um resumo de quantos
  tipos de aviso você recebe. Antes só se chegava lá pelo sininho.
- **O produto avisa quando há versão nova**, com uma faixa no alto da tela. Aba que fica aberta
  por dias continuava rodando a versão antiga sem que ninguém percebesse.

### Alterado

- **As duas configurações de servidor de e-mail viraram uma só.** Continuam existindo dois
  caminhos por baixo, e a diferença entre eles continua importando — mas quem configura mexe num
  lugar só.
- **As telas ficaram no mesmo padrão**: mesma largura, título no mesmo lugar, o mesmo "Voltar",
  e listas que se comportam igual em todas.
- **Editar cliente e organização passou a abrir em uma janela sobre a tela**, em vez de cada
  tela fazer de um jeito.
- **Os estados vazios passaram a dizer o que fazer.** Em vez de "Nenhum espaço ainda.", agora é
  "Nenhum espaço ainda. Crie um pelo formulário acima." — e assim em todas as listas.

### Corrigido

- **"Meu trabalho" passou a mostrar só o que depende de você.** Antes trazia também o que estava
  parado com outras pessoas — o que era especialmente incômodo para quem é convidado de fora e
  via atrasos internos da equipe.
- **Quem é convidado de fora não vê mais os controles de edição da tarefa**, nem o botão de
  remover. Eles nunca funcionaram para essa pessoa; agora também não aparecem.
- **A mensagem de "nenhuma organização ativa" parou de mandar a pessoa para um lugar que não
  existe** — e quem ainda não tem vínculo com organização nenhuma passou a receber uma mensagem
  que trata do caso dela.

---

## 20 de setembro de 2026 — versões 0.6.0 e 0.7.0

### Adicionado

- **Agora dá para criar conta sozinho, se o seu e-mail for de um domínio
  autorizado.** Convite continua valendo para qualquer pessoa, de qualquer
  endereço. Sem convite, só cria conta quem tem e-mail de um domínio que quem
  administra o serviço tenha liberado — e a regra vale tanto para a entrada por
  senha quanto pela conta Google. Quem entra assim começa sem vínculo com
  organização nenhuma: entrar não é ser aceito em lugar nenhum.
- **Criar tarefa pela lista e pelo calendário.** Antes só o quadro criava. No
  calendário, clicar num dia já deixa a data preenchida. ⚠️ O que se cria
  continua sendo uma tarefa com data — reunião com hora, participantes e convite
  ainda não existe.
- **Rodapé em todas as telas**, com o manual, a política de privacidade e os
  termos de uso sempre ao alcance.
- **A organização ganhou ícone próprio, além da logo**, e a logo passou a
  aceitar qualquer proporção. Também há campo para o site da organização.
- **A lista de membros ganhou busca, ordenação e páginas**, e cada pessoa passou
  a ocupar uma linha só — antes a lista crescia sem parar.
- **O feedback ficou mais completo**: agora tem tipo (sugestão, problema, elogio,
  depoimento ou outro), título e anexos. E quem administra o serviço passou a ter
  uma tela para ler e responder o que chega.
- **Quem administra o serviço ganhou duas telas novas**: a lista de todas as
  organizações, com gestor, entrada, contrato, espaços e pessoas; e a lista de
  domínios autorizados a criar conta sem convite.
- **Criar organização passou a ser tarefa de quem administra o serviço**, que
  cria e convida quem vai administrá-la.
- **Escolher o modelo de cada provedor de inteligência artificial**, com um botão
  que lista os modelos que a credencial alcança.

### Alterado

- **A aba "Organização" saiu do menu.** As abas agora são Meu trabalho, Espaços e
  Clientes. Trocar de organização passou a ser pelo seletor no alto da tela, e
  configurar, pela engrenagem — o produto parte do princípio de que você trabalha
  numa organização, não que escolhe uma numa lista.
- **A logo do RIT360 Realiza virou atalho** para "Meu trabalho".
- **O alto da tela mostra a logo da sua organização**, quando ela tem uma
  cadastrada; sem logo, mostra o nome.
- **Seu avatar passou a mostrar a sua foto.**
- **A tela de manual dentro do produto saiu** — o manual é alcançado pelo rodapé.
- **No computador, a administração do serviço virou uma tela só**, em duas
  colunas, em vez de uma tela por assunto.
- **O DeepSeek saiu da lista de provedores de inteligência artificial.** Ficam
  Gemini, OpenAI e Claude.

### Corrigido

- **Quem é convidado de fora não vê mais que existe uma conversa interna da
  equipe.** Antes as duas abas apareciam para essa pessoa — o conteúdo nunca
  vazou, mas a existência da conversa, sim.
- **Os nomes das pessoas voltaram a aparecer** em telas onde apareciam códigos.
- **Cada tela tinha uma largura**, e no computador sobrava espaço vazio; agora
  seguem a mesma medida.
- **No celular, a barra superior parou de fugir** e a página parou de deslizar
  para o lado.
- **Configurar espaço** parou de sobrepor partes da tela, e cliente e tipo
  deixaram de gastar duas linhas.
- **O campo de escolher arquivo** passou a parecer um botão e a responder ao
  mouse.
- **O perfil parou de acusar erro** quando a pessoa não tem foto.

---

## 20 de setembro de 2026 — primeiras versões

### Adicionado

- **Cada organização decide se quer inteligência artificial, e de quem.** Nas
  configurações da organização apareceu a escolha: recusar por completo que IA
  trate os dados dali, usar os provedores que o serviço oferece (o padrão, hoje
  sem custo adicional) ou cadastrar os próprios. Quem escolhe os próprios nunca
  passa a usar os do serviço por socorro automático: se os seus não estiverem
  funcionando, o recurso fica indisponível, com mensagem dizendo isso. Toda
  mudança dessa configuração fica registrada, com quem mudou e quando.
- **Administração do serviço reunida numa porta só.** Quem cuida da instalação
  passou a ter uma área própria, com o painel de contagens, os dois servidores
  de e-mail, a entrada pelo Google, os provedores de IA, a lista de quem
  administra o serviço e o resultado da última cópia de segurança. Antes, parte
  disso dependia de configuração colada direto no servidor.
- **O Realiza entrou no ar** em endereço próprio, com publicação empacotada.

### Corrigido

- **Entrar pelo Google passou a funcionar de ponta a ponta.** Três problemas
  diferentes atrapalhavam essa entrada: ela não saía do navegador em alguns
  casos, falhava quando o vínculo apontava para uma conta que já tinha sido
  removida, e — quando funcionava — mostrava o e-mail no lugar do nome da
  pessoa nas telas.
- **Convite e recuperação de senha passaram a chegar de verdade.** O e-mail
  saía sem sair; agora sai, e há tela própria para configurar o servidor que o
  envia.
- **No celular, a barra superior parou de fugir.** Ela sumia ao rolar a página e
  a tela deslizava para o lado, deixando ícones fora do alcance. As duas coisas
  foram corrigidas.
- **O painel de administração parou de contar zero espaços** quando havia
  espaços.

---

## 19 de setembro de 2026

### Adicionado

- **Quadro, lista e calendário.** O mesmo trabalho passou a ser visto de três
  jeitos, sem duplicar tarefa nenhuma. No quadro dá para arrastar o cartão entre
  as etapas — e arrastar para uma etapa que aprova pede confirmação antes de
  registrar qualquer coisa em seu nome.
- **Meu trabalho.** A tela que abre o dia mostrando o que está parado, com quem
  e há quanto tempo, reunindo itens de todas as organizações de que você
  participa.
- **Aprovação com confirmação explícita.** Enviar material para aprovação passa
  a guardar uma cópia congelada e numerada do conjunto; aprovar registra a
  decisão em nome de quem aprovou, sobre aquela versão; pedir ajuste exige
  escrever o motivo. Silêncio e prazo vencido não aprovam.
- **Avisos**, na central do app e por e-mail, com preferências por tipo e canal.
- **Tarefas com responsável, prazo, subtarefas e dependências**, e a sinalização
  de quem está travando quem.
- **Espaços de projeto e de operação contínua**, cada um com endereço próprio e
  etapas configuráveis.
- **Clientes e carteira.** O projeto passa a poder ser ligado ao parceiro ou
  financiador para quem o trabalho é feito, e há uma visão de todos os espaços
  de um mesmo cliente.
- **Pessoa passou a ter nome e foto** nas telas, no lugar de um código.
- **Identidade visual** de organização, cliente e espaço: logo, razão social e
  contatos.
- **Configurações da organização** em tela própria, e o canal de feedback dentro
  do produto.

### Corrigido

- **A sessão parou de cair depois de uma hora** de trabalho.
- **Quem entrava sem organização ativa deixou de ficar sem saída na tela.**

---

## 18 de setembro de 2026

### Adicionado

- **Entrar no produto**: login por e-mail e senha, entrada pelo Google, convite
  e recuperação de senha.
- **Organizações e vínculos**: uma conta participa de várias organizações, com
  permissões independentes em cada uma, e alterna entre elas sem criar outra
  conta.
- As fundações do produto: isolamento entre organizações, papéis e permissões
  configuráveis, e o desenho da relação entre tarefa, material e o conjunto que
  vai à aprovação.
