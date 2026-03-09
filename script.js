/* ============================================
   NOOK AND HAVEN - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar scroll behavior ---
  const nav = document.querySelector('.nav');
  const darkSections = document.querySelectorAll('.hero, .cta-video-section');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (darkSections.length) {
        const navBottom = window.scrollY + nav.offsetHeight;
        let overDark = false;
        darkSections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (navBottom > sectionTop && window.scrollY < sectionBottom) {
            overDark = true;
          }
        });
        nav.classList.toggle('scrolled', !overDark);
      } else {
        nav.classList.toggle('scrolled', window.scrollY > 50);
      }
    });
  }

  // --- Hero carousel rotation ---
  const carouselItems = document.querySelectorAll('.hero__carousel-item');
  if (carouselItems.length > 1) {
    let current = 0;
    setInterval(() => {
      carouselItems[current].classList.remove('active');
      current = (current + 1) % carouselItems.length;
      carouselItems[current].classList.add('active');
    }, 3000);
  }

  // --- Mobile menu toggle ---
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const spans = toggle.querySelectorAll('span');
      if (links.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close menu when clicking a link
    links.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.querySelectorAll('span').forEach(s => {
          s.style.transform = '';
          s.style.opacity = '';
        });
      });
    });
  }

  // --- Active nav link ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // --- Filter chips toggle ---
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
    });
  });

  // --- Save / heart button toggle ---
  document.querySelectorAll('.listing-card__save').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      btn.classList.toggle('saved');
    });
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Scroll reveal animation ---
  const revealElements = document.querySelectorAll('.pathway-card, .collection-card, .testimonial-card, .listing-card, .retreat-card, .differentiator, .why-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.6s ease ${i % 3 * 0.15}s, transform 0.6s ease ${i % 3 * 0.15}s`;
      observer.observe(el);
    });
  }

  // --- Contact form handling ---
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      // Simulate sending
      setTimeout(() => {
        btn.textContent = 'Sent! We\'ll be in touch.';
        btn.style.background = 'var(--color-sage)';
        contactForm.reset();
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }

  // --- Newsletter form ---
  document.querySelectorAll('.newsletter').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const btn = form.querySelector('button');
      if (input.value) {
        btn.textContent = 'Subscribed!';
        input.value = '';
        setTimeout(() => { btn.textContent = 'Join'; }, 3000);
      }
    });
  });

});
