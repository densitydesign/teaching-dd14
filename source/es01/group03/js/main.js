$(document).ready(function() {
    $(".flow").on("mouseenter", function(event) {
        $(".text, .flow").addClass("greyed");
        $(event.currentTarget).removeClass("greyed");
        $(event.currentTarget).next().removeClass("greyed");
    }).on("mouseleave", function(event){
        $(".text, .flow").removeClass("greyed");
    });
    $(".text").on("mouseenter", function(event) {
        $(".text, .flow").addClass("greyed");
        $(event.currentTarget).removeClass("greyed");
        $(event.currentTarget).prev().removeClass("greyed");
    }).on("mouseleave", function(event){
        $(".text, .flow").removeClass("greyed");
    });
        $(".flow-02").on("mouseenter", function(event) {
        $(".text-02, .flow-02").addClass("greyed-02");
        $(event.currentTarget).removeClass("greyed-02");
        $(event.currentTarget).next().removeClass("greyed-02");
    }).on("mouseleave", function(event){
        $(".text-02, .flow-02").removeClass("greyed-02");
    });
    $(".text-02").on("mouseenter", function(event) {
        $(".text-02, .flow-02").addClass("greyed-02");
        $(event.currentTarget).removeClass("greyed-02");
        $(event.currentTarget).prev().removeClass("greyed-02");
    }).on("mouseleave", function(event){
        $(".text-02, .flow-02").removeClass("greyed-02");
    });
})