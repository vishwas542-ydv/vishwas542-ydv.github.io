// Fade-in for all .card elements on scroll
document.addEventListener('DOMContentLoaded', function() {
  function showCardsOnScroll() {
    document.querySelectorAll('.card').forEach((box, idx) => {
      if (box.getBoundingClientRect().top < window.innerHeight - 80) {
        box.classList.add('visible');
        box.style.animationDelay = `${idx * 0.08 + 0.2}s`;
      }
    });
  }
  window.addEventListener('scroll', showCardsOnScroll);
  showCardsOnScroll(); // Initial check
});

// Animate nav active link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Optional: Smooth scroll for nav links
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});