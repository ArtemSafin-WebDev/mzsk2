import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function shrinkHeadersOnScroll() {
    const elements = Array.from(document.querySelectorAll('.js-shrink-on-scroll'));

    elements.forEach(element => {
        const content = element.querySelector('.standard-header__content');
        const clipper = element.querySelector('.standard-header__clipper');
        ScrollTrigger.matchMedia({
            '(min-width: 641px)': function() {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.page-content',
                        start: 'top top',
                        end: () => content.offsetHeight,
                        scrub: true,
                        pin: element,
                       
                        pinType: 'transform',
                        
                    }
                });

                tl.to(clipper, {
                    height: 0,
                    duration: 1,
                    ease: 'none'
                }).to(
                    '.standard-header__content > *:not(.standard-header__bg)',
                    {
                        autoAlpha: 0,
                        duration: 1
                    },
                    0
                );

                const headerTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.page-content',
                        start: 'top top',
                        end: () => content.offsetHeight,
                        scrub: true,
                        pin: '.page-header',
                        pinSpacing: false
                    }
                });

                headerTl.to('.page-header', {
                    autoAlpha: 0,
                    duration: 1
                });

                ScrollTrigger.create({
                    trigger: '.page-content',
                    start: 'top+=20 top',
                    end: () => content.offsetHeight,

                    toggleClass: 'fading'
                });
            }
        });
    });
}
