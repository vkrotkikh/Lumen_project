$(document).ready(function() {

	$('.home-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		arrows: true,
		nextArrow: '<div class="slider-next-arrow"><i class="icon-down-arrow"></i></div>',
		prevArrow: '<div class="slider-prev-arrow"><i class="icon-up-arrow"></i></div>',
	});

});