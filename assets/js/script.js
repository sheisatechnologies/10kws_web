$(document).ready(function () {
  // new WOW().init();

  var HeadH = $('#header').outerHeight();
  // $('body').css('padding-top', HeadH);

  var scrollWindow = function () {
    $(window).on("load scroll", function () {
      var navbar = $("#header");
      var defaultLogo = $(".default-logo");
      var stickyLogo = $(".sticky-logo");
  
      if ($(this).scrollTop() > 150) {
        if (!navbar.hasClass("is-sticky")) {
          navbar.addClass("is-sticky");
          $("body").css("padding-top", navbar.outerHeight());
          defaultLogo.hide();
          stickyLogo.show();
        }
      } else {
        if (navbar.hasClass("is-sticky")) {
          navbar.removeClass("is-sticky");
          $("body").css("padding-top", 0);
          defaultLogo.show();
          stickyLogo.hide();
        }
      }
  
      if ($(this).scrollTop() > 250) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
        }
      } else if ($(this).scrollTop() < 50) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
        }
      }
    });
  };
  
  scrollWindow();
  
  


  var btn = $('#top-button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
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
  $(function () {
    var $nav = $('nav.greedy');
    var $btn = $('nav.greedy button');
    var $vlinks = $('nav.greedy .links');
    var $hlinks = $('nav.greedy .hidden-links');

    var numOfItems = 0;
    var totalSpace = 0;
    var breakWidths = [];

    // Get initial state
    $vlinks.children().outerWidth(function (i, w) {
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
    $(window).resize(function () {
      check();
    });

    $btn.on('click', function () {
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

var swiper = new Swiper('.mySwiper', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 1000, // Slows down transition speed (1 second)
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
});



var swiper = new Swiper(".mySwiper5", {
  autoplay: {
    delay: 4000, // Increased delay to slow down autoplay (4 seconds)
    disableOnInteraction: false, // Ensures autoplay continues after interaction
  },
  speed: 1000, // Slows down transition speed (1 second)
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
    delay: 3000, // Reduced delay to 3 seconds for a slightly faster autoplay
    disableOnInteraction: false,
  },
  speed: 800, // Reduced transition speed to 0.8 seconds
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,

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
    delay: 3000, // Increased delay to slow down autoplay (4 seconds)
    disableOnInteraction: false, // Ensures autoplay continues after interaction
  },
  speed: 800, // Slows down transition speed (1 second)
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
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.custom-slider', {
    slidesPerView: 1, // 1 slide visible on desktop
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
    delay: 3000, // Increased delay to slow down autoplay (4 seconds)
    disableOnInteraction: false, // Ensures autoplay continues after interaction
  },
  speed: 800, // Slows down transition speed (1 second)
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


// Smooth Scroll
// Initialize Lenis
const lenis = new Lenis({
  duration: 1,
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);






// Building Page Dynamic Scroll Animation
let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  // First timeline for red element
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.varied_section',
      start: '-50% 60%',
      end: '120% 50%',
      scrub: true,
      // markers: true,
    }
  });

  tl.fromTo('.red',
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      x: 2000,
      
    },
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      x: -1300,
      ease: "power1.inOut",
      
      
    }, 's'
  )
    .fromTo('.orange',
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        x: 2000,
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 2,
        x: -1300,
        ease: "power1.inOut",
        
      }, 's'
    )
    .fromTo('.purple',
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        x: 2000,
       
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 2,
        x: -1300,
        ease: "power1.inOut",
        
       
      }, 's'
    );



   












  // View section animation
  let viewTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.view_section',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: false,
      // markers: true,
    }
  });

  viewTl.from('.view_section .col-md-6', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });

  // Slider section animation for desktop

  let slideTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.slider_section1',
      start: 'top 50%',
      end: 'bottom 10%',
      scrub: true,
      
    }
  });
  slideTl.fromTo('.slider_section1 .slider_wrapper', {
    clipPath: "polygon(35% 0%, 68% 0%, 100% 15%, 100% 51%, 84% 100%, 0% 100%, 0% 23%)",
    duration: 1,
    ease: "power1.inOut"
  }, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%)",
  });




    // Slider section animation for desktop

    let slideTl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.slider_section1',
        start: 'top 50%',
        end: 'bottom 10%',
        scrub: true,
        
      }
    });
    slideTl1.fromTo('.slider_section .slider_wrapper1', {
      
      duration: 1,
      ease: "power1.inOut"
    }, {
      
    });

  // Building Page Hero Section Animation
  let heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero_section_bg_img',
      start: 'top top',
      end: '100% 0%',
      scrub: 1,
      // markers: true,
    }
  });
  heroTl.fromTo('.hero_section_bg_img', {
    clipPath: "polygon(50% 0%, 81% 0%, 100% 41%, 100% 100%, 11% 100%, 0% 68%, 0% 25%)",
    duration: 1,
    ease: "power1.inOut"
  }, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
  });




 





  // Building Page Hero Section Animation (Duplicate)
