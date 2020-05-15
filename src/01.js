let data = {


    // 天空
    sky: {
        w: $('#sky')[0].offsetWidth, // 宽
        h: $('#sky')[0].offsetHeight, // 高
    },



    // Fighter aircraft
    // 战斗机
    f: {
        x: 50, // 横坐标
        y: 50, // 纵坐标
        w: $('#f')[0].offsetWidth, // 宽
        h: $('#f')[0].offsetHeight, // 高
        bullets: [], // 所有的子弹
        bullets_amount: 0, // 子弹总数
        fire_sound: '../assets/sound/bullet_livon_0.13.mp3' // 开火音效
    },
}

var app = new Vue({
    el: '#app',
    data: data,

    methods: {

        // 飞机移动
        touchmove() {
            console.log(event);

            let touch
            if (event.touches) {
                touch = event.touches[0] // 移动浏览器，手机端
            } else {
                touch = event
            }

            this.f.x = touch.clientX - this.f.w / 2 // 改变飞机坐标
            this.f.y = touch.clientY - this.f.h - 20
        },
    },

    mounted: function() {},

    watch: {},

})