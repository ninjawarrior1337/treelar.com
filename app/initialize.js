document.addEventListener('DOMContentLoaded', function() 
{
    var $ = require('jquery');
    require('jquery-match-height');

    $(function() {
        $('.currentlyWatchingCard').matchHeight();
    });

});
