$(document).ready(function() {

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 10) {
			$('.header').addClass('-scroll');
		} else {
			$('.header').removeClass('-scroll');
		}
	});

	$('.navbar-toggler.-custom').click(function(){
		$(this).toggleClass('-show-menu');
		$('.header').toggleClass('-show-menu');
		$('.language').toggleClass('-show-menu');
	});

	$('.custom-scroll').mCustomScrollbar({
		scrollbarPosition:"outside",
		scrollButtons:{ enable: true }
	});

	$('.home-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		arrows: true,
		nextArrow: '<div class="slider-next-arrow"><i class="icon-down-arrow"></i></div>',
		prevArrow: '<div class="slider-prev-arrow"><i class="icon-up-arrow"></i></div>',
	});

});