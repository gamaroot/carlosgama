// ── Scroll Progress Bar ───────────────────────────────────────────────────────
function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = `${(scrolled / total) * 100}%`;
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

            // Stagger each <li> inside the revealed section
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
