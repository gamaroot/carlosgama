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