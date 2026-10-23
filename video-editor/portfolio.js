/* Progressive enhancement: real source links and static cards work without JavaScript. */
(() => {
  'use strict';
  const portfolio = document.getElementById('portfolio');
  const model = window.NoblePortfolio;
  if (!portfolio || !model) return;
  const issues = model.validatePortfolio(model.config);
  if (issues.length) {
    console.error('Portfolio configuration is invalid:', issues);
    return;
  }
  const projects = new Map(model.config.categories.flatMap(category => category.projects.map(project => [project.key, project])));
  const dialog = document.getElementById('portfolio-player');
  if (!dialog || typeof dialog.showModal !== 'function') return; // Links remain usable in older browsers.
  const stage = dialog.querySelector('.pf-player-stage');
  const title = document.getElementById('portfolio-player-title');
  const source = dialog.querySelector('[data-player-source]');
  const close = dialog.querySelector('.pf-player-close');
  let opener = null;

  function resetPlayer() {
    stage.replaceChildren(); // Unloads the iframe and stops audio/video.
    document.body.classList.remove('pf-modal-open');
    if (opener?.isConnected) opener.focus({ preventScroll: true });
  }
  dialog.addEventListener('close', resetPlayer);
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });

  portfolio.querySelectorAll('[data-project]').forEach(link => {
    const project = projects.get(link.dataset.project);
    if (!project) return;
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      stage.replaceChildren();
      title.textContent = project.title;
      source.href = project.sourceUrl;
      source.textContent = project.host === 'drive' ? 'Open in Google Drive ↗' : 'Open on YouTube ↗';
      dialog.dataset.aspect = project.aspectRatio;
      const frame = document.createElement('iframe');
      frame.title = project.title + ' — video player';
      frame.src = project.host === 'youtube'
        ? 'https://www.youtube.com/embed/' + project.videoId + '?playsinline=1&rel=0&autoplay=0'
        : 'https://drive.google.com/file/d/' + project.videoId + '/preview';
      frame.allow = 'encrypted-media; picture-in-picture; fullscreen';
      frame.allowFullscreen = true;
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      stage.append(frame);
      dialog.showModal();
      document.body.classList.add('pf-modal-open');
      close.focus();
    });
  });

  portfolio.querySelectorAll('.pf-preview img').forEach(image => {
    const showFallback = () => image.closest('.pf-preview').classList.add('pf-preview--missing');
    image.addEventListener('error', showFallback, { once: true });
    if (image.complete && !image.naturalWidth) showFallback();
  });
})();
