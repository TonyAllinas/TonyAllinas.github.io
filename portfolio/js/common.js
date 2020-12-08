$(function() {

	/*Preloader*/
	document.body.onload = function() {
		setTimeout(function() {
			var preloader = document.getElementById('page-preloader');
			if( !preloader.classList.contains('done') )
			{
				preloader.classList.add('done');
			}
		}, 700);
	}

	/*Active Menu*/
	$('.nav').on('click', function() {
		$('.nav_btn').toggleClass('nav_btn_active');
		$('.nav').toggleClass('nav_active');
		$('.social').toggleClass('nav_social__active');
	});
	$(document).click( function(event){
		if( $(event.target).closest(".nav").length ) 
  			return;
	    $(".nav").removeClass('nav_active');
		$('.nav_btn').removeClass('nav_btn_active');
	    $('.social').removeClass('nav_social__active');
	      event.stopPropagation();
	    });


	/*Smooth scroll*/
	$('[data-scroll]').on('click', function(event) {
	    event.preventDefault();
	    
	    let elementId = $(this).data('scroll');
	    let elemenOffset = $(elementId).offset().top;
	    $("html,body").animate({
	       scrollTop: elemenOffset
	    }, 500);
	});

});
