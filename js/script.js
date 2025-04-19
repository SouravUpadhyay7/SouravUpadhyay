// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const backToTopBtn = document.querySelector('.back-to-top');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');
const playButton = document.getElementById('playButton');
const song = document.getElementById('song');
const flowerContainer = document.getElementById('flower-container');
const futuristicName = document.querySelector('.futuristic-name');

// Futuristic Name Setup
if (futuristicName) {
    // Remove the data-text attribute since we're not using it anymore
    futuristicName.removeAttribute('data-text');
}

// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Back to Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Project Filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Music Player
let isPlaying = false;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        song.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        stopFlowerAnimation();
    } else {
        song.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
        startFlowerAnimation();
    }
    isPlaying = !isPlaying;
});

// Flower animation functions
function startFlowerAnimation() {
    // Clear existing flowers
    flowerContainer.innerHTML = '';
    
    // Create flowers at intervals
    flowerInterval = setInterval(createFlower, 300);
}

function stopFlowerAnimation() {
    clearInterval(flowerInterval);
    
    // Fade out existing flowers
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
        flower.style.opacity = '0';
        setTimeout(() => {
            flower.remove();
        }, 1000);
    });
}

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    
    // Random position
    const posX = Math.random() * flowerContainer.offsetWidth;
    const posY = Math.random() * flowerContainer.offsetHeight;
    
    // Random size
    const size = Math.random() * 30 + 20;
    
    // Random color from our theme
    const colors = [
        'var(--accent-red)',
        'var(--accent-blue)',
        'var(--accent-green)',
        'var(--accent-purple)'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Set flower style
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;
    flower.style.left = `${posX}px`;
    flower.style.top = `${posY}px`;
    flower.style.backgroundColor = color;
    
    // Create petals
    for (let i = 0; i < 5; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.transform = `rotate(${i * 72}deg)`;
        petal.style.backgroundColor = color;
        flower.appendChild(petal);
    }
    
    // Add flower to container
    flowerContainer.appendChild(flower);
    
    // Animation
    setTimeout(() => {
        flower.style.transform = `translate(${Math.random() * 100 - 50}px, ${-flowerContainer.offsetHeight}px) rotate(${Math.random() * 360}deg)`;
        flower.style.opacity = '0';
    }, 100);
    
    // Remove after animation completes
    setTimeout(() => {
        flower.remove();
    }, 8000);
}

// Add CSS for the flowers
const style = document.createElement('style');
style.textContent = `
    .flower {
        position: absolute;
        border-radius: 50%;
        transition: transform 8s ease-out, opacity 8s ease-out;
        z-index: 1;
    }
    
    .petal {
        position: absolute;
        width: 100%;
        height: 100%;
        top: -50%;
        left: 0;
        background-color: inherit;
        border-radius: 50% 50% 0 0;
        transform-origin: bottom center;
    }
`;
document.head.appendChild(style);

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to sections on scroll
const sections = document.querySelectorAll('section');

const fadeInSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
};

const sectionObserver = new IntersectionObserver(fadeInSection, {
    root: null,
    threshold: 0.1
});

sections.forEach(section => {
    section.classList.add('fade-section');
    sectionObserver.observe(section);
});

// Add animation CSS
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .fade-section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(animationStyle);

// Mouse Trail Effect
function createMouseTrail() {
    const maxTrailLength = 15;
    const trailElements = [];
    
    // Create trail elements
    for (let i = 0; i < maxTrailLength; i++) {
        const trail = document.createElement('div');
        trail.className = 'trail';
        document.body.appendChild(trail);
        trailElements.push({
            element: trail,
            x: 0,
            y: 0,
            size: Math.max(3, 10 - i * 0.5), // Decreasing size
            alpha: Math.max(0.03, 0.5 - i * 0.03), // Decreasing opacity
            hue: i * 10 // Different color for each trail
        });
    }
    
    // Mouse move event
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update first trail position immediately
        if (trailElements.length > 0) {
            trailElements[0].x = mouseX;
            trailElements[0].y = mouseY;
        }
    });
    
    // Update trail positions
    function updateTrail() {
        // For each trail element (except the first one, which follows mouse directly)
        for (let i = trailElements.length - 1; i > 0; i--) {
            // Make each trail follow the one before it
            trailElements[i].x = trailElements[i - 1].x;
            trailElements[i].y = trailElements[i - 1].y;
        }
        
        // Update DOM elements
        trailElements.forEach((trail, index) => {
            const { element, x, y, size, alpha, hue } = trail;
            
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.backgroundColor = `hsla(${hue}, 100%, 60%, ${alpha})`;
            element.style.opacity = alpha;
            element.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px)`;
        });
        
        requestAnimationFrame(updateTrail);
    }
    
    updateTrail();
}

// Interactive Parallax Effect on Scroll
function createParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // Apply subtle parallax to elements
        document.querySelectorAll('.skill-item, .certificate-item, .project-item, .achievement-item, .education-item').forEach((item, index) => {
            const speed = 0.05 + (index % 3) * 0.01;
            const yOffset = scrollPosition * speed;
            item.style.transform = `translateY(${yOffset}px)`;
        });
    });
}

// Initialize additional effects
document.addEventListener('DOMContentLoaded', function() {
    createMouseTrail();
    // createParallaxEffect(); // Uncomment if you want the parallax effect
});