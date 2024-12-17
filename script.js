document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel-wrapper .carousel');
    const dots = document.querySelectorAll('.carousel-wrapper .carousel-indicators .dot');
    const totalItems = document.querySelectorAll('.carousel-wrapper .carousel-item').length;
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
        });
    }

    function nextSlide() {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    setInterval(nextSlide, 2000);

    updateCarousel();
});
