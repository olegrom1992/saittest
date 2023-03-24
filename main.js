const swiper = new Swiper('.swiper', {
  
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        loopedSlides: 1,
        spaceBetween: 20
      },
      600: {
        slidesPerView: 2,
        loopedSlides: 2,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 3,
        loopedSlides: 3,
        spaceBetween: 15
      }
    }
  });