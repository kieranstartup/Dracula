jQuery(document).ready(function() {
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
        window.ontouchmove = preventDefault; // mobile - this prevents all scrolling - we only need to stop vertical scrolling
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





    jQuery(document.body).on('click tap', '.page', function() {
        disableScroll();
        if (jQuery(this).hasClass('no-click')) {
            return false;
        }
        // Generate number between 1 & 3
        var randomClass = 3;
        var randomNumber = Math.round(Math.random() * (randomClass - 1)) + 1;

        // Initialise & Random Number
        jQuery(this).addClass("activated").addClass('scaled-' + randomNumber);
        jQuery('.page').not(this).addClass('no-click');

        var wrapper_scrollTop = jQuery('#wrapper').scrollTop(); //gets amount scrolled
        var half_wrapper = jQuery('#wrapper').height() * (0.5); //50% of wrapper height
        jQuery(this).css('top', half_wrapper + wrapper_scrollTop);

        // Exiting - Reset All
        // jQuery(document.body).on('click tap', '.activated', function() { //Change to Touchstart
        // jQuery(".activated").on("click tap", function() {

    });

    // jQuery(".page").on('click tap', '.activated' , function() {
    jQuery(document.body).on('click tap', '.activated', function() {
        jQuery('.page').removeClass('no-click');
        jQuery(this).removeClass("activated scaled-1 scaled-2 scaled-3"); //Remove all added classes
        jQuery(this).css('top', ''); //Reset inline top style
        enableScroll();
    });

});