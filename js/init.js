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
/* digital clock */
startTime();

var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

var newDate = new Date();

var DateString = '';
for (var i = 0; i < 7; i++) {
    if (i == newDate.getDay()) {
        DateString += "<span class='clock__date--curr'>" + dayNames[i] + "</span> ";
    } else {
        DateString += "<span>" + dayNames[i] + "</span> ";
    }
}
$('.clock__date').html(DateString);

function startTime() {
    var today = new Date();
    var h = checkTime(today.getHours());
    var m = checkTime(today.getMinutes());
    var s = checkTime(today.getSeconds());

    var TimeString = h + ':' + m + ':' + s;
    TimeString = '<span>' + TimeString.split('').join('</span><span>') + '</span>';
    $('.clock__time').html(TimeString);

    var t = setTimeout(function() {
        startTime()
    }, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = '0' + i
    };
    return i;
}

$('.clock-toogle').click(function() {
    $('body').toggleClass('dark');
});