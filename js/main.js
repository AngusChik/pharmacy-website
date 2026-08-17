document.addEventListener('DOMContentLoaded', function () {
  // Navbar scroll effect
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // Close mobile nav on link click
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // Active nav link tracking on scroll
  var sections = document.querySelectorAll('.page-section');
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveNav() {
    var scrollPos = window.scrollY + 150;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navAnchors.forEach(function (a) {
          a.classList.remove('active');
          if (a.getAttribute('href') === '#' + id) {
            a.classList.add('active');
          }
        });
      }
    });
  }

  if (sections.length > 0) {
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
  }

  // Section fade-in on scroll
  var sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  // Staggered card animations
  var cardObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = entry.target.dataset.delay || 0;
          setTimeout(function () {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.service-item').forEach(function (el, i) {
    el.dataset.delay = i * 100;
    cardObserver.observe(el);
  });

  document.querySelectorAll('.value-card').forEach(function (el, i) {
    el.dataset.delay = i * 150;
    cardObserver.observe(el);
  });

  document.querySelectorAll('.contact-info-card').forEach(function (el, i) {
    el.dataset.delay = i * 150;
    cardObserver.observe(el);
  });

  // Highlight today in hours table
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var today = days[new Date().getDay()];
  document.querySelectorAll('.hours-table tr').forEach(function (row) {
    var dayCell = row.querySelector('td:first-child');
    if (dayCell && dayCell.textContent.trim() === today) {
      row.classList.add('today');
    }
  });

  // Back to top button
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('show', window.scrollY > 600);
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Refill form submission (refill-form.html only)
  var refillForm = document.getElementById('refillForm');
  var formCard = document.getElementById('formCard');
  var successCard = document.getElementById('successCard');
  if (refillForm) {
    refillForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (formCard) formCard.style.display = 'none';
      if (successCard) successCard.classList.add('show');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
