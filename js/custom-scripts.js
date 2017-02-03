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


    /******************************************************************************************************************
     ******* slider scripts
     ******************************************************************************************************************/

    $('.slider-banner').slick({
        appendArrows: '.banner-control',
        prevArrow: '.banner-prev',
        nextArrow: '.banner-next',
        dots: true
    });

    $('.slider-news').slick({
        appendArrows: '.news-control',
        prevArrow: '.news-prev',
        nextArrow: '.news-next',
        slidesToShow: 2,
        vertical: true
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
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
             {
             breakpoint: 641,
             settings: {
             slidesToShow: 2,
             slidesToScroll: 2
             }
             },
             {
             breakpoint: 481,
             settings: {
             slidesToShow: 1,
             slidesToScroll: 1
             }
             }

        ]
    });


});
