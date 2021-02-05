(function() {
  const slider = new Swiper('.clients__slider', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    breakpoints: {
      992: {
        spaceBetween: 120,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: (number) => '0' + number,
      formatFractionTotal: (number) => '0' + number,
    },
    scrollbar: {
      el: '.swiper-scrollbar'
    },
  })
})();
