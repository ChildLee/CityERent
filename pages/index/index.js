let app = getApp()

Page({

    data: {
        //是否加载完毕
        load: false,
        //全局图片路径
        img: app.data.img,
        //当前城市
        currentCity: '',
        //推荐的楼盘
        leaseList: [],
        //轮播图
        rotationImage: []
    },

    onLoad: function () {
        wx.showLoading({title: '加载中'})
        this.getLocation().then(res => {
            return this.getLease()
        }).then(res => {
            return this.showImage()
        }).then(res => {
            this.setData({
                load: true
            })
        }).then(res => {
            wx.hideLoading()
        })
    },

    //首页轮播图
    showImage() {
        return app.api.showImage().then(res => {
            if (res.code === 200) {
                this.setData({
                    rotationImage: res.list
                })
            }
        })
    },

    ///定位当前位置
    getLocation() {
        return new Promise((resolve, reject) => {
            app.map.regeocoding({
                success: (res) => {
                    resolve(res)
                },
                fail: (res) => {
                    this.setData({
                        currentCity: '深圳市'
                    })
                    reject()
                }
            })
        }).then(res => {
            this.setData({
                currentCity: res.originalData.result['addressComponent'].city
            })
        }).catch(res => {
            return
        })
    },

    //首页推荐的楼盘
    getLease() {
        return app.api.getLease({
            page: 1,
            city_name: this.data.currentCity
        }).then(res => {
            if (res.code === 200) {
                this.setData({
                    leaseList: res.list
                })
            }
        })
    },

    //用户点击右上角分享
    onShareAppMessage() {
    }
})