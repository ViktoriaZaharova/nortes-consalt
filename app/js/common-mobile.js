$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.links-prev').on('click', function (e) {
    e.preventDefault();
    $(this).parent('.dropdown-submenu__wrapper').fadeOut();
});

$('.dropdown-submenu__toggle').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.dropdown-submenu__wrapper').fadeIn();
});
