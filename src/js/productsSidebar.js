import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function productsSidebar() {
   
    ScrollTrigger.matchMedia({
        '(min-width: 641px)': function() {
            const products = document.querySelector('.products');
            const scrollWrapper = document.querySelector('.products__main-scroll-wrapper');
            const mainInner = document.querySelector('.products__main-inner');

            if (!products || !scrollWrapper || !mainInner) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: products,
                    start: 'bottom bottom',

                    end: () => mainInner.offsetHeight - scrollWrapper.offsetHeight,
                    pin: '.products__content',
                    pinSpacing: true,
                    scrub: true
                }
            });

            tl.to(mainInner, {
                y: () => {
                    const distance = mainInner.offsetHeight - scrollWrapper.offsetHeight;
                    if (distance > 0) {
                        return -1 * (mainInner.offsetHeight - scrollWrapper.offsetHeight);
                    } else {
                        return 0;
                    }
                   
                },
                duration: 1,
                ease: 'none'
            });
        }
    });
}
