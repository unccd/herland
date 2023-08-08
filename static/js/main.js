document.addEventListener('DOMContentLoaded', () => {
  const _window = window;
  const panels = document.querySelectorAll('.panel');
  const panelsY = [];

  panels.forEach(el => {
    panelsY.push(el.getBoundingClientRect().top + window.pageYOffset);
  });

  _window.addEventListener('scroll', () => {
    updateWindow();
  });

  function updateWindow() {
    const y = _window.scrollY || _window.pageYOffset;
    let i = 0;
    const l = panels.length;

    while (i < l && (i === l - 1 || (y >= panelsY[i] && y <= panelsY[i + 1]))) {
      i++;
    }

    panels.forEach((panel, index) => {
      if (index !== i) {
        panel.classList.remove('panel-fixed');
      } else {
        panel.classList.add('panel-fixed');
      }
    });
  }
});
