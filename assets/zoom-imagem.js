/* Capturas de tela ampliáveis.
   Sem JavaScript: a página não muda; a imagem segue no fluxo normal, legível como hoje.
   Com JavaScript: o clique abre a imagem ampliada num <dialog> nativo. Esc fecha;
   toque/clique na imagem alterna entre "caber na tela" e "tamanho real" (rolável),
   e o gesto de pinça do celular continua funcionando. */
(function () {
  'use strict';
  var dialogo, area, img, btnZoom, btnFechar, anterior;

  function montar() {
    dialogo = document.createElement('dialog');
    dialogo.className = 'zoom-dialog';
    dialogo.setAttribute('aria-label', 'Imagem ampliada');
    dialogo.innerHTML =
      '<div class="zoom-barra">' +
      '<button type="button" data-acao="zoom"></button>' +
      '<button type="button" data-acao="fechar">Fechar (Esc)</button></div>' +
      '<div class="zoom-area"><img alt=""></div>';
    document.body.appendChild(dialogo);
    area = dialogo.querySelector('.zoom-area');
    img = area.querySelector('img');
    btnZoom = dialogo.querySelector('[data-acao=zoom]');
    btnFechar = dialogo.querySelector('[data-acao=fechar]');
    rotulo();
    btnZoom.addEventListener('click', alternar);
    btnFechar.addEventListener('click', fechar);
    img.addEventListener('click', alternar);
    area.addEventListener('click', function (e) { if (e.target === area) fechar(); });
    // Esc: tratado AQUI, e não pelo evento `close`/`cancel` do <dialog>.
    // Medido em 12/10/2026: há navegador em que `close()` NÃO dispara o evento
    // `close` — a janela fecha e a limpeza nunca roda, deixando
    // `body.zoom-aberto` (que é `overflow: hidden`) para trás. Então a limpeza
    // não pode depender do evento: ela mora em `fechar()`, que todo caminho de
    // fechamento chama.
    dialogo.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.key === 'Esc') { e.preventDefault(); fechar(); }
    });
    // Mantido para o navegador que DISPARA o evento (fechamento nativo que não
    // passe por `fechar()`); `limpar()` é idempotente, então rodar duas vezes
    // não faz diferença.
    dialogo.addEventListener('close', limpar);
    dialogo.addEventListener('cancel', function (e) { e.preventDefault(); fechar(); });
  }

  /** Desfaz o que `abrir()` fez. Idempotente de propósito. */
  function limpar() {
    document.body.classList.remove('zoom-aberto');
    if (img) img.removeAttribute('src');
    if (anterior && anterior.focus) { anterior.focus(); anterior = null; }
  }

  function fechar() {
    if (dialogo && dialogo.open) dialogo.close();
    limpar();
  }

  function rotulo() {
    btnZoom.textContent = dialogo.classList.contains('zoom-cheio') ? 'Reduzir' : 'Tamanho real';
  }
  function alternar() {
    dialogo.classList.toggle('zoom-cheio');
    rotulo();
    area.scrollTop = 0; area.scrollLeft = 0;
  }

  function abrir(link, original) {
    if (!dialogo) montar();
    anterior = link;
    dialogo.classList.remove('zoom-cheio');
    rotulo();
    img.alt = original.getAttribute('alt') || '';
    img.src = link.getAttribute('href');
    document.body.classList.add('zoom-aberto');
    dialogo.showModal();
    btnFechar.focus();
  }

  function preparar() {
    if (typeof HTMLDialogElement === 'undefined') return; // navegador antigo: nada muda, a imagem segue no fluxo
    var imagens = document.querySelectorAll('.main-content img');
    Array.prototype.forEach.call(imagens, function (el) {
      if (el.closest('a') || el.classList.contains('no-zoom')) return;
      var src = el.currentSrc || el.getAttribute('src');
      if (!src) return;
      var link = document.createElement('a');
      link.className = 'zoom-imagem';
      link.href = el.getAttribute('src');
      link.target = '_blank';
      link.rel = 'noopener';
      link.title = 'Clique para ampliar';
      el.parentNode.insertBefore(link, el);
      link.appendChild(el);
      link.addEventListener('click', function (e) {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return; // deixa abrir em aba nova
        e.preventDefault();
        abrir(link, el);
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', preparar);
  else preparar();
})();
