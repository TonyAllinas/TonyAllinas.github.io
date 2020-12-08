/*Owl Carousel*/
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    items:3,
	    loop:true,
	    autoplay:true,
	    autoplayTimeout:7000,
	    autoplayHoverPause:true,
	    responsive:{
	            1100:{
	                items:3
	            },
	            992:{
	                items:2
	            },
	            320:{
	                items:1
	            }
	        }
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[7000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})

	/*--------END-------*/	



	/*Slick Slider*/
	$('.service__block_slider').slick({
		dots: true,
	});

	/*Magnific Popup*/
	$('.popup_galery').magnificPopup({
	  type: 'image'
	});

	/*Якорная Прокрутка*/
	$(function(){
        $("a[href^='#']").click(function(){
          var _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
        });
	});

	/*--------END-------*/

	/*Burger Menu*/
	$('.menu__btn').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('menu__btn_active');
		$('.nav__burger').toggleClass('nav__burger_active');
	});

	$(".link_close").click(function() {	
		$('.menu__btn').removeClass('menu__btn_active');	
		$('.nav__burger').removeClass('nav__burger_active');
	});

	/*--------END-------*/



	/*Модальные окно записи*/
	$('.popup__visit').on('click', function (e) {
		e.preventDefault();
		$('.popup').fadeIn(100);
	})
	$('.popup__content_close').on('click', function (e) {
		e.preventDefault();
		$('.popup').fadeOut(100);
	})

/*Ajax отправка формы*/
	$('form').submit(function(event) {
	      event.preventDefault();
	      $.ajax({
	        type: "POST",                     /*Метод отправки*/
	        url: "send.php",          /*Путь к обработчику*/
	        data: $(this).serialize()
	      }).done(function() {
	        $(this).find("input").val("");    /*Очистка формы*/
	        $('.popup__thanks').fadeIn();      /*Модальное окно "Спасисбо"*/
	        $("form").trigger("reset");
	        $('.popup').fadeOut();       /*Если отправка формы происходит из модального окна, данная функция закрывает модальное окно самой формы, по ненадобности удалить*/ 
	        $('.popup__content_close').on('click', function(event) {   /*Енопка закрытия модального окна*/
	            event.preventDefault();
	            $('.popup__thanks').fadeOut();
	          });
	      });
	      return false;
	    });

		/*--------END-------*/

	/*Модальное окно Заказать звонок*/
	$('.contact__wrap-btn').on('click', function (e) {
		e.preventDefault();
		$('.popup__callback').fadeIn(100);
	})
	$('.popup__content_close').on('click', function (e) {
		e.preventDefault();
		$('.popup__callback').fadeOut(100);
	})

/*Ajax отправка формы*/
	$('form').submit(function(event) {
	      event.preventDefault();
	      $.ajax({
	        type: "POST",                     /*Метод отправки*/
	        url: "call.php",          /*Путь к обработчику*/
	        data: $(this).serialize()
	      }).done(function() {
	        $(this).find("input").val("");    /*Очистка формы*/
	        $('.popup__thanks').fadeIn();      /*Модальное окно "Спасисбо"*/
	        $("form").trigger("reset");
	        $('.popup__callback').fadeOut();       /*Если отправка формы происходит из модального окна, данная функция закрывает модальное окно самой формы, по ненадобности удалить*/ 
	        $('.popup__content_close').on('click', function(event) {   /*Енопка закрытия модального окна*/
	            event.preventDefault();
	            $('.popup__thanks').fadeOut();
	          });
	      });
	      return false;
	    });

	/*--------END-------*/



	// MaskedInput
	$(document).ready(function() {
	   $("#phone").mask("+7 (999) 999-99-99");
	 });	
	$(document).ready(function() {
	   $("#phone2").mask("+7 (999) 999-99-99");
	 });

	/*--------END-------*/