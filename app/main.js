var anime = require("anime.min")

var pgload = anime.timeline({
    autoplay: false
});

pgload
.add({
    "targets": "#mainlogo",
    top: "35%",
    duration: 750,
    easing: "easeInOutSine",
    offset: 0,
    width: "300",
    height: "300"
})
.add({
    "targets": "#background",
    opacity: "1",
    duration: 2000,
    offset: 700,
    width: "100%",
    height: "100%",
    easing: "easeOutExpo"
})
.add({
    "targets": "#name",
    top: "55%",
    duration: 750,
    offset: 750,
    easing: "easeOutQuad"
})
.add({
    "targets": "#downArrow",
    top: "90%",
    opacity: "1",
    duration: 750,
    offset: 1000,
    easing: "easeInOutCirc"
})
.add({
    "targets": "#info",
    top: "-100%",
    opacity: "1",
    duration: 750,
    offset: 3000,
    easing: "easeInOutCirc"
})

anime({
    "targets": "#downArrow",
    top: ["88%", "90%"],
    duration: 500,
    easing: "easeInOutSine",
    direction: 'alternate',
    loop: true
})

function playPgload(){
    pgload.play()
}

module.exports = playPgload