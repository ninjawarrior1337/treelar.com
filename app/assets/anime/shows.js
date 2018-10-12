$ = require("jquery")
$.matchHeight = require("jquery-match-height");

$(function() {
    $('.currentlyWatchingCard').matchHeight({byRow: false, property: "min-height"});
});

$(function() {
    $('.previouslyWatchedCard').matchHeight({byRow: false});
});