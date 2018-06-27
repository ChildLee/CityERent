// pages/login/login.js
let app = getApp()

Page({

    //获取手机号
    getPhoneNumber(e) {
        let {encryptedData, iv} = e.detail
        wx.login({
            success: (res) => {
                app.api.login({
                    code: res.code,
                    encryptedData,
                    iv
                }).then(res => {
                    if (res.id) {
                        Object.assign(app.data, res)
                        wx.setStorageSync('userInfo', res)
                    }
                    console.log(app)
                    wx.navigateBack({})
                })
            }
        })
    }
})