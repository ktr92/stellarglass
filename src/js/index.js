$(document).ready(function () {
  new WOW().init();

  $('.newindex_langs__current').on('click', function () {
    $(this).toggleClass('newindex_active');
    $(this).siblings('.newindex_langs__list').slideToggle();
});
});


$(document).ready(function () {

  $('.newindex_partners_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    //focusOnSelect: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: '<span class="slick-prev">&nbsp;</span>',
  nextArrow: '<span class="slick-next">&nbsp;</span>',
  responsive: [
    {
      breakpoint: 1401,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      }
    },
    
    {
      breakpoint: 501,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});
  $('.newindex_blogslider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    //focusOnSelect: true,
  arrows: true,
 /*  autoplay: true,
  autoplaySpeed: 3000, */
  prevArrow: $('.newindex_blogarrow_left'),
  nextArrow: $('.newindex_blogarrow_right'),
  responsive: [
    {
      breakpoint: 1401,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      }
    },
    
    {
      breakpoint: 501,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

  
  $('.reviewsslider__slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
    
	});
  $('.partslider__slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
	  nextArrow: '.partslider__arrowright',
		prevArrow: '.partslider__arrowleft',
    responsive: [
     
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        }
      }
   
    ]
	});
  $('.galleryslider__slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: false,
	  nextArrow: '.galleryslider__arrowright',
		prevArrow: '.galleryslider__arrowleft',
    responsive: [
     
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
   
    ]
	});
  $('.aboutblock__slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true
	});
  $('.serts__slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          draggable: true,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          draggable: true,
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          draggable: true,
        }
      }
    ]
	});
  $('.videoslider__slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
    draggable: false,
    responsive: [
 
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          draggable: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
        }
      }
    ]
	});
  $('.photoslider__slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
    draggable: false,
    responsive: [
 
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          draggable: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          draggable: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          draggable: true,
        }
      }
    ]
	});

  $(".sliderRight").click(function (e) {
    $(this).closest('.slidersection').find(".slick-slider").slick("slickNext");
  });
  $(".sliderLeft").click(function (e) {
    $(this).closest('.slidersection').find(".slick-slider").slick("slickPrev");
  });

  
  $(".youtubepopup").click(function () {
      var $this = $(this);
      var $iframe = $('<iframe frameborder="0" allow="autoplay; encrypted-media" class="iframe" id="Overlayvideo" allowfullscreen="true">').attr("src", $this.data("link")).css({"width": 400, "height": 300});
      var $title = '';
      $("#video-view").html($title).append($iframe);
      $("#video-popup").show();
  });
  $('#video-close').click(function () {
      $("#video-view").html('')
      $("#video-popup").hide()
  })

  jQuery("a.scrollTo").click(function (event) {
    event.preventDefault()
    let elementClick = jQuery(this).attr("href");
    let destination = jQuery(elementClick).offset().top - 60;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 900);
    $('.mobilemenu').hide()
    return false;
  });

  $('input[type="tel"]').mask('+7 999 999 99 99')




  $('.js-menu').on('click', function () {
    $('.mobilemenu').toggleClass('active')
  })

  
  $('.header__search').on('click', function () {
    $('.searchblock').addClass('active')
  })

  
  $('.searchclose').on('click', function () {
    $('.searchblock').removeClass('active')
  })

  


  $(window).scroll(function () {
    scroll = $(window).scrollTop();
    if (scroll >= 578) {
      $('.totop').addClass('active')
     
    } else {
      $('.totop').removeClass('active');
    } 
  });


  if ($(window).width() < 1021) { 
    $(window).scroll(function () {
      scroll = $(window).scrollTop(); 

    if (scroll >= 578) $('#header').addClass('fixed');
    else $('#header').removeClass('fixed');

    });
  }

})

$(document).ready(function() {

  var something = (function () {
    var executed = false;
    return function () {
      if (!executed) {
        executed = true;
        $('.stats__number').each(function () {
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now));
            }
          });
        });
      }
    };
  })();



  $(window).scroll(function () {
    if ($(".stats").length) {
      var top_of_element = $(".stats").offset().top;
      var bottom_of_element = $(".stats").offset().top + $(".stats").outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();

      if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
        something()
      }
    }

  });


  $('.reviews__rating').each(function () {
    $(this).find('span.rat-stars-active').css('width', $(this).text() * 21);
  });
  $('.ratingform .rating').mousemove(function (e) {
    if ($('.rating__formvalue span').text() === '0') {
      var stars = parseInt((e.pageX - $(this).offset().left) / 21) * 21 + 21;
      $(this).find('span.rat-stars-active').css('width', stars);
    }
      
  });
  $('.ratingform .rating').mouseout(function (e) {
      $(this).find('span.rat-stars-active').css('width', $(this).text() * 21);
  });
  $('.ratingform .rating').click(function (e) {
      var stars = parseInt((e.pageX - $(this).offset().left) / 21) + 1;
      var $inp = $('.rating input[name="rating"]');
      $inp.val(stars);
      $('.rating input[name="rating"]').val(stars);
      $(this).find('span.rat-stars-active').css('width', stars * 21);
  });

  $('.ratingform .rating').click(function (e) {
    var stars = parseInt((e.pageX - $(this).offset().left) / 24) + 1;
    var $inp = $('.ratingform input[name="rating"]');
    $inp.val(stars);
    $('.blograting__form .blograting__rating span').html(stars);
    $('.rating__formvalue span').text(stars)
  });
})
