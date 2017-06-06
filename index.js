var stopButton = false;
var slideID = null;
var mySlide;

$(document).ready(function(){
    startSlide();
    
    function startSlide(){
    clearInterval(mySlide);
    $('.slider img:gt(0)').hide();
    mySlide = setInterval(function(){
      $('.slider :first-child').fadeOut(300)
         .next('img').fadeIn()
         .end().appendTo('.slider');
    }, 
      3000); 
    
    }

    $("#stop").click(function(){
        clearInterval(mySlide);

    });
    $(".start").click(function(){
        
            
        startSlide();
            
          });
                });               