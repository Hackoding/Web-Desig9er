// $(document).ready(function() {
//   "use strict";

//   var window_width = $(window).width(),
//     window_height = window.innerHeight,
//     header_height = $(".default-header").height(),
//     header_height_static = $(".site-header.static").outerHeight(),
//     fitscreen = window_height - header_height;

//   $(".fullscreen").css("height", window_height);
//   $(".fitscreen").css("height", fitscreen);

//   -------- Active Sticky Js ----------//
//   $(".default-header").sticky({ topSpacing: 0 });
// });

/* -------------------------------------------------------------------
        Header Scroll Class js
     ------------------------------------------------------------------ */

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  } else {
    $("#header").removeClass("header-scrolled");
  }
});

/* -------------------------------------------------------------------
    Smooth Scroll js
 ------------------------------------------------------------------ */
$('.nav-menu li a[href^="#"]').on("click", function(e) {
  e.preventDefault();
  var target = this.hash;
  $target = $(target);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top 
      },
      900,
      "swing",
      function() {
        window.location.hash = target;
      }
    );
});












//------- Water Ripple  js --------//
$(document).ready(function(){
  $('.banner').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
  });

  
  // Automatic drops
  setInterval(function() {
    var $el = $('.banner');
    var x = Math.random() * $el.outerWidth();
    var y = Math.random() * $el.outerHeight();
    var dropRadius = 20;
    var strength = 0.04 + Math.random() * 0.04;

    $el.ripples('drop', x, y, dropRadius, strength);
  }, 400);
});


//------- Water Ripple  js --------//

// typewriter
var app = document.getElementById("app");
var typewriter = new Typewriter(app, {
  loop: true
});

typewriter
  .typeString("Web Developer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Business Analyst")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Web Designer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Content Writer")
  .pauseFor(1000)
  .deleteAll()
  .start();




