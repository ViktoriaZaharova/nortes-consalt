$(window).scroll(function () {
    var heightHeader = $('header').height();

    if ($(this).scrollTop() > heightHeader) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});