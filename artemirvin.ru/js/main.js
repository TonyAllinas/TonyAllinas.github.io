
//Slick Slider
$('.slider').slick({
	    dots: true,
	    infinite: true,
	    slidesToShow: 3,
	    slidesToScroll: 3,
	    responsive: [
	      {
	        breakpoint: 1200,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 2,
	          infinite: true,
	          dots: true
	        }
	      },
	      {
	        breakpoint: 769,
	        settings: {
	          dots: false,
	          slidesToShow: 1,
	          slidesToScroll: 1
	        }
	      },
	    ]
	  });

