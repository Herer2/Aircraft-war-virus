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

    // 定时器
    timers: [],


}

var app = new Vue({
    el: '#app',
    data: data,

    methods: {

        // 飞机移动
        touchmove() {


            let touch
            if (event.touches) {
                touch = event.touches[0] // 移动浏览器，手机端
            } else {
                touch = event
            }

            this.f.x = touch.clientX - this.f.w / 2 // 改变飞机坐标
            this.f.y = touch.clientY - this.f.h - 20
        },

        // 射击
        bullet_fire() {
            this.f.bullets.push({
                x: this.f.x + 13, // 在机头发射
                y: this.f.y - 10,
            })

            this.f.bullets_amount++ // 子弹计数
                new Audio(this.f.fire_sound).play() // 开火音效
        },

        // 子弹飞
        bullet_move() {
            for (let i = 0; i < this.f.bullets.length; i++) {
                let b = this.f.bullets[i]
                b.y -= 3 // 向上移动 3 

                // 越界移除
                if (b.y > 5) {
                    this.f.bullets.splice(i, 1)
                }
            }
        },

        init() {

            // 口罩脸 - 子弹
            this.timers.push(setInterval(this.bullet_fire, 400))
            this.timers.push(setInterval(this.bullet_move, 10))

        },

    },



    mounted: function() {

        // 初始化
        this.init()
    },

    watch: {},

})