$(document).ready(function(){


$('ul.tabs').on('click', 'li:not(.current)', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('section').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
	});
if($('select').hasClass('selectBlock')){
	$('.selectBlock').sSelect({
		defaultText : 'Пожалуйста, выберите из списка',
		containerClass: 'icon-down-open-mini'
	});
	}
	if($('div').hasClass('slider') && document.body.clientWidth > '700'){
	$('.slider').slick({
 dots: false,
  slidesToShow: 1
  
});
}
if($('div').hasClass('brends-slider')){
	$('.brends-slider').slick({
 dots: false,
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        
        slidesToShow: 5
      }
    },
    {
      breakpoint: 900,
      settings: {
        
        slidesToShow: 4
      }
    }
    ,
    {
      breakpoint: 700,
      settings: {
        
        slidesToShow: 3
      }
    }
    ,
    {
      breakpoint: 400,
      settings: {
        
        slidesToShow: 2
      }
    }
  ]
});
}
if($('div').hasClass('goods-card-slider')){
	$('.goods-card-slider').slick({
 dots: false,
  slidesToShow: 1
  
});
}
if($('div').hasClass('card-slider')){
	$('.card-slider').slick({
 dots: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        
        slidesToShow: 2
      }
    }
  ]
  
});
}
if($('div').hasClass('card-slider-nav')){
	$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.card-slider-nav'
});
$('.card-slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,  
  focusOnSelect: true
});
}
$('.navbar-toggle').click(function() {
	$('.mobil-nav').slideDown('slow');
});

  $('#hide_nav').click(function(){
  	
  	$('.mobil-nav').slideUp('slow');
  })
});