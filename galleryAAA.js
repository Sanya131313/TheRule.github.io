$('.single-item').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.single-item1').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.single-item2').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.single-item3').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$(document).ready(function () {
    //Обработка нажатия на кнопку "Вверх"
    $("#up").click(function () {
        //Необходимо прокрутить в начало страницы
        var curPos = $(document).scrollTop();
        var scrollTime = curPos / 1.73;
        $("body,html").animate({ "scrollTop": 0 }, scrollTime);
    });
});