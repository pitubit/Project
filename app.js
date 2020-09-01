var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 50,
        },
    }
});

var navicon = document.getElementsByClassName('nav-icon');
navicon[0].addEventListener('click', () => {
    if (navicon[0].classList.contains('active')) {
        navicon[0].classList.remove('active')
    } else {
        navicon[0].classList.add('active')
    }
});