// pages/nav/nav.js
const app = getApp()
Page({
    data: {
        areas: [],
        //当前城市
        currentCity: ''
    },
    onLoad() {
        //获取地址
        app.api.areas().then(res => {
            if (res.code === 200) {
                this.setData({
                    areas: res.data
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
    },

    //切换地点
    switchNav(e) {
        let {id, name} = e.currentTarget.dataset
        app.data.cityID = id
        app.data.currentCity = name
        wx.navigateBack({})
    }
})