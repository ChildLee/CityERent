import api from './api/index.js'
import dateFormat from './utils/dateformat.js'
import Map from './lib/bmap-wx.min.js'

App({
    api,
    dateFormat,
    map: new Map({ak: '0xCv6idzNOmPwyWcl0cOnrDasXXFLPqy'}),

    data: {
        //全局图片路径
        img: 'http://scoket.xiaozhanxiang.com/upload/',
        uploadImg: 'http://scoket.xiaozhanxiang.com/wechar/Community/uploadImag',
        //首页添加的城市名称
        currentCity: '深圳市',
        //登陆页面添加的id
        id: undefined,
        //登录页面添加的手机号
        purePhoneNumber: undefined,
        //导航页面选择的城市ID
        cityID: undefined
    },

    onLaunch: function () {
        let login = wx.getStorageSync('userInfo')
        Object.assign(this.data, login)
        api.tel().then(res => {
            Object.assign(this.data, res.data)
        })
    },

    onShow: function (options) {

    }
})
