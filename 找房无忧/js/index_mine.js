$(document).ready(function(){
    $('.head_ a').eq(0).on('touchstart',function(){
        window.location.href = "http://www.baidu.com";
    });

    $('.head_ a').eq(1).on('touchstart',function(){
        window.location.href = "./index.html";
    });

    $('.head_ a').eq(3).on('touchstart',function(){
        confirm('你有钱买房吗,还不赚钱敲代码去');
    });

    $('.nav_mine li a').each(function(index,item){
        $(item).on('touchstart',function(){
            window.location.href = "./list.html";
        });
    });
});