import api from './api/index.js'
import dateFormat from './utils/dateformat.js'
import Map from './lib/bmap-wx.min.js'

App({
    api,
    dateFormat,
    map: new Map({ak: '0xCv6idzNOmPwyWcl0cOnrDasXXFLPqy'}),

    data: {
        //全局图片路径
        img: ' http://scoket.xiaozhanxiang.com/upload/'
    },

    onLaunch: function () {

    },

    onShow: function (options) {

    }
})
