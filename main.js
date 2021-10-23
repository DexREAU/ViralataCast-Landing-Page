let windowPosition;
const parallaxImg = document.querySelector('.desktop_intro')

document.body.onscroll = function() {
    windowPosition = window.pageYOffset;
    parallaxImg.style.transform = "translateY( -" + windowPosition * 1.25 + "px)";
}