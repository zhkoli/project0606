$(function(){
    // $('.header').stick(300);
    // $('.section').gridify();
    // $('.scrollex').scrollex({
    //     enter: function(){
    //         alert('entered');
    //     },
    //     leave: function(){
    //         alert('left')
    //     }
    // });
    $('.hamburger-menu').click(function(){
        $('.mobile-nav').toggleClass('show');
        // $('.hamburger').toggleClass('is-active');
    });
    $(function() {
        $(".rslides").responsiveSlides({
            auto: true,             // Boolean: Animate automatically, true or false
            speed: 500,            // Integer: Speed of the transition, in milliseconds
            timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
            pager: true,           // Boolean: Show pager, true or false
            nav: false,             // Boolean: Show navigation, true or false
            random: false,          // Boolean: Randomize the order of the slides, true or false
            pause: false,           // Boolean: Pause on hover, true or false
            pauseControls: true,    // Boolean: Pause when hovering controls, true or false
            prevText: "",   // String: Text for the "previous" button
            nextText: "",       // String: Text for the "next" button
            maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
            navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
            manualControls: "",     // Selector: Declare custom pager navigation
            namespace: "rslides",   // String: Change the default namespace used
            before: function(){},   // Function: Before callback
            after: function(){}     // Function: After callback
        });
    });
    window.sr = ScrollReveal();
    sr.reveal('.screens__screen', { duration: 300 }, 300);
    sr.reveal('.section-info .row > div', { duration: 300 }, 300);
    sr.reveal('.section-feature .row > div', { duration: 300 }, 300);
});