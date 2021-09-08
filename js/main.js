/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // Home背景图Switcher
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

  // 背景图切换 左右按钮
  $("#arrow-forward").on("click", function() {
      bgswitcher.bgswitcher("next");
    });
  $("#arrow-back").on("click", function() {
      bgswitcher.bgswitcher("prev");
    });
  
  // About Me 按钮滚屏
  $(".moreAboutMe").on("click", function() {
      $('html, body').animate({
        scrollTop: ($('#about').first().offset().top)
      },500);
  });

  $("#social-mail-link").click(function(e) {
    e.preventDefault();
    var mail = $("#contact");
    $('html, body').animate({
      scrollTop: mail.offset().top - 80
    }, 500);
  });
  

  // Resume部分 按钮
  var doubleDown = "<i style=\"margin-left:5px\" class=\"fas fa-angle-double-down\" aria-hidden=\"true\"></i>";
  var doubleUp = "<i style=\"margin-left:5px\" class=\"fas fa-angle-double-up\" aria-hidden=\"true\"></i>";
  $("#showResume").on("click", function(event) {
    event.preventDefault();
    if ($(this).text() == "Expend") {
      $("#myResume").animate({
          height:"800px"
      },500);
      $(this).text("Collapse");
      $(this).append(doubleUp);
    } else {
      $("#myResume").animate({
          height:"0"
      },500);
      $(this).text("Expend");
      $(this).append(doubleDown);
    }
  });

  


  // ========================================================================= //
  //  //SMOOTH SCROLL, 点击navbar的link 页面平滑滚动到相应的区
  // ========================================================================= //

   
  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('#main-nav .responsive').click();
      }
    });

    $(this).addClass('active');

    var target = this.hash;
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
      $('nav#main-nav ul.nav-menu li a').each(function(index) {
        var currLink = $(this);
        var top = $(this.hash).offset().top - $(window).scrollTop();
        var height = $(this.hash).outerHeight();
        if (top <= 90 && top >= 0 - height + 90) {
          $('nav#main-nav ul.nav-menu li a').removeClass('active');
          $(this).addClass('active');
        } 
        if (index == $('nav#main-nav ul.nav-menu li a').length - 1 && isAtPageBottom()) {
          $('nav#main-nav ul.nav-menu li a').removeClass('active');
          $(this).addClass('active');
        }

        var refElement = $(currLink.attr("href"));
        
      });
    }
  }
  function isAtPageBottom() {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;
    return offset >= height;
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(500);
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
    // $('.nav-menu').slideToggle();
    $('.nav-menu').toggleClass("show");
    if ($('.nav-menu').hasClass("show")) {
      $('.responsive').html('<ion-icon name="close"></ion-icon>');
    } else {
      $('.responsive').html('<ion-icon name="menu"></ion-icon>');
    }
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typedContent = $(".typed");
  var msgContainer = $(".msg-container");
  var index = 0;
  var inputStrings = ["<span>Hi</span> there,", 
  "I'm <span>Haoyang Liu</span>.",  
  "I'm a <span>Software Engineer</span>."];
  $(function() {
    typedContent.typed({
      strings: inputStrings,
      typeSpeed: 27,
      startDelay: 200,
      loop: false,
      onStringTyped: function() {
        // 着色
        if (typedContent.html().includes("</span>")) {
          typedContent.find("span").each(function() {
            $(this).addClass("colored-msg");
          })
        }
        // 插入container
        msgContainer.append("<h1 class = 'msg'>" +
              "<b>" + typedContent.html()+"</b>"+
              "<span class='arrow-right'></span>" + 
            "</h1>");
        //清空打字条
        typedContent.empty();
        
        //动画，container上边界扩充
        var typedMsgs = msgContainer.children();
        var lastMsg = $(typedMsgs[typedMsgs.length - 1]);
        var mxh = ((lastMsg.outerHeight() + parseInt(lastMsg.css("margin-bottom")) )  * (index + 1)) + "px";
        msgContainer.animate({
          maxHeight: mxh,
        } ,600);

        //动画，每个msg往上滑
        lastMsg.animate({
          top: "0px",
        }, 600);
    
       //最后一条msg后的行为
        if (index == inputStrings.length - 1) {
         
          var currentHeight = $("#typeArea").outerHeight();
          $(".typed-cursor").html("");
          $("#typeArea").css("height", currentHeight);

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
          setInterval(() => {
            $("#about-me-double-down").animate({
              opacity: 0.15
            },500);
            $("#about-me-double-down").animate({
              opacity:1,
            },500);
          }, 1200);
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
  // 改变窗口大小时
  $( window ).resize(function() {
    // 调整message框的高度
    var msgs = msgContainer.children();
    var length = msgContainer.children().length;
    var msgHeight = $(msgs[length - 1]).outerHeight();
    var msgMarginBtm = parseInt($(msgs[length - 1]).css("margin-bottom") );
    msgContainer.css("maxHeight", ((msgHeight + msgMarginBtm) * length) + "px");
      // var length = set.length;
      // var topBase = $("#typeArea").position().top - 15;
      // for (var i = 0;i < length;i++) {
      //   var curHeight = set.eq(i).outerHeight();
      //   topBase -= (curHeight + 13);
      //   set.eq(i).css("top",topBase);
      // }

  });
  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //

  for(var i = 0; i < skilArr.length; i++) {
    var progress = skilArr[i]['exp']/7*100 + "%";
    var barBackColor = "color" in skilArr[i] ? skilArr[i]["color"].split(",")[1] : "grey";
    var barColor = "color" in skilArr[i] ? skilArr[i]["color"].split(",")[0] : "red";
    $("#services .services-carousel").append('\
        <div class="services-block" id="'+ i +'">\
          <div class="logo-container">\
            <img src="images/'+ skilArr[i]['skill']+'.png" style="width:' + skilArr[i]["width"] + 'px;">\
          </div>\
          <div class="bar-back" style="background-color:'+ barBackColor +';">\
            <div class="bar" style="width: ' + progress + ';background-color:' + barColor + ' ">\
              <div class="bar-text">'+ skilArr[i]['exp'] + (skilArr[i]['exp'] > 1 ? ' yrs' : ' yr') + '</div></div>\
          </div>\
          <p class="separator skills-descp">'+ skilArr[i]['content'] +'</p>\
        </div>'); 
  }

  $('.services-carousel').owlCarousel({
      autoplay: true,
      autoplayTimeout:9000,
      dotsSpeed:80,
      loop: true,
      margin: 0,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });

  //   $('.owl-item.active').each(function() {
  //     var children = $(this).children(".services-block");
  //     if (children.length > 0) {
  //         var $child = $(children[0]);
  //         var index = $child.attr('id');
  //         var chart = $child.children(".bar-container")[0];
  //         var $curChart = $($child.children(".bar-container")[0]);
  //         var svgs = $curChart.children("svg");
  //         if (svgs.length == 0) {
  //           var bar = new ProgressBar.SemiCircle(chart, {
  //             strokeWidth: 6,
  //             color: '#FFEA82',
  //             trailColor: '#eee',
  //             trailWidth: 3,
  //             easing: 'easeInOut',
  //             duration: 1000,
  //             svgStyle: null,
  //             text: {
  //               value: inputtext[index],
  //               className: 'progressbar__label',
  //               alignToBottom: true
  //             },
  //             from: {color: '#FFEA82'},
  //             to: {color: '#ED6A5A'},
  //             // Set default step function for all animate calls
  //             step: (state, bar) => {
  //               bar.path.setAttribute('stroke', state.color);
  //               var value = Math.round(bar.value() * 100);
  //               if (value === 0) {
  //                 bar.setText('');
  //               } else {
  //                 bar.setText(bar._opts.text.value + ": " + value + "%");
  //               }

  //               bar.text.style.color = state.color;
  //             }
  //           });

  //           bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  //           bar.text.style.fontSize = '16px';
  //           bar.text.style.whiteSpace = 'nowrap';
  //           bar.animate(progress[index], function() {
  //             var $skillDesp = $($child.children(".skills-descp")[0]);
  //             if (($skillDesp).css("visibility") == "hidden") {
  //               ($skillDesp).css("visibility","visible");
  //             }
  //           });
  //       }
  //     }
  //   });
 
  // $('.services-carousel').on('changed.owl.carousel', function(event) {
  //   $(".bar-container").each(function() {
  //       $(this).css("height", $(this).css("width")/2+5.0);
  //     });
  // });

  // $('.services-carousel').on('translated.owl.carousel', function(event) {
  //   $('.active').each(function() {
  //     var children = $(this).children(".services-block");
  //     if (children.length > 0) {
  //         var $child = $(children[0]);
  //         var index = $child.attr('id');
  //         var chart = $child.children(".bar-container")[0];
  //         var $curChart = $($child.children(".bar-container")[0]);
  //         var svgs = $curChart.children("svg");
  //         if (svgs.length == 0) {
  //           var bar = new ProgressBar.SemiCircle(chart, {
  //             strokeWidth: 6,
  //             color: '#FFEA82',
  //             trailColor: '#eee',
  //             trailWidth: 3,
  //             easing: 'easeInOut',
  //             duration: 1000,
  //             svgStyle: null,
  //             text: {
  //               value: inputtext[index],
  //               className: 'progressbar__label',
  //               alignToBottom: true
  //             },
  //             from: {color: '#FFEA82'},
  //             to: {color: '#ED6A5A'},
  //             // Set default step function for all animate calls
  //             step: (state, bar) => {
  //               bar.path.setAttribute('stroke', state.color);
  //               var value = Math.round(bar.value() * 100);
  //               if (value === 0) {
  //                 bar.setText('');
  //               } else {
  //                 bar.setText(bar._opts.text.value + ": " + value + "%");
  //               }

  //               bar.text.style.color = state.color;
  //             }
  //           });

  //           bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  //           bar.text.style.fontSize = '16px';
  //           bar.animate(progress[index], function() {
  //             var $skillDesp = $($child.children(".skills-descp")[0]);
  //             if (($skillDesp).css("visibility") == "hidden") {
  //               ($skillDesp).css("visibility","visible");
  //             }
  //           });
  //       }
  //     }
  //   });
  // })


  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //


  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });
  portfolioIsotope.imagesLoaded().progress( function() {
    portfolioIsotope.isotope('layout');
  });
  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });
  $(".popup-img img").mouseover(function() {
    $(this).css("background","linear-gradient(rgba(20,20,20, .5), rgba(20,20,20, .5))");
  });

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  // var magnifPopup = function() {
  //   $('.popup-img').magnificPopup({
  //     type: 'image',
  //     removalDelay: 300,
  //     mainClass: 'mfp-with-zoom',
  //     gallery: {
  //       enabled: true
  //     },
  //     zoom: {
  //       enabled: true, // By default it's false, so don't forget to enable it

  //       duration: 300, // duration of the effect, in milliseconds
  //       easing: 'ease-in-out', // CSS transition easing function

  //       // The "opener" function should return the element from which popup will be zoomed in
  //       // and to which popup will be scaled down
  //       // By defailt it looks for an image tag:
  //       opener: function(openerElement) {
  //         // openerElement is the element on which popup was initialized, in this case its <a> tag
  //         // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          
  //         return openerElement.is('img') ? openerElement : openerElement.find('img');
  //       }
  //     },
  //     callbacks: {
  //       open: function() {
  //         console.log("opend");

  //       },
  //       close: function() {
  //         console.log("closed");
  //       }
  //   // e.t.c.
  //     }
  //   });
  // };


  // // Call the functions
  // magnifPopup();
});

