// pages/rent_info/rent_info.js
const app = getApp()
Page({

    data: {
        load: false,
        img: app.data.img,
        leaseInfo: {},
        markers: []
    },
    onLoad(options) {
        wx.showLoading({title: '加载中'})
        let {id} = options
        if (id) {
            app.api.leaseInfo({
                lease_id: id
            }).then(res => {
                this.setData({
                    load: true,
                    leaseInfo: res.data,
                    markers: [{
                        longitude: res.data.orientation[0],
                        latitude: res.data.orientation[1]
                    }]
                })
                wx.hideLoading()
            })
        }
    }
})