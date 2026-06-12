document.addEventListener('DOMContentLoaded', function () {
  /* ------------------------------------------------------------------ */
  /* Dark / light theme toggle                                           */
  /* ------------------------------------------------------------------ */
  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var root = document.documentElement;
      var current = root.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Mobile navigation toggle                                            */
  /* ------------------------------------------------------------------ */
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('site-nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  /* ------------------------------------------------------------------ */
  /* Tag filtering on index pages (writeups / projects / papers)         */
  /* ------------------------------------------------------------------ */
  var filterBar = document.getElementById('filter-bar');
  var cardGrid = document.getElementById('card-grid');
  var noResults = document.getElementById('no-results');

  if (filterBar && cardGrid) {
    var buttons = filterBar.querySelectorAll('button');
    var cards = cardGrid.querySelectorAll('.card');

    filterBar.addEventListener('click', function (event) {
      var target = event.target.closest('button');
      if (!target) { return; }

      var filter = target.getAttribute('data-filter');

      buttons.forEach(function (btn) {
        btn.classList.toggle('is-active', btn === target);
      });

      var visibleCount = 0;

      cards.forEach(function (card) {
        var tags = (card.getAttribute('data-tags') || '').split(',');
        var matches = filter === 'all' || tags.indexOf(filter) !== -1;
        card.style.display = matches ? '' : 'none';
        if (matches) { visibleCount += 1; }
      });

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? '' : 'none';
      }
    });
  }
});
