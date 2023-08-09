document.addEventListener('DOMContentLoaded', function() {
  const _window = window,
    panels = document.querySelectorAll('.panel'),
    panelsY = [];

  panels.forEach(function(el) {
    panelsY.push(el.offsetTop);
  });

  _window.addEventListener('scroll', function() {
    updateWindow();
  });

  function updateWindow() {
    var y = _window.scrollY;
    let i;

    for (i = 0; i < panelsY.length; i++) {
      if ((i === panelsY.length - 1) || (y >= panelsY[i] && y <= panelsY[i + 1])) {
        break;
      }
    }

    panels.forEach(function(panel, index) {
      if (index !== i) {
        panel.classList.remove('panel-fixed');
      } else {
        panel.classList.add('panel-fixed');
      }
    });
  }

});
