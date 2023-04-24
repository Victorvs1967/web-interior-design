$(document).ready(function () {

  const owl = $('.owl-carousel');

  owl.owlCarousel({
    loop: true,
    margin: 5,
    items: 1,
    smartSpeed: 500,
   });

  $('.header__right_nav-next').click(function () {
    owl.trigger('next.owl.carousel');
  });

  $('.header__right_nav-prev').click(function () {
    owl.trigger('prev.owl.carousel');
  });
});
