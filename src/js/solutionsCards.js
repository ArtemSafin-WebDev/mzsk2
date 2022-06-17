export default function solutionsCards() {
    const elements = Array.from(document.querySelectorAll('.solutions__projects-card'));


    elements.forEach(element => {
        const btn = element.querySelector('.solutions__projects-card-details-link');

        btn.addEventListener('mouseenter', () => {
            element.classList.add('card-hovered')
        })
        btn.addEventListener('mouseleave', () => {
            element.classList.remove('card-hovered')
        })
    })
}