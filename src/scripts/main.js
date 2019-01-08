$(document).ready(function() {
    $('.home-slider .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,

        responsive: {

        }
    })
    $(window).scroll(function() {
        abc()
    })
})

function abc() {
    let ac = $(window).scrollTop()
    if (ac === 0)
        $('body header').removeClass('active')
    else if (ac > 0)
        $('body header').addClass('active')

}
var scrollToTop = window.setInterval(function() {
    var pos = window.pageYOffset;
    if (pos > 0) {
        window.scrollTo(0, pos - 999);
    } else {
        window.clearInterval(scrollToTop);
    }
}, 16);