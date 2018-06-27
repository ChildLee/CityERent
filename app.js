import api from './api/index.js'
import dateFormat from './utils/dateformat.js'
import Map from './lib/qqmap-wx-jssdk.min.js'

App({
    api,
    dateFormat,
    map: new Map({key: 'KORBZ-67U35-BPKID-Q6RUX-H7WU2-I2FX5'}),

    data: {
        img: ' http://scoket.xiaozhanxiang.com/upload/'
    },
    /**
     * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     */
    onLaunch: function () {

    },

    /**
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     */
    onShow: function (options) {

    },

    /**
     * 当小程序从前台进入后台，会触发 onHide
     */
    onHide: function () {

    },

    /**
     * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
     */
    onError: function (msg) {

    }
})
