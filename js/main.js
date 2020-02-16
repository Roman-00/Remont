$(document).ready(function() {
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
});