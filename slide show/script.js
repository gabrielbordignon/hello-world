var slide = document.querySelector('.slideshow');
var images = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg'
];
var time = 2000; 
var count = 0;

function moveSlideShow(){
    slide.src = images[count];

    count = (count + 1) % images.length;
    setTimeout(moveSlideShow, time);
}

window.onload = moveSlideShow;
