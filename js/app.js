$(document).ready(function() {

  var hamburgerBtn = $("#hamburger");
  var menu = $("#main_nav");
  var manuLink = $("#main_nav a");

  if (window.matchMedia('(max-width: 767px)').matches) {
    menu.hide();
    hamburgerBtn.click(function () {
      menu.slideToggle('slow');
      $(this).toggleClass('open');
    });

    manuLink.click(function () {
      menu.hide();
      hamburgerBtn.toggleClass('open');
    });
  }
});
