// pages/building_info/building_info.js
const app = getApp()

Page({

  data: {
    //是否加载完毕
    load: false,
    img: app.data.img,
    showBar: false,
    page: 1,
    community_id: 1,
    community: {},
    rentalList: [],
    markers: []
  },

  onLoad(options) {
    wx.showLoading({title: '加载中'})
    if (options.id) {
      this.setData({
        community_id: options.id
      })
      this.getCommunity(options.id).then(res => {
        this.setData({
          load: true
        })
        wx.hideLoading()
      })
    }
  },

  //展示楼盘里所有出租的列表
  getCommunity(id) {
    return app.api.community({
      page: this.data.page,
      community_id: id,
      id: app.data.id
    }).then(res => {
      if (res.code === 200) {
        this.setData({
          rentalList: res.data.list,
          community: res.data,
          markers: [{
            longitude: res.data.orientation[0],
            latitude: res.data.orientation[1]
          }]
        })
      }
    })
  },

  //上拉刷新
  onReachBottom() {
    let {page, community_id} = this.data
    ++page
    this.setData({
      page: page
    })
    // this.getCommunity(community_id, page)
  },

  //关注
  focus(e) {
    let {id, focus} = e.currentTarget.dataset
    focus = +focus === 0 ? 1 : 0
    if (app.data.id) {
      this.setData({
        'community.is_focus': !this.data.community['is_focus']
      })
      app.api.focus({
        id: app.data.id,
        community_id: id,
        type: focus// 0取消  1关注
      })
    } else {
      wx.showToast({title: '您还没有登录', icon: 'none'})
    }
  }

  //页面滚动触发事件的处理函数
  // onPageScroll() {
  //     let query = wx.createSelectorQuery()
  //     let windowHeight = wx.getSystemInfoSync().windowHeight
  //     query.select('#map').boundingClientRect(res => {
  //         res.top <= windowHeight - 45 ? this.setData({showBar: true}) : this.setData({showBar: false})
  //     }).exec()
  // }
})
