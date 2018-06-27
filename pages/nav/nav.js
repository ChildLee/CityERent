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

        app.map.regeocoding({
            success: (res) => {
                this.setData({
                    currentCity: res.originalData.result['addressComponent'].city
                })
            }
        })
    }
})