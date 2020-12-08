$(function() {


	/*Smooth scroll*/
	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();
		
		let elementId = $(this).data('scroll');
		let elemenOffset = $(elementId).offset().top;
		$("html,body").animate({
			scrollTop: elemenOffset +350
		}, 600);
	});


	$("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });

	$(".close").click(function(e) {
			e.preventDefault();
	    $('.thanks_popup').fadeOut();
	});

	$(document).mouseup(function (e){
		var modalctr = $(".thanks_popup");
		var modal = $(".popup_content");
		if (!modal.is(e.target) && modal.has(e.target).length === 0){
			modalctr.fadeOut();
		}
	});
	$('form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",                     /*Метод отправки*/
			url: "send.php",          /*Путь к обработчику*/
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");    /*Очистка формы*/
			$('.thanks_popup').fadeIn();      /*Модальное окно "Спасисбо"*/
			$("form").trigger("reset");
			$('.popup_form').fadeOut();       /*Если отправка формы происходит из модального окна, данная функция закрывает модальное окно самой формы, по ненадобности удалить*/ 
			$('.close').on('click', function(event) {   /*Енопка закрытия модального окна*/
				event.preventDefault();
				$('.thanks_popup').fadeOut();
			});
		});
		return false;
	});

});
