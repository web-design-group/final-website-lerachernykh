$(document).ready(function () {
  if ($.fn.magnificPopup) {
    $('.popup-youtube').magnificPopup({
      type: 'iframe'
    });
  }

  $('.burger-menu').on('click', function () {
    $('.header__nav').slideToggle();
  });

  $('#footer-subscribe').on('click', function (e) {
    e.preventDefault();
    $('.subscribe-success').css({display: 'flex', opacity: 0}).animate({opacity: 1}, 300);
  });

  $('.success-close').on('click', function () {
    $('.subscribe-success').fadeOut(300);
  });
});
