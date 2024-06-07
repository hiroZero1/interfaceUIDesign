document.addEventListener('DOMContentLoaded', function() {
  var progress;
  var indexGallerySlider = new Swiper('.jsIndexGallerySlider', {
    speed: 10000,
    slidesPerView: 1.5,
    loop: true,
    freeMode: {
      enabled: true,
      momentum: false,
      sticky: false
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    on: {
      touchStart: function(event) {
        indexGallerySlider.autoplay.stop();
        indexGallerySlider.setTransition(0);
        progress = indexGallerySlider.progress;
      },
      touchEnd: function(event) {
        progress = indexGallerySlider.progress;
        indexGallerySlider.setProgress(progress)
        indexGallerySlider.setTransition(10000);
        indexGallerySlider.autoplay.start();
      },
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2.5,
      },
    }
  });
});