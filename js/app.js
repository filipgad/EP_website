$(document).ready(function() {

    var hamburgerBtn = $("#hamburger");
    var menu = $("#main_nav");
    var menuLink = $("#main_nav a");
    var btn = $('#scrrol__btn');

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

    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            btn.fadeIn();
        } else {
            btn.fadeOut();
        }
    });
    
    btn.on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

});
