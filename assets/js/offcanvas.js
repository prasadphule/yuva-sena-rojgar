$(function () {
  //icon
  feather.replace();

  //offcanvas
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  });
});