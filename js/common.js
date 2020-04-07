$(document).ready(function($) {
  $('.popup-open').click(function() {
    $('.popup-fade').fadeIn();
    return false;
  }); 
  
  $('.popup-close').click(function() {
    $(this).parents('.popup-fade').fadeOut();
    return false;
  });   
 
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-fade').fadeOut();
    }
  });
  
  $('.popup-fade').click(function(e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut();          
    }
  });
});

$('.menu-btn').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
});

$('.menu-btn').on('click', function(e){
  e.preventDefault();
  $('.nav').toggleClass('nav_active');

});

$('.tab-title li').not('.active').click(function(){
    var index = $(this).index();
    var content = $('.tab-content li').eq(index);
    $(this).addClass('active').siblings().removeClass('active');
    $('.tab-content li').css('display', 'none').eq(index).css('display', 'block');
})

    $('.tab-title li:first').addClass('active');
    $('.tab-content li:first').css('display', 'block');


$('.slider').slick({
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

$('.cards').slick({
    dots: true,
    slidesToScroll: 3,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

$('.tab_sl').slick({
    dots: true,
    slidesToScroll: 2,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

