$(document).ready(function() {
  $("rect").hover(function(event) {
    let index = $(event.currentTarget).index() + 1;
    $("#label g")
      .find("text")
      .removeClass("lable-show");

    // change this part tot find the text related to the rectbox
    $("#label")
      .children(":nth-child(" + index + ")")
      .find("text")
      .addClass("lable-show");
  });

  let labels = [
    "distribution-num",
    "power-plant",
    "demand",
    "disaster"
  ];
  $("#distribution").on("click", function(event) {
    for (j = 0; j < labels.length; j++) {
      $("#" + labels[j] + "-data-map").removeClass("g-show");
      $("#" + labels[j] + "-data-map").addClass("g-hide");
    }
    $("#distribution-num-data-map").removeClass("g-hide");
    $("#distribution-num-data-map").addClass("g-show");
  });
  $("#power-plant").on("click", function(event) {
    for (j = 0; j < labels.length; j++) {
      $("#" + labels[j] + "-data-map").removeClass("g-show");
      $("#" + labels[j] + "-data-map").addClass("g-hide");
    }
    $("#power-plant-data-map").removeClass("g-hide");
    $("#power-plant-data-map").addClass("g-show");
  });
  $("#demand").on("click", function(event) {
    for (j = 0; j < labels.length; j++) {
      $("#" + labels[j] + "-data-map").removeClass("g-show");
      $("#" + labels[j] + "-data-map").addClass("g-hide");
    }
    $("#demand-data-map").removeClass("g-hide");
    $("#demand-data-map").addClass("g-show");
  });
  $("#disaster").on("click", function(event) {
    for (j = 0; j < labels.length; j++) {
      $("#" + labels[j] + "-data-map").removeClass("g-show");
      $("#" + labels[j] + "-data-map").addClass("g-hide");
    }
    $("#disaster-data-map").removeClass("g-hide");
    $("#disaster-data-map").addClass("g-show");
  });
});
