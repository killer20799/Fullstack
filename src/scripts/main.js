$(document).ready(function() {
    abc()
        // $('body header .navbar ul li').removeClass('active')
        // $('body header .navbar ul li a').on('click', function() {
        //     $(this).parents('li').addClass('active')
        //     console.log(123)
        // })
})
$(window).scroll(function() {
    abc()
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

function link() {

}