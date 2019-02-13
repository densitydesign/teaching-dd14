$(document).ready(function () {
  $("[id = rectsecond]").mouseenter(function(event) {
    let index = $(event.currentTarget).index() + 1;
    $(".textBold").removeClass("textBold");

    $("#labelsecond")
      .children(":nth-child(" + index + ")")
      .find("text").addClass("textBold");
  });

});
