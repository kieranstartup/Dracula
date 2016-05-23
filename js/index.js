//Add gyroscope support
var view = { h: 0, el: null };

window.addEventListener("load", function(e) {
    view.el = document.getElementById("iphone-6");
    window.addEventListener("resize", resizeEvent, false);
    window.addEventListener("orientationchange", resizeEvent, false);
    resizeEvent(e);
}, false);

function resizeEvent(e) {
    var h = view.h;
    view.h = window.innerHeight;
    if (h != view.h) {}
}

function prefixedTransform(el, val) {
    el.style.webkitTransform = val;
    el.style.mozTransform = val;
    el.style.oTransform = val;
    el.style.msTransform = val;
    el.style.transform = val;
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    // window.ontouchmove = preventDefault; // mobile - this prevents all scrolling - we only need to stop vertical scrolling
    document.onkeydown = preventDefaultForScrollKeys;
}


function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

// jQuery.fn.center = function() {
//     this.css("position", "absolute");
//     this.css("margin-top", Math.max((0, ((jQuery(window).height() - jQuery(this).outerHeight()) / 2) + jQuery(window).scrollTop()) + "px");
//     // this.css("margin-left", Math.max(0, ((jQuery(window).width() - jQuery(this).outerWidth()) / 2) + jQuery(window).scrollLeft()) + "px");
//     return this;
// };

jQuery('.page-container').hide();

// var scrollPosition;

// jQuery('#wrapper').bind("scroll", function() {
//     if (jQuery('#wrapper').scrollTop()) {
//         scrollPosition = jQuery('#wrapper').scrollTop();
//         console.log(jQuery('#wrapper').scrollTop());
//     } else {
//         console.log(jQuery('#wrapper').scrollTop());
//     }
// });









jQuery(document.body).on('touchstart', '.page', function() { //Change to touchstart

    var randomClass = 3;
    var randomNumber = Math.round(Math.random() * (randomClass - 1)) + 1;








    // Initialise & Random Number
    jQuery(this).addClass("activated").addClass('scaled-' + randomNumber);
    // .addClass("activated")
    // jQuery(".page-container").css('top', '99999').append(this);


    // jQuery(this).center(true);

    // jQuery(".page-container").css('top' , scrollPosition);
    // jQuery(".page-container").css('z-index' , '99999');


    // jQuery('.page-container').show();




    // Remove Hidden Class
    // jQuery(this).find('.hidden').removeClass('hidden').addClass('visible');

    // var offset = jQuery(this).offset().top;
    // var actualOffset = offset + 64;
    // console.log("offset equals " + offset);
    // console.log("calculated offset equals " + actualOffset);
    // jQuery(this).css('top' , actualOffset);
    // disableScroll();


    // Exiting - Reset All
    jQuery(document.body).on('touchstart', '.activated', function() { //Change to Touchstart
        enableScroll();

        // Remove Activated Class & Random Number
        // jQuery(this).css('z-index' , '0');
        // jQuery(this).prepend("#p5");
        //.unwrap(".page-container") 
        // jQuery(this).parent().prepend(jQuery(this));


        // jQuery(this).parent().find(jQuery(this).next()).before(jQuery(this));


        jQuery(this).removeClass("activated scaled-1 scaled-2 scaled-3");
        // jQuery('.page').not(this).show();
        // jQuery(this, '.page').unwrap();

        // Add Hidden Class
        // jQuery(this).find('.visible').removeClass('visible').addClass('hidden');

    });

});