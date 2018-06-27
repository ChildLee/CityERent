// pages/login/login.js
let app = getApp()

Page({

    //获取手机号
    getPhoneNumber(e) {
        let {encryptedData, iv} = e.detail
        wx.login({
            success: function (res) {
                app.api.login({
                    code: res.code,
                    encryptedData,
                    iv
                }).then(res => {
                    if (res.id) {
                        wx.setStorageSync('userInfo', res)
                    }
                    wx.navigateBack({})
                })
            }
        })
    }
})