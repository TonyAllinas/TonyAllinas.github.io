$(function() {


/*Order*/
$('.call_popup').click(function(e){
	  e.preventDefault();
	  $('.popup_order').fadeIn(100);
	});
	$('.popup_close').click(function(e){
   e.preventDefault();
   $('.popup_order').fadeOut(100);
	});

/*Callback*/
$('.callback').click(function(e){
	  e.preventDefault();
	  $('.popup_callback').fadeIn(100);
	});
	$('.popup_close').click(function(e){
   e.preventDefault();
   $('.popup_callback').fadeOut(100);
	});

/*Video*/

$('.popup-youtube, .popup-youtube2').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

/*More Details*/
$('.more_details').click(function(e){
	  e.preventDefault();
	  $('.popup_more__details').fadeIn(100);
	});
	$('.popup_close').click(function(e){
   e.preventDefault();
   $('.popup_more__details').fadeOut(100);
	});

	/*Ajax thanks*/
		$('.order_form').submit(function(event) {
	  event.preventDefault();
	  $.ajax({
	    type: "post",                     /*Метод отправки*/
	    url: "order.php",        /*Путь к обработчику*/
	    data: $(this).serialize()
	  }).done(function() {
	    $(this).find("input").val("");    /*Очистка формы*/
	    $('.thanks_popup').fadeIn();      /*Модальное окно "Спасисбо"*/
	    $(".order_form").trigger("reset");
	    $('.popup_order').fadeOut();       /*Если отправка формы происходит из модального окна, данная функция закрывает модальное окно самой формы, по ненадобности удалить*/ 
	    $('.popup_close').on('click', function(event) {   /*Кнопка закрытия модального окна*/
	        event.preventDefault();
	        $('.thanks_popup').fadeOut();
	      });
	  });
	  return false;
	});
		
	/*Ajax thanks*/
		$('.callback_form').submit(function(event) {
	  event.preventDefault();
	  $.ajax({
	    type: "post",                     /*Метод отправки*/
	    url: "mail.php",        /*Путь к обработчику*/
	    data: $(this).serialize()
	  }).done(function() {
	    $(this).find("input").val("");    /*Очистка формы*/
	    $('.thanks_popup').fadeIn();      /*Модальное окно "Спасисбо"*/
	    $(".callback_form").trigger("reset");
	    $('.popup_callback').fadeOut();       /*Если отправка формы происходит из модального окна, данная функция закрывает модальное окно самой формы, по ненадобности удалить*/ 
	    $('.popup_close').on('click', function(event) {   /*Кнопка закрытия модального окна*/
	        event.preventDefault();
	        $('.thanks_popup').fadeOut();
	      });
	  });
	  return false;
	});
		
	/*Ajax thanks*/
		$('.more').submit(function(event) {
	  event.preventDefault();
	  $.ajax({
	    type: "post",                     /*Метод отправки*/
	    url: "mail.php",        /*Путь к обработчику*/
	    data: $(this).serialize()
	  }).done(function() {
	    $(this).find("input").val("");    /*Очистка формы*/
	    $('.thanks_popup').fadeIn();      /*Модальное окно "Спасисбо"*/
	    $(".more").trigger("reset");
	    $('.popup_more__details').fadeOut();       /*Если отправка формы происходит из модального окна, данная функция закрывает модальное окно самой формы, по ненадобности удалить*/ 
	    $('.popup_close').on('click', function(event) {   /*Кнопка закрытия модального окна*/
	        event.preventDefault();
	        $('.thanks_popup').fadeOut();
	      });
	  });
	  return false;
	});


	/*Slider*/
	$('.next_sity_slider').slick();

});
