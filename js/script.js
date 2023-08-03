
const menuBtn = document.getElementsByClassName('menu-button');
const menu = document.getElementsByClassName('menu');
const iBtn = document.getElementsByClassName('fa-bars');

function menuFunction() {
    menu[0].classList.toggle("active");
    iBtn[0].classList.toggle('active');    
}

let timeOut = 3000;
let slideIndex = 0;
let autoOn = true;

autoSlide();

function autoSlide() {
    timeOut = timeOut - 20;

            if (autoOn == true && timeOut < 0) {
                showSlides();
            }
            setTimeout(autoSlide, 20);
}

function prevSlide() {

    timeOut = 2000;

    const slides = document.getElementsByClassName("banner");
    const dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex--;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    if (slideIndex == 0) {
        slideIndex = 3
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlides() {

    timeOut = 2000;

    const slides = document.getElementsByClassName("banner");
    const dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}