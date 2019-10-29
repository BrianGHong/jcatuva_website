(function ($) {
  "use strict";

  // Officer adder
  function officer(img, name, position, year, major, funfact, delay) {
    $('#officer-list').append('<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="'+delay+'"> <div class="member"> <img src="' + img + '" class="img-fluid" alt=""> <div class="member-info"> <div class="member-info-content"> <h4>' + name + '</h4> <span>' + position + '</span> <ul style="text-align:left; font-size: 12px; color: white;"> <li>' + year + '</li> <li>' + major + '</li> <li>' + funfact + '</li> </ul> </div> </div> </div> </div>');
  }

  officer('https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/57579904_2173364496120137_4126845169179820032_n.jpg?_nc_cat=103&_nc_oc=AQlnU-OSf0paZOe6dqMOTeppBMmrE6yqspkU7pbRg1Ynd34UTovM2LGObhwxetuQrg0&_nc_ht=scontent-iad3-1.xx&oh=47234a7ad38370a395ddb40499352514&oe=5DE68F2E', 'Chelsea Wells', 'President', '3rd year', 'Cognitive Science & Foreign Affairs', 'Self-proclaimed ramen expert.', '0s');
  officer('img/profiles/jimmy.png', 'Jimmy Chiou', 'Vice President', '2nd year', 'Computer Science & Physics', 'I main Zelda in Smash.', '0.2s');
  officer('https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/36753831_2019094004792134_939369902379106304_n.jpg?_nc_cat=103&_nc_oc=AQmOyeURPI93Nzhq7_d1JhtDNwB114MciFEMA32Kmmdkcm4ngFZa724YLpkScOUjjFU&_nc_ht=scontent-iad3-1.xx&oh=a8f7e17f310948cbb35e423f1bbcdd2d&oe=5DD4611D', 'Marguerite Franklin', 'Treasurer', '4th year', 'Biology & Japanese', 'I’ve been doing Karate since I was in Kindergarten.', '0.4s');
  officer('img/profiles/victor.png', 'Victor Yang', 'Secretary', '3rd year', 'Aerospace Engineering and Japanese', 'I studied abroad at Kyoto last summer.', '0.6s');

  officer('img/profiles/lada.png', 'Lada Semicheva', 'Culture Chair', '3rd year', 'Computer Science & Art', 'I did all of the escape rooms in my area.', '0s');
  officer('https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/66425319_696735410765542_3836183583840534528_n.jpg?_nc_cat=101&_nc_oc=AQnplI4OsSdgtg-xl91_Esk92vNeT9FJ2lFZ-HzxyRkQfIstWzIywg4iYXzXZjhPfS0&_nc_ht=scontent-iad3-1.xx&oh=57e80f2528869353f9080a8c73598fe0&oe=5DE61140', 'Lona Lu', 'Culture Chair', '3rd year', 'Computer Science', 'My memory is usually in third person perspective.', '0.2s');
  officer('img/profiles/alex.jpg', 'Alex Lafountain', 'Academic Chair', '4th year', 'Japanese', 'I once hit platinum in League of Legends.', '0.4s');
  officer('https://scontent.fric1-1.fna.fbcdn.net/v/t1.0-9/49668486_1999612076798523_5111147825408770048_n.jpg?_nc_cat=110&_nc_oc=AQl5tXie-9uU6QSSZpwwuwxlLkU50uQ4vcIxSrW2fk0vnPO70B7bvYA-Mz6H_onmOoseTDt4aBMCxzW8J__6_l39&_nc_ht=scontent.fric1-1.fna&oh=a816fb810efa1a1552637d585461b890&oe=5E1A8A7F', 'Brian Hong', 'Publicity', '4th year', 'Computer Science', 'Somewhat of an indie app/game developer.', '0.6s');

  officer('https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/21616556_1572205609508994_4913336042716249863_n.jpg?_nc_cat=103&_nc_oc=AQkRyp8xqWzqYLBri_-BBvPwHKzy3-rXHYHwP0QYI-Cao4pQ464fzLLEYHRMDOSWYec&_nc_ht=scontent-iad3-1.xx&oh=9a7d192c610785691b2ac251c3af80bf&oe=5DEEDDD1', 'Carl Zhang', 'Fundraising/Family', '4th year', 'Computer Science', 'My League of Legends team for UVA LCS won first place in the recent Spring 2019 split.', '0s');
  officer('img/profiles/hua.png', 'Hua Uehara', 'Family Head', '4th year', 'Computer Engineering', 'I built my first robot when I was in highschool.', '0.2s');
  officer('https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/47684571_2373183302754934_2098768320747536384_n.jpg?_nc_cat=110&_nc_oc=AQlXmmPH-_Wg1q5AQK6myWSV7kbaI7xZwL4l1uriUTcs3DNsJL7J96k5rP_WvI6i3GE&_nc_ht=scontent-iad3-1.xx&oh=42685514a94a6c9e930847c5340c1619&oe=5DDF7F19', 'Thu Tran', 'Family Head', '4th year', 'Electrical Engineering', 'I’ve been mario karting in Tokyo.', '0.4s');
  officer('https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/31784412_2117996881756274_6804550514215223296_n.jpg?_nc_cat=102&_nc_oc=AQmdw3JZDvyMT8Si0LMf5oMIxjTWExie8I6BGWZpBTbGKNRA5Irx3mRj0-xUiXrfKPU&_nc_ht=scontent-iad3-1.xx&oh=46f0266d39e58d0956e89ae6040cd9d5&oe=5DE5F57F', 'Alyssa Luehring', 'Family Head', '2nd year', 'East Asian Studies', 'I’m an Irish dancer and am oddly proficient in finding 4 leaf clovers.', '0.6s');

  officer('img/profiles/mcd.png', 'Mary Catherine Dudley', 'Family Head', '2nd year', 'Japanese & Foreign Affairs', 'I can make a latte in less than 50 seconds.', '0s');
  officer('img/profiles/adrian.png', 'Adrian Thinnyun', 'Family Head', '3rd year', 'Computer Science and Cognitive Science', 'I can play 12 different instruments.', '0.2s');


  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
  
    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('menu-active menu-item-active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('menu-active menu-item-active');
      }
    });
  });

  // Intro carousel
  var introCarousel = $(".carousel");
  var introCarouselIndicators = $(".carousel-indicators");
  introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");

    $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') +"')");
    $(this).children('.carousel-background').remove();
  });

  $(".carousel").swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll:"vertical"
  });

  // Skills section
  $('#skills').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, { offset: '80%'} );

  // jQuery counterUp (used in Facts section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

})(jQuery);

