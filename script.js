// Header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    const main = document.querySelector('main');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        main.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        main.classList.remove('scrolled');
    }
}

// Carousel height adjustment
function adjustCarouselHeight(carouselId) {
    const carousel = document.querySelector(`#${carouselId}`);
    const carouselInner = carousel.querySelector('.carousel-inner');
    const activeItem = carousel.querySelector('.carousel-item.active');
    
    if (activeItem) {
        const activeHeight = activeItem.offsetHeight;
        carouselInner.style.height = `${activeHeight}px`;
    }
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll(); // Initial check
    
    const projectsCarousel = document.querySelector('#projectsCarousel');
    if (projectsCarousel) {
        projectsCarousel.addEventListener('slid.bs.carousel', () => adjustCarouselHeight('projectsCarousel'));
        window.addEventListener('load', () => adjustCarouselHeight('projectsCarousel'));
    }
    
    const professionalExperienceCarousel = document.querySelector('#professionalExperienceCarousel');
    if (professionalExperienceCarousel) {
        professionalExperienceCarousel.addEventListener('slid.bs.carousel', () => adjustCarouselHeight('professionalExperienceCarousel'));
        window.addEventListener('load', () => adjustCarouselHeight('professionalExperienceCarousel'));
    }
}); 