$(function () {
  console.log('Hello Bootstrap5');
});

const swiper = new Swiper('.swiper1', {
  // Optional parameters
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 6000,
  },
  grabCursor: true,
  pauseOnMouseEnter: true,
  centeredSlides: true,
  slidesPerView: "auto",
  breakpoints: {
    992: {
      slidesPerView: 3,
    }
  }
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: 2,
  slidesPerGroup: 2,
  autoHeight: true,
  breakpoints: {
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    }
  }
});