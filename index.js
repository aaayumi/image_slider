$(document).ready(function(){
 // The :gt() selector selects elements with an index number higher than a specified number.
 $(".slider img:gt(0)").hide();
 
$(".next").click(function(){
  $(".slider :first-child").fadeOut()
   .next('img').fadeIn()
   .end().appendTo('.slider');
  $(".circle").html("number");
}) 

 });