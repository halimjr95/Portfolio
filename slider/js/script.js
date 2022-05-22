$(document).ready(function () {
  new WOW().init();
  //for 100vh in mobile
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // for counter //

var a = 0;
$(window).scroll(function() {

  var oTop = $('.counter-cont').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-num').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

// end counter //

  //phone size menu onclick
  if ($(window).width() <= 1199) {
    $("#menu-id").click(function (e) {
      e.preventDefault();
      $(".overlay-box").fadeToggle(300);
      $(".navgition").toggleClass("reset-left");
      $("body").toggleClass("overflow");
    });
    $(".nav-head .close-btn, .overlay-box, .big-menu li a").click(function () {
      $(".overlay-box").fadeOut(300);
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
    });
  }
  $("#menu-id").click(function () {
    $(".menu-bars .bars").toggleClass("open-bars");
    $(".menu-bars .bars").toggleClass("close-bars");
  });
  //fixed nav
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });
  ///////// **screen-section** /////////
  var screen = new Swiper(".screen-section .swiper-container", {
    loop: true,
    autoplay: true,
    centeredSlides: true,
    allowTouchMove: false,
    slideToClickedSlide: true,
    // effect: 'fade',
    navigation: {
      nextEl: ".screen-section .swiper-btn-next",
      prevEl: ".screen-section .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1199: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
  });
  ///////// ** review** /////////
  var reviews = new Swiper(".review-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".review-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".review-slider .swiper-btn-next",
      prevEl: ".review-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });

  //scroll down button to about us section
  $("#scroll-to-about-section").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      1000
    );
  });
  // //scroll down button to section
  $(".big-menu a").click(function () {
    if (this.hasAttribute("id")) {
      let cc = this.id;
      let xx = cc.toString().indexOf("-") + 1;
      let target = cc.slice(xx);
      $("html, body").animate(
        {
          scrollTop: $(`#${target}`).offset().top,
        },
        1000
      );
    } else {
      false;
    }
  });
     //////////** fixed arrow to top**//////////
     $(".arrow-top").click(function () {
      $("html,body").animate({
        scrollTop: 0
      }, 1500);
    });
    $(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(300) : $(".arrow-top").fadeOut(300);
    
    $(window).scroll(function () {
      $(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(300) : $(".arrow-top").fadeOut(300);
    });
});
