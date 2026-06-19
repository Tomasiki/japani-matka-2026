// Scroll reveal with IntersectionObserver
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
);

reveals.forEach((el) => observer.observe(el));

// Parallax tilt on hero Dragonite (only on pointer devices)
const dragonite = document.querySelector('.dragonite-wrap');
if (dragonite && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    dragonite.style.transform = `translate(${x}px, ${y}px)`;
  });
}
