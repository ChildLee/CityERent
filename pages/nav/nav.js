// pages/nav/nav.js
const app = getApp()
Page({
  data: {
    areas: [],
    //当前城市
    currentCity: '',
    city: [
      {sort: '热门城市', list: [{ID: '440300', Name: '深圳'},{ID: '110100', Name: '北京'}, {ID: '310100', Name: '上海'}, {ID: '440100', Name: '广州'}]},
      {sort: 'B', list: [{ID: '110100', Name: '北京'}]},
      {sort: 'C', list: [{ID: '510100', Name: '成都'}, {ID: '500100', Name: '重庆'}, {ID: '430100', Name: '长沙'}]},
      {sort: 'D', list: [{ID: '210200', Name: '大连'}, {ID: '441900', Name: '东莞'}]},
      {sort: 'F', list: [{ID: '440600', Name: '佛山'}]},
      {sort: 'G', list: [{ID: '440100', Name: '广州'}]},
      {sort: 'H', list: [{ID: '330100', Name: '杭州'}, {ID: '441300', Name: '惠州'}, {ID: '460100', Name: '海口'}, {ID: '340100', Name: '合肥'}]},
      {sort: 'J', list: [{ID: '370100', Name: '济南'}]},
      {sort: 'L', list: [{ID: '131000', Name: '廊坊'}]},
      {sort: 'N', list: [{ID: '320100', Name: '南京'}]},
      {sort: 'Q', list: [{ID: '370200', Name: '青岛'}]},
      {sort: 'S', list: [{ID: '310100', Name: '上海'}, {ID: '440300', Name: '深圳'}, {ID: '320500', Name: '苏州'}, {ID: '130100', Name: '石家庄'}, {ID: '210100', Name: '沈阳'}]},
      {sort: 'T', list: [{ID: '120100', Name: '天津'}]},
      {sort: 'W', list: [{ID: '420100', Name: '武汉'}, {ID: '320200', Name: '无锡'}]},
      {sort: 'X', list: [{ID: '350200', Name: '厦门'}, {ID: '610100', Name: '西安'}]},
      {sort: 'Y', list: [{ID: '370600', Name: '烟台'}]},
      {sort: 'Z', list: [{ID: '442000', Name: '中山'}, {ID: '440400', Name: '珠海'}, {ID: '410100', Name: '郑州'}]}
    ]
  },
  onLoad() {
    //获取地址
    // app.api.areas().then(res => {
    //   if (res.code === 200) {
    //     this.setData({
    //       areas: res.data
    //     })
    //   }
    // })

    app.map.regeocoding({
      success: (res) => {
        this.setData({
          currentCity: res.originalData.result['addressComponent'].city
        })
      }
    })
  },

  //切换地点
  switchNav(e) {
    let {id, name} = e.currentTarget.dataset
    app.data.cityID = id
    app.data.currentCity = name
    wx.navigateBack({})
  }
})
