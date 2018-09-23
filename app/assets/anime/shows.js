$ = require("jquery")
$.matchHeight = require("jquery-match-height");

$(function() {
    $('.currentlyWatchingCard').matchHeight({byRow: false});
});

$(function() {
    $('.previouslyWatchedCard').matchHeight({byRow: false});
});