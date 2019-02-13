$(document).ready(function () {
    $("[id = rectfirst]").hover(function(event) {
      let index = $(event.currentTarget).index() + 1;
      $(".clslabela").removeClass("clslabela");

      // change this part tot find the text related to the rectbox
      console.log(index);
      $("#visflabel")
        .children(":nth-child(" + index + ")")
        .addClass("clslabela");
    });
  });
