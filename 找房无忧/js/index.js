$(document).ready(function(){
    $('.nav_4 li').each(function(index,item){
        $(item).on('touchstart',function(){
            $('.nav_4 li').removeClass();
            $(this).addClass('active_1');
        });
    });
});