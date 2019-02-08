$('.question_button > div').click(function () {

    var next = $(this).data("id"),
        id = $(this).attr("class");

    if (id.indexOf("yes") != -1) {
        $(this).closest('.question').addClass("yes")
    } else {
        $(this).closest('.question').addClass("no")
    }

    if (id.indexOf("retry") != -1) {
        $('.question').removeClass("yes no");
    }

    $(this).closest('.question').slideUp();

    $('.question[data-quest="' + next + '"]').slideDown();

})
