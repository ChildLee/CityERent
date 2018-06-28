import ajax from './ajax.js'

export default {
    //登录并获取手机号
    login(param) {
        return ajax.post('/login/getOpenidKey', param)
    },
    //获取城市
    area(param) {
        return ajax.post('/Areas/areas', param)
    },
    //首页推荐的楼盘
    getLease(param) {
        return ajax.post('/lease/getLease', param)
    },
    //首页轮播图
    showImage(param) {
        return ajax.post('/lease/showImage', param)
    },
    //展示楼盘信息
    community(param) {
        return ajax.post('/lease/community', param)
    },
    //获取(厂房/商铺/写字楼/住宅)列表
    leaseList(param) {
        return ajax.post('/lease/leaseList', param)
    }
}