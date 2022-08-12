import { IS_MOBILE } from "./utils";

export default function maps() {
    const elements = Array.from(document.querySelectorAll('.js-map'));
    console.log('MAP ELEMNTS', elements);
    elements.forEach(element => {
        ymaps.ready(initMap);
        function initMap() {
            console.log('MAP');
            const mapElement = element.querySelector('.js-map-element');

            console.log(mapElement)

            const center = element.getAttribute('data-center').split(',');
            const coords = element.getAttribute('data-coords').split(',');
            const zoom = element.getAttribute('data-zoom');
            const pinURL = element.getAttribute('data-pin')
            const MOBILE_PIN_SCALE_FACTOR = 1.5;

            const pin = {
                iconLayout: 'default#image',
                iconImageHref: pinURL,
                iconImageSize: IS_MOBILE ? [64 / MOBILE_PIN_SCALE_FACTOR, 76 / MOBILE_PIN_SCALE_FACTOR] : [64, 76],
                iconImageOffset: IS_MOBILE ? [-32 / MOBILE_PIN_SCALE_FACTOR, -76 / MOBILE_PIN_SCALE_FACTOR] : [-32, -76]
            };

            const mapInstance = new ymaps.Map(mapElement, {
                center: center,
                zoom: zoom ? zoom : 12,
                controls: []
            });

            mapInstance.behaviors.disable('scrollZoom');

            const zoomControl = new ymaps.control.ZoomControl({
                options: {
                    size: 'small',
                    position: {
                        left: 10,
                        bottom: 10
                    }
                }
            });
            mapInstance.controls.add(zoomControl);

            var objectManager = new ymaps.ObjectManager({
                geoObjectOpenBalloonOnClick: false,
                clusterize: false
            });
            mapInstance.geoObjects.add(objectManager);

            const objectToAdd = {
                id: coords.join('-'),
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: coords
                },
                options: {
                    ...pin,
                    balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            };

            objectManager.add(objectToAdd);
        }
    });
}