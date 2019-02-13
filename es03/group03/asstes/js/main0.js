//ABOUT
$("#about").click(function(event){
$("#popup").css("display","block");

})
$("#closed").click(function(event){
$("#popup").css('display','none');
})
//mouseenter
$("#btntost").mouseenter(function(){
  $(".lab1").addClass('visible');
  $(this).addClass('click');

});
$("#btntost").mouseleave(function(){
  $(".lab1").removeClass('visible');
  $(this).removeClass('click');
});
//
$("#btnsala").mouseenter(function(){
  $(this).addClass('click');
    $(".lab2").addClass('visible');
});
$("#btnsala").mouseleave(function(){
  $(this).removeClass('click');
    $(".lab2").removeClass('visible');
});
//
$("#btnguaca").mouseenter(function(){
  $(this).addClass('click');
    $(".lab3").addClass('visible');
});
$("#btnguaca").mouseleave(function(){
  $(this).removeClass('click');
    $(".lab3").removeClass('visible');
});

//1
$("#btntost").click(function(event){
window.location.href="page1_1.html";
})

//2
$("#btnsala").click(function(event){
window.location.href="page1_2.html";
})

//3
$("#btnguaca").click(function(event){
window.location.href="page1_3.html";
})
