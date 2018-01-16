$(document).ready(function() {

  var hamburgerBtn = $("#hamburger");
  var menu = $("#main_nav");
  var menuLink = $("#main_nav a");

  if (window.matchMedia('(max-width: 767px)').matches) {
    menu.hide();
    hamburgerBtn.on("click", function () {
      menu.slideToggle('slow');
      $(this).toggleClass('open');
    });

    menuLink.on("click", function () {
      menu.hide();
      hamburgerBtn.toggleClass('open');
    });
  }

  menuLink.on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000);
	});

});
