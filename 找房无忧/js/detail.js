var mySwiper = new Swiper('.swiper-container', {
    initialSlide:0, //默认显示图片
    direction: 'horizontal', // 垂直切换选项
    effect : 'fade', //切换效果
    loop: true, // 循环模式选项
    speed:300, //动画时间
    autoplay: {
        delay: 2000,
        // stopOnLastSlide: false,
        // disableOnInteraction: true,
    },
    
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    }
})        