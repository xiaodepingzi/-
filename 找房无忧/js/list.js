$(document).ready(function(){

    $('.list_nav li').each(function(index,item){  
        $(item).on('touchstart',function(){
        $('.list_nav li').removeClass('list_active');
        $(this).addClass('list_active');
        $('.a1').hide();
        $('.a1').eq(index).show();
    });
    });

    $('.list_li1_l a').each(function(index,item){
        $(item).on('touchstart',function(){
            $('.list_li1_l a').removeClass();
            $(this).addClass('li_1_active');
            $('.list_li1_r_1').hide();
            $('.list_li1_r_1').eq(index).show();
        });
    });
    $('.list_li1_r_1 dl dd').each(function(index,item){
        $(item).on('touchstart',function(){
            $(this).toggleClass('dd_active');
        });
    });

    $('.down_list_2>ul>li>a').each(function(index,item){
        $(item).on('touchstart',function(){
            $(this).toggleClass('aa_active');
        });
    });

    $('.down_list_3>ul>li').each(function(index,item){
        $(item).on('touchstart',function(){
            $(this).children('span').toggleClass('ok_active')
        });
    });




});
