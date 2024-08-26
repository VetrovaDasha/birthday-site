javascript
//Script to handle click on arrow buttons
let slideIndex = 0; //start from the first slide
let slides = document.getElementsByClassName('event');  //get all slides

slides[slideIndex].style.display = "block";  //show the first slide by default

function nextSlide() {
    slides[slideIndex].style.display = "none"; //hide the current slide
    slideIndex++; //move to the next slide
    if (slideIndex >= slides.length) { //if it's the last slide then loop back to the first
        slideIndex = 0;
    }
    slides[slideIndex].style.display = "block"; //show the new slide
}

function prevSlide() {
    slides[slideIndex].style.display = "none"; //hide the current slide
    slideIndex--; //move to the previous slide
    if (slideIndex < 0) { //if it's the first slide then loop back to the last
        slideIndex = slides.length - 1;
    }
    slides[slideIndex].style.display = "block"; //show the new slide
}
