// Custom Cursor
const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    cursor.style.opacity = '1';
});

document.addEventListener('mousedown', () => cursor.style.transform += ' scale(0.8)');
document.addEventListener('mouseup', () => cursor.style.transform = cursor.style.transform.replace(' scale(0.8)', ''));

// Navbar Scroll Effect
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal, .reveal-up');

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Form Submission (Mockup)
const form = document.querySelector('.subscribe-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input').value;
        if (email) {
            alert('Obrigado por te juntares a nós! Em breve receberás novidades.');
            form.reset();
        }
    });
}

// CTA Button Click (Mockup)
const ctas = document.querySelectorAll('.cta-nav, .btn-primary, .btn-gold');
ctas.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.getAttribute('href') === '#' || !btn.getAttribute('href')) {
            e.preventDefault();
            alert('Esta é uma demonstração. Aqui abriria um calendário de marcações.');
        }
    });
});
