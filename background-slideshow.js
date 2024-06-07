document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.background-slideshow .slide');
    const totalSlides = slides.length;
  
    function showNextSlide() {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % totalSlides;
      slides[currentIndex].classList.add('active');
    }
  
    slides[currentIndex].classList.add('active');
    setInterval(showNextSlide, 5000); // Change slide every 5 seconds
  });
  