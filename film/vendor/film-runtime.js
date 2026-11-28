/* Lille afspiller til sitet i stedet for Motion Skills' studie-runtime:
   læser filmens variabler, sætter dem som CSS-variabler og tekster, og lader lyd-kald være tomme. */
(function () {
  var vars = {};
  try {
    JSON.parse(document.documentElement.getAttribute('data-composition-variables') || '[]').forEach(function (v) {
      vars[v.id] = v.default;
      if (typeof v.default !== 'object') document.documentElement.style.setProperty('--' + v.id, v.default);
    });
  } catch (e) {}
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-var-text]').forEach(function (el) {
      var k = el.getAttribute('data-var-text');
      if (vars[k] != null) el.textContent = vars[k];
    });
  });
  var noop = function (n, t) { return t; };
  window.MO = { vars: function () { return vars; }, sfx: noop, music: noop, beat: function (n) { return n * 0.5; }, region: noop, clock: noop, cue: function () { return 0; } };
})();
