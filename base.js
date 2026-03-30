const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileOverlay = document.querySelector('[data-mobile-overlay]');
const mobileClose = document.querySelector('[data-mobile-close]');
const dropdownToggles = document.querySelectorAll('[data-dropdown-toggle]');

function closeMobileMenu() {
  if (!mobileMenu || !mobileOverlay) return;
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('open');
}

function openMobileMenu() {
  if (!mobileMenu || !mobileOverlay) return;
  mobileMenu.classList.add('open');
  mobileOverlay.classList.add('open');
}

if (menuToggle) {
  menuToggle.addEventListener('click', openMobileMenu);
}

if (mobileClose) {
  mobileClose.addEventListener('click', closeMobileMenu);
}

if (mobileOverlay) {
  mobileOverlay.addEventListener('click', closeMobileMenu);
}

document.querySelectorAll('[data-mobile-menu] a').forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const dropdown = toggle.closest('.nav-dropdown');
    const isOpen = dropdown.classList.contains('open');
    document.querySelectorAll('.nav-dropdown.open').forEach((item) => item.classList.remove('open'));
    dropdown.classList.toggle('open', !isOpen);
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.nav-dropdown.open').forEach((item) => item.classList.remove('open'));
});