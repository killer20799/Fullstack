$(document).ready(function() {
    $(window).scroll(function() {
        abc()
    });
    $('.home-slider .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 500,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            768: {
                nav: false,
                dots: true,

            }
        }
    })
    $('.home-items .item .boximg .favourite-icon').hide()
    $('.home-items .item .boximg .default-icon').on('click', function() {
        $(this).hide()
        $('.home-items .item .boximg .favourite-icon').show()
    })
    $('.home-items .item .boximg .favourite-icon').on('click', function() {
        $(this).hide()
        $('.home-items .item .boximg .default-icon').show()
    })
});

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