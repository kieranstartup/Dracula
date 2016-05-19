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
    if (h != view.h) {
        // var f = 1;
        // var str = "scale(" + f + ")"; //"translate(-50%,-50%)" + 
        // prefixedTransform(view.el, str);
    }
}

function prefixedTransform(el, val) {
    el.style.webkitTransform = val;
    el.style.mozTransform = val;
    el.style.oTransform = val;
    el.style.msTransform = val;
    el.style.transform = val;
}

jQuery(document.body).on('click', '.page', function() { //Change to touchstart
    // jQuery('.page').on('click', function() {

    // Initialise
    jQuery(this).addClass("activated");
    jQuery(this).css("background-size", "0");
    jQuery('#container').addClass("position-fixed");
    jQuery('.page').not(this).hide();
    // Remove Hidden Class
    jQuery(this).find('.hidden').removeClass('hidden').addClass('visible');
    jQuery(this , '.p').wrap(".page-container");





var scrollTop = jQuery(window).scrollTop();
console.log(scrollTop);

    // Exiting - Reset All
    jQuery(document.body).on('click', '.activated', function() { //Change to Touchstart

        // jQuery(".main-text-box").hide(2000);

        jQuery(this).removeClass("activated");
        jQuery(this).css("background-size", "cover");
        jQuery('#container').removeClass("position-fixed");
        // jQuery('.page').not(this).removeClass("box-shadow-hide");
        jQuery('.page').not(this).show();

        // Add Hidden Class
        jQuery(this).find('.visible').removeClass('visible').addClass('hidden');

    });

});