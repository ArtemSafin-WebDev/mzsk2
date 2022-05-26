import { Swiper, Navigation, Pagination } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Navigation, Pagination]);

export default function catalogSlider() {
    const elements = Array.from(document.querySelectorAll('.js-catalog-slider'));
    if (IS_MOBILE) {
        elements.forEach(element => {
            const slides = Array.from(element.querySelectorAll('.swiper-slide'));
            slides.forEach(slide => {
                slide.replaceWith(...slide.childNodes);
            });
        });
    } else {
        elements.forEach(element => {
            const container = element.querySelector('.swiper');
            new Swiper(container, {
                slidesPerView: 'auto',
                speed: 500,
                navigation: {
                    nextEl: element.querySelector('.catalog__slider-arrows-btn--next'),
                    prevEl: element.querySelector('.catalog__slider-arrows-btn--prev')
                }
            });
        });
    }
}