let heroTlDuplicate = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero_section_bg_img_duplicate',
    start: 'top top',
    end: '100% 0%',
    scrub: 1,
    // markers: true,
  }
});

heroTlDuplicate.fromTo('.hero_section_bg_img_duplicate', {
  clipPath: "polygon(50% 0%, 81% 0%, 100% 41%, 100% 100%, 11% 100%, 0% 68%, 0% 25%)",
  duration: 1,
  ease: "power1.inOut"
}, {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
});



  

  // Building Page Hero Section Animation (Duplicate)
  let heroTlLocation = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero_section_bg_img_location',
      start: 'top top',
      end: '100% 0%',
      scrub: 1,
      // markers: true,
    }
  });
  
  heroTlLocation.fromTo('.hero_section_bg_img_location', {
    clipPath: "polygon(50% 0%, 81% 0%, 100% 41%, 100% 100%, 11% 100%, 0% 68%, 0% 25%)",
    duration: 1,
    ease: "power1.inOut"
  }, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
  });


  // Building Page Hero Section Animation (Duplicate)
  let heroTlFloorplans = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero_section_bg_img_floorplans',
      start: 'top top',
      end: '100% 0%',
      scrub: 1,
      // markers: true,
    }
  });
  
  heroTlFloorplans.fromTo('.hero_section_bg_img_floorplans', {
    clipPath: "polygon(50% 0%, 81% 0%, 100% 41%, 100% 100%, 11% 100%, 0% 68%, 0% 25%)",
    duration: 1,
    ease: "power1.inOut"
  }, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
  });


  // Building Page Hero Section Animation (Duplicate)
  let heroTlContact = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero_section_bg_img_contact',
      start: 'top top',
      end: '100% 0%',
      scrub: 1,
      // markers: true,
    }
  });
  
  heroTlContact.fromTo('.hero_section_bg_img_contact', {
    clipPath: "polygon(50% 0%, 81% 0%, 100% 41%, 100% 100%, 11% 100%, 0% 68%, 0% 25%)",
    duration: 1,
    ease: "power1.inOut"
  }, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
  });

  


    // Building Page Hero Section Animation (Duplicate)
    let heroTlamenilast = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero_section_bg_img_full2',
        start: 'top top',
        end: '100% 0%',
        scrub: 1,
        // markers: true,
      }
    });
    
    heroTlamenilast.fromTo('.hero_section_bg_img_full2', {
      clipPath: "polygon(50% 0%, 81% 0%, 100% 41%, 100% 100%, 11% 100%, 0% 68%, 0% 25%)",
      duration: 1,
      ease: "power1.inOut"
    }, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
    });


  




  // Building Page Slider Section Above Animation
  let blSliderTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.gc-animation img',
      start: 'top 100%',
      end: '100% 0%',
      scrub: 1,
      // markers: true,
    }
  });

  blSliderTl.fromTo('.gc-animation img', {
    clipPath: "polygon(28% 0%, 94% 0%, 88% 87%, 66% 100%, 0% 100%, 0% 100%, 0% 24%)",
    duration: 1,
    ease: "power1.inOut"
  }, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
  });


    // Building Page Slider Section Above Animation
    let blSliderTl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.gc-animation1 img',
        start: 'top 100%',
        end: '100% 0%',
        scrub: 1,
        // markers: true,
      }
    });
  
    blSliderTl1.fromTo('.gc-animation1 img', {
      clipPath: "polygon(0% 0%, 92.401% 19.5282%, 103.6884% 102.9949%, 101.228% 101.578%, -5.7875% 101.052%, 0% 101.562%, 0% 0.0567%)",
      duration: 1,
      ease: "power1.inOut"
    }, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
    });
  




     // Building Page Slider Section Above Animation
     let blSliderTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.gc-animation2 img',
        start: 'top 100%',
        end: '100% 0%',
        scrub: 1,
        // markers: true,
      }
    });
  
    blSliderTl2.fromTo('.gc-animation2 img', {
      clipPath: "polygon(28% 0%, 94% 0%, 88% 87%, 66% 100%, 0% 100%, 0% 100%, 0% 24%)",
      duration: 1,
      ease: "power1.inOut"
    }, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
    });
  



    gsap.timeline({
      scrollTrigger: {
        trigger: '.double_gc_section2',
        start: '20% 100%',
        end: '80% 80%',
        scrub: true,
        // markers: true,
      }
    })
      .fromTo('.double_gc_section2 img', {
        clipPath: "polygon(0% 0%, 60% 0%, 100% 21%, 100% 100%, 29% 100%, 0% 83%)",
      }, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%)",
        ease: 'none'
      });
  
  
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.double_gc_section3',
          start: '20% 100%',
          end: '80% 80%',
          scrub: true,
          // markers: true,
        }
      })
        .fromTo('.double_gc_section3 img', {
          clipPath: "polygon(0% 0%, 60% 0%, 100% 21%, 100% 100%, 29% 100%, 0% 83%)",
        }, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%)",
          ease: 'none'
        });



  gsap.timeline({
    scrollTrigger: {
      trigger: '.double_gc_section',
      start: '20% 100%',
      end: '80% 80%',
      scrub: true,
      // markers: true,
    }
  })
    .fromTo('.double_gc_section img', {
      clipPath: "polygon(0% 0%, 60% 0%, 100% 21%, 100% 100%, 29% 100%, 0% 83%)",
    }, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%)",
      ease: 'none'
    });
});


