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




// jQuery.fn.center = function () {
//             var top = Math.max(jQuery(window).height() / 2 - jQuery(this)[0].offsetHeight / 2, 0);
//             var left = Math.max(jQuery(window).width() / 2 - jQuery(this)[0].offsetWidth / 2, 0);
//             console.log(top);
//             console.log(left);
//             jQuery(this).css('top', top + "px");
//             jQuery(this).css('left', left + "px");
//             jQuery(this).css('position', 'absolute');
// };

// Helper function to get an element's exact position
// function getPosition(el) {
//   var xPos = 0;
//   var yPos = 0;
 
//   while (el) {
//     if (el.tagName == "BODY") {
//       // deal with browser quirks with body/window/document and page scroll
//       var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
//       var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
//       xPos += (el.offsetLeft - xScroll + el.clientLeft);
//       yPos += (el.offsetTop - yScroll + el.clientTop);
//     } else {
//       // for all other non-BODY elements
//       xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
//       yPos += (el.offsetTop - el.scrollTop + el.clientTop);
//     }
 
//     el = el.offsetParent;
//   }
//   return {
//     x: xPos,
//     y: yPos
//   };
// }
 
// // deal with the page getting resized or scrolled
// window.addEventListener("scroll", updatePosition, false);
// window.addEventListener("resize", updatePosition, false);
 
// function updatePosition() {
//   // add your code to update the position when your browser
//   // is resized or scrolled
// }


    // function GetScreenCordinates(obj) {
    //     var p = {};
    //     p.x = obj.offsetLeft;
    //     p.y = obj.offsetTop;
    //     while (obj.offsetParent) {
    //         p.x = p.x + obj.offsetParent.offsetLeft;
    //         p.y = p.y + obj.offsetParent.offsetTop;
    //         if (obj == document.getElementsByTagName("body")[0]) {
    //             break;
    //         }
    //         else {
    //             obj = obj.offsetParent;
    //         }
    //     }
    //     return p;
    // }


    //     function GetTextboxCordinates() {
    //         var element = jQuery(".active");
    //         var p = GetScreenCordinates(element);
    //         alert("X:" + p.x + " Y:" + p.y);
    //     }



jQuery('.page-container').hide();

jQuery(document.body).on('touchstart', '.page', function() { //Change to touchstart

    var randomClass = 3;
    var randomNumber = Math.round(Math.random() * (randomClass - 1)) + 1;
    // jQuery(this).addClass("active");

// GetTextboxCordinates();

    // Initialise & Random Number
    jQuery(this).addClass("activated").addClass('scaled-' + randomNumber);
// jQuery(this).center();


// var myElement = jQuery(this);
// var position = getPosition(myElement);
// console.log("The image is located at: " + position.x + ", " + position.y);



    // Exiting - Reset All
    jQuery(document.body).on('touchstart', '.activated', function() { //Change to Touchstart
        enableScroll();

        // Remove Activated Class & Random Number
        jQuery(this).removeClass("activated scaled-1 scaled-2 scaled-3");
        // jQuery('.page').not(this).show();
        // jQuery(this, '.page').unwrap();

        // Add Hidden Class
        // jQuery(this).find('.visible').removeClass('visible').addClass('hidden');

    });

});