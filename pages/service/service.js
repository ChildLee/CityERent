// pages/service/service.js
Page({
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