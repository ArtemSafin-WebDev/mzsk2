import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import masks from './masks';
import validation from './validation';
import anchorLinks from './anchorLinks';
import accordions from './accordions';
import modals from './modals';
import tabs from './tabs';
import menu from './menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reviewsSlider from './reviewsSlider';
import catalogSlider from './catalogSlider';
import introSlider from './introSlider';
import showAll from './showAll';
import introLetters from './introLetters';
import imagesLoaded from 'imagesloaded';
import SplitText from './gsap/SplitText';
import revealBlocks from './revealBlocks';
import productsSidebar from './productsSidebar';
import customSelects from './customSelects';
import projectsSlider from './projectsSlider';

gsap.registerPlugin(ScrollTrigger, SplitText);

document.addEventListener('DOMContentLoaded', function() {
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    detectTouch();
    setScrollbarWidth();
    masks();
    validation();
    anchorLinks();
    accordions();
    customSelects();
    modals();
    tabs();
    menu();
    reviewsSlider();
    catalogSlider();
    introSlider();
    showAll();
    introLetters();
    revealBlocks();
    productsSidebar();
    projectsSlider();


    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
        const imgLoaded = imagesLoaded(document.querySelector('.page-content'));

        imgLoaded.on('always', () => {
            ScrollTrigger.refresh();
        });
    }
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

const introAnimation = () => {
    const introText = document.querySelector('.intro__text');
    if (introText) {
        new SplitText(introText, { type: 'lines', linesClass: 'lineChild' });
        new SplitText(introText, { type: 'lines', linesClass: 'lineParent' });
        const lines = Array.from(introText.querySelectorAll('.lineChild'));

        const tl = gsap.timeline();

        tl.from(lines, {
            autoAlpha: 0,
            yPercent: 100,
            stagger: 0.1,
            duration: 0.4,
            delay: 0.5
        })
            .from('.intro__certificates-list-item', {
                duration: 0.4,
                xPercent: -50,
                stagger: 0.2
            })
            .to(
                '.intro__certificates-list-item',
                {
                    autoAlpha: 1,
                    duration: 0.4,
                    stagger: 0.2
                },
                '<'
            );
    }
};

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => {
        document.body.classList.add('animatable');
        introAnimation();
    }, 300);
});
