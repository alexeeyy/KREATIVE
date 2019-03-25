//Navigate Menu

$(document).ready(function () {
    'use strict';
    $(".fixed-menu").click(function () {
        $(".menu-navigator, .menu-exit").fadeToggle(500);
    });
    $(".menu-navigator a, .menu-exit").click(function () {
        $(".menu-navigator, .menu-exit").fadeToggle(500);
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
            var $content = $(this).next();
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
        $("#exit").click(function () {
            $(".send-mail").fadeToggle(800);
            });
        $('.view').click(function(){
            var id = $('#profile-1');
            $('#profile-1').fadeToggle('slow');
            });
        $('#close').click(function(){
            $('#profile-1').fadeToggle('slow');
        });
});
