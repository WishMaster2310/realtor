$(function() {

	$('.c-slider').slick({
		dots: true,
		infinite: false,
		prevArrow: "<div class='c-slider__arrow c-slider__arrow--prev'></div>",
		nextArrow: "<div class='c-slider__arrow c-slider__arrow--next'></div>",
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			   {
			     breakpoint: 1005,
			     settings: {
			     	 arrows: false
			     }
			   },
			   {
			     breakpoint: 768,
			     settings: {
			       slidesToShow: 1,
			       slidesToScroll: 1,
			       arrows: false
			     }
			   }
			]
	});

	$('.c-media__list').each(function() {
		$(this).slick({
			dots: false,
			infinite: false,
			prevArrow: "<div class='c-media__arrow c-media__arrow--prev'></div>",
			nextArrow: "<div class='c-media__arrow c-media__arrow--next'></div>",
			slidesToShow: 3,
			slidesToScroll: 3,
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 4000,
			responsive: [
			   {
			     breakpoint: 1005,
			     settings: {
			       slidesToShow: 2,
			       slidesToScroll: 2
			     }
			   },
			   {
			     breakpoint: 768,
			     settings: {
			       slidesToShow: 1,
			       slidesToScroll: 1,
			       arrows: false,
			       dots: true
			     }
			   }
			]
		});
	});


	$('.c-feeds__list').slick({
		dots: false,
		infinite: false,
		prevArrow: "<div class='c-feeds__arrow c-feeds__arrow--prev'></div>",
		nextArrow: "<div class='c-feeds__arrow c-feeds__arrow--next'></div>",
		slidesToShow: 3,
		slidesToScroll: 3,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,	
		responsive: [
			   {
			     breakpoint: 1005,
			     settings: {
			       slidesToShow: 2,
			       slidesToScroll: 2
			     }
			   },
			   {
			     breakpoint: 768,
			     settings: {
			       slidesToShow: 1,
			       slidesToScroll: 1,
			       arrows: false,
			       dots: true
			     }
			   }
			]
	});

	function pinSwitcher () {
	//	var link = $('.c-tabs__link[data-type='+ t + ']');
		var inp = $('#switcher0001');
		if (!!inp.prop("checked")) {
			inp.prop("checked", false);
			$('.c-tabs__link[data-type="sell"]').addClass('c-tabs__link--active').siblings().removeClass('c-tabs__link--active');

			$('.c-tabs__unit[data-type="sell"]').stop(true, true).fadeIn(300);
			$('.c-tabs__unit[data-type="buy"]').stop(true, true).fadeOut(300);
		}
		else {
			inp.prop("checked", true);
			$('.c-tabs__link[data-type="buy"]').addClass('c-tabs__link--active').siblings().removeClass('c-tabs__link--active');
			$('.c-tabs__unit[data-type="buy"]').stop(true, true).fadeIn(300);
			$('.c-tabs__unit[data-type="sell"]').stop(true, true).fadeOut(300);
		}
	}

	$('.c-tabs__link').on('click', function() {
			if($(this).hasClass('c-tabs__link--active')) return;

			pinSwitcher()
	});

	$('.js-scrollto').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('html, body').animate({scrollTop: target.offset().top }, 400)
	});

	$('.c-nav__burger').on('click', function() {
		$('body').toggleClass('--nav-open')	
	});

	$('input[type="tel"]').mask('+7 (999) 999-99-99');

	var condScrollFlag = true;

	$(window).on('scroll', function() {
		if (!condScrollFlag) return;
		var wh = $(this).height();
		var target = $('.c-conditions');
		var targetOT = target.offset().top;
		console.log($(this).scrollTop(), wh, targetOT);

		if ($(this).scrollTop() > targetOT - wh) {

			$('.c-conditions__item').each(function(idx, el) {
				
				setTimeout(function() {
					$(el).addClass('c-conditions__item--active')
				}, (idx+1)*400)
			})

			target.addClass('c-conditions--animated');
			condScrollFlag = false;
		}

	});

});