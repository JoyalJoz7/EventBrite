document.addEventListener('DOMContentLoaded', function() {
    let carouselWrapper = document.querySelector('.banner-wrapper');
    let carouselImages = document.querySelectorAll('.carousel-imgdiv');
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

    function prevSlide(){
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length
        updateCarousel() 
    }

    document.querySelector('.right-arrow-carousel').addEventListener('click',nextSlide)
    document.querySelector('.left-arrow-carousel').addEventListener('click',prevSlide)

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


const top_dropdn = document.querySelector('.eds-dropdown-top')
const location_drop = document.querySelector('.location-holder')

location_drop.addEventListener('click',()=> {
    console.log(location_drop)
    top_dropdn.style.visibility='visible'
})


const hamburger = document.querySelector('.hamburger')
const cross_btn = document.querySelector('.cross-btn')
const dropdn_menu = document.querySelector('.threeline-dropdn')

hamburger.addEventListener('click',()=>{
    dropdn_menu.classList.add('active')
    hamburger.style.display = "none"
    cross_btn.style.display = 'block' 
})

cross_btn.addEventListener('click',() => {
    dropdn_menu.classList.remove('active')
    hamburger.style.display = 'block'
    cross_btn.style.display = 'none'
})

const inputField = document.querySelector('.online-search-input')

document.addEventListener('DOMContentLoaded',function(){
    
    inputField.addEventListener('focus',function() {
        this.placeholder = 'Choose a location'
    });
    inputField.addEventListener('blur',function() {
        this.placeholder = 'Online'
    });
})


// HELP CENTER 

const help_center = document.querySelector('.help-center')
const help_dropdn = document.querySelector('.help-dropdn')

help_center.addEventListener('click',() => help_dropdn.classList.toggle('active'))



// topdestination Carousel 

const left_slide = document.querySelector('.left-slide-btn')
const right_slide = document.querySelector('.right-slide-btn')
const carousel_div = document.querySelector('.simple-carousel')
const carousel_slides = document.querySelector('.carousel-slide')

right_slide.addEventListener('click',() => {
    carousel_slides.style.transform = `translateX(-20%)`
})
