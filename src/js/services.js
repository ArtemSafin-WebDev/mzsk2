import { Swiper, Navigation, Pagination, EffectFade } from 'swiper';
import { convertRemToPixels, IS_MOBILE } from './utils';

Swiper.use([Navigation, Pagination, EffectFade]);

export default function servicesSlider() {
    const elements = Array.from(document.querySelectorAll('.js-services-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            navigation: {
                nextEl: element.querySelector('.services__slider-arrow--next'),
                prevEl: element.querySelector('.services__slider-arrow--prev')
            },
            breakpoints: {
                641: {
                    slidesPerView: 4,
                    spaceBetween: convertRemToPixels(2),
                }
            }
        });
    });
}
