// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.querySelector('.nav__links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});

// Close the mobile menu after tapping a link
links.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
