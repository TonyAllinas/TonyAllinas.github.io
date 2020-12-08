$(document).ready(function () {

	/*Табы */
	$(".tabs-panel").on("click", ".tab", function () {
		$(".tabs-panel").find('.active').removeClass('active');


		/*Добавляем класс active*/
		$(this).addClass('active');
		$(".tab-sip").eq($(this).index()).addClass('active');
	});

	$("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });


});

$('.burger-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('burger-btn_active');
  $('.nav-menu__burger').toggleClass('nav-menu__burger_active');
});

$('.burger__link').on('click', function(e) {
  e.preventDefault();
  $('.burger-btn').removeClass('burger-btn_active');
  $('.nav-menu__burger').removeClass('nav-menu__burger_active');
});
$(document).click( function(event){
	if( $(event.target).closest(".burger-btn").length ) 
			return;
    $(".burger-btn").removeClass('burger-btn_active');
	$('.nav-menu__burger').removeClass('nav-menu__burger_active');
      event.stopPropagation();
    });


