$(function(){

  console.log("Hello, there!");

  $("#controller-btn").on("click", function(){
    console.log($(this).attr("id"));
    $("#content").load("content.txt");
  });

});
