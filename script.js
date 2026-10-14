(() => {
  const revealTargets = document.querySelectorAll('.section-kicker, .intro-layout, .proof-strip, .project-card, .edit-frame, .timeline-item, .school-layout, .toolkit-grid, .contact-inner');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  revealTargets.forEach((element, index) => {
    element.setAttribute('data-reveal', '');
    if (element.classList.contains('project-card') || element.classList.contains('timeline-item')) {
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    }
  });

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

  revealTargets.forEach((element) => observer.observe(element));
})();
