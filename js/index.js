jQuery(document).ready(function() {
    jQuery(document.body).on('touchstart', '.page', function() { //Change to touchstart
        // Generate number between 1 & 3
        var randomClass = 3;
        var randomNumber = Math.round(Math.random() * (randomClass - 1)) + 1;

        // Initialise & Random Number
        jQuery(this).addClass("activated").addClass('scaled-' + randomNumber);

        var wrapper_scrollTop = jQuery('#wrapper').scrollTop(); //gets amount scrolled
        var half_wrapper = jQuery('#wrapper').height() * (0.5); //50% of wrapper height
        jQuery(this).css('top', half_wrapper + wrapper_scrollTop);

        // Exiting - Reset All
        jQuery(document.body).on('touchstart', '.activated', function() { //Change to Touchstart
            jQuery(this).removeClass("activated scaled-1 scaled-2 scaled-3"); //Remove all added classes
            jQuery(this).css('top', ''); //Reset inline top style
        });

    });
});