$(function () {
  console.log('Hello Bootstrap5');
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  },
  centeredSlides: true,
  slidesPerView: "auto",
  breakpoints: {
    992: {
      slidesPerView: 3,
    }
  }
});