import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function productsSidebar() {
    ScrollTrigger.matchMedia({
        '(min-width: 641px)': function() {
            const products = document.querySelector('.products');
            const sidebar = document.querySelector('.products__sidebar');

            if (!products || !sidebar) return;

            ScrollTrigger.create({
                trigger: sidebar,
                start: 'top top+=40',
                endTrigger: products,
                end: 'bottom bottom',
                pin: sidebar,
                pinSpacing: false
            });
        }
    });
}
