$(document).ready(function () {
    // new WOW().init();

    var HeadH = $('#header').outerHeight();
    // $('body').css('padding-top', HeadH);

    var scrollWindow = function() {
        $(window).on('load scroll',function() {
            var navbar = $('#header');
            
            // if ($(this).scrollTop() > HeadH) {
            if ($(this).scrollTop() > 250) {
                if (!navbar.hasClass('is-sticky')) {
                    navbar.addClass('is-sticky');
                     $('body').css('padding-top', HeadH);
                }
            }
            // if ($(this).scrollTop() < HeadH) {
            if ($(this).scrollTop() < 250) {
                if (navbar.hasClass('is-sticky')) {
                    navbar.removeClass('is-sticky');
                    $('body').css('padding-top', 0);
                }
            }
            // if ($(this).scrollTop() > HeadH*2) {
            if ($(this).scrollTop() > 250) {
                if (!navbar.hasClass('awake')) {
                    navbar.addClass('awake');
                }
            }
            // if ($(this).scrollTop() < HeadH*2) {
            if ($(this).scrollTop() < 50) {
                if (navbar.hasClass('awake')) {
                    navbar.removeClass('awake');
                }
            }
            // if ($(this).scrollTop() >= 400) { 
            //     $('.back_top').addClass('active');
            // }
            // else {
            //     $('.back_top').removeClass('active');
            // }
        });
    };
    scrollWindow();


    var btn = $('#top-button');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });

    // $('.back_top').click(function(){
    //     $('html, body').animate({scrollTop:0}, 500);
    // });

    // $('.back_top').click(function () {
    //     $('html, body').animate({ scrollTop: 0 }, 500);
    // });

    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //         $('.back_top').fadeIn();
    //     } else {
    //         $('.back_top').fadeOut();
    //     }
    // });

    $(".navbar-toggler").click(function () {
        $(this).toggleClass("menu-opened");
        $("#header .collapse:not(.show)").toggleClass("menu-show");
        $("body").toggleClass("scroll-off");
        $(".overlay").fadeToggle();
    });

    $(".overlay").click(function () {
        $(this).fadeToggle();
        $("#header .collapse:not(.show)").toggleClass("menu-show");
        $("body").toggleClass("scroll-off");
        $(".navbar-toggler").toggleClass("menu-opened");
    });


    $(window).on("resize", function (e) {
        checkScreenSize();
    });
    var logo = $(".navbar-brand img").attr("src");

    checkScreenSize();
    function checkScreenSize() {
        var newWindowWidth = $(window).width();
        if (newWindowWidth <= 991) {
            $("#header .collapse:not(.show)").find(".mobile_logo").remove();
            $("#header .collapse:not(.show)").append("<div class='mobile_logo'>" + "<img src=" + logo + " alt=''>" + "</div>");
        }
    }


    //Dashboard Menu
    $(function() {
          var $nav = $('nav.greedy');
          var $btn = $('nav.greedy button');
          var $vlinks = $('nav.greedy .links');
          var $hlinks = $('nav.greedy .hidden-links');

          var numOfItems = 0;
          var totalSpace = 0;
          var breakWidths = [];

          // Get initial state
          $vlinks.children().outerWidth(function(i, w) {
            totalSpace += w;
            numOfItems += 1;
            breakWidths.push(totalSpace);
          });

          var availableSpace, numOfVisibleItems, requiredSpace;

          function check() {

            // Get instant state
            availableSpace = $vlinks.width() - 10;
            numOfVisibleItems = $vlinks.children().length;
            requiredSpace = breakWidths[numOfVisibleItems - 1];

            // There is not enought space
            if (requiredSpace > availableSpace) {
              $vlinks.children().last().prependTo($hlinks);
              numOfVisibleItems -= 1;
              check();
              // There is more than enough space
            } else if (availableSpace > breakWidths[numOfVisibleItems]) {
              $hlinks.children().first().appendTo($vlinks);
              numOfVisibleItems += 1;
            }
            // Update the button accordingly
            $btn.attr("count", numOfItems - numOfVisibleItems);
            if (numOfVisibleItems === numOfItems) {
              $btn.addClass('hidden');
            } else $btn.removeClass('hidden');
          }

          // Window listeners
          $(window).resize(function() {
            check();
          });

          $btn.on('click', function() {
            $hlinks.toggleClass('hidden');
          });

          check();

        });



    // $('.box-loader').fadeOut('slow');

    var Wheight = $(window).height();
    var Hheight = $('#header').outerHeight();
    var Fheight = $('.footer_wrapper').outerHeight();

    var Innheight = Wheight - (Fheight + Hheight);

    $('.cms_section').css('min-height', Innheight);
});


var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 4000, // Increased delay to slow down autoplay (milliseconds)
    disableOnInteraction: false, // Ensures autoplay continues after interaction
  },
  speed: 1000, // Slows down the transition effect (milliseconds)
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
});


var swiper = new Swiper(".mySwiper5", {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper2", {
  autoplay: {
    delay: 4000, // Increased delay to slow down autoplay (4 seconds)
    disableOnInteraction: false, // Ensures autoplay continues after interaction
  },
  speed: 1000, // Slows down transition speed (1 second)
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // centeredSlides: true, 

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});


var swiper = new Swiper(".mySwiper3", {
  autoplay: {
    delay: 2000,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // centeredSlides: true, 

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


document.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper('.custom-slider', {
    slidesPerView: 1, // 1 slide visible on desktop
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1, // Keep 1 slide visible for smaller screens (e.g., mobile)
      },
    },
      effect: 'slide',  // Ensures the default sliding effect is used
  });
})



var swiper = new Swiper(".mySwiper4", {
  autoplay: {
    delay: 2000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  slidesPerView: 1,
  spaceBetween: 10,
  // centeredSlides: true, 

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
