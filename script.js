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
        const currentLang = document.documentElement.lang || 'pt';
        
        let sendingMsg = 'Enviando pedido...';
        let successMsg = 'Pedido de agendamento recebido. Entrarei em contacto nas próximas 24h para confirmar a sessão.';
        let defaultBtnText = 'marcar sessão';

        if (currentLang === 'en') {
            sendingMsg = 'Sending request...';
            successMsg = 'Appointment request received. I will contact you within the next 24 hours to confirm the session.';
            defaultBtnText = 'book session';
        } else if (currentLang === 'de') {
            sendingMsg = 'Anfrage wird gesendet...';
            successMsg = 'Terminanfrage erhalten. Ich werde mich innerhalb der nächsten 24 Stunden mit Ihnen in Verbindung setzen, um die Sitzung zu bestätigen.';
            defaultBtnText = 'Sitzung buchen';
        }

        button.textContent = sendingMsg;
        button.disabled = true;

        setTimeout(() => {
            alert(successMsg);
            formMassagem.reset();
            button.textContent = defaultBtnText;
            button.disabled = false;
        }, 1500);
    });
}

if (formDigital) {
    formDigital.addEventListener('submit', (e) => {
        e.preventDefault();
        const button = formDigital.querySelector('button');
        const currentLang = document.documentElement.lang || 'pt';

        let processingMsg = 'A processar...';
        let alertMsg = 'Dados confirmados. Vamos agora escolher o horário da call de 30 min...';
        let redirectUrl = 'agendamento.html';

        if (currentLang === 'en') {
            processingMsg = 'Processing...';
            alertMsg = 'Data confirmed. Let\'s now choose the time for the 30 min call...';
            redirectUrl = 'booking-en.html';
        } else if (currentLang === 'de') {
            processingMsg = 'Wird bearbeitet...';
            alertMsg = 'Daten bestätigt. Lassen Sie uns nun den Zeitpunkt für den 30-minütigen Anruf wählen...';
            redirectUrl = 'booking-de.html';
        }

        button.textContent = processingMsg;
        button.disabled = true;

        setTimeout(() => {
            alert(alertMsg);
            window.location.href = redirectUrl;
        }, 1500);
    });
}
