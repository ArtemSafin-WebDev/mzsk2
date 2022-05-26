import { Swiper, Navigation, Pagination, EffectFade } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Navigation, Pagination, EffectFade]);

export default function reviewsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-reviews-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');
        const links = Array.from(element.querySelectorAll('.clients__reviews-company'));
        const bullets = Array.from(element.querySelectorAll('.clients__reviews-slider-bullet'));
        const setActiveLink = index => {
            links.forEach(link => link.classList.remove('active'));
            links[index].classList.add('active');
            bullets.forEach(bullet => bullet.classList.remove('active'));
            bullets[index].classList.add('active');
        };
        const instance = new Swiper(container, {
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoHeight: true,
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.clients__reviews-slider-arrow--next'),
                prevEl: element.querySelector('.clients__reviews-slider-arrow--prev')
            },
            pagination: {
                el: element.querySelector('.clients__reviews-slider-pagination'),
                type: 'fraction'
            },
            init: false,
            on: {
                init: function(swiper) {
                    setActiveLink(swiper.activeIndex);
                },
                slideChange: function(swiper) {
                    setActiveLink(swiper.activeIndex);
                }
            }
        });
        instance.init();

        links.forEach((link, linkIndex) => {
            link.addEventListener('click', event => {
                event.preventDefault();
                instance.slideTo(linkIndex);
            });
        });
    });
}
