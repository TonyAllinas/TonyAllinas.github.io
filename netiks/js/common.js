$(function() {
	/*Popup Form*/ 
	$(".call_form").click(function(e) {
			e.preventDefault();
	    $('.popup_form').fadeIn();
	}); 
	$(".close_popup").click(function(e) {
			e.preventDefault();
	    $('.popup_form').fadeOut();
	});

	$(document).mouseup(function (e){
		var modalctr = $(".popup_form");
		var modal = $(".popup_content");
		if (!modal.is(e.target) && modal.has(e.target).length === 0){
			modalctr.fadeOut();
		}
	});
	$(document).mouseup(function (e){
		var modalctr = $(".thanks_popup");
		var modal = $(".popup_content");
		if (!modal.is(e.target) && modal.has(e.target).length === 0){
			modalctr.fadeOut();
		}
	});






	/*Maskedinput*/
	$(function() {
	    $(".tel").mask("+9 (999) 999-9999");
	});

	/*WOW JS*/
	new WOW().init();


	/*Accorfion*/
	$('.panel_title').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('in').next().slideToggle(200);
		$('.panel_title').not(this).removeClass('in').next().slideUp(200);
	});

	$('.panel2_title').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('in').next().slideToggle(200);
		$('.panel2_title').not(this).removeClass('in').next().slideUp(200);
	});
	/*------------------------------------------------------------------------*/

	/*fixed hedear*/
	$(window).on("scroll", function () {
	    var scrolled = $(this).scrollTop();
	    if( scrolled > 150 ) {
	        $('.top_line').addClass('scroll');
	    }   
	    if( scrolled <= 150 ) {     
	        $('.top_line').removeClass('scroll');
	    }
	});
	$(window).on("scroll", function () {
	    var scrolled = $(this).scrollTop();
	    if( scrolled > 150 ) {
	        $('.top_line').addClass('active');
	    }   
	    if( scrolled <= 150 ) {     
	        $('.top_line').removeClass('active');
	    }
	});
	/*-----------------------------------*/

	/*Slick Slider*/
	$('.function_slider').slick({
	  dots: true,
	  infinite: false,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: true,
	  lazyLoad: 'ondemand',
	  responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	$('.experience_slider').slick({
	  dots: true,
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  dots: true,
	  lazyLoad: 'ondemand',
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	$('.examples_slider').slick({
	  dots: true,
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  lazyLoad: 'ondemand'
	});
	/*-----------------------------------*/

	/*Audio*/
	$( 'audio' ).audioPlayer({
		classPrefix: 'audioplayer',
		strPlay: '',
		strPause: '',
		strVolume: 'Volume'
	});
	$('.audio_element-1 .audioplayer-playpause').click(function(){
		$('.audio_element-1 .audioplayer-bar-played').addClass('active');
	});
	$('.audio_element-2 .audioplayer-playpause').click(function(){
		$('.audio_element-2 .audioplayer-bar-played').addClass('active');
	});
	$('.audio_element-3 .audioplayer-playpause').click(function(){
		$('.audio_element-3 .audioplayer-bar-played').addClass('active');
	});
	/*----------------------------------------------------------------------*/

	/*Popup Video*/
	$('.top-video').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});

	$('.play_youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});

	$('.examples_item__video').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});


	/*Ajax Form*/ 
	$('.form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",                     /*Метод отправки*/
			url: "send.php",          /*Путь к обработчику*/
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");    /*Очистка формы*/
			$('.thanks_popup').fadeIn();      /*Модальное окно "Спасисбо"*/
			$(".form").trigger("reset");
			$('.popup_form').fadeOut();       /*Если отправка формы происходит из модального окна, данная функция закрывает модальное окно самой формы, по ненадобности удалить*/ 
			$('.close_popup').on('click', function(event) {   /*Енопка закрытия модального окна*/
				event.preventDefault();
				$('.thanks_popup').fadeOut();
			});
		});
		return false;
	});

	$('.steps_wrap_form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",                     /*Метод отправки*/
			url: "steps.php",          /*Путь к обработчику*/
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");    /*Очистка формы*/
			$('.thanks_popup').fadeIn();      /*Модальное окно "Спасисбо"*/
			$(".steps_wrap_form").trigger("reset");       /*Если отправка формы происходит из модального окна, данная функция закрывает модальное окно самой формы, по ненадобности удалить*/ 
			$('.close_popup').on('click', function(event) {   /*Енопка закрытия модального окна*/
				event.preventDefault();
				$('.thanks_popup').fadeOut();
			});
		});
		return false;
	});

	/*--------------------------------------------*/

	/*LazyLoad*/

	var lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy"
		// ... more custom settings?
	});

	

});
