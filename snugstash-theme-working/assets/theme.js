(function () {
  'use strict';
  // Product gallery thumbnails only — cart works via native form POST, no JS needed.
  var main = document.getElementById('MainImg');
  document.querySelectorAll('.pdp-thumb').forEach(function (t) {
    t.addEventListener('click', function () {
      document.querySelectorAll('.pdp-thumb').forEach(function (x) { x.classList.remove('on'); });
      t.classList.add('on');
      if (main) main.src = t.getAttribute('data-src');
    });
  });
})();
