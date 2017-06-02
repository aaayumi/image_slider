function slider(){
    var $active = document.getElementsByClassName('active');
    var $next = $active.next();
    
    $active.addClass('active');
    $active.removeClass('active');
}
    
$(function(){
    setInterval( "slider()", 3000);
});