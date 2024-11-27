var  currentIndex = 0;
var slides = document.querySelectorAll('.slide');
var  totalSlides = slides.length;

function showSlide(index) {
    // Ensure the index wraps around
    currentIndex = (index + totalSlides) % totalSlides;
    var offset = -currentIndex * 100; // Calculate the offset
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Automatically change slides every 3 seconds
setInterval(nextSlide, 3000);