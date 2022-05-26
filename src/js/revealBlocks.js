import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function revealBlocks() {
    const elements = Array.from(document.querySelectorAll('.js-block-to-reveal'));

    elements.forEach(element => {
        console.log(element);
        ScrollTrigger.create({
            trigger: element,
            start: 'top bottom-=5%',
            scrub: false,
            end: 'bottom top',
            markers: false,
            onEnter: () => element.classList.add('revealed')
        });
    });
}
