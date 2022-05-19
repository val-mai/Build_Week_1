const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');
const slide4 = document.getElementById('slide4');
const slide5 = document.getElementById('slide5');
const slide6 = document.getElementById('slide6');
const slide7 = document.getElementById('slide7');
const slide8 = document.getElementById('slide8');

let carosello = ['assets/images/slider/slider-img-1.jpg', 'assets/images/slider/slider-img-2.jpg',
    'assets/images/slider/slider-img-3.jpg', 'assets/images/slider/slider-img-4.jpg', 'assets/images/slider/slider-img-1.jpg',
    'assets/images/slider/slider-img-2.jpg', 'assets/images/slider/slider-img-3.jpg', 'assets/images/slider/slider-img-4.jpg']

slide1.src = carosello[0];
slide2.src = carosello[1];
slide3.src = carosello[2];
slide4.src = carosello[3];
slide5.src = carosello[0];
slide6.src = carosello[1];
slide7.src = carosello[2];
slide8.src = carosello[3];

let posizione = 0;

function nextSlide() {
    if (posizione <= 4) {
        slide1.src = carosello[posizione + 1];
        slide2.src = carosello[posizione + 2];
        slide3.src = carosello[posizione + 3];
        slide4.src = carosello[posizione];
        slide5.src = carosello[posizione + 1];
        slide6.src = carosello[posizione + 2];
        slide7.src = carosello[posizione + 3];
        slide8.src = carosello[posizione];
        posizione = ++posizione;
    } else {
        posizione = 0;
        slide1.src = carosello[posizione];
        slide2.src = carosello[posizione + 1];
        slide3.src = carosello[posizione + 2];
        slide4.src = carosello[posizione + 3];
        slide5.src = carosello[posizione + 4];
        slide6.src = carosello[posizione + 5];
        slide7.src = carosello[posizione + 6];
        slide8.src = carosello[posizione + 7];
        return;
    }
}