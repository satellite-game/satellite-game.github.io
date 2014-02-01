$(function () {
  var links = $('.navigation').find('li');
  var slide = $('.slide');
  var scrollAnchor = $('.scroll-anchor');
  var myWindow = $(window);
  var htmlBody = $('html,body');
  myWindow.stellar();

  slide.waypoint(function (event, direction) {
    dataslide = $(this).attr('data-section');

    if (direction === 'down') {
      $('.navigation li[data-section="' + dataslide + '"]').addClass('active').prev().removeClass('active');
    } else {
      $('.navigation li[data-section="' + dataslide + '"]').addClass('active').next().removeClass('active');
    }
  });

  myWindow.scroll(function () {
    if (myWindow.scrollTop() === 0) {
      $('.navigation li[data-section="1"]').addClass('active');
      $('.navigation li[data-section="2"]').removeClass('active');
    }
  });

  var goToByScroll = function (dataSlide) {
    // find the slide section element
    var slide = $('.slide[data-section="' + dataslide + '"]');
    // store navbar height value
    var navHeight = $('.navbar-inner').height();
    // store slide top padding value
    var slidePadding = parseInt(slide.css('padding-top').slice(0, -2));
    // store slide position on screen
    var slidePosition = slide.offset().top;
    // calculate target position to scroll by using slidePosition, then remove
    // the height of the navigation bar (so it always display the title) and add half
    // of the slide padding, so it adds some space between nav bar and the title
    var scrollPosition = slidePosition - navHeight + (slidePadding / 2);

    // scroll to target position
    htmlBody.animate({
      scrollTop: scrollPosition
    }, 1200, 'easeInOutQuint');
  };

  links.click(function (e) {
    e.preventDefault();
    dataslide = $(this).attr('data-section');
    goToByScroll(dataslide);
  });

  scrollAnchor.on('click', function (e) {
    dataslide = $(this).attr('data-section');
    goToByScroll(dataslide);
    e.preventDefault();
  });
});

$(window).load(function () { // makes sure the whole site is loaded
  $("#status").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
});

// Menu active class
////Fade In/Out up_arrow
$(window).bind("scroll", function () {
  if ($(this).scrollTop() > 750) {
    $("#up_arrow").fadeIn();
  } else {
    $("#up_arrow").stop().fadeOut(1);
  }
});

////Fade In/Out up_arrow
$(window).bind("scroll", function () {
  if ($(this).scrollTop() > 750) {
    $("#down_arrow").css('disQuickstart', 'none');
  } else {
    $("#down_arrow").css('disQuickstart', 'block');
  }
});

////Fade Slide 1 Container
$('.serv, #testimonialsCarousel, #members, #subArea3 .container, .table').css('opacity', '0');

// call waypoint plugin
$('.serv, #testimonialsCarousel, #members, #subArea3 .container, .table').waypoint(function (event, direction) {
  // do your fade in here
  $(this).addClass('animated fadeInUp');
}, {
  offset: '90%'
});

$('a').click(function (e) {
  return true;
});

/// Welcome Message
$(document).ready(function () {
    $('#welcome_message').addClass('animated fadeInUp');
});

// Team members description box on mouse over
$(function () {
  var member = $('.team-member-info');
  member.on('mouseenter', function () {
    $(this).find('.team-role').stop(true, true).fadeIn();
  });
  member.on('mouseleave', function () {
    $(this).find('.team-role').fadeOut();
  });
});

$(function() {
  $('.nav-condensed-menu').on('click', function (e) {
    $('.navigation').toggleClass('notVisible');
    $('.navigation').toggleClass('visible');
    e.preventDefault();
  });
});
