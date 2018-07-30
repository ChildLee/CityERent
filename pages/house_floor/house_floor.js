const app = getApp()

Page({
  data: {
    load: false,
    img: app.data.img,
    //打开筛选样式
    sortFixed: '',
    //筛选下标
    sortIndex: 0,
    //区域列表
    areaList: [],
    //地铁列表
    subwayList: [],
    //地铁周边
    subwayAroundList: [],
    //地铁还是区域
    isAreaList: true,
    //区域选中的下标
    otherList: [],
    //商铺类型
    shopType: undefined,
    //租金
    rentList: [],
    //面积
    acreageList: [],
    //区域选择下标
    switchIndex: [1],
    //区域ID
    areas: '',
    //地铁ID
    subway_id: '',
    //地铁周边
    subwayAround: '',
    //更多选中
    otherIndex: [],
    //面积选中
    acreageIndex: [],
    //租金选中
    rentIndex: [],
    list: [],
    type: undefined,
    //价格区间
    rent_min: '',
    rent_max: ''
  },

  onLoad(options) {
    wx.showLoading({title: '加载中'})

    Promise.all([
      this.getLeaseList(options.type),
      this.getArea(),
      this.getSubway(),
      this.other(),
      this.maxRent(),
      this.maxAacreage()
    ]).then(() => {
      this.setData({
        type: options.type,
        load: true
      })
      wx.hideLoading()
    })

  },

  //获取(厂房/商铺/写字楼/住宅)列表
  getLeaseList(type) {
    return app.api.leaseList({
      type,
      ID: app.data.cityID ? app.data.cityID : '',
      city_name: app.data.cityID ? '' : app.data.currentCity
    }).then(res => {
      if (res.code === 200) {
        this.setData({
          list: res.list
        })
      }
    })
  },

  //打开帅选
  bindSort(e) {
    if (!this.data.sortFixed) {
      this.setData({
        sortFixed: 'fixed'
      })
    }
    let index = Number(e.currentTarget.dataset.index)
    this.setData({
      sortIndex: index
    })
  },

  //关闭筛选
  closeSort() {
    this.setData({
      sortFixed: '',
      sortIndex: 0
    })
  },

  //上拉刷新
  onReachBottom() {
    wx.showLoading({title: '加载中'})

    wx.hideLoading()
  },

  //切换区域
  switchArea(e) {
    let index = parseInt(e.currentTarget.dataset.index)
    let arr = this.data.switchIndex
    arr[0] = index
    arr[1] = undefined
    arr[2] = undefined
    if (index === 1) {
      this.setData({
        isAreaList: true,
        switchIndex: arr,
        subwayAroundList: []
      })
    } else {
      this.setData({
        isAreaList: false,
        switchIndex: arr,
        subwayAroundList: []
      })
    }
  },

  //选择区域
  areaSelected(e) {
    let id = e.currentTarget.dataset.id
    let arr = this.data.switchIndex
    arr[1] = id
    this.setData({
      switchIndex: arr,
      areas: id
    })
    this.define()
  },

  //获取当前城市
  getArea() {
    return app.api.area({city_name: app.data.currentCity}).then(res => {
      this.setData({
        areaList: res.list
      })
    })
  },

  //获取当前城市地铁
  getSubway() {
    return app.api.subway({city_name: app.data.currentCity}).then(res => {
      this.setData({
        subwayList: res.list
      })
    })
  },

  //选择地铁线
  subwaySelected(e) {
    let subway_id = e.currentTarget.dataset.subway_id
    let arr = this.data.switchIndex
    arr[1] = subway_id
    this.setData({
      switchIndex: arr,
      subway_id
    })
    if (subway_id === '-1') {
      this.define()
    } else {
      return app.api.subwayinfo({subway_id}).then(res => {
        this.setData({
          subwayAroundList: res.list
        })
      })
    }
  },

  //选择地铁周边
  subwayAroundSelected(e) {
    let {index, name} = e.currentTarget.dataset
    let arr = this.data.switchIndex
    arr[2] = index
    this.setData({
      switchIndex: arr,
      subwayAround: name || ''
    })
    this.define()
  },

  //租金
  rent() {
    return app.api.rent().then(res => {
      this.setData({
        rentList: res.data.list
      })
    })
  },

  //租金选中
  rentSelected(e) {
    let {index, data} = e.currentTarget.dataset
    let {rentIndex} = this.data
    if (rentIndex[0]) {
      rentIndex[0].title === data.title ? delete rentIndex[0] : rentIndex[0] = data
    } else {
      rentIndex[0] = data
    }
    this.setData({
      rentIndex,
      rent_min: '',
      rent_max: ''
    })


    // let {index, data} = e.currentTarget.dataset
    // let rentIndex = this.data.rentIndex
    // rentIndex[index] === data.title ? delete rentIndex[index] : rentIndex[index] = data.title
    // this.setData({
    //     rentIndex
    // })
  },

  //面积
  acreage() {
    return app.api.acreage().then(res => {
      this.setData({
        acreageList: res.data.list
      })
    })
  },

  //面积选中
  acreageSelected(e) {
    let {index, data} = e.currentTarget.dataset
    let {acreageIndex} = this.data
    if (acreageIndex[0]) {
      acreageIndex[0].title === data.title ? delete acreageIndex[0] : acreageIndex[0] = data
    } else {
      acreageIndex[0] = data
    }
    this.setData({
      acreageIndex
    })
    //
    //
    // let {index, data} = e.currentTarget.dataset
    // let {acreageIndex} = this.data
    // acreageIndex[index] === data.title ? delete acreageIndex[index] : acreageIndex[index] = data.title
    // this.setData({
    //     acreageIndex
    // })
  },

  //更多
  other() {
    return app.api.other().then(res => {
      this.setData({
        otherList: res.data
      })
    })
  },

  //商户类型
  shopType() {
    return app.api.shopType().then(res => {
      this.setData({
        shopType: res.data
      })
    })
  },

  //写字楼/厂房面积
  maxAacreage() {
    return app.api.maxAacreage().then(res => {
      this.setData({
        acreageList: res.data.list
      })
    })
  },

  //厂房/写字楼/商户租金
  maxRent() {
    return app.api.maxRent().then(res => {
      this.setData({
        rentList: res.data.list
      })
    })
  },

  //更多选中
  otherSelected(e) {
    let {index, data} = e.currentTarget.dataset
    let {otherIndex} = this.data
    if (otherIndex[index]) {
      otherIndex[index].title === data.title ? delete otherIndex[index] : otherIndex[index] = data
    } else {
      otherIndex[index] = data
    }
    this.setData({
      otherIndex
    })

  },

  //不限条件
  clearConditions() {
    this.setData({
      otherIndex: {},
      acreageIndex: {},
      rentIndex: {},
      priceRange: '',
      rent_min: '',
      rent_max: ''
    })
  },

  //搜索
  search() {
    wx.navigateTo({url: '/pages/search/search'})
  },

  //其他确定
  define() {
    let {switchIndex, rentIndex, acreageIndex, otherIndex} = this.data

    let data = {}
    if (switchIndex[0] === 1) {
      Object.assign(data, {areas: switchIndex[1]})
    } else {
      Object.assign(data, {subway_id: this.data.subway_id, site: this.data.subwayAround})
    }

    if (this.data.rent_min || this.data.rent_max) {
      Object.assign(data, {rent_min: this.data.rent_min, rent_max: this.data.rent_max})
    } else {
      for (let i in rentIndex) {
        Object.assign(data, rentIndex[i])
      }
    }

    for (let i in acreageIndex) {
      Object.assign(data, acreageIndex[i])
    }
    for (let i in otherIndex) {
      Object.assign(data, otherIndex[i])
    }

    delete data.title

    app.api.leaseList(Object.assign(data, {
      type: this.data.type,
      ID: app.data.cityID ? app.data.cityID : '',
      city_name: app.data.cityID ? '' : app.data.currentCity
    })).then(res => {
      if (res.code === 200) {
        this.setData({
          list: res.list
        })
      }
    })
    this.closeSort()
  },

  minPriceRange(e) {
    this.setData({
      rent_min: e.detail.value,
      rentIndex: []
    })
  },
  maxPriceRange(e) {
    this.setData({
      rent_max: e.detail.value,
      rentIndex: []
    })
  }
})
