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
                nav: true,
                dots: false,
            },
            1080: {
                nav: false,
                dots: true,

            }
        }
    })
    $('.home-items .item .boximg .favourite-icon').hide()
    $('.home-items .item .boximg .box1 .default-icon').on('click', function() {
        $(this).hide()
        $('.home-items .item .boximg .box1 .favourite-icon').show()
    })
    $('.home-items .item .boximg .box1 .favourite-icon').on('click', function() {
        $(this).hide()
        $('.home-items .item .boximg .box1 .default-icon').show()
    })
    $('.home-items .item .boximg .box2 .default-icon').on('click', function() {
        $(this).hide()
        $('.home-items .item .boximg .box2 .favourite-icon').show()
    })
    $('.home-items .item .boximg .box2 .favourite-icon').on('click', function() {
        $(this).hide()
        $('.home-items .item .boximg .box2 .default-icon').show()
    })
    $('.home-items .item .boximg .box3 .default-icon').on('click', function() {
        $(this).hide()
        $('.home-items .item .boximg .box3 .favourite-icon').show()
    })
    $('.home-items .item .boximg .box3 .favourite-icon').on('click', function() {
        $(this).hide()
        $('.home-items .item .boximg .box3 .default-icon').show()
    })
    $('.home-items .item .boximg .box4 .default-icon').on('click', function() {
        $(this).hide()
        $('.home-items .item .boximg .box4 .favourite-icon').show()
    })
    $('.home-items .item .boximg .box4 .favourite-icon').on('click', function() {
        $(this).hide()
        $('.home-items .item .boximg .box4 .default-icon').show()
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