$(document).ready(function() {

  var hamburgerBtn = $("#hamburger");
  var menu = $("#main_nav");
  var manuLink = $("#main_nav a");


  menu.hide();

  hamburgerBtn.click(function () {
    menu.slideToggle('slow');
    $(this).toggleClass('open');
  });

  manuLink.click(function () {
    menu.hide();
    hamburgerBtn.toggleClass('open');
  });
});
