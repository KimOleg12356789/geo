$(document).ready(function(){

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


  $('.three_sl').slick({
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




});


let btns =  document.querySelectorAll(".five_number_click");
btns.forEach(item=>{
    item.addEventListener('click', (e)=>{
     let text = e.target.closest('.five_text_lg').querySelector('.hide-text').classList.toggle("active");
     
  }) 
})


let triggersModal = document.querySelectorAll(".js-show-modal");
let modals = document.querySelectorAll(".js-modal");

function closeModal() {
  modals.forEach(modal => {
    if (modal.classList.contains("is-open")) {
      modal.classList.remove("is-open");
    }
  });
}


modals.forEach(modal => {
  modal.addEventListener("click", function (event) {
    const isOutside = !event.target.closest(".modal__inner");
    const isCloseButton = event.target.matches(".js-close-modal");
    if (isCloseButton || isOutside) {
      closeModal();
    }
  });
});

triggersModal.forEach((button) =>
button.addEventListener("click", function (e) {
  e.preventDefault();
  let modalID = this.dataset.modal;
  console.log(modalID);
  modals.forEach(function (modal) {
    if (modal.dataset.modal == modalID) {
      modal.classList.add("is-open");
    }
  });
}));



'use strict';



class Dropdown {
  constructor(element, options) {
    this.element = element;
    this.toggler = element.querySelector('.js-dropdown-toggler');
    this.title = element.querySelector('.js-dropdown-title');
    this.icon = element.querySelector('.js-dropdown-icon');
    this.choices = element.querySelectorAll('.js-dropdown-choice');
    
    this.classActive = options.cssElementActive || 'js-dropdown-active';
    this.classExpanded = options.cssElementExpanded || 'js-dropdown-expanded';
    
    this.modes = Array.prototype.map.call(this.choices, choice => choice.dataset['mode']);
    
    if (!this.element || !this.toggler || !this.title || !this.icon || !this.choices.length) {
      throw new Error('Something is missing! Check the layout!');
    }
    
    this.init();
  }
  
  init() {
    this.toggler.addEventListener('click', this.toggleExpanded.bind(this));
    Array.prototype.forEach.call(this.choices, choice => {
      choice.addEventListener('click', this.choose.bind(this));
    });
  }
  
  toggleExpanded() {
    if (!this.element.classList.contains(this.classExpanded) || !this.element.classList.contains('js-dropdown-expanded')) {
      this.setExpanded();
    } else {
      this.unsetExpanded();
    }
  }
  
  setExpanded() {
    this.element.classList.add(this.classExpanded, 'js-dropdown-expanded');
  }
  
  unsetExpanded() {
    this.element.classList.remove(this.classExpanded, 'js-dropdown-expanded');
  }
  
  choose(event) {
    console.log(event);
    const mode = event.target.dataset['mode'];
    const title = event.target.innerHTML;
    
    this.activate();
    this.setTitle(title);
    this.colorize(mode);
    this.setIcon(mode);
    this.unsetExpanded();
  }
  
  activate() {
    this.element.classList.add(this.classActive, 'js-dropdown-active');
  }
  
  setTitle(title) {
    this.title.innerHTML = title;
  }
  
  colorize(mode) {
    Array.prototype.forEach.call(this.modes, item => { this.toggler.classList.remove(`dropdown__header_${item}`); });
    this.toggler.classList.add(`dropdown__header_${mode}`);
  }
  
  setIcon(mode) {
    Array.prototype.forEach.call(this.modes, item => { this.icon.classList.remove(`fa-${item}`); });
    this.icon.classList.add(`fa-${mode}`);
  }
}

function initDropdown(options) {
  const dropdown = [];
  Array.prototype.forEach.call(document.querySelectorAll('.js-dropdown'), (item) => {
    dropdown.push(new Dropdown(item, options));
  });
}

initDropdown({ 
  cssElementActive: 'is-active',
  cssElementExpanded: 'is-expanded',
});










