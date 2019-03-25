//Navigate Menu

$(document).ready(function () {
    'use strict';
    $(".menu-btn").click(function () {
        $(".nav-menu").fadeToggle(500);
    });
    $(".nav-menu a, .exit-menu").click(function () {
        $(".nav-menu").fadeToggle(500);
    });
});

//DT Switcher

    $( document ).ready(function () {
        $('dt').on('click', function (e) {
            e.preventDefault();

            // Add the correct active class
            if ($(this).closest('dt').hasClass('active')) {
                // Remove active classes
                $('dt').removeClass('active');
            } else {
                // Remove active classes
                $('dt').removeClass('active');

                // Add the active class
                $(this).closest('dt').addClass('active');
            }

            // Show the content
            $content = $(this).next();
            $content.slideToggle(100);
            $('dd').not($content).slideUp('slow');
        });
});

    //Mail

    $(document).ready(function () {
        'use strict';
        $(".send-form").click(function () {
            $(".send-mail").fadeToggle("slow");
            });
        $("#close-send-form").click(function () {
            $(".send-mail").fadeToggle(800);
            });
});

    //Lean More

    $(document).ready(function () {
        'use strict';
        $(".learn-more").click(function () {
            $(".learn-more-wrap").fadeToggle("slow");
        });
        $("#close-learn-more").click(function () {
            $(".learn-more-wrap").fadeToggle(800);
        });
    });

    //Scroll

    // $('a[href*="#portfolios"]').on('click', function(e) {
    //     e.preventDefault()
    //     $('html, body').animate({
    //             scrollTop: $($(this).attr('href')).offset().top,}, 1000, 'linear')
    // });
    //
    // $('a[href*="#about-us"]').on('click', function(e) {
    //     e.preventDefault()
    //     $('html, body').animate({
    //         scrollTop: $($(this).attr('href')).offset().top,}, 600, 'linear')
    // });

