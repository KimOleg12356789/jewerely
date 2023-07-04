$(document).ready(function(){

  $('.filter-li:nth-child(n+7)').wrapAll('<div class="bx-section-desc"></div>');
  $('.filter-li:nth-child(n+7)').wrapAll('<div class="bx-section-desc2"></div>');
  $('.filter-li:nth-child(n+7)').wrapAll('<div class="bx-section-desc3"></div>');
  $('.filter-li:nth-child(n+7)').wrapAll('<div class="bx-section-desc4"></div>');
  $('.filter-li:nth-child(n+7)').wrapAll('<div class="bx-section-desc5"></div>');

  var halfText = $('.bx-section-desc');
  var halfText2 = $('.bx-section-desc2');
  var halfText3 = $('.bx-section-desc3');
  var halfText4 = $('.bx-section-desc4');
  var halfText5 = $('.bx-section-desc5');

  $('.show-hide').click(function() {
      halfText.slideToggle(200, function() {
          if ($(halfText).is(':hidden')) {
        $('.show-hide').html('ПОКАЗАТЬ ВСЕ');
      } else {
        $('.show-hide').html('СВЕРНУТЬ ВСЕ');
      }	
      });
  });

  $('.show-hide2').click(function() {
    halfText2.slideToggle(200, function() {
        if ($(halfText2).is(':hidden')) {
      $('.show-hide2').html('ПОКАЗАТЬ ВСЕ');
    } else {
      $('.show-hide2').html('СВЕРНУТЬ ВСЕ');
    }	
    });
});

$('.show-hide3').click(function() {
  halfText3.slideToggle(200, function() {
      if ($(halfText3).is(':hidden')) {
    $('.show-hide3').html('ПОКАЗАТЬ ВСЕ');
  } else {
    $('.show-hide3').html('СВЕРНУТЬ ВСЕ');
  }	
  });
});

$('.show-hide4').click(function() {
  halfText4.slideToggle(200, function() {
      if ($(halfText4).is(':hidden')) {
    $('.show-hide4').html('ПОКАЗАТЬ ВСЕ');
  } else {
    $('.show-hide4').html('СВЕРНУТЬ ВСЕ');
  }	
  });
});

$('.show-hide5').click(function() {
  halfText5.slideToggle(200, function() {
      if ($(halfText5).is(':hidden')) {
    $('.show-hide5').html('ПОКАЗАТЬ ВСЕ');
  } else {
    $('.show-hide5').html('СВЕРНУТЬ ВСЕ');
  }	
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
      $el.find('.card-fag-content').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion2'), false);
});

        $(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link3');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open3');

    if (!e.data.multiple) {
      $el.find('').not($next).slideUp().parent().removeClass('open3');
    };
  } 

  var accordion = new Accordion($('#accordion3'), false);
});


$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link4');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open4');

    if (!e.data.multiple) {
      $el.find('.dostavka-none').not($next).slideUp().parent().removeClass('open4');
    };
  } 

  var accordion = new Accordion($('#accordion4'), false);
});


$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link5');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open5');

    if (!e.data.multiple) {
      $el.find('.dostavka-none').not($next).slideUp().parent().removeClass('open5');
    };
  } 

  var accordion = new Accordion($('#accordion5'), false);
});

$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link6');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open6');

    if (!e.data.multiple) {
      $el.find('.filter-content').not($next).slideUp().parent().removeClass('open6');
    };
  } 

  var accordion = new Accordion($('#accordion6'), false);
});

// accordion functionality
$('.accordion__title').on('click', function(){
  $(this).toggleClass('accordion__title--active').siblings('.accordion__title').removeClass('accordion__title--active'); 
  $(this).next('.accordion__content').slideToggle().siblings('.accordion__content').slideUp();
});

//tabs functionality
$('.tabs li').on('click', function(){
  var tabId = $(this).attr("data-tab");
  
  $('.tabs li').removeClass('tab--active');
$('.accordion__content').removeClass('accordion__content--active');
  
  $(this).addClass('tab--active');  
  $('#' + tabId).addClass('accordion__content--active');
});

$(function() {
  $('.burger-box,.sliding-panel-fade-screen,.sliding-panel-close, .burger2').on('click touchstart', function(e) {
    e.preventDefault();
    $('.burger-box').toggleClass('is-open');
    $('.burger2').toggleClass('is-open');
    $('.sliding-panel-content, .burger2, .sliding-panel-fade-screen').toggleClass('is-visible');
  });
});


// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs3 li").click(function() {
    
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs3 li").removeClass("active");
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
    
    $("ul.tabs3 li").removeClass("active");
    $("ul.tabs3 li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('ul.tabs3 li').last().addClass("tab_last");


// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content2").hide();
    $(".tab_content2:first").show();

  /* if in tab mode */
    $("ul.tabs4 li").click(function() {
    
      $(".tab_content2").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs4 li").removeClass("active2");
      $(this).addClass("active2");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
      
      $(".tab_content2").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs4 li").removeClass("active2");
    $("ul.tabs4 li[rel^='"+d_activeTab+"']").addClass("active2");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('ul.tabs3 li').last().addClass("tab_last");


 $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="text"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });


$('.novelties-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 641,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
  });


$('.korzina-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 641,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
      ]
  });

$('.carts').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay:false,
  arrows:false,
  dots: false,
  asNavFor: '.iss'
});

$('.iss').slick({
  slidesToShow:5,
  infinite: true,
  slidesToScroll: 1,
  asNavFor: '.carts',
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
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 5,
      arrows:false,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 5,
      dots:false,
      arrows:false,
      slidesToScroll: 1
    }
  },

  {
      breakpoint: 565,
      settings: {
        slidesToShow: 5,
        dots:false,
        arrows:false,
        slidesToScroll: 1
      }
    }
]
});




});


const handleClick = event => {
  const divs = document.querySelectorAll("div")
  const target = event.target.nextElementSibling
  target.classList.toggle("hide")
}

document.querySelectorAll("button").forEach(item => {
  item.addEventListener("click", handleClick)
})


const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});


const search = document.querySelector('.filter-otkrit');
const searchnav = document.querySelector('.punkt-input');

search.addEventListener('click', () => {
    searchnav.classList.toggle('opens');
});

const search2 = document.querySelector('.filter-otkrit2');
const searchnav2 = document.querySelector('.punkt-input2');

search2.addEventListener('click', () => {
    searchnav2.classList.toggle('opens');
});

const search3 = document.querySelector('.filter-otkrit3');
const searchnav3 = document.querySelector('.punkt-input3');

search3.addEventListener('click', () => {
    searchnav3.classList.toggle('opens');
});

const search4 = document.querySelector('.filter-otkrit4');
const searchnav4 = document.querySelector('.punkt-input4');

search4.addEventListener('click', () => {
    searchnav4.classList.toggle('opens');
});

const search5 = document.querySelector('.filter-otkrit5');
const searchnav5 = document.querySelector('.punkt-input5');

search5.addEventListener('click', () => {
    searchnav5.classList.toggle('opens');
});


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




