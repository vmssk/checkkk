window.addEventListener('DOMContentLoaded' , () => {
    const swiperFour = new Swiper('.slider__four', {

        simulateTouch: false,
        loop: true,
        speed: 400,
    
        slideActiveClass: 'slide__four-active',
        slideClass: 'slide__four',
        wrapperClass: 'wrapper__four',
    
    
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
    
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,

        },
    
        breakpoints: {
    
            320: {
                spaceBetween: 0,
                slidesPerView: 1,
                centeredSlides: false,
            },
            640: {
                spaceBetween: 30,
                slidesPerView: 2,
                centeredSlides: false,
            },
            768: {
                spaceBetween: 30,
                slidesPerView: 2,
                centeredSlides: false,
            },
    
            1024: {
                spaceBetween: 30,
                slidesPerView: 3,
                centeredSlides: false,
            },
            1200: {
                spaceBetween: 30,
                slidesPerView: 4,
            }
        }
    
    });
})

