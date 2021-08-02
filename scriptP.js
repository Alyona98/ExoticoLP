
jQuery(function($) {
	"use strict";

//Адаптивность
$('.fa-bars').on('click', function(){
	$('.menu_list').toggleClass('is_open');
	$('.fa-bars').toggleClass('fa-times');
});
//Слайдер
if ($('.home_slider').length) {
	$('.home_slider').slick({
		vertical: true,
		arrows: false,
		dots: true,
	});
}
//.tweet_slider
if ($('.content_slider_tweeter').length) {
	$('.content_slider_tweeter').slick({
		vertical: true,
		appendArrows: $('.tweet_slider .arrows'),
		prevArrow:"<span class=\"top\"><i class=\"fas fa-arrow-alt-circle-up\"></i></span>",
		nextArrow:"<span class=\"down\"><i class=\"fas fa-arrow-alt-circle-down\"></i></span>"
	});
}
//карусель-слайдер магазина
if ($('.shop_carousel').length) {
	$('.shop_carousel').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		appendArrows: $('.shop_slider_navigation'),
		prevArrow:"<div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div>",
		nextArrow:"<div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div>",
		responsive: [
			{
		    	breakpoint: 750,
		    	settings: {
					slidesToShow: 3,
					slidesToScroll: 1
		    	}
		    },
		    {
		    	breakpoint: 600,
		    	settings: {
					slidesToShow: 2,
					slidesToScroll: 1
		    	}
		    },
		    {
		    	breakpoint: 350,
		    	settings: {
					slidesToShow: 1,
					slidesToScroll: 1
		    	}
		    }
  		]
	});
}
//Слайдер авторов блога
if ($('.testimonial_carousel').length) {
	$('.testimonial_carousel').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: $('.testimonial_slider_box'),
		prevArrow:"<div class=\"left_arrow\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
		nextArrow:"<div class=\"right_arrow\"><div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div></div>",
		responsive: [
			{
		    	breakpoint: 850,
		    	settings: {
					slidesToShow: 2,
					slidesToScroll: 1
		    	}
		    },
		    {
		    	breakpoint: 400,
		    	settings: {
					slidesToShow: 1,
					slidesToScroll: 1
		    	}
		    }
  		]
	});

	$('.testimonial_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	  var tabs_container = $('.testimonial_tab_conteiner');
	  tabs_container.find($('.tab-item')).hide();
	  tabs_container.find($('.tab_' + nextSlide)).show();
	});
}

if ($('.open_video').length) {
	$('.open_video').magnificPopup({
		disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
	});
}
//Картинки блога (правый блок)
if ($('.testy_gallery').length) {
	$('.testy_gallery').magnificPopup({
		type: 'image',
          closeOnContentClick: true,
          mainClass: 'mfp-img-mobile',
          image: {
            verticalFit: true
          }
          
	});
}

})