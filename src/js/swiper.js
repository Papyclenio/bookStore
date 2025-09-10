// Inicializando o Swiper
const swiper = new Swiper(".card-book", {
    effect: "coverflow",
    loop: true,

    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
    delay: 3000,
  },
});