gsap.timeline({
  scrollTrigger: {
    trigger: '.double_gc_section1',
    start: 'top 90%',  // Start animation earlier
    end: 'bottom 40%', // Ensure animation lasts longer
    scrub: true,
    // markers: true,
  }
})
  .fromTo('.double_gc_section1 img', {
    clipPath: "polygon(0% 0%, 60% 0%, 100% 21%, 100% 100%, 29% 100%, 0% 83%)",
  }, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%)",
    ease: 'none'
  });



  gsap.timeline({
    scrollTrigger: {
      trigger: '.double_gc_section1a',
      start: 'top 90%',  // Start animation earlier
      end: 'bottom 40%', // Ensure animation lasts longer
      scrub: true,
      // markers: true,
    }
  })
    .fromTo('.double_gc_section1a img', {
      clipPath: "polygon(0% 0%, 60% 0%, 100% 21%, 100% 100%, 29% 100%, 0% 83%)",
    }, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%)",
      ease: 'none'
    });
  

  gsap.timeline({
    scrollTrigger: {
      trigger: '.double_gc_section4',
      start: 'top 90%',  // Start animation earlier
      end: 'bottom 40%', // Ensure animation lasts longer
      scrub: true,
      // markers: true,
    }
  })
    .fromTo('.double_gc_section4 img', {
      clipPath: "polygon(0% 0%, 60% 0%, 100% 21%, 100% 100%, 29% 100%, 0% 83%)",
    }, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%)",
      ease: 'none'
    });


    gsap.timeline({
      scrollTrigger: {
        trigger: '.double_gc_section5',
        start: 'top 90%',  // Start animation earlier
    end: 'bottom 40%', // Ensure animation lasts longer
        scrub: true,
        // markers: true,
      }
    })
      .fromTo('.double_gc_section5 img', {
        clipPath: "polygon(0% 0%, 60% 0%, 100% 21%, 100% 100%, 29% 100%, 0% 83%)",
      }, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%)",
        ease: 'none'
      });



      gsap.timeline({
        scrollTrigger: {
          trigger: '.double_gc_section6',
          start: 'top 90%',  // Start animation earlier
          end: 'bottom 40%', // Ensure animation lasts longer
          scrub: true,
          // markers: true,
        }
      })
        .fromTo('.double_gc_section6 img', {
          clipPath: "polygon(0% 0%, 60% 0%, 100% 21%, 100% 100%, 29% 100%, 0% 83%)",
        }, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%)",
          ease: 'none'
        });



// location js animation


gsap.timeline({
  scrollTrigger: {
    trigger: '.double_gc_section7',
    start: 'top 90%',  // Start animation earlier
    end: 'bottom 40%', // Ensure animation lasts longer
    scrub: true,
    // markers: true,
  }
})
  .fromTo('.double_gc_section7 img', {
    clipPath: "polygon(0% 0%, 60% 0%, 100% 21%, 100% 100%, 29% 100%, 0% 83%)",
  }, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%)",
    ease: 'none'
  });





  gsap.timeline({
    scrollTrigger: {
      trigger: '.double_gc_section8',
      start: 'top 90%',  // Start animation earlier
      end: 'bottom 40%', // Ensure animation lasts longer
      scrub: true,
      // markers: true,
    }
  })
    .fromTo('.double_gc_section8 img', {
      clipPath: "polygon(0% 0%, 60% 0%, 100% 21%, 100% 100%, 29% 100%, 0% 83%)",
    }, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%)",
      ease: 'none'
    });


    gsap.timeline({
      scrollTrigger: {
        trigger: '.double_gc_section9',
        start: 'top 90%',  // Start animation earlier
    end: 'bottom 40%', // Ensure animation lasts longer
        scrub: true,
        // markers: true,
      }
    })
      .fromTo('.double_gc_section9 img', {
        clipPath: "polygon(0% 0%, 60% 0%, 100% 21%, 100% 100%, 29% 100%, 0% 83%)",
      }, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%)",
        ease: 'none'
      });
  















 gsap.defaults({ force3D: false });
mm.add("(max-width: 799px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.varied_section',
      start: '-150% 90%',
      end: '150% 50%',
      duration: 10,
      scrub: 2, // Smoothens animation timing (higher value = smoother)
      anticipatePin: 1,
    }
  });

  tl.fromTo('.red',
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      x: 700,
      force3D: false
      
    },
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      x: -500,
      ease: "power1.inOut",
      force3D: false
      
    }, 's'
  )
    .fromTo('.orange',
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        x: 700,
        force3D: false
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        x: -500,
        ease: "power1.inOut",
        force3D: false
        
      }, 's'
    )
    .fromTo('.purple',
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        x: 700,
        force3D: false
        
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        x: -500,
        ease: "power1.inOut",
        force3D: false
       
        
      }, 's'
    );

    









  // View section animation for mobile
  let viewTlMobile = gsap.timeline({
    scrollTrigger: {
      trigger: '.view_section',
      start: 'top 90%',
      end: 'bottom 20%',
      scrub: false,
      // markers: true,
    }
  });

  viewTlMobile.from('.view_section .col-md-6', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  

  // Building Page Hero Section Animation
  let heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero_section_bg_img',
      start: 'top top',
      end: '100% 0%',
      scrub: 1,
      // markers: true,
    }
  });
  heroTl.fromTo('.hero_section_bg_img', {
    clipPath: "polygon(70% 0%, 100% 0%, 100% 60%, 61% 104%, 0% 100%, 0% 68%, 0% 12%)",
    duration: 1,
    ease: "power1.inOut"
  }, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
  });



   // Building Page Hero Section Animation
   let heroTlami = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero_section_bg_img_duplicate',
      start: 'top top',
      end: '100% 0%',
      scrub: 1,
      // markers: true,
    }
  });
  heroTlami.fromTo('.hero_section_bg_img_duplicate', {
    clipPath: "polygon(70% 0%, 100% 0%, 100% 60%, 61% 104%, 0% 100%, 0% 68%, 0% 12%)",
    duration: 1,
    ease: "power1.inOut"
  }, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
  });


  // Building Page Hero Section Animation (Duplicate)
  let heroTlLocation = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero_section_bg_img_location',
      start: 'top top',
      end: '100% 0%',
      scrub: 1,
      // markers: true,
    }
  });
  
  heroTlLocation.fromTo('.hero_section_bg_img_location', {
    clipPath: "polygon(50% 0%, 81% 0%, 100% 41%, 100% 100%, 11% 100%, 0% 68%, 0% 25%)",
    duration: 1,
    ease: "power1.inOut"
  }, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
  });


 // Building Page Hero Section Animation (Duplicate)
 let heroTlFloorplans = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero_section_bg_img_floorplans',
    start: 'top top',
    end: '100% 0%',
    scrub: 1,
    // markers: true,
  }
});

heroTlFloorplans.fromTo('.hero_section_bg_img_floorplans', {
  clipPath: "polygon(50% 0%, 81% 0%, 100% 41%, 100% 100%, 11% 100%, 0% 68%, 0% 25%)",
  duration: 1,
  ease: "power1.inOut"
}, {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
});



// Building Page Hero Section Animation (Duplicate)
let heroTlContact = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero_section_bg_img_contact',
    start: 'top top',
    end: '100% 0%',
    scrub: 1,
    // markers: true,
  }
});

