let app = getApp()

Page({

    data: {
        //是否加载完毕
        load: false,
        //全局图片路径
        img: app.data.img,
        //当前城市
        currentCity: '',
        //当前城市ID
        cityID: undefined,
        //推荐的楼盘
        leaseList: [],
        //轮播图
        rotationImage: [],
        page: 1
    },

    onLoad: function (options) {
        wx.showLoading({title: '加载中'})
        this.getLocation().then(res => {
            return this.getLease()
        }).then(() => {
            return this.showImage()
        }).then(() => {
            this.setData({
                load: true
            })
        }).then(() => {
            this.setData({
                currentCity: app.data.currentCity
            })
            wx.hideLoading()
        })
    },

    onShow() {
        if (this.data.cityID !== app.data.cityID) {
            this.setData({
                currentCity: app.data.currentCity,
                cityID: app.data.cityID,
                leaseList: [],
                page: 1
            })
            this.getLease()
        }
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
                    app.data.currentCity = res.originalData.result['addressComponent'].city
                    resolve(res)
                },
                fail: (res) => {
                    app.data.currentCity = '深圳市'
                    reject(res)
                }
            })
        }).then(() => {
            return null
        }).catch(() => {
            return null
        })
    },

    //首页推荐的楼盘
    getLease() {
        return app.api.getLease({
            page: this.data.page,
            city_name: this.data.currentCity
        }).then(res => {
            if (res.code === 200) {
                this.setData({
                    leaseList: this.data.leaseList.concat(res.list)
                })
            }
        })
    },

    //上拉刷新
    onReachBottom() {
        this.setData({
            page: ++this.data.page
        })
        wx.showLoading({title: '加载中'})
        this.getLease().then(() => {
            wx.hideLoading()
        })

    },

    //搜索
    search() {
        wx.navigateTo({url: '/pages/search/search'})
    },

    //用户点击右上角分享
    onShareAppMessage() {
    }
})