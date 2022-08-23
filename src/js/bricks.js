import { primaryInput } from 'detect-it';

export default function bricks() {
    if (primaryInput === 'touch') return;

    const elements = Array.from(document.querySelectorAll('.bricks'));

    elements.forEach(element => {
        let tracking = false;
        const cursor = element.querySelector('.bricks__cursor');

        element.parentElement.addEventListener('mousemove', event => {
            // if (!tracking) return;
            // console.log(event);
            cursor.classList.add('visible');
            element.parentElement.style.setProperty('--x', event.clientX - element.getBoundingClientRect().left + 'px');
            element.parentElement.style.setProperty('--y', event.clientY - element.getBoundingClientRect().top + 'px');
        });

        element.parentElement.addEventListener('mouseenter', () => {
            tracking = true;
            cursor.classList.add('visible');
        });
        element.parentElement.addEventListener('mouseleave', () => {
            tracking = false;
            cursor.classList.remove('visible');
        });
    });
}
