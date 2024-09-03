$(document).ready(function() {
    $('.accordion_button').on('click', function() {
        console.log("Accordion button clicked");
        $('.hidden').toggleClass('show');
    });
});

