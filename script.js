// ===== i18n =====
const i18n = {
  lang: localStorage.getItem('lysa-lang') || 'fr',

  apply(lang) {
    this.lang = lang;
    localStorage.setItem('lysa-lang', lang);
    document.documentElement.lang = lang;
    const t = TRANSLATIONS[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = t[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = t[el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const v = t[el.dataset.i18nPlaceholder];
      if (v !== undefined) el.placeholder = v;
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    renderCarousel();
  }
};

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => i18n.apply(btn.dataset.lang));
});

// ===== Carrousel références =====
(function () {
    const track   = document.getElementById('carousel-track');
    const dotsEl  = document.getElementById('carousel-dots');
    const btnPrev = document.getElementById('carousel-prev');
    const btnNext = document.getElementById('carousel-next');
    if (!track || typeof LYSA_REFERENCES === 'undefined') return;

    const SECTOR_ICONS = {
        'energy':    '<path d="m343.08-102.31 40-277.69h-185l329.61-475.77h49.23L537.31-540H757.3L392.31-102.31h-49.23Z"/>',
        'insurance': '<path d="M480-60q-177.92 0-298.96-65.16Q60-190.31 60-285q0-64.38 60.16-117.08 60.15-52.69 168.3-81.53V-422q-77.23 23-122.84 59.96Q120-325.08 120-285q0 66.31 107.62 115.65Q335.23-120 480-120q144.77 0 252.38-49.35Q840-218.69 840-285q0-40.08-45.62-77.04Q748.77-399 671.54-422v-61.61q107.77 28.46 168.11 81.34Q900-349.38 900-285q0 94.69-121.04 159.84Q657.92-60 480-60ZM376.16-221.54v-436.54H180v-60h600v60H583.84v436.54h-59.99v-198.85h-87.7v198.85h-59.99Zm103.85-540.38q-28.39 0-48.62-20.23-20.24-20.22-20.24-48.62 0-28.71 20.23-49.16 20.22-20.45 48.61-20.45t48.62 20.45q20.24 20.45 20.24 49.16 0 28.4-20.22 48.62-20.23 20.23-48.62 20.23Z"/>',
        'bank':      '<path d="M230-280v-300h60v300h-60Zm220 0v-300h60v300h-60ZM110.77-140v-60h738.46v60H110.77ZM670-280v-300h60v300h-60ZM110.77-660v-56.92L480-897.69l369.23 180.77V-660H110.77Z"/>',
        'telecom':   '<path d="M207.54-287.54q-56.23-58.08-84.19-128T95.39-560q0-74.54 27.96-144.46t84.19-128l37.23 37.23Q196-746.08 172-684.54 148-623 148-560q0 63 24 124.54 24 61.54 72.77 110.69l-37.23 37.23ZM302-382q-36.69-37.46-55.65-83.77-18.96-46.31-18.96-94.23t18.96-94.23Q265.31-700.54 302-738l37.23 37.23q-29.61 27.77-44.42 64.96Q280-598.62 280-560q0 36.77 14.62 73.77 14.61 37 44.61 67L302-382Zm-.46 268.92 125.77-377.31q-16.77-12.07-26.27-30.49-9.5-18.43-9.5-39.12 0-37 25.73-62.73Q443-648.46 480-648.46t62.73 25.73Q568.46-597 568.46-560q0 20.69-9.11 38.73-9.12 18.04-26.66 30.88l125.77 377.31h-60.77l-26-80H388.92l-26.23 80h-61.15Zm107.23-140h142.46L480-466.93l-71.23 213.85ZM658-382l-37.23-37.23q29.61-27.77 44.42-64.96Q680-521.38 680-560q0-35.62-14.81-73t-44.42-67.77L658-738q36.69 37.46 54.73 84.15 18.04 46.7 19.88 94.23 0 47.93-18.76 94.04Q695.08-419.46 658-382Zm94.46 94.46-37.23-37.23Q764-373.92 788-435.46 812-497 812-560q0-63-24-124.54-24-61.54-72.77-110.69l37.23-37.23q55.85 58.08 84 128T864.61-560q0 74.54-26.84 144.46-26.85 69.92-85.31 128Z"/>',
        'asset':     '<path d="M333.85-441.69v-264.46h92.3v264.46L380-486.16l-46.15 44.47Zm186.92 74.61v-499.07h92.3v406.77l-92.3 92.3ZM146.16-255.23v-290.92h92.3v198.61l-92.3 92.31ZM143.85-128l234.92-234.92 142 122L767.85-488H690v-60h180v180h-60v-77.85L523.23-159.08l-142-122L228.15-128h-84.3Z"/>',
        'auto':      '<path d="M224.61-220v50q0 12.75-8.62 21.37-8.63 8.63-21.38 8.63H170q-12.75 0-21.37-8.63Q140-157.25 140-170v-306.92L221.69-710q4.47-13.77 16.39-21.88Q250-740 264.62-740h432.3q14.04 0 25.5 8.25 11.45 8.25 15.89 21.75L820-476.92V-170q0 12.75-8.63 21.37Q802.75-140 790-140h-24.61q-12.75 0-21.38-8.63-8.62-8.62-8.62-21.37v-50H224.61Zm-.3-316.92h511.38L685.23-680H274.77l-50.46 143.08Zm74.24 210.77q21.83 0 37.03-15.29 15.19-15.28 15.19-37.11t-15.28-37.03q-15.29-15.19-37.12-15.19t-37.02 15.28q-15.2 15.29-15.2 37.12t15.29 37.02q15.28 15.2 37.11 15.2Zm363.08 0q21.83 0 37.02-15.29 15.2-15.28 15.2-37.11t-15.29-37.03q-15.28-15.19-37.11-15.19t-37.03 15.28q-15.19 15.29-15.19 37.12t15.28 37.02q15.29 15.2 37.12 15.2Z"/>',
    };

    function getSectorIcon(sector) {
        const s = sector.toLowerCase();
        if (s.includes('énergie') || s.includes('energie') || s.includes('utilities') || s.includes('energy')) return 'energy';
        if (s.includes('assurance') || s.includes('insurance')) return 'insurance';
        if (s.includes('banque') || s.includes('banking')) return 'bank';
        if (s.includes('télécom') || s.includes('telecom')) return 'telecom';
        if (s.includes('asset')) return 'asset';
        if (s.includes('auto') || s.includes('automotive')) return 'auto';
        return 'asset';
    }

    let current = 0;
    let timer;
    const DELAY = 5000;

    window.renderCarousel = function() {
        // Clear existing content
        track.innerHTML = '';
        dotsEl.innerHTML = '';

        const lang = i18n.lang;

        // Render cards using current language
        LYSA_REFERENCES.forEach((ref) => {
            const sector  = (lang === 'en' && ref.sector_en)  ? ref.sector_en  : ref.sector;
            const title   = (lang === 'en' && ref.title_en)   ? ref.title_en   : ref.title;
            const desc    = (lang === 'en' && ref.desc_en)    ? ref.desc_en    : ref.desc;
            const results = (lang === 'en' && ref.results_en) ? ref.results_en : ref.results;
            const tags    = (lang === 'en' && ref.tags_en)    ? ref.tags_en    : ref.tags;

            const iconKey = getSectorIcon(sector);
            const iconSvg = SECTOR_ICONS[iconKey] || '';
            const card = document.createElement('div');
            card.className = 'mission-card';
            card.innerHTML = `
                <div class="mission-sector-header">
                    <svg viewBox="0 -960 960 960" width="30" height="30" aria-hidden="true" class="sector-icon" data-sector="${iconKey}" fill="currentColor">${iconSvg}</svg>
                    <span class="mission-sector">${sector}</span>
                </div>
                <h4>${title}</h4>
                <p>${desc}</p>
                <div class="mission-results">
                    ${results.map(r => `<span>${r}</span>`).join('')}
                </div>
                ${tags ? `<div class="mission-tags">${tags.map(t => `<span class="mission-tag">${t}</span>`).join('')}</div>` : ''}
            `;
            track.appendChild(card);
        });

        // Rebuild dots
        LYSA_REFERENCES.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-label', `${lang === 'en' ? 'Reference' : 'Référence'} ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsEl.appendChild(dot);
        });

        // Reset position
        goTo(0);
    };

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

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = TRANSLATIONS[i18n.lang]['form.sending'];
    btn.disabled = true;

    const data = {
        name:    form.name.value,
        company: form.company.value,
        email:   form.email.value,
        subject: form.subject.value,
        message: form.message.value,
    };

    try {
        const res = await fetch('contact.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        const json = await res.json();

        if (json.success) {
            btn.textContent = TRANSLATIONS[i18n.lang]['form.sent'];
            btn.style.background = '#22c55e';
            form.reset();
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        } else {
            throw new Error(json.error || 'Erreur');
        }
    } catch {
        btn.textContent = TRANSLATIONS[i18n.lang]['form.error'];
        btn.style.background = '#ef4444';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.disabled = false;
        }, 3000);
    }
});

// Apply saved language on load
i18n.apply(i18n.lang);
