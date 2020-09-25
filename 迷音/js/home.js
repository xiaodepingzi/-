/*
 * @Author: your name
 * @Date: 2020-09-23 13:21:15
 * @LastEditTime: 2020-09-23 14:55:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \04-jq-ajaxd:\AAA\VS_project\移动端\迷音\js\home.js
 */
var bol = true;
// 控件音乐------------------------------------
audio.addEventListener('canplay',function(){
    // 播放&暂停
    touch.on($('.music-play'),'tap',function(){
        if(bol){
            $('.music-play').css('backgroundImage','url("./images/home_img/home-5.png")');
            $('.play-img').addClass('play');
            audio.play();
            bol = false;
        }else {
            $('.music-play').css('backgroundImage','url("./images/home_img/home-4.png")');
            $('.play-img').removeClass('play');
            audio.pause();
            bol = true;
        }
    });

    // 播放完毕后暂停
    audio.addEventListener('timeupdate',function(){
        if(audio.ended == true){
            $('.music-play').css('backgroundImage','url("./images/home_img/home-4.png")');
            $('.play-img').removeClass('play');
            // $('.play-img').css('animation','play 2s linear 1');
        }
        
    })

})