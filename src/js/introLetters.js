import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { primaryInput } from 'detect-it';

gsap.registerPlugin(ScrollTrigger);

export default function introLetters() {
    const elements = Array.from(document.querySelectorAll('.js-intro-letters'));

    elements.forEach(element => {
        const wrapper = element.querySelector('.intro__words-wrapper');
        const cursor = element.querySelector('.intro__words-cursor');
        const cursorItems = Array.from(element.querySelectorAll('.intro__words-cursor-item'));
        const letters = Array.from(element.querySelectorAll('.intro__letter'));

        ScrollTrigger.matchMedia({
            '(min-width: 641px)': () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.intro',
                        start: 'top top',
                        endTrigger: element,
                        end: 'bottom top',
                        markers: false,
                        scrub: 1
                    }
                });

                tl.to(wrapper, {
                    x: () => element.offsetWidth - wrapper.offsetWidth,
                    // x: () => -500,
                    duration: 0.5
                });
            }
        });

        console.log(element.offsetWidth - wrapper.offsetWidth);

        if (primaryInput !== 'touch') {
            const cursorHandler = e => {
                const xmouse = e.clientX || e.pageX;
                const ymouse = e.clientY || e.pageY - window.scrollY;
                cursor.style.left = xmouse + 'px';
                cursor.style.top = ymouse + 'px';
            };

            document.addEventListener('mousemove', cursorHandler);
        }

        letters.forEach((letter, letterIndex) => {
            letter.addEventListener('mouseenter', () => {
                cursor.classList.add('active');
                cursorItems.forEach(item => {
                    item.classList.remove('active');
                });
                cursorItems[letterIndex].classList.add('active');
            });
            letter.addEventListener('mouseleave', () => {
                cursor.classList.remove('active');
            });
        });
    });
}
