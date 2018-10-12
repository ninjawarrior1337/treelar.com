document.addEventListener('DOMContentLoaded', function() 
{
    $ = require('jquery');
    $.matchHeight = require('jquery-match-height');

    $(function() {
        $('.info-section').matchHeight({byRow: false});
    });

});
