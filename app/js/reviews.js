$('.add-reviews').on('click', function (e) {
    e.preventDefault();
    $('.reviews-home-wrapper').addClass('open');
    $(this).fadeOut();
   $('.form-reviews').slideDown();
});

$('.btn-hidden-reviews').on('click', function (e) {
    e.preventDefault();
    $('.reviews-home-wrapper').removeClass('open');
    $('.form-reviews').slideUp();
    $('.add-reviews').css('display', 'flex');
});