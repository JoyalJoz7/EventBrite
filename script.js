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
    setInterval(nextSlide, 4000);
});


const dropdown = document.querySelector('.eds-dropdown')
const drpdn_btn = document.querySelector('.field-styled-aside')
const input_tab = document.querySelector('.field-styled-input')


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

// TOp online search tab

const top_dropdn = document.querySelector('.online-container .eds-dropdown-top')
const location_drop = document.querySelector('.online-container')

location_drop.addEventListener('click',(event)=> {
    event.stopPropagation()
    top_dropdn.classList.toggle('show')
})

document.addEventListener('click',(event) => {
    if(!location_drop.contains(event.target)){
        top_dropdn.classList.remove('show')
    }
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

help_center.addEventListener('click',(event) => {
    event.stopPropagation()
    help_dropdn.classList.toggle('active')
})

document.addEventListener('click',(event) => {
    if(!help_center.contains(event.target)){
        help_dropdn.classList.remove('active')
    }
})



// topdestination Carousel 

const left_slide = document.querySelector('.left-slide-btn')
const right_slide = document.querySelector('.right-slide-btn')
const carousel_div = document.querySelector('.simple-carousel')
const carousel_slides = document.querySelectorAll('.carousel-slide')

const scrollWidth = carousel_div.offsetWidth
const totalWidth = carousel_slides.length

const updateButtonStates = () => {
    if(carousel_div.scrollLeft <= 0) {
        left_slide.disabled = true
    }else{
        left_slide.disabled = false
    }

    if(carousel_div.scrollLeft === totalWidth){
        right_slide.disabled = true
    }else{
        right_slide.disabled = false
    }
}

updateButtonStates()

right_slide.addEventListener('click',(e) => {
    e.preventDefault()
    carousel_div.scrollBy({left:scrollWidth,behavior:"smooth"})
})

left_slide.addEventListener('click',function(e){
    e.preventDefault()
    carousel_div.scrollBy({left:-scrollWidth,behavior:"smooth"})
})

carousel_div.addEventListener('scroll',updateButtonStates)


location_cont = document.querySelector('.hidden-online-bar .location-container')
drop_dn_sec = document.querySelector('.hidden-online-bar .eds-dropdown-top')

location_cont.addEventListener('click',(event) => {
    event.stopPropagation()
    drop_dn_sec.classList.toggle('show')
})

document.addEventListener('click',(event) => {
    if(!location_cont.contains(event.target)){
        drop_dn_sec.classList.remove('show')
    }
})