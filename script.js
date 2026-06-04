// Header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    const main = document.querySelector('main');
    const scrolled = window.scrollY > 50;

    header.classList.toggle('scrolled', scrolled);
    main.classList.toggle('scrolled', scrolled);
}

// Carousel height adjustment
function adjustCarouselHeight(carouselId) {
    const carousel = document.querySelector(`#${carouselId}`);
    const activeItem = carousel?.querySelector('.carousel-item.active');

    if (activeItem) {
        carousel.querySelector('.carousel-inner').style.height = `${activeItem.offsetHeight}px`;
    }
}

// Scroll-reveal via Intersection Observer
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));
}

// i18n
function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;

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

function initI18n() {
    const saved = localStorage.getItem('lang');
    const browser = navigator.language.startsWith('fr') ? 'fr' : 'en';
    applyLanguage(saved || browser);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll();

    initScrollReveal();
    initI18n();

    ['gamesCarousel', 'toolsCarousel', 'professionalExperienceCarousel'].forEach(id => {
        const carousel = document.querySelector(`#${id}`);
        if (carousel) {
            carousel.addEventListener('slid.bs.carousel', () => adjustCarouselHeight(id));
            window.addEventListener('load', () => adjustCarouselHeight(id));
        }
    });
});
