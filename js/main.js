$(document).ready(function(){

  $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
});

	$(function() {
  $('.burger-box,.sliding-panel-fade-screen,.sliding-panel-close, .burger2').on('click touchstart', function(e) {
    e.preventDefault();
    $('.burger-box').toggleClass('is-open');
    $('.burger2').toggleClass('is-open');
    $('.sliding-panel-content, .burger2, .sliding-panel-fade-screen, .header_left').toggleClass('is-visible');
  });
});

$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.burger_accordion_content').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
}); 


// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
    
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('ul.tabs li').last().addClass("tab_last");


  // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content2").hide();
    $(".tab_content2:first").show();

  /* if in tab mode */
    $("ul.tabs2 li").click(function() {
    
      $(".tab_content2").hide();
      var activeTad = $(this).attr("rel"); 
      $("#"+activeTad).fadeIn();    
    
      $("ul.tabs2 li").removeClass("active2");
      $(this).addClass("active2");

    $(".tab_drawer_heading2").removeClass("d_active2");
    $(".tab_drawer_heading2[rel^='"+activeTad+"']").addClass("d_active2");
    
    });
  /* if in drawer mode */
  $(".tab_drawer_heading2").click(function() {
      
      $(".tab_content2").hide();
      var d_activeTad = $(this).attr("rel"); 
      $("#"+d_activeTad).fadeIn();
    
    $(".tab_drawer_heading2").removeClass("d_active2");
      $(this).addClass("d_active2");
    
    $("ul.tabs2 li").removeClass("active2");
    $("ul.tabs2 li[rel^='"+d_activeTad+"']").addClass("active2");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('ul.tabs2 li').last().addClass("tab_last");



  $('.card').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay:false,
  arrows:true,
  dots: false,
  asNavFor: '.iss'
});

$('.iss').slick({
  slidesToShow:4,
  infinite: true,
  slidesToScroll: 1,
  asNavFor: '.card',
  active:true,
  autoplay:false,
  dots: false,
  arrows:false,
  centerPadding: '5px',
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 1260,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 4,
      arrows:false,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 4,
      dots:false,
      arrows:false,
      slidesToScroll: 1
    }
  },

  {
      breakpoint: 565,
      settings: {
        slidesToShow: 4,
        dots:false,
        arrows:false,
        slidesToScroll: 1
      }
    }
]
});


  $('.laser_scanning_sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              dots: true,
              slidesToScroll: 1,
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1,
          }
        }
      ]
  });

  $('.seven_sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });

  $('.seven_sl2').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1381,
          settings: {
          	
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1201,
          settings: {
          	dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
          	dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
          	dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
          	dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
          	dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
          breakpoint: 481,
          settings: {
          	dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });

  $('.eight_sl').slick({
        infinite: true,
        speed: 300,
        dots: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
          	dots: true,
            slidesToShow: 6,
            slidesToScroll: 6,
          }
        },
        {
          breakpoint: 1025,
          settings: {
          	dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
          	dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 769,
          settings: {
          	dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
          {
          breakpoint: 661,
          settings: {
          	dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },

          {
            breakpoint: 576,
            settings: {
              dots: true,
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
          breakpoint: 481,
          settings: {
          	dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        }
      ]
  });


 $('.seven_sl2').on(`init reInit`, function(event, slick) {
    $('.counter').text(1 + ' / ' + 10);
  })
  $('.seven_sl2').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
    $('.counter').text(currentSlide + 1 + ' / ' + 10);
  })
  $('.slider').slick({
    slidesToShow: 3,
    dots: false
  });

/*table*/
  $(".table-inner").css({ display: "none" });
  $(".table-button").click(function () {
    $(".table-show").toggleClass("show");
    $(".table-shadow").toggleClass("hide");
    $(".table-arrow").toggleClass("hide");
    $(".table-button").toggleClass("hide");
    if ($(".table-button").hasClass("hide")) {
      $(".table-button button").text("Еще");
    } else {
      $(".table-button button").text("Скрыть");
    }
    if ($(window).width() <= 320) {
      $(".tablemb-inner .tablemb-inner-wrap").animate({
        height: "toggle",
      });
    } else {
      $(".table-inner").animate({
        height: "toggle",
      });
    }
  });


});















