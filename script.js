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


const dropdown = document.querySelector('.eds-dropdown')
const drpdn_btn = document.querySelector('.field-styled-aside')
const input_tab = document.querySelector('.field-styled-input')

// drpdn_btn.addEventListener('click', () => {
//     dropdown.classList.add('active')
    
// })

const toggleDropdown = () => {
    dropdown.classList.toggle('active');
};

drpdn_btn.addEventListener('click', (event) => {
    event.stopPropagation(); 
    toggleDropdown();
});

document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target) && !drpdn_btn.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});


const hamburger = document.querySelector('.mobile-dropdn')
const cross_btn = document.querySelector('.cross-btn')
const dropdn_menu = document.querySelector('.threeline-dropdn')

hamburger.addEventListener('click',()=>{
    dropdn_menu.classList.toggle('active')

})