import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, Flip);

export default function productCards() {
    const elements = Array.from(document.querySelectorAll('.products__card'));

    elements.forEach(element => {
        const typeBtns = Array.from(element.querySelectorAll('.products__card-variants-block--type .products__card-variants-btn'));
        const packageTabs = Array.from(element.querySelectorAll('.products__card-variants-tabs-item'));
        const packageBtns = Array.from(element.querySelectorAll('.products__card-variants-block--package .products__card-variants-btn'));

        const priceTabs = Array.from(element.querySelectorAll('.products__card-price-tabs-item'));
        const specsTabs = Array.from(element.querySelectorAll('.products__card-specs-tabs-item'));
        const calcTabs = Array.from(element.querySelectorAll('.products__card-calculation-card-tab-item'));

        typeBtns.forEach((btn, btnIndex) => {
            btn.addEventListener('click', event => {
                event.preventDefault();

                typeBtns.forEach(btn => btn.classList.remove('active'));

                packageTabs.forEach(tab => tab.classList.remove('active'));
                packageTabs[btnIndex].classList.add('active');
                typeBtns[btnIndex].classList.add('active');

                const packageBtns = Array.from(packageTabs[btnIndex].querySelectorAll('.products__card-variants-btn'));

                if (packageBtns.length) {
                    packageBtns[0].click();
                }
            });
        });

        packageBtns.forEach((btn, btnIndex) => {
            btn.addEventListener('click', event => {
                event.preventDefault();

                packageBtns.forEach(btn => btn.classList.remove('active'));
                priceTabs.forEach(item => item.classList.remove('active'));
                specsTabs.forEach(item => item.classList.remove('active'));
                calcTabs.forEach(item => item.classList.remove('active'));

                
                priceTabs[btnIndex]?.classList.add('active');
                packageBtns[btnIndex].classList.add('active');
                specsTabs[btnIndex].classList.add('active');
                calcTabs[btnIndex].classList.add('active');

                ScrollTrigger.refresh(true);

                // Flip.from(state, {
                //     ease: 'power1.inOut',
                //     duration: 0.4,
                //     onComplete: () => {
                //         ScrollTrigger.refresh();
                //     }
                // });
                // state = null;
            });
        });

        if (typeBtns.length) {
            typeBtns[0].click();
        }
    });
}
