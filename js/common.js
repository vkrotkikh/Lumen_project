$(document).ready(function() {

	// Scroll header
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 10) {
			$('.header').addClass('-scroll');
		} else {
			$('.header').removeClass('-scroll');
		}
	});

	// Scroll to Top
	$('.up-btn').on('click', function() {
		$('html, body').animate({ scrollTop: 0 }, 1000);
		return false;
	});

	// Custom navbar
	$('.navbar-toggler.-custom').click(function(){
		$(this).toggleClass('-show-menu');
		$('.header').toggleClass('-show-menu');
		$('.language').toggleClass('-show-menu');
	});

	// Custom Scroll
	if($('.custom-scroll').length){
		$('.custom-scroll').mCustomScrollbar({
			scrollbarPosition:"outside",
			scrollButtons:{ enable: true }
		});
	}

	// Home slider
	if($('.home-slider').length){
		$('.home-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			vertical: true,
			arrows: true,
			nextArrow: '<div class="slider-next-arrow"><i class="icon-down-arrow"></i></div>',
			prevArrow: '<div class="slider-prev-arrow"><i class="icon-up-arrow"></i></div>',
		});
	}

	// Open artiset about information
	if($('.-JS_open_acc_about').length){
		var scrollTopToBodySection = $('.account-body').offset().top;
		$('.account-about').css('top', scrollTopToBodySection +'px');
		$('.-JS_open_acc_about').on('click' , function(){
			$(this).parents('.account-about').toggleClass('-open');
		});
	}

});