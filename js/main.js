$(document).ready(function(){
    addBackgroundColor();
});

$(window).scroll(function(){
    addBackgroundColor();
})

function addBackgroundColor() {
    var navHeight = parseInt($('#main-nav').outerHeight(), 10);
    var actualY = parseInt($(window).scrollTop(), 10);
    
    if(actualY >= navHeight) {
       $('#main-nav').addClass('transparentBg'); 
    }else {
       $('#main-nav').removeClass('transparentBg'); 
    }   
}






