import ajax from './ajax.js'

export default {
  //登录并获取手机号
  login(param) {
    return ajax.post('/login/getOpenidKey', param)
  },
  //电话号码接口
  tel(param) {
    return ajax.post('/lease/tel', param)
  },
  //关注
  focus(param) {
    return ajax.post('/lease/focus', param)
  },
  //关注列表
  focusList(param) {
    return ajax.post('/lease/focusList', param)
  },
  //获取城市列表
  areas(param) {
    return ajax.post('/Areas/areas', param)
  },
  //获取当前城市
  area(param) {
    return ajax.post('/Areas/area', param)
  },
  //出租详情
  leaseInfo(param) {
    return ajax.post('/lease/leaseInfo', param)
  },
  //获取当前城市地铁
  subway(param) {
    return ajax.post('/Areas/subway', param)
  },
  //获取当前城市地铁
  subwayinfo(param) {
    return ajax.post('/Areas/subwayinfo', param)
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
  },
  //更多选项
  other(param) {
    return ajax.post('/lease/other', param)
  },
  //租金
  rent(param) {
    return ajax.post('/lease/rent', param)
  },
  //商铺/住宅面积
  acreage(param) {
    return ajax.post('/lease/acreage', param)
  },
  //搜索
  homeSearch(param) {
    return ajax.post('/lease/homeSearch', param)
  },
  //获取省信息
  province(param) {
    return ajax.post('/Community/province', param)
  },
  //获取市/区县
  getAreas(param) {
    return ajax.post('/Community/getAreas', param)
  },
  //通过市ID获取地铁线路
  getSubway(param) {
    return ajax.post('/community/subway', param)
  },
  //通过区县ID获取小区列表
  getCommunity(param) {
    return ajax.post('/Community/community', param)
  },
  //添加小区
  addCommunity(param) {
    return ajax.post('/Community/addCommunity', param)
  },
  //添加出租房屋
  addLease(param) {
    return ajax.post('/Community/addLease', param)
  },
  //写字楼/厂房面积
  maxAacreage(param) {
    return ajax.post('/Lease/maxAacreage', param)
  },
  //厂房/写字楼/商户租金
  maxRent(param) {
    return ajax.post('/Lease/maxRent', param)
  },
  //商户类型
  shopType(param) {
    return ajax.post('/Lease/shopType', param)
  },
  //首页行情(仅深圳有显示)
  rentNumber(param) {
    return ajax.post('/Lease/rentNumber', param)
  }
}
