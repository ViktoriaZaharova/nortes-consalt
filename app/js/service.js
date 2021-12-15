$('.diplomas-slider').slick({
    slidesToShow: 6,
    appendArrows: '.diplomas-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                variableWidth: true,
                appendArrows: '.diplomas-slider',
                centerMode: true
            }
        }
    ]
});

//auto counter total//
let homeSlider = $('.diplomas-slider');

$('.counter-slide__default').text(homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function(event, slick, currentSlide){
    $(".counter-slide__cp").text(currentSlide<10?`${currentSlide+1}`:currentSlide+1);
});

$('.command-slider').slick({
    slidesToShow: 4,
    appendArrows: '.command-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                appendArrows: '.command-slider',
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                appendArrows: '.command-slider',
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                appendArrows: '.command-slider',
            }
        }
    ]
});

$('.clients-slider').slick({
    slidesToShow: 6,
    appendArrows: '.clients-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                variableWidth: true,
                slidesToShow: 3,
            }
        }
    ]
});
