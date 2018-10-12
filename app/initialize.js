document.addEventListener('DOMContentLoaded', function() 
{
    $ = require('jquery');
    $.matchHeight = require('jquery-match-height');

    $(function() {
        $('.info-section').matchHeight({byRow: false});
        // $('.info-section-containment').matchHeight({byRow: false, target: $("#inset")})
    });

    $(window).resize(function () { 
        $.fn.matchHeight._update()
        console.log("ehehheheh")
     })

});