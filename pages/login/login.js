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
          wx.navigateBack({})
        })
      }
    })

    // //测试微信支付
    // wx.request({
    //     url: 'http://127.0.0.1:3000/wx/pay',
    //     data: {
    //         total_fee: '0.01',
    //         body: '1'
    //     },
    //     method: 'POST',
    //     success(res) {
    //         wx.requestPayment({
    //             timeStamp: res.data.data.timeStamp,
    //             nonceStr: res.data.data.nonceStr,
    //             package: res.data.data.package,
    //             signType: res.data.data.signType,
    //             paySign: res.data.data.paySign,
    //             success(res) {
    //                 console.log(res)
    //             },
    //             fail(res) {
    //                 console.log(res)
    //             }
    //         })
    //     }
    // })

    //查询订单
    // wx.request({
    //     url: 'http://127.0.0.1:3000/wx/orderQuery',
    //     data: {
    //         transaction_id: '4200000154201807023917544228',
    //         out_trade_no: '20180702115842030486278456321468'
    //     },
    //     method: 'POST',
    //     success(res) {
    //
    //     }
    // })
  }
})
