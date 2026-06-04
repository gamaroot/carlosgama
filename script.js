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

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll(); // Initial check

    // Scroll-reveal
    initScrollReveal();

    // Initialize carousels
    ['gamesCarousel', 'toolsCarousel', 'professionalExperienceCarousel'].forEach(id => {
        const carousel = document.querySelector(`#${id}`);
        if (carousel) {
            carousel.addEventListener('slid.bs.carousel', () => adjustCarouselHeight(id));
            window.addEventListener('load', () => adjustCarouselHeight(id));
        }
    });
}); 