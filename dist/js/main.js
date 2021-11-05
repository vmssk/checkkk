window.addEventListener('DOMContentLoaded', () => {

    //menu
    const menuIcon = document.querySelector('.menu__icon'),
        nav = document.querySelector('.nav');

    menuIcon.addEventListener('click', function () {
        document.body.classList.toggle('lock');
        menuIcon.classList.toggle('_active-icon');
        nav.classList.toggle('_active');
    
    const phoneIcon = document.querySelector('.header__phone-icon-hide');
    
    if(nav.classList.contains('_active')){
        phoneIcon.classList.add('_active');
    } else {
        phoneIcon.classList.remove('_active');
    }
    });

    //Tabs 
    const tabs = document.querySelectorAll('.tab__link');
    const tabsItems = document.querySelectorAll('.slider__one');

    tabs.forEach((e) => {
        e.addEventListener('click', (event) => {
            event.preventDefault();
            let tabId = e.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);
            tabs.forEach((e) => {
                e.classList.remove('_active');
            })
            e.classList.add('_active');


            tabsItems.forEach((tabsItem) => {
                tabsItem.classList.remove('_active')
            })
            currentTab.classList.add('_active');
        });
    });

    document.querySelector('.tab__link:nth-child(2)').click();



    //scrolls
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href').substr(1);

            if (menuIcon.classList.contains('_active-icon')) {
                document.body.classList.remove('lock');
                menuIcon.classList.remove('_active-icon');
                nav.classList.remove('_active');
            }

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    };

    //Sliders 
    const swiper = new Swiper('.slider__one', {

        simulateTouch: false,
        loop: true,
        speed: 400,

        spaceBetween: 30,
        slidesPerView: 4,

        slideActiveClass: 'slide__one-active',
        slideClass: 'slide__one',
        wrapperClass: 'wrapper__one',


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
                spaceBetween: 30,
                slidesPerView: 2,
                centeredSlides: false,
            },
            640: {
                spaceBetween: 30,
                slidesPerView: 2,
                centeredSlides: false,
            },
            768: {
                spaceBetween: 85,
                slidesPerView: 2,
                centeredSlides: false,
            },

            1024: {
                spaceBetween: 50,
                slidesPerView: 3,
                centeredSlides: false,
            },
            1200: {
                spaceBetween: 30,
                slidesPerView: 4,
            }
        }

    });


    const swiperTwo = new Swiper('.slider__two', {

        simulateTouch: false,
        loop: true,
        speed: 400,

        spaceBetween: 30,
        slidesPerView: 4,

        slideActiveClass: 'slide__two-active',
        slideClass: 'slide__two',
        wrapperClass: 'wrapper__two',


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
                spaceBetween: 30,
                slidesPerView: 2,
                centeredSlides: false,
            },
            640: {
                spaceBetween: 30,
                slidesPerView: 2,
                centeredSlides: false,
            },
            768: {
                spaceBetween: 85,
                slidesPerView: 2,
                centeredSlides: false,
            },

            1024: {
                spaceBetween: 50,
                slidesPerView: 3,
                centeredSlides: false,
            },
            1200: {
                spaceBetween: 30,
                slidesPerView: 4,
            }
        }

    });

    const swiperThree = new Swiper('.slider__three', {

        simulateTouch: false,
        loop: true,
        speed: 400,

        spaceBetween: 90,
        slidesPerView: 7,

        slideActiveClass: 'slide__three-active',
        slideClass: 'slide__three',
        wrapperClass: 'wrapper__three',


        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },


        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {

            320: {
                spaceBetween: 30,
                slidesPerView: 3,
                centeredSlides: false,
            },
            640: {
                spaceBetween: 30,
                slidesPerView: 3,
                centeredSlides: false,
            },
            768: {
                spaceBetween: 30,
                slidesPerView: 3,
                centeredSlides: false,
            },

            1024: {
                spaceBetween: 30,
                slidesPerView: 3,
                centeredSlides: false,
            },
            1200: {
                spaceBetween: 50,
                slidesPerView: 6,
            }
        }

    });
})