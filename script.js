document.addEventListener('DOMContentLoaded', function() {
    const carouselWrapper = document.querySelector('.banner-wrapper');
    const carouselImages = document.querySelectorAll('.carousel-imgdiv');
    const dots = document.querySelectorAll('.dots-container svg');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselWrapper.style.transform = `translateX(${offset}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active',index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        updateCarousel();
    }

    updateCarousel();
    setInterval(nextSlide, 3850);
});
