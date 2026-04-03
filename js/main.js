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

// Show under construction message
function showUnderConstruction() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;

    // Create message box
    const messageBox = document.createElement('div');
    messageBox.style.cssText = `
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 40px;
        text-align: center;
        max-width: 400px;
        animation: slideIn 0.4s ease;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    `;

    messageBox.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 20px;">🚧</div>
        <h2 style="color: var(--text-color); margin-bottom: 15px; font-size: 1.5rem;">Coming Soon!</h2>
        <p style="color: var(--text-secondary); margin-bottom: 25px; line-height: 1.6;">
            InfereEx - My dedicated projects showcase website is currently under construction.
            Stay tuned for an amazing experience!
        </p>
        <button onclick="this.parentElement.parentElement.remove()" style="
            background: var(--accent-gradient);
            color: var(--bg-color);
            border: none;
            padding: 12px 24px;
            border-radius: 12px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            Got it!
        </button>
    `;

    overlay.appendChild(messageBox);
    document.body.appendChild(overlay);

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideIn {
            from { transform: translateY(-30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    highlightActiveLink();
    initPageTransitions();
});
