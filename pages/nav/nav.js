// pages/nav/nav.js
const app = getApp()
Page({
    data: {
        area: [],
        //当前城市
        currentCity: ''
    },
    onLoad() {
        //获取地址
        app.api.area().then(res => {
            if (res.code === 200) {
                this.setData({
                    area: res.data
                })
            }
        })

        new Promise((resolve, reject) => {
            //定位当前位置
            wx.getLocation({
                type: 'wgs84',
                success: function (res) {
                    resolve(res)
                },
                fail: function (res) {
                    reject(res)
                }
            })
        }).then(res => {
            app.map.reverseGeocoder({
                location: {
                    latitude: res.latitude,
                    longitude: res.longitude
                },
                success: (res) => {
                    if (!res.status) {
                        this.setData({
                            currentCity: res.result.ad_info.city
                        })
                        console.log(this)
                    }
                }
            })
        })
    }
})