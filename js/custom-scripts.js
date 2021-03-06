$(document).ready(function () {

    /******************************************************************************************************************
     ******* init scripts
     ******************************************************************************************************************/

    setTimeout(function() {
        $('.slider-wrap').animate({opacity: '1'}, 500);
    }, 500);

    /******************************************************************************************************************
     ******* clicks scripts
     ******************************************************************************************************************/

    $('.burger').click(function() {

        $(this).parents('nav').toggleClass('active');

    });

    $('aside ul li').click(function() {

        var index = $(this).index();

        $('aside ul li.active').removeClass('active');
        $(this).addClass('active');

        $('main article.active').removeClass('active');
        $('main article').eq(index).addClass('active');

    });

    $('.tab-control > div').click(function() {

        var index = $(this).index();

        $('.tab-control .active').removeClass('active');
        $(this).addClass('active');

        $('.tab .active').removeClass('active');
        $('.tab > div').eq(index).addClass('active');

    });

    $('.callback').click(function() {

        $('.window-callback').fadeIn();

    });

    $('.make-order button').click(function() {

        $('.window-order').fadeIn();

    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window form')).length) $('.window').fadeOut();
        if ($target.hasClass('close-marker')) $('.window').fadeOut();
    });


    /******************************************************************************************************************
     ******* slider scripts
     ******************************************************************************************************************/

    $('.slider-banner').slick({
        appendArrows: '.banner-control',
        prevArrow: '.banner-prev',
        nextArrow: '.banner-next',
        dots: true
    });

    $('.slider-product-info').slick({
        appendArrows: '.product-info-control',
        prevArrow: '.product-info-prev',
        nextArrow: '.product-info-next'
    });

    $('.slider-news').slick({
        appendArrows: '.news-control',
        prevArrow: '.news-prev',
        nextArrow: '.news-next',
        slidesToShow: 2,
        vertical: true
    });

    $('.slider-product-items').slick({
        appendArrows: 'items-control',
        prevArrow: '.items-prev',
        nextArrow: '.items-next',
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }

        ]
    });

    $('.slider-products').slick({
        appendArrows: '.products-control',
        prevArrow: '.products-prev',
        nextArrow: '.products-next',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 4
                }
            },
             {
             breakpoint: 641,
             settings: {
             slidesToShow: 2
             }
             },
             {
             breakpoint: 481,
             settings: {
             slidesToShow: 1
             }
             }

        ]
    });



});
