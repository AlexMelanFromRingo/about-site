// Language switching
const langButtons = document.querySelectorAll('.lang-btn');
const elements = document.querySelectorAll('[data-uk][data-en]');

// Get saved language or default to Ukrainian
let currentLang = localStorage.getItem('language') || 'uk';

// Apply saved language on load
applyLanguage(currentLang);

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        
        // Update active button
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Apply language
        applyLanguage(lang);
        
        // Save preference
        localStorage.setItem('language', lang);
        currentLang = lang;
    });
});

function applyLanguage(lang) {
    // Update active button
    langButtons.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update all text elements
    elements.forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            el.textContent = text;
        }
    });
}

// Copy to clipboard functionality
const copyButtons = document.querySelectorAll('.copy-btn');
const notification = document.getElementById('notification');

copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
        const address = btn.dataset.address;
        
        try {
            await navigator.clipboard.writeText(address);
            showNotification();
        } catch (err) {
            // Fallback for older browsers
            fallbackCopy(address);
        }
    });
});

function showNotification() {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        showNotification();
    } catch (err) {
        console.error('Failed to copy:', err);
    }
    
    document.body.removeChild(textarea);
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe all sections with slide-up class
document.querySelectorAll('.slide-up').forEach(section => {
    observer.observe(section);
});

// Smooth scroll for anchor links (if you add any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Preload and optimize
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class for any additional animations
    document.body.classList.add('loaded');
    
    // Performance optimization: lazy load images if you add any
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
});

// Add keyboard navigation for copy buttons
copyButtons.forEach(btn => {
    btn.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
        }
    });
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);
