console.log("Conected");

$('li').on('click', function(){
    $(this).toggleClass("completed");
});

$('span').on('click', function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
   
});