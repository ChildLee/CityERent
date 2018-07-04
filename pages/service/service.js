// pages/service/service.js
const app = getApp()

Page({
    data: {
        tel: ''
    },
    onLoad() {
        this.setData({
            tel: app.data.tel
        })
    },
    //拨打电话
    call() {
        wx.showActionSheet({
            itemList: ['拨打电话'],
            success: function (res) {
                if (res.tapIndex === 0) {
                    wx.makePhoneCall({
                        phoneNumber: app.data.tel
                    })
                }
            }
        })
    }
})