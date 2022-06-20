$(document).ready(function () {
  // header
  $(window).on('load scroll', function () {
    let window_top = $(this).scrollTop();
    if(window_top > 80 && !$('body').hasClass('leavetop')) {
      $('body').addClass("leavetop");
    };

    if(window_top < 80 && $('body').hasClass('leavetop')) {
      $('body').removeClass("leavetop");
    };
    
  });
  

  //index commet
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 1080px
      1080: {
        slidesPerView: 3,
      }
    }
  });

  //gotop
  $("#gotop").click(function (e) { 
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0,
    }, 800)
  });

  //project
  $($(".tab-project-nav li").eq(0).addClass("active").find("a").attr("href")).siblings(".tab-project-content").hide();
  $(".tab-project-nav li").click(function (e) { 
    e.preventDefault();
    $($(this).addClass("active").find("a").attr("href")).fadeIn().addClass("active").siblings(".tab-project-content").hide().removeClass("active");
    $(this).siblings().removeClass("active");
  });


  //QA
  $(".question-list").click(function (e) { 
    $(this).toggleClass("active").find('.question-list-text').slideToggle();
    $(this).siblings().removeClass("active").find('.question-list-text').slideUp();
  });

});