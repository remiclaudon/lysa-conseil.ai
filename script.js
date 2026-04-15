// ===== Carrousel références =====
(function () {
    const track   = document.getElementById('carousel-track');
    const dotsEl  = document.getElementById('carousel-dots');
    const btnPrev = document.getElementById('carousel-prev');
    const btnNext = document.getElementById('carousel-next');
    if (!track || typeof LYSA_REFERENCES === 'undefined') return;

    let current = 0;
    let timer;
    const DELAY = 5000;

    // Render cards from data file
    LYSA_REFERENCES.forEach((ref) => {
        const card = document.createElement('div');
        card.className = 'mission-card';
        card.innerHTML = `
            <span class="mission-sector">${ref.sector}</span>
            <h4>${ref.title}</h4>
            <p>${ref.desc}</p>
            <div class="mission-results">
                ${ref.results.map(r => `<span>${r}</span>`).join('')}
            </div>
            ${ref.tags ? `<div class="mission-tags">${ref.tags.map(t => `<span class="mission-tag">${t}</span>`).join('')}</div>` : ''}
        `;
        track.appendChild(card);
    });

    // Dots
    LYSA_REFERENCES.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `Référence ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsEl.appendChild(dot);
    });

    function goTo(index) {
        current = (index + LYSA_REFERENCES.length) % LYSA_REFERENCES.length;
        track.style.transform = `translateX(-${current * 100}%)`;
        dotsEl.querySelectorAll('.carousel-dot').forEach((d, i) =>
            d.classList.toggle('active', i === current)
        );
    }

    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => goTo(current + 1), DELAY);
    }

    btnNext.addEventListener('click', () => { goTo(current + 1); startTimer(); });
    btnPrev.addEventListener('click', () => { goTo(current - 1); startTimer(); });

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(timer));
    track.addEventListener('mouseleave', startTimer);

    // Touch / swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const delta = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) { goTo(delta > 0 ? current + 1 : current - 1); startTimer(); }
    }, { passive: true });

    startTimer();
})();

// Navigation scroll effect
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Animated counter for metrics
function animateCounters() {
    const counters = document.querySelectorAll('.metric-value[data-target]');

    counters.forEach(counter => {
        if (counter.dataset.animated) return;

        const target = parseInt(counter.dataset.target);
        const duration = 1500;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.round(target * eased);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
                counter.dataset.animated = 'true';
            }
        }

        requestAnimationFrame(update);
    });
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Trigger counter animation for metrics section
            if (entry.target.closest('.metrics')) {
                animateCounters();
            }
        }
    });
}, { threshold: 0.15 });

// Apply fade-in to sections
document.querySelectorAll(
    '.expertise-card, .offre-card, .approche-step, .sector-group, .carousel, .fondateur-wrapper, .metrics, .contact-wrapper'
).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Stagger animation for grids
document.querySelectorAll('.expertise-grid, .offres-grid, .references-sectors').forEach(grid => {
    grid.querySelectorAll('.fade-in').forEach((card, i) => {
        card.style.transitionDelay = `${i * 100}ms`;
    });
});

// Form handling
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    btn.textContent = 'Message envoyé !';
    btn.style.background = '#22c55e';
    btn.disabled = true;

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
    }, 3000);
});
