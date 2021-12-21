$(function () {
    $("#filter__range").slider({
        min: 0,
        max: 1000,
        value: 120,
        range: 'min',
        slide: function(event, ui){
            $('.filter-range-min.value').html($("#filter__range").slider("values",0));
        }
    });


    $('.ui-slider-handle:eq(0)').append('<span class="filter-range-min value">' + $('#filter__range').slider('values', 0 ) + '</span>');
});


$('.case-slider').slick({
    slidesToShow: 3,
    appendArrows: '.case-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});