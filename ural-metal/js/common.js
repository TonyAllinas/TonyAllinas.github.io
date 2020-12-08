$(function() {

	$('.callme').on('click', function(event){
		event.preventDefault();
		$('.popup').fadeIn();
	});

	$('.popup_bg').on('click', function(event){
		event.preventDefault();
		$('.popup').fadeOut();
	});


	/*Burger Menu*/
	$('.menu__btn').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('menu__btn_active');
		$('.nav_burger').toggleClass('nav_burger_active');
	});

	$(".link_close").click(function() {	
		$('.menu__btn').removeClass('menu__btn_active');	
		$('.nav_burger').removeClass('nav_burger_active');
	});

	$("li").click(function() {	
		$('.menu__btn').removeClass('menu__btn_active');	
		$('.nav_burger').removeClass('nav_burger_active');
	});

	$("ul").click(function() {	
		$('.menu__btn').removeClass('menu__btn_active');	
		$('.nav_burger').removeClass('nav_burger_active');
	});

});
