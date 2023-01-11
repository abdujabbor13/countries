const elSiteThemeToggler = document.querySelector('.dark-mode-link');

elSiteThemeToggler.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode')
});