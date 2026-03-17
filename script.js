// Navbar Scroll Effect
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 50) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Check on load

// Form Handling
const formMassagem = document.getElementById('form-massagem');
const formDigital = document.getElementById('form-digital');

if (formMassagem) {
    formMassagem.addEventListener('submit', (e) => {
        e.preventDefault();
        const button = formMassagem.querySelector('button');
        button.textContent = 'Enviando pedido...';
        button.disabled = true;

        setTimeout(() => {
            alert('Pedido de agendamento recebido. Entrarei em contacto nas próximas 24h para confirmar a sessão.');
            formMassagem.reset();
            button.textContent = 'marcar sessão';
            button.disabled = false;
        }, 1500);
    });
}

if (formDigital) {
    formDigital.addEventListener('submit', (e) => {
        e.preventDefault();
        const button = formDigital.querySelector('button');
        button.textContent = 'A processar...';
        button.disabled = true;

        setTimeout(() => {
            const currentLang = document.documentElement.lang || 'pt';
            let redirectUrl = 'agendamento.html';
            let alertMsg = 'Dados confirmados. Vamos agora escolher o horário da call de 30 min...';

            if (currentLang === 'en') {
                redirectUrl = 'booking-en.html';
                alertMsg = 'Data confirmed. Let\'s now choose the time for the 30 min call...';
            } else if (currentLang === 'de') {
                redirectUrl = 'booking-de.html';
                alertMsg = 'Daten bestätigt. Lassen Sie uns nun den Zeitpunkt für den 30-minütigen Anruf wählen...';
            }

            alert(alertMsg);
            window.location.href = redirectUrl;
        }, 1500);
    });
}