heroTlContact.fromTo('.hero_section_bg_img_contact', {
  clipPath: "polygon(50% 0%, 81% 0%, 100% 41%, 100% 100%, 11% 100%, 0% 68%, 0% 25%)",
  duration: 1,
  ease: "power1.inOut"
}, {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
});





  // Building Page Slider Section Above Animation
  let blSliderTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.gc-animation img',
      start: 'top top',
      end: '100% 0%',
      scrub: 1,
      // markers: true,
    }
  });
  blSliderTl.fromTo('.gc-animation img', {
    clipPath: "polygon(28% 0%, 94% 0%, 88% 87%, 66% 100%, 0% 100%, 0% 100%, 0% 24%)",
    duration: 1,
    ease: "power1.inOut"
  }, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)",
  });




  gsap.timeline({
    scrollTrigger: {
      trigger: '.double_gc_section',
      start: '20% 100%',
      end: '80% 80%',
      scrub: true,
      // markers: true,
    }
  })
    .fromTo('.double_gc_section img', {
      clipPath: "polygon(0% 0%, 60% 0%, 100% 21%, 100% 100%, 29% 100%, 0% 83%)",
    }, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%)",
      ease: 'none',
      scale: 1
    });

});

// Add this after your existing GSAP animations
gsap.timeline({
  scrollTrigger: {
    trigger: '.highlight_section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  }
})
  .to('.highlight_section .parallax-bg', {
    y: '20%',
    ease: 'none'
  });


// Add responsive handling
mm.add("(max-width: 767px)", () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.highlight_section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  })
    .to('.highlight_section .parallax-bg', {
      y: '30%',
      ease: 'none'
    });
});






// Add this after your existing GSAP animations
gsap.timeline({
  scrollTrigger: {
    trigger: '.highlight_section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  }
})
  .to('.highlight_section .parallax-bg', {
    y: '20%',
    ease: 'none'
  });

// Add responsive handling
mm.add("(max-width: 767px)", () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.highlight_section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  })
    .to('.highlight_section .parallax-bg', {
      y: '30%',
      ease: 'none'
    });
});


// Add this after your existing GSAP animations
gsap.timeline({
  scrollTrigger: {
    trigger: '.highlight_section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  }
})
  .to('.highlight_section .parallax-bg_location', {
    y: '20%',
    ease: 'none'
  });

// Add responsive handling
mm.add("(max-width: 767px)", () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.highlight_section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  })
    .to('.highlight_section .parallax-bg_location', {
      y: '30%',
      ease: 'none'
    });
});


// Add this after your existing GSAP animations
gsap.timeline({
  scrollTrigger: {
    trigger: '.highlight_section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  }
})
  .to('.highlight_section .parallax-bg_buil', {
    y: '20%',
    ease: 'none'
  });

// Add responsive handling
mm.add("(max-width: 767px)", () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.highlight_section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  })
    .to('.highlight_section .parallax-bg_buil', {
      y: '30%',
      ease: 'none'
    });
});



// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

let mma = gsap.matchMedia(); // ✅ Use a single matchMedia instance

// Select all `.highlight_section1` elements and apply animations separately
document.querySelectorAll('.highlight_section1').forEach(section => {
  
  let bgAmeni = section.querySelector('.parallax-bg_ameni');
  let bgAmeni1 = section.querySelector('.parallax-bg_ameni1');

  if (bgAmeni) {
    gsap.to(bgAmeni, {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: section, // ✅ Uses the specific section as trigger
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // ✅ Responsive Handling
    mma.add("(max-width: 767px)", () => {
      gsap.to(bgAmeni, {
        y: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });
  }

  if (bgAmeni1) {
    gsap.to(bgAmeni1, {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: section, // ✅ Uses the specific section as trigger
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // ✅ Responsive Handling
    mma.add("(max-width: 767px)", () => {
      gsap.to(bgAmeni1, {
        y: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });
  }
});

// ✅ Refresh ScrollTrigger to ensure proper initialization
ScrollTrigger.refresh();










// Add this with your other GSAP animations
gsap.registerPlugin(ScrollTrigger);


// Set initial states
gsap.set('.gc_anim_title', {
  y: 100,
  opacity: 0
});

gsap.set('.gc_mob_title', {
  y: 100,
  opacity: 0
});

// Desktop and mobile animations
const textReveal = () => {
  // Heading animation
  gsap.to('.workspace_section .heading_tittle', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.workspace_section',
      start: "30% 80%",
      toggleActions: "play none none reverse"
    }
  });

  // Paragraph animations with stagger
  gsap.to('.workspace_section .cw_title', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.workspace_section',
      start: "30% 80%",
      toggleActions: "play none none reverse"
    }
  });
};

// Initialize animations
textReveal();


// Desktop and mobile animations
const textReveal2 = () => {
  // Heading animation
  gsap.to('.anything_gc_section .heading_tittle', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.anything_gc_section',
      start: "30% 80%",
      toggleActions: "play none none reverse"
    }
  });

  // Paragraph animations with stagger
  gsap.to('.anything_gc_section .cw_title', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.anything_gc_section',
      start: "30% 80%",
      toggleActions: "play none none reverse"
    }
  });
};

