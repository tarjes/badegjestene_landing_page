const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileOverlay = document.querySelector('[data-mobile-overlay]');
const mobileClose = document.querySelector('[data-mobile-close]');
const dropdownToggles = document.querySelectorAll('[data-dropdown-toggle]');
const siteHeader = document.querySelector('.site-header');

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

let lastScrollY = window.scrollY;

function syncMobileHeaderVisibility() {
  if (!siteHeader) return;

  if (window.innerWidth > 760) {
    siteHeader.classList.remove('site-header--hidden');
    return;
  }

  const currentScrollY = window.scrollY;

  if (currentScrollY <= 20) {
    siteHeader.classList.remove('site-header--hidden');
    lastScrollY = currentScrollY;
    return;
  }

  if (currentScrollY > lastScrollY + 4) {
    siteHeader.classList.add('site-header--hidden');
    closeMobileMenu();
  } else if (currentScrollY < lastScrollY - 4) {
    siteHeader.classList.remove('site-header--hidden');
  }

  lastScrollY = currentScrollY;
}

window.addEventListener('scroll', syncMobileHeaderVisibility, { passive: true });
window.addEventListener('resize', syncMobileHeaderVisibility);
syncMobileHeaderVisibility();

document.querySelectorAll('input[type="date"]').forEach(function (input) {
  function syncDateColor() {
    var hasValue = !!input.value;
    input.classList.toggle('has-value', hasValue);
    var wrapper = input.closest('.date-wrapper');
    if (wrapper) wrapper.classList.toggle('has-value', hasValue);
  }
  input.addEventListener('change', syncDateColor);
  syncDateColor();
});