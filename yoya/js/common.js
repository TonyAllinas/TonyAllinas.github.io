function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
		r(function(){
		    if (!document.getElementsByClassName) {
		        // Поддержка IE8
		        var getElementsByClassName = function(node, classname) {
		            var a = [];
		            var re = new RegExp('(^| )'+classname+'( |$)');
		            var els = node.getElementsByTagName("*");
		            for(var i=0,j=els.length; i<j; i++)
		                if(re.test(els[i].className))a.push(els[i]);
		            return a;
		        }
		        var videos = getElementsByClassName(document.body,"youtube");
		    } else {
		        var videos = document.getElementsByClassName("youtube");
		    }
		 
		    var nb_videos = videos.length;
		    for (var i=0; i<nb_videos; i++) {
		        // Находим постер для видео, зная ID нашего видео
		        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
		 
		        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
		        var play = document.createElement("div");
		        play.setAttribute("class","play");
		        videos[i].appendChild(play);
		 
		        videos[i].onclick = function() {
		            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
		            var iframe = document.createElement("iframe");
		            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
		            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
		            iframe.setAttribute("src",iframe_url);
		            iframe.setAttribute("frameborder",'0');
		 
		            // Высота и ширина iFrame будет как у элемента-родителя
		            iframe.style.width  = this.style.width;
		            iframe.style.height = this.style.height;
		 
		            // Заменяем начальное изображение (постер) на iFrame
		            this.parentNode.replaceChild(iframe, this);
		        }
		    }
		});


$(function() {

	$('.functional_video').on('click', function() {
		$(".functional_video").addClass("bg-none");
		$(".video_none_2").addClass("video_block");

	});
	
	$('.address_video').on('click', function() {
		$("#bg1").addClass("bg-none");
		$(".video_none").addClass("video_block");

	});

	$('.open_btn').on('click', function(event) {
			event.preventDefault();
			$('.open_content').slideToggle('slow');
		});
	
	
	
	//Popup_gallery
	$('.gallery_wrap').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});
	//end--------------------
	
	//Main_slick-slifer
	$('.main_slider').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});


	
	//Slick_slider
	$('.feedback_slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 5,
		centerMode: true,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	//end---------------------
	


});