// Initialize animations
textReveal2();


// Desktop and mobile animations
const textReveal3 = () => {
  // Heading animation
  gsap.to('.perfectly_section .heading_tittle', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.perfectly_section',
      start: "30% 80%",
      toggleActions: "play none none reverse"
    }
  });

  // Paragraph animations with stagger
  gsap.to('.perfectly_section .cw_title', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.perfectly_section',
      start: "30% 80%",
      toggleActions: "play none none reverse"
    }
  });
};

// Initialize animations
textReveal3();


// Desktop and mobile animations
const textReveal4 = () => {
  // Heading animation
  gsap.to('.city_view .heading_tittle', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.city_view',
      start: "30% 80%",
      toggleActions: "play none none reverse"
    }
  });

  // Paragraph animations with stagger
  gsap.to('.city_view .cw_title', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.city_view',
      start: "30% 80%",
      toggleActions: "play none none reverse"
    }
  });
};

// Initialize animations
textReveal4();


// Desktop and mobile animations
const textReveal5 = () => {
  // Heading animation
  gsap.to('.exemplary_section .heading_tittle', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.exemplary_section',
      start: "30% 80%",
      toggleActions: "play none none reverse"
    }
  });

  // Paragraph animations with stagger
  gsap.to('.exemplary_section .cw_title', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.exemplary_section',
      start: "30% 80%",
      toggleActions: "play none none reverse"
    }
  });
};

// Initialize animations
textReveal5();


// Desktop and mobile animations
const textReveal6 = () => {
  // Heading animation
  gsap.to('.double_gc_section .heading_tittle', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.double_gc_section',
      start: "30% 80%",
      toggleActions: "play none none reverse"
    }
  });

  // Paragraph animations with stagger
  gsap.to('.double_gc_section .cw_title', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.double_gc_section',
      start: "30% 80%",
      toggleActions: "play none none reverse"
    }
  });
};

// Initialize animations
textReveal6();



// Desktop and mobile animations
const textReveal7 = () => {
  // Heading animation
  gsap.to('.eco_section .heading_tittle', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.eco_section',
      start: "30% 80%",
      toggleActions: "play none none reverse"
    }
  });

  // Paragraph animations with stagger
  gsap.to('.eco_section .cw_title', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.eco_section',
      start: "30% 80%",
      toggleActions: "play none none reverse"
    }
  });
};

// Initialize animations
textReveal7();




// Accordion reveal animation
function revealAccordion() {
  const revealItems = document.querySelectorAll('.reveal-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        // Remove active class when element is not in viewport
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.1,
    // Adding rootMargin to trigger animation slightly before element comes into view
    rootMargin: '0px 0px -50px 0px'
  });

  revealItems.forEach(item => {
    observer.observe(item);
  });
}




let lastScrollY = 0; // Store last scroll position

function toggleMenu(open) {
  const menu = document.querySelector(".menu");
  const body = document.body;

  if (open) {
    lastScrollY = window.scrollY; // Store scroll position
    body.style.top = `-${lastScrollY}px`; // Keep page in place
    body.classList.add("menu-open");
    body.style.position = "fixed"; // Prevent scrolling
    menu.classList.add("menu-open");
  } else {
    body.classList.remove("menu-open");
    menu.classList.remove("menu-open");
    body.style.position = ""; // Restore scrolling
    body.style.top = "";
    window.scrollTo(0, lastScrollY); // Restore last scroll position
  }
}

// Open Menu
document.querySelector(".menu-button").addEventListener("click", () => {
  toggleMenu(true);
});

// Close Menu
document.querySelector(".close-button").addEventListener("click", () => {
  toggleMenu(false);
});

$(document).ready(function(){
  $('.slick-carousel').slick({
      infinite: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 3000,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next')
  });
});


document.addEventListener("DOMContentLoaded", function () {
  let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
});



var swiper = new Swiper(".smart_building_slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});


