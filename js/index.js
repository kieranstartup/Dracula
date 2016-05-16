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
        var f = 1;
        var str = "scale(" + f + ")"; //"translate(-50%,-50%)" + 
        prefixedTransform(view.el, str);
    }
}

function prefixedTransform(el, val) {
    el.style.webkitTransform = val;
    el.style.mozTransform = val;
    el.style.oTransform = val;
    el.style.msTransform = val;
    el.style.transform = val;
}

jQuery('.page').on('click touchstart', function(element, index) {
    console.log(this.id);
    jQuery(this).addClass("activated");
    jQuery('.page').addClass("box-shadow-hide");
    jQuery('#container').css("position","fixed");


jQuery('.activated').on('click touchstart', function(element, index) {
    jQuery(this).removeClass("activated");
    jQuery('.page').removeClass("box-shadow-hide");
    jQuery('#container').css("position","absolute");
    });

});