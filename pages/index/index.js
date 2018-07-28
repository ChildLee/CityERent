let app = getApp()

Page({

  data: {
    //是否加载完毕
    load: false,
    //全局图片路径
    img: app.data.img,
    //当前城市
    currentCity: '',
    //当前城市ID
    cityID: undefined,
    //推荐的楼盘
    leaseList: [],
    //轮播图
    rotationImage: [],
    page: 1
  },

  onLoad() {
    wx.showLoading({title: '加载中'})
    Promise.all([
      this.getLocation(),
      this.getLease(),
      this.showImage(),
      this.rentNumber()
    ]).then(res => {
      this.setData(Object.assign({
        load: true,
        currentCity: app.data.currentCity
      }, res[3].data))
      wx.hideLoading()
    })
  },

  onShow() {
    if (this.data.cityID !== app.data.cityID) {
      this.setData({
        currentCity: app.data.currentCity,
        cityID: app.data.cityID,
        leaseList: [],
        page: 1
      })
      this.getLease()
    }
  },

  //出租
  rent() {
    const {agent} = wx.getStorageSync('userInfo')
    if (!agent) {
      wx.showToast({title: '请登录!', icon: 'none'})
    } else if (agent !== 1) {
      wx.showToast({title: '您不是经理人,无权发布!', icon: 'none'})
    } else {
      wx.navigateTo({url: '/pages/publish_info/publish_info'})
    }
  },

  //首页行情
  rentNumber() {
    return app.api.rentNumber()
  },

  //首页轮播图
  showImage() {
    return app.api.showImage().then(res => {
      if (res.code === 200) {
        this.setData({
          rotationImage: res.list
        })
      }
    })
  },

  ///定位当前位置
  getLocation() {
    return new Promise((resolve, reject) => {
      app.map.regeocoding({
        success: (res) => {
          app.data.currentCity = res.originalData.result['addressComponent'].city
          resolve(res)
        },
        fail: (res) => {
          app.data.currentCity = '深圳市'
          reject(res)
        }
      })
    })
  },

  //首页推荐的楼盘
  getLease() {
    return app.api.getLease({
      page: this.data.page,
      city_name: this.data.currentCity
    }).then(res => {
      if (res.code === 200) {
        this.setData({
          leaseList: this.data.leaseList.concat(res.list)
        })
      }
    })
  },

  //上拉刷新
  onReachBottom() {
    this.setData({
      page: ++this.data.page
    })
    wx.showLoading({title: '加载中'})
    this.getLease().then(() => {
      wx.hideLoading()
    })

  },

  //搜索
  search() {
    wx.navigateTo({url: '/pages/search/search'})
  },

  //用户点击右上角分享
  onShareAppMessage() {
  }
})
