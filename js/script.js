// $(document).ready(function(){
//   $('.slider').slick();
// });
jQuery(function($){
  $(document).ready(function(){
      //Script for BXSLIDER
      $('.bxslider').bxSlider({
        mode:'vertical',
        // auto:true,
        autoStart:true,
        pause:1000,
        touchEnabled:false,
        });
      //Script for SLICK-
      $('.testimonials__slider__img').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:true,
        slidesToShow:3,
        slidesToScroll:1,
        speed:1000,
        centerMode:true,
        centerPadding:'0px',
		//variableWidth: true,
        asNavFor: '.testimonials__slider__text',
        responsive:[{
          breakpoint:770,
          settings:{
            slidesToShow:1,
            // centerMode:false,
            centerPadding:'150px',
            variableWidth: true,
            arrows:false,
            dots:true
          }
        }]

        });
      $('.testimonials__slider__text').slick({
        arrows:false,
        dots:false,
        slidesToShow:1,
        slidesToScroll:1,
        asNavFor: '.testimonials__slider__img',
        speed:1000,
        adaptiveHeight:true
        });

  });

  $(document).ready(function() {
	$('.burger__menu').click(function(event) {
		$('.burger__menu').toggleClass('active');
    });
	$('.burger__menu').click(function(event) {
		$('.menu').toggleClass('activemenu');
  });

});

// accordeon

$(document).ready(function() {
   if( window.innerWidth <= 916 ){  
  	$('.menu__item').click(function(event) {
  		if($('.menu').hasClass('one')){
  			$('.menu__item').not($(this)).removeClass('active');
  			$('.accord').not($(this).next()).slideUp(300);
  		}
  		$(this).toggleClass('active').next().slideToggle(300);
	});
 }
});

  //Script For Fixed Header
  let header = $("#header");
  let about = $("#about");
  let aboutH = about.innerHeight();
  let scrollPos = $(window).scrollTop();

  checkScroll(scrollPos, aboutH);

  $(window).on("scroll resize", function() {
    let aboutH = about.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, aboutH);
  });

  function checkScroll(scrollPos, aboutH) {
    if(scrollPos > aboutH) {
      header.addClass("header__fixed");
    }
    else {
      header.removeClass("header__fixed");
    }
  };
//===========================
  var btn = $('#button');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 1400) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '1400');
   });
});
