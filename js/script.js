// navbar js

let menub = document.querySelector('#menub')
let navbar = document.querySelector ('.header .flex .navbar');

menub.onclick = () =>{
    menub.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// our courses js

// var swiper = new Swiper('.course-slider', {
//     spaceBetween: 20,
//     grabCursor: true,
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         540: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },
//     },
// });

// our teachers

var swiper = new Swiper('.teachers-slider', {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


// our reviews

var swiper = new Swiper('.reviews-slider', {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


