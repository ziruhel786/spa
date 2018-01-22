//Include function
$("[data-url]").each(function () {
    var x = $(this).attr('data-url');
    $(this).load(x).removeAttr("data-url");
});
//scroll to top
$(window).scroll(function () {
    var viewportHeight = $(window).height()*.5;
    if ($(this).scrollTop() > viewportHeight) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    };
});

$('.scrollToTop').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
    return false;
});