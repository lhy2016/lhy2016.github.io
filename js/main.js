/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';
  $( window ).resize(function() {
      var set = $(".header-content").prevAll("h1");
      var length = set.length;
      var topBase = $("#typeArea").position().top - 15;
      for (var i = 0;i < length;i++) {
        var curHeight = set.eq(i).outerHeight();
        topBase -= (curHeight + 13);
        set.eq(i).css("top",topBase);
        var arrowRight = set.eq(i).next();
        var arrowHeight = arrowRight.outerHeight();
        var left = set.eq(i).position().left + set.eq(i).outerWidth();
        arrowRight.css("top", topBase + (curHeight - arrowHeight)/2.0);
        arrowRight.css("left", left + arrowRight.width());
      }

  });
  var bgswitcher;
  setTimeout(function(){
    bgswitcher = $("#header").bgswitcher({
    images: ["./images/home-bg.jpg", "./images/laguna.jpg", "./images/monica.jpg", "./images/tahoe.jpg"],
    loop: true,
    interval: 5500,
    instruction: ['',
                  'Photographed at Laguna Beach, CA',
                  'Took a photo of my grilfriend who\'s taking photos of a seagull, at gorgeous Santa Monica Beach!',
                  'Photographed at my favourite Lake Tahoe',
                  ]
  }, 5500);
  });


  $("#arrow-forward").on("click", function() {
      bgswitcher.bgswitcher("next");
    });
  $("#arrow-back").on("click", function() {
      bgswitcher.bgswitcher("prev");
    });

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typedContent = $(".typed");
  var headerContent = $(".header-content");
  var index = 0;
  $(function() {
    typedContent.typed({
      strings: ["<span id='greeting'>Hi</span> there,", "I'm <span id='myName'>Haoyang Liu</span>.",  "I'm a <span id='role'>Web Developer</span>."],
      typeSpeed: 25,
      startDelay: 200,
      loop: false,
      onStringTyped: function() {
        var currentTop = $("#typeArea").position().top-15;
          headerContent.before(
            "<h1 class = 'message' style=\"color:#eeeeee;position:absolute;top:"+currentTop
            +"px;font-family: 'Roboto', sans-serif;padding:6px;"
            +"background-color:rgba(30,30,30,0.35);border-radius: 7px\"><b>"
            +typedContent.html()+"</b></h1>" +
              "<span style = 'position:absolute;top:"+currentTop
              +"px' class='arrow-right'></span>");
        typedContent.empty();
        var height = headerContent.prev(".arrow-right").prev("h1").outerHeight();
        var arrow = headerContent.prev(".arrow-right");
        arrow.css("top", arrow.position().top + height/2.0-10);
        $("#main-panel > h1").each(function(){
            var arrow = $(this).next(".arrow-right");
            var height = $(this).outerHeight();
            var width = $(this).width();
            arrow.css("left", width+27);
            var newTop =  $(this).position().top - height - 13;
            $(this).animate({
               top: newTop,
            });
            arrow.animate({
              top: newTop + height/2.0-10,
            });
            //$(this).css("top", newTop);
        });
        if (index == 0) {
          $("#greeting").css("background","-webkit-linear-gradient(#c46827, #dbb151)");
          $("#greeting").css("-webkit-background-clip","text");
          $("#greeting").css("-webkit-text-fill-color","transparent");
        }
        else if (index == 1) {
          $("#myName").css("background","-webkit-linear-gradient(#c46827, #dbb151)");
          $("#myName").css("-webkit-background-clip","text");
          $("#myName").css("-webkit-text-fill-color","transparent");
        }
        else if (index == 2) {
          $("#role").css("background","-webkit-linear-gradient(#c46827, #dbb151)");
          $("#role").css("-webkit-background-clip","text");
          $("#role").css("-webkit-text-fill-color","transparent");
          var currentHeight = $("#typeArea").outerHeight();
          $(".typed-cursor").html("");
          $("#typeArea").css("height", currentHeight);

          // $(".header-content").prevAll().each(function(){
          //   var curTop = $(this).position().top;
          //   var curVh = $(window).height();
          //   $(this).animate({
          //     top: curTop - 20,
          //   });
          // });
          var arrowBack = $("#arrow-back");
          var arrowForward = $("#arrow-forward");
          var aboutMe = $(".moreAboutMe");
          var social = $(".list-social");
          aboutMe
              .addClass('block')
              .outerWidth(); // Reflow
          aboutMe
              .addClass('fade-in')
              .one(null, function() {
              });
          arrowBack.addClass('block').outerWidth();
          arrowBack.addClass('fade-in').one(null, function() {});
          arrowBack.css("display","inline");

          arrowForward.addClass('block').outerWidth();
          arrowForward.addClass('fade-in').one(null, function() {});
          arrowForward.css("display","inline");

          social.addClass('block').outerWidth();
          social.addClass('fade-in').one(null, function() {});
          social.css("opacity","1");

        }
        index++;
        },
      backSpeed:0,
      wantBackSpace:false
    });
  });
  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });


  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //


  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });


  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function() {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // Call the functions
  magnifPopup();
});
