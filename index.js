
var mySlide;

$(document).ready(function(){
    startSlide();
    
    function startSlide(){
    clearInterval(mySlide);
    $('.slider img:gt(0)').hide();
    mySlide = setInterval(function(){
      $('.slider :first-child').hide()
         .next('img').fadeIn(500)
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