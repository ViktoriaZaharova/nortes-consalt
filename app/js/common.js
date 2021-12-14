$(window).scroll(function () {
    var heightHeader = $('header').height();

    if ($(this).scrollTop() > heightHeader) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

$('.diplomas-slider').slick({
    slidesToShow: 6,
    appendArrows: '.diplomas-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

//auto counter total//
let homeSlider = $('.diplomas-slider');

$('.counter-slide__default').text(homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function(event, slick, currentSlide){
    $(".counter-slide__cp").text(currentSlide<10?`${currentSlide+1}`:currentSlide+1);
});