document.addEventListener("DOMContentLoaded", function() {

	/*Show Animation*/
	$(document).ready(function () {
		var container = $('.works__line'),
		win = $(window),
		windowHeight = win.height();
		win.scroll(function () {
			var scrollPos = $(this).scrollTop(),
			containerPos = container.offset().top;
			if (scrollPos >= containerPos - windowHeight/1) {
				container.addClass('bounceInLeft');
			}    
		});
	});;
	$(document).ready(function () {
		var container = $('.spheres__wrap'),
		win = $(window),
		windowHeight = win.height();
		win.scroll(function () {
			var scrollPos = $(this).scrollTop(),
			containerPos = container.offset().top;
			if (scrollPos >= containerPos - windowHeight/1) {
				container.addClass('bounceInright');
			}    
		});
	});
	$(document).ready(function () {
		var container = $('.title__wrap'),
		win = $(window),
		windowHeight = win.height();
		win.scroll(function () {
			var scrollPos = $(this).scrollTop(),
			containerPos = container.offset().top;
			if (scrollPos >= containerPos - windowHeight/1) {
				container.addClass('in');
			}    
		});
	});
	$(document).ready(function () {
		var container = $('.scale'),
		win = $(window),
		windowHeight = win.height();
		win.scroll(function () {
			var scrollPos = $(this).scrollTop(),
			containerPos = container.offset().top;
			if (scrollPos >= containerPos - windowHeight/1) {
				container.addClass('zoom');
			}    
		});
	});
	$(document).ready(function () {
		var container = $('.form__line'),
		win = $(window),
		windowHeight = win.height();
		win.scroll(function () {
			var scrollPos = $(this).scrollTop(),
			containerPos = container.offset().top;
			if (scrollPos >= containerPos - windowHeight/1) {
				container.addClass('in');
			}    
		});
	});
	/*End*/

	/*Slick*/
	$('.main__slider').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000
	});
	$('.image__slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500
	});



	/*End*/

	/*Modals*/
	$('.show-callback').click(function(e){
		e.preventDefault();
		$('#callback').fadeIn();
		$('.works__modals').fadeOut();
	})
	$('.close').click(function(e){
		e.preventDefault();
		$('#callback').fadeOut();
		$('.works__modals').fadeOut();
		$('.iframe1').attr('src', $('.iframe1').attr('src'));
		$('.iframe2').attr('src', $('.iframe2').attr('src'));
		$('.iframe3').attr('src', $('.iframe3').attr('src'));
		$('.iframe4').attr('src', $('.iframe4').attr('src'));
		$('.iframe5').attr('src', $('.iframe5').attr('src'));
		$('.iframe6').attr('src', $('.iframe6').attr('src'));
		$('.iframe7').attr('src', $('.iframe7').attr('src'));
		$('.iframe8').attr('src', $('.iframe8').attr('src'));
		$('.iframe10').attr('src', $('.iframe10').attr('src'));
		$('.iframe11').attr('src', $('.iframe11').attr('src'));
		$('.iframe12').attr('src', $('.iframe12').attr('src'));
		$('.iframe13').attr('src', $('.iframe13').attr('src'));
		$('.iframe14').attr('src', $('.iframe14').attr('src'));
		$('.iframe15').attr('src', $('.iframe15').attr('src'));
		$('.iframe16').attr('src', $('.iframe16').attr('src'));
		$('.iframe17').attr('src', $('.iframe17').attr('src'));
		$('.iframe18').attr('src', $('.iframe18').attr('src'));
		$('.iframe19').attr('src', $('.iframe19').attr('src'));
		$('.iframe20').attr('src', $('.iframe20').attr('src'));
		$('.iframe21').attr('src', $('.iframe21').attr('src'));
		$('.iframe22').attr('src', $('.iframe22').attr('src'));
		$('.iframe23').attr('src', $('.iframe23').attr('src'));
	})

	$('#show-work1').click(function(e){
		e.preventDefault();
		$('#work1').fadeIn();
	});

	$('#show-work2').click(function(e){
		e.preventDefault();
		$('#work2').fadeIn();
	});
	$('#show-work3').click(function(e){
		e.preventDefault();
		$('#work3').fadeIn();
	});

	$('#show-work4').click(function(e){
		e.preventDefault();
		$('#work4').fadeIn();
	});

	$('#show-work5').click(function(e){
		e.preventDefault();
		$('#work5').fadeIn();
	});

	$('#show-work6').click(function(e){
		e.preventDefault();
		$('#work6').fadeIn();
	});

	$('#show-work7').click(function(e){
		e.preventDefault();
		$('#work7').fadeIn();
	});

	$('#show-work8').click(function(e){
		e.preventDefault();
		$('#work8').fadeIn();
	});

	$('#show-work9').click(function(e){
		e.preventDefault();
		$('#work4').fadeIn();
	});
	$('#show-work10').click(function(e){
		e.preventDefault();
		$('#work10').fadeIn();
	});
	$('#show-work11').click(function(e){
		e.preventDefault();
		$('#work11').fadeIn();
	});
	$('#show-work12').click(function(e){
		e.preventDefault();
		$('#work12').fadeIn();
	});
	$('#show-work13').click(function(e){
		e.preventDefault();
		$('#work13').fadeIn();
	});
	$('#show-work14').click(function(e){
		e.preventDefault();
		$('#work14').fadeIn();
	});
	$('#show-work15').click(function(e){
		e.preventDefault();
		$('#work15').fadeIn();
	});
	$('#show-work16').click(function(e){
		e.preventDefault();
		$('#work16').fadeIn();
	});
	$('#show-work17').click(function(e){
		e.preventDefault();
		$('#work17').fadeIn();
	});
	$('#show-work18').click(function(e){
		e.preventDefault();
		$('#work18').fadeIn();
	});
	$('#show-work19').click(function(e){
		e.preventDefault();
		$('#work19').fadeIn();
	});
	$('#show-work20').click(function(e){
		e.preventDefault();
		$('#work20').fadeIn();
	});
	$('#show-work21').click(function(e){
		e.preventDefault();
		$('#work21').fadeIn();
	});
	$('#show-work22').click(function(e){
		e.preventDefault();
		$('#work22').fadeIn();
	});



});
