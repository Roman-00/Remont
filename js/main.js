$(document).ready(function() {
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 400,
    spaceBetween: 100,
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: !0,
    },
  });

  var feedSwiper = new Swiper('.feedback-container', {
    loop: true,
    speed: 400,
    spaceBetween: 100,
    navigation: false,
    pagination: {
      el: '.steps__swiper-pagination',
      type: 'bullets',
      clickable: !0,
    },
  });

  $(window).on('scroll', function() {
    if($(window).scrollTop()) {
      $('header').addClass('menu-bg');
    } else {
      $('header').removeClass('menu-bg');
    }
  });
});