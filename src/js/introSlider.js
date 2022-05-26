import { Swiper, Navigation, Pagination } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Navigation, Pagination]);

export default function introSlider() {
    const elements = Array.from(document.querySelectorAll('.js-intro-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        if (IS_MOBILE) return;

        new Swiper(container, {
            slidesPerView: 2,
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.intro__slider-arrow--next'),
                prevEl: element.querySelector('.intro__slider-arrow--prev')
            }
        });
    })
}