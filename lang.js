// Language toggle for bilingual pages: ?lang=tr / ?lang=en, else the browser language, else English.
(function () {
  var blocks = document.querySelectorAll('[data-lang-block]');
  var buttons = document.querySelectorAll('[data-set-lang]');
  function show(lang) {
    blocks.forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-lang-block') === lang); });
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === lang)); });
    document.documentElement.lang = lang;
  }
  var param = new URLSearchParams(location.search).get('lang');
  var nav = (navigator.language || 'en').toLowerCase();
  show(param === 'tr' || param === 'en' ? param : (nav.indexOf('tr') === 0 ? 'tr' : 'en'));
  buttons.forEach(function (b) { b.addEventListener('click', function () { show(b.getAttribute('data-set-lang')); }); });
})();
