(function($){
    "use strict";

    // Preloader
    $(window).load(function() {
        $("#loading").fadeOut(500);
    });

    // Time Count Down
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
          $this.html(event.strftime('<div class="time-count">%D <span>Days</span></div> <div class="time-count">%H <span>Hour</span></div> <div class="time-count">%M <span>Minutes</span></div> <div class="time-count">%S <span>Second</span></div>'));
        });
    });    

    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
      });
    
    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });

    // sticky
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
            $("#header-sticky").removeClass("sticky-menu");
        } else {
            $("#header-sticky").addClass("sticky-menu");
        }
    });

    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    $('.testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.test-img-active',
    });
    $('.test-img-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-active',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        arrows: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.brand-active').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    
    // Scroll Top
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $("#scroll-top").addClass("scroll-show");
        }
        else{
            $("#scroll-top").removeClass("scroll-show");
        }
    });

    $("#scroll-top").click(function(){
        $("html, body").animate({
            scrollTop: 0,
        }, 500);
    });

})(jQuery);