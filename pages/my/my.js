// pages/my/my.js
const app = getApp()

Page({
    data: {
        tel: '',
        isLogin: false,
        phoneNumber: ''
    },

    onLoad() {
        this.setData({
            tel: app.data.tel
        })
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
                        phoneNumber: app.data.tel
                    })
                }
            }
        })
    }
})