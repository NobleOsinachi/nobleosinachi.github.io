(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const toggle = header.querySelector('.site-menu-toggle');
  const links = header.querySelector('.site-links');
  function close() { links.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false'); }
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; links.classList.toggle('is-open',open); toggle.setAttribute('aria-expanded',String(open)); });
  links.addEventListener('click', event => { if(event.target.closest('a')) close(); });
  header.addEventListener('keydown', event => { if(event.key === 'Escape'){ close(); toggle.focus(); } });
  document.addEventListener('click', event => { if(!header.contains(event.target)) close(); });
  window.matchMedia('(min-width:901px)').addEventListener('change', close);
})();
