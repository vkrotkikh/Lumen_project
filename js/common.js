$(document).ready(function() {

	// Scroll header

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 10) {
			$('.header').addClass('-scroll');
		} else {
			$('.header').removeClass('-scroll');
		}
	});


	// Custom navbar

	$('.navbar-toggler.-custom').click(function(){
		$(this).toggleClass('-show-menu');
		$('.header').toggleClass('-show-menu');
		$('.language').toggleClass('-show-menu');
	});


	// Home slider


	$('.home-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		arrows: true,
		nextArrow: '<div class="slider-next-arrow"><i class="icon-down-arrow"></i></div>',
		prevArrow: '<div class="slider-prev-arrow"><i class="icon-up-arrow"></i></div>',
	});


	// Open artiset about information

	if($('.-JS_open_acc_about').length){

		var scrollTopToBodySection = $('.account-body').offset().top;

		$('.account-about').css('top', scrollTopToBodySection +'px');


		$('.-JS_open_acc_about').on('click' , function(){
			$(this).parents('.account-about').toggleClass('-open');
		});

	}

});