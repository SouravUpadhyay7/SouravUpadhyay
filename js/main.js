// Highlight active link in navbar
function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-item');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.endsWith(linkPath)) {
            link.classList.add('active');
        }
    });
}

// Page transition effect
function initPageTransitions() {
    document.body.classList.add('animate-fade-in');
}

document.addEventListener('DOMContentLoaded', () => {
    highlightActiveLink();
    initPageTransitions();
});
