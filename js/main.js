const swiper = new Swiper('.slider__main', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 1500,
    },
    slidesPerView: 3,
    spaceBetween: 25,
});
