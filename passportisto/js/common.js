$(function() {

	/*change_lang*/
	$('.lang_item').click(function(){
		$('.lang_change').toggleClass('active');
		$('.lang_item__base').toggleClass('active');
	})
	$(document).click( function(event){
		if( $(event.target).closest(".lang_item").length ) 
			return;
		$(".lang_change").removeClass('active');
		$(".lang_change").removeClass('active');
		event.stopPropagation();
	});

	/*Modal*/
	$('.modal_form').click( function(event) {
		event.preventDefault();
		$('.popup').fadeIn();
	});
	$('.close').click( function(event) {
		event.preventDefault();
		$('.popup').fadeOut();
	});
	/*Ajax*/
	$('.form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",                     /*Метод отправки*/
			url: "send.php",          /*Путь к обработчику*/
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");    /*Очистка формы*/
			$('.popup_thanks').fadeIn();      /*Модальное окно "Спасисбо"*/
			$(".form").trigger("reset");
			$('.popup').fadeOut();       /*Если отправка формы происходит из модального окна, данная функция закрывает модальное окно самой формы, по ненадобности удалить*/ 
			$('.close').on('click', function(event) {   /*Кнопка закрытия модального окна*/
				event.preventDefault();
				$('.popup_thanks').fadeOut();
			});
		});
		return false;
	});

	$('.modal').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",                     /*Метод отправки*/
			url: "callback.php",          /*Путь к обработчику*/
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");    /*Очистка формы*/
			$('.popup_thanks').fadeIn();      /*Модальное окно "Спасисбо"*/
			$(".modal").trigger("reset");
			$('.popup').fadeOut();       /*Если отправка формы происходит из модального окна, данная функция закрывает модальное окно самой формы, по ненадобности удалить*/ 
			$('.close').on('click', function(event) {   /*Кнопка закрытия модального окна*/
				event.preventDefault();
				$('.popup_thanks').fadeOut();
			});
		});
		return false;
	});


	/*Video*/
	$('.video').magnificPopup({
			disableOn: 300,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});

	
	/*Active Menu*/
		// $('.burger').on('click', function() {
		// 	$('.nav').toggleClass('nav_active');
		// });
		// $(document).click( function(event){
		// 	if( $(event.target).closest(".burger").length ) 
	 //  			return;
		//     $(".nav").removeClass('nav_active');
		//       event.stopPropagation();
		//     });

});
