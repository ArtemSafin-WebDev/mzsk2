import { Swiper, Navigation, Pagination } from 'swiper';


Swiper.use([Navigation, Pagination]);

export default function projectsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-projects-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.projects-slider__arrow--next'),
                prevEl: element.querySelector('.projects-slider__arrow--prev')
            }
        });
    })
}