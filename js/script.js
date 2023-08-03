
const menuBtn = document.getElementsByClassName('menu-button');
const menu = document.getElementsByClassName('menu');
const iBtn = document.getElementsByClassName('fa-bars');
const danger = document.getElementsByClassName('danger');
const success = document.getElementsByClassName('success');

function menuFunction() {
    menu[0].classList.toggle("active");
    iBtn[0].classList.toggle('active');    
}

function validate() {
    const formName = document.forms["myForm"]["name"].value;
    const formEmail = document.forms["myForm"]["email"].value;
    const formInterest = document.forms["myForm"]["option"].value;

    if(formName == "" || formEmail == ""|| formInterest == "" || formInterest == "default") {
        alert("Please fill the form!")
    } else if(!formEmail.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
        alert("Please provide a valid email!")
    } else {
        console.log(`Name: ${formName}\nEmail: ${formEmail}\nInterested in: ${formInterest}`)
    }
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