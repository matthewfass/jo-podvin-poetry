const SITE_VERSION = '0.1.0';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('[data-site-version]').forEach((element) => {
  element.textContent = SITE_VERSION;
});

document.querySelectorAll('[data-poem]').forEach((poem) => {
  const button = poem.querySelector('[data-manifest]');
  const poemBody = poem.querySelector('[data-poem-body]');

  if (!button || !poemBody || reduceMotion) {
    if (button && reduceMotion) {
      button.hidden = true;
    }
    return;
  }

  poem.classList.add('is-concealed');
  poemBody.setAttribute('aria-hidden', 'true');

  button.addEventListener('click', () => {
    poem.classList.remove('is-concealed');
    poem.classList.add('is-revealed');
    poemBody.removeAttribute('aria-hidden');
    button.setAttribute('aria-expanded', 'true');
    button.disabled = true;
    button.querySelector('span:last-child').textContent = 'poem manifested';
  }, {once: true});
});
