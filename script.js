// ── Scroll Progress Bar ───────────────────────────────────────────────────────
function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = `${(window.scrollY / total) * 100}%`;
    }, { passive: true });
}

// ── Header Scroll Shrink ──────────────────────────────────────────────────────
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    const main   = document.querySelector('main');
    const scrolled = window.scrollY > 50;
    header.classList.toggle('scrolled', scrolled);
    main.classList.toggle('scrolled', scrolled);
}

// ── Typewriter on h1 ─────────────────────────────────────────────────────────
function initTypewriter() {
    const h1   = document.querySelector('.header h1');
    const text = h1.textContent.trim();
    h1.textContent = '';

    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    cursor.textContent = '|';
    h1.appendChild(cursor);

    let i = 0;
    const type = () => {
        if (i < text.length) {
            h1.insertBefore(document.createTextNode(text[i]), cursor);
            i++;
            setTimeout(type, 72);
        } else {
            cursor.classList.add('blinking');
            setTimeout(() => {
                cursor.style.transition = 'opacity 0.4s ease';
                cursor.style.opacity = '0';
                setTimeout(() => cursor.remove(), 400);
            }, 1600);
        }
    };
    setTimeout(type, 300);
}

// ── 3D Card Tilt (desktop only) ───────────────────────────────────────────────
function initCardTilt() {
    if (!window.matchMedia('(hover: hover)').matches) return;

    let lastCard = null;

    document.addEventListener('mousemove', e => {
        const card = e.target.closest('.card');

        if (lastCard && lastCard !== card) {
            lastCard.style.transition = 'box-shadow 0.3s ease, transform 0.55s ease';
            lastCard.style.transform  = '';
            lastCard = null;
        }

        if (!card) return;

        lastCard = card;
        card.style.transition = 'box-shadow 0.3s ease, transform 0.08s linear';

        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width  - 0.5;
        const y = (e.clientY - rect.top)  / rect.height - 0.5;

        card.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-5px)`;
    });
}

// ── Carousel Counters ─────────────────────────────────────────────────────────
function initCarouselCounters() {
    ['gamesCarousel', 'toolsCarousel', 'professionalExperienceCarousel'].forEach(id => {
        const carousel = document.querySelector(`#${id}`);
        if (!carousel) return;

        const items = carousel.querySelectorAll('.carousel-item');
        const total = items.length;
        const pad = n => String(n).padStart(2, '0');

        const counter = document.createElement('div');
        counter.className = 'carousel-counter';
        counter.innerHTML = `
            <div class="carousel-counter-track">
                <div class="carousel-counter-fill"></div>
            </div>
            <span class="carousel-counter-text">${pad(1)} / ${pad(total)}</span>`;
        carousel.after(counter);

        const fill = counter.querySelector('.carousel-counter-fill');
        const text = counter.querySelector('.carousel-counter-text');

        const update = () => {
            const idx = [...items].findIndex(el => el.classList.contains('active'));
            const cur = idx + 1;
            fill.style.width = `${(cur / total) * 100}%`;
            text.textContent = `${pad(cur)} / ${pad(total)}`;
        };

        update();
        carousel.addEventListener('slid.bs.carousel', update);
    });
}

// ── Carousel Height Adjustment ────────────────────────────────────────────────
function adjustCarouselHeight(carouselId) {
    const carousel = document.querySelector(`#${carouselId}`);
    const activeItem = carousel?.querySelector('.carousel-item.active');
    if (activeItem) {
        carousel.querySelector('.carousel-inner').style.height = `${activeItem.offsetHeight}px`;
    }
}

// ── Banner Zoom Wrapper ───────────────────────────────────────────────────────
function initBannerWrappers() {
    document.querySelectorAll('.project-banner').forEach(img => {
        const wrapper = document.createElement('div');
        wrapper.className = 'banner-wrapper';
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);
    });
}

// ── Scroll Reveal + Staggered List Items ──────────────────────────────────────
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const section = entry.target;
            section.classList.add('visible');
            section.querySelectorAll('li').forEach((li, i) => {
                li.style.transitionDelay = `${0.22 + i * 0.07}s`;
            });
            observer.unobserve(section);
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('section').forEach(s => observer.observe(s));
}

// ── i18n ──────────────────────────────────────────────────────────────────────
function setTranslations(lang) {
    document.documentElement.lang = lang;
    document.title = TRANSLATIONS[lang]['page.title'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = TRANSLATIONS[lang][el.dataset.i18n];
        if (value !== undefined) el.innerHTML = value;
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem('lang', lang);
}

function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    const main = document.querySelector('main');
    main.classList.add('lang-switching');
    setTimeout(() => {
        setTranslations(lang);
        main.classList.remove('lang-switching');
    }, 180);
}

function initI18n() {
    const saved   = localStorage.getItem('lang');
    const browser = navigator.language.startsWith('fr') ? 'fr' : 'en';
    setTranslations(saved || browser);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
}

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initTypewriter();
    initCardTilt();
    initCarouselCounters();
    initBannerWrappers();
    initScrollReveal();
    initI18n();

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll();

    ['gamesCarousel', 'toolsCarousel', 'professionalExperienceCarousel'].forEach(id => {
        const carousel = document.querySelector(`#${id}`);
        if (!carousel) return;
        carousel.addEventListener('slid.bs.carousel', () => adjustCarouselHeight(id));
        window.addEventListener('load', () => adjustCarouselHeight(id));
    });
});
