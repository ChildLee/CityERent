// pages/login/login.js
let app = getApp()

Page({

    //获取手机号
    getPhoneNumber(e) {
        app.api.pay().then(res => {
            wx.requestPayment({
                'timeStamp': res.data.timeStamp,
                'nonceStr': res.data.nonceStr,
                'package': res.data.package,
                'signType': 'MD5',
                'paySign': res.data.paySign,
                success: function (res) {
                    console.log(res)
                }
            })
        })


        // let {encryptedData, iv} = e.detail
        // wx.login({
        //     success: function (res) {
        //         app.api.getPhoneNumber({
        //             code: res.code,
        //             encryptedData,
        //             iv
        //         }).then(res => {
        //             if (res.id) {
        //                 wx.setStorageSync('userInfo', res)
        //             }
        //             wx.navigateBack({})
        //         })
        //     }
        // })
    }
})