export default function aboutVideo() {
    const elements = Array.from(document.querySelectorAll('.js-about-video'));


    elements.forEach(element => {
        const video = element.querySelector('video');
        if (!video) return;

        element.addEventListener('click', event => {
            event.preventDefault();

            if (video.playing) {
                video.pause();
                element.classList.remove('playing')
            } else {
                video.play();
                element.classList.add('playing')
            }
        })
    })
}