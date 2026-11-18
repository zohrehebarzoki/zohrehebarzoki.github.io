document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      navigation.classList.toggle('is-open', !open);
    });
    navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded','false');
      navigation.classList.remove('is-open');
    }));
  }
  const filters = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('.project-card[data-type]')];
  const intro = document.getElementById('filter-description');
  if (filters.length) filters.forEach(button => button.addEventListener('click', () => {
    const val = button.dataset.filter;
    filters.forEach(b => {b.classList.toggle('is-active',b===button); b.setAttribute('aria-pressed',String(b===button));});
    cards.forEach(card => { card.hidden = !(val==='all' || card.dataset.type===val); });
    if(intro) intro.hidden = val!=='lead';
  }));
});
