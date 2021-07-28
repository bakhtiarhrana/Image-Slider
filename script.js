let slides = document.querySelectorAll('.slide-container');
let index = 0;

// Next Function

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

// Previous Function

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// autoPlay Slides change every 3 seconds

setInterval(next, 3000);