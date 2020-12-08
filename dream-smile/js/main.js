$('.send').click(function(e){
            e.preventDefault();
            $('.thanks_popup').fadeIn(50);
        });
$('.close').click(function(e){
    e.preventDefault();
    $('.thanks_popup').fadeOut(50);
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