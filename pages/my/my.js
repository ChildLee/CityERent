// pages/my/my.js
const app = getApp()

Page({
    data: {
        isLogin: false,
        phoneNumber: ''
    },

    onShow() {
        let {purePhoneNumber} = wx.getStorageSync('userInfo')
        if (purePhoneNumber) {
            purePhoneNumber = purePhoneNumber.slice(0, 3) + '***' + purePhoneNumber.slice(-3)
            this.setData({
                isLogin: true,
                phoneNumber: purePhoneNumber
            })
        }
    },

    //退出登录
    loginOut() {
        this.setData({
            isLogin: false,
            phoneNumber: ''
        })
        wx.clearStorage()
    },

    //拨打电话
    call() {
        wx.showActionSheet({
            itemList: ['拨打电话'],
            success: function (res) {
                if (res.tapIndex === 0) {
                    wx.makePhoneCall({
                        phoneNumber: '18899996666'
                    })
                }
            }
        })
    }
})