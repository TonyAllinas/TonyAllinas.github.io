$(function() {

/*Navigation*/
	$('#submenu1').click(function(e){
		e.preventDefault();
		$('.submenu').toggleClass('active');
		$('#submenu1').toggleClass('active');
		$('.nav-wrap').toggleClass('active');
	});

	$('.burger_btn').click(function(e){
		e.preventDefault();
		$('.burger-wrap').toggleClass('active');
		$('.line').toggleClass('active');
	});


	$(document).click( function(event){
			if( $(event.target).closest(".burger_btn").length ) 
	  			return;
		    $(".burger-wrap").removeClass('active');
		      event.stopPropagation();
		    });
	
	$('.search_btn').click(function(e){
		e.preventDefault();
		$('.search_input ').toggleClass('active');
		$('.search ').toggleClass('active');
		$('label ').toggleClass('active');
	});
	
	$('label').click(function(){
		$('.search_input ').removeClass('active');
		$('.search ').removeClass('active');
		$('label ').removeClass('active');
	});

	$(document).click( function(event){
			if( $(event.target).closest(".search").length ) 
	  			return;
		    $(".search_input").removeClass('active');
		    $(".search").removeClass('active');
				$('label ').removeClass('active');
		      event.stopPropagation();
		    });
	/*================================================*/

	$('.slick-slider').slick({
		arrows: false,
		autoplay: true,
		dots: true
	});

});
