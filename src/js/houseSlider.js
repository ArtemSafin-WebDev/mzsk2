import { Swiper, Navigation, Pagination, EffectCreative, EffectFade, Controller } from 'swiper';

Swiper.use([Navigation, Pagination, EffectCreative, EffectFade, Controller]);

export default function houseSlider() {
    const elements = Array.from(document.querySelectorAll('.js-house-slider'));

    elements.forEach(element => {
        const mainContainer = element.querySelector('.house__slider-main .swiper');

        const mainSlider = new Swiper(mainContainer, {
            speed: 500,

            effect: 'creative',
            slidesPerView: 'auto',
            navigation: {
                nextEl: element.querySelector('.house__slider-arrow--next'),
                prevEl: element.querySelector('.house__slider-arrow--prev')
            },
            creativeEffect: {
                prev: {
                    // will set `translateZ(-400px)` on previous slides
                    translate: [0, 0, -400],
                    opacity: 0
                    // scale: 0
                },
                next: {
                    // will set `translateX(100%)` on next slides
                    translate: ['100%', 0, 0],
                    opacity: 0.3
                },
                limitProgress: 10
            }
        });

        const textContainer = element.querySelector('.house__slider-text .swiper');

        const textSlider = new Swiper(textContainer, {
            speed: 500,
            effect: 'fade',
            autoHeight: true,
            fadeEffect: {
                crossFade: true
            }
        });

        mainSlider.controller.control = textSlider;
        textSlider.controller.control = mainSlider;
    });
}
