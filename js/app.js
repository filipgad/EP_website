$(document).ready(function() {

  var hamburgerBtn = $("#hamburger");
  var menu = $("#main_nav");

  menu.hide();

  hamburgerBtn.click(function () {
    menu.slideToggle('slow');
    $(this).toggleClass('open');
  });
});
