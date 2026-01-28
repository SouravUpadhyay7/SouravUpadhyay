function initAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load
}

// Hover parallax effect for cards
function initCardParallax() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });
}

// Particles Background
function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 10 + 10;
        const tx = (Math.random() - 0.5) * 200;
        const ty = (Math.random() - 0.5) * 200;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.setProperty('--duration', `${duration}s`);
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.animationDelay = `${Math.random() * 5}s`;

        container.appendChild(particle);
    }
}

// Mouse Follow Glow Effect
function initMouseGlow() {
    const glow = document.getElementById('mouse-glow');
    const blobs = document.querySelectorAll('.blob');
    const grid = document.querySelector('.grid-background');
    let ticking = false;

    window.addEventListener('mousemove', (e) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const x = e.clientX;
                const y = e.clientY;
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;

                // Glow positioning
                glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

                // Subtle blob parallax
                blobs.forEach((blob, index) => {
                    const speed = (index + 1) * 0.03;
                    const bx = (centerX - x) * speed;
                    const by = (centerY - y) * speed;
                    blob.style.transform = `translate(${bx}px, ${by}px)`;
                });

                // Subtle grid tilt
                if (grid) {
                    const gx = (centerX - x) * 0.01;
                    const gy = (centerY - y) * 0.01;
                    grid.style.transform = `perspective(500px) rotateX(${60 + gy}deg) rotateZ(${gx}deg) translateY(0)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Magnetic Button Effect
function initMagneticButtons() {
    const magneticElems = document.querySelectorAll('.magnetic, .navbar-item');

    magneticElems.forEach(elem => {
        elem.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Check if it's a large card to handle the base translateY
            const isHomeCard = this.classList.contains('card') && !this.closest('.grid');
            const baseT = isHomeCard ? -10 : 0;

            this.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) translateY(${baseT}px)`;
        });

        elem.addEventListener('mouseleave', function () {
            const isHomeCard = this.classList.contains('card') && !this.closest('.grid');
            const baseT = isHomeCard ? 0 : 0; // CSS hover handles card rise
            this.style.transform = `translate(0px, 0px)`;
        });
    });
}

// Glitch Effect Trigger
function initGlitchEffect() {
    const userName = document.getElementById('user-name');
    if (!userName) return;

    userName.classList.add('glitch');
    userName.setAttribute('data-text', userName.innerText);

    // Periodically trigger glitch
    setInterval(() => {
        userName.classList.add('glitch-active');
        setTimeout(() => {
            userName.classList.remove('glitch-active');
        }, 500);
    }, 4000);
}

// Click Ripple Effect
function initRippleEffect() {
    window.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        document.body.appendChild(ripple);

        const size = 100;
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - size / 2}px`;
        ripple.style.top = `${e.clientY - size / 2}px`;

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initCardParallax();
    initParticles();
    initMouseGlow();
    initMagneticButtons();
    initGlitchEffect();
    initRippleEffect();

    // Trigger hero reveal
    setTimeout(() => {
        const hero = document.querySelector('.hero');
        if (hero) hero.classList.add('hero-ready');
    }, 100);
});
