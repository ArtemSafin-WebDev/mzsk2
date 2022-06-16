import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function historySlider() {
    const elements = Array.from(document.querySelectorAll('.js-history-slider'));

    elements.forEach(element => {
        const navContainer = element.querySelector('.about-history__nav-slider .swiper');
        const years = Array.from(element.querySelectorAll('.about-history__nav-slider-card'));

        new Swiper(navContainer, {
            slidesPerView: 'auto',
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.about-history__nav-arrow--next'),
                prevEl: element.querySelector('.about-history__nav-arrow--prev')
            }
        });

        const mainContainer = element.querySelector('.about-history__main-slider .swiper');

        const mainSlider = new Swiper(mainContainer, {
            slidesPerView: 'auto',
            speed: 800,
            init: false,
            slideToClickedSlide: true,
            on: {
                init: swiper => {
                    years.forEach(year => year.classList.remove('active'));
                    years[swiper.activeIndex].classList.add('active');
                },
                slideChange: swiper => {
                    years.forEach(year => year.classList.remove('active'));
                    years[swiper.activeIndex].classList.add('active');
                }
            }
        });

        mainSlider.init();

        years.forEach((year, yearIndex) => {
            year.addEventListener('click', event => {
                event.preventDefault();

                mainSlider.slideTo(yearIndex);
            });
        });
    });
}
