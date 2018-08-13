const app = getApp()

Page({

  data: {
    img: app.data.img,
    /**event**/
    // 发布类型
    releaseType: 2,
    // 小区附图
    community_vice: [],
    // 房子附图
    other_image: [],
    // 发布房源类型
    type: 1,
    typeList: {
      index: 0,
      list: ['写字楼', '商铺', '工业厂房', '住宅']
    },
    // 房屋装修
    decorate: 0,
    decorateList: ['毛坯', '简装', '中装', '精装', '豪装'],
    // 付款方式
    way: 0,
    wayList: ['押一付一', '押二付一', '押三付一', '半年付', '年付'],
    // 商铺类型
    genre: 0,
    shopTypeList: ['购物中心', '临街商铺', '办公楼配套商铺', '专项卖场'],
    // 长房类型
    // genre: 0,
    factoryTypeList: ['独栋', '工业园', '独门独院'],
    // 朝向
    toward: 0,
    faceList: ['正东', '正南', '正西', '正北', '东南', '西南', '东北', '西北', '南北'],
    //几室几厅几卫
    room: 0,
    hall: 0,
    toilet: 0,
    houseType: [
      [
        {
          id: 0,
          name: '请选择'
        },
        {
          id: 1,
          name: '1室'
        },
        {
          id: 2,
          name: '2室'
        },
        {
          id: 3,
          name: '3室'
        }],
      [
        {
          id: 0,
          name: '请选择'
        },
        {
          id: 1,
          name: '1厅'
        },
        {
          id: 2,
          name: '2厅'
        },
        {
          id: 3,
          name: '3厅'
        }],
      [
        {
          id: 0,
          name: '请选择'
        },
        {
          id: 1,
          name: '1卫'
        },
        {
          id: 2,
          name: '2卫'
        },
        {
          id: 3,
          name: '3卫'
        }]
    ]
  },

  onLoad() {
    this.init()
  },

  init() {
    this.getProvince()
  },

  // 切换发布类型
  moreChange(e) {
    this.setData(({
      releaseType: Number(e.detail.value)
    }))
  },

  /********************小区********************/

  // 获取小区表单
  getInput(e) {
    const name = e.target.dataset.name
    const val = e.detail.value
    this.setData({[name]: val})
  },

  // 选择经纬度
  selectLatitudeLongitude() {
    wx.chooseLocation({
      success: (res) => {
        let orientation = [res.longitude, res.latitude]
        this.setData({orientation})
      }
    })
  },

  // 电梯房
  elevatorChange(e) {
    this.setData({
      elevator: e.detail.value
    })
  },

  // 小区主图
  community_image() {
    wx.chooseImage({
      success: (res) => {
        wx.uploadFile({
          url: app.data.uploadImg,
          filePath: res['tempFilePaths'][0],
          name: 'file',
          success: (res) => {
            const file = JSON.parse(res.data).list.file

            this.setData({
              community_image: file
            })
          }
        })
      }
    })
  },

  // 小区附图
  community_vice() {
    wx.chooseImage({
      success: (res) => {
        wx.uploadFile({
          url: app.data.uploadImg,
          filePath: res['tempFilePaths'][0],
          name: 'file',
          success: (res) => {
            const file = JSON.parse(res.data).list.file

            this.data.community_vice.push(file)
            this.setData({
              community_vice: this.data.community_vice
            })
          }
        })
      }
    })
  },

  // 提交小区表单
  submitCommunity() {
    let {
      //小区标题
      community_name,
      //物业
      property,
      //物业费
      cost,
      //车位
      car,
      //电梯房
      elevator,
      //小区介绍,
      content,
      //省
      province,
      //市
      city,
      //区
      areas,
      //地铁线
      subway,
      //经纬度
      orientation,
      //详细地址
      specific,
      //小区主图
      community_image,
      //小区附图
      community_vice
    } = this.data

    console.log('小区标题', community_name)
    console.log('小区物业', property)
    console.log('物业费', cost)
    console.log('车位', car)
    console.log('电梯房', elevator)
    console.log('小区介绍', content)
    console.log('省', province)
    console.log('市', city)
    console.log('区', areas)
    console.log('经纬度', orientation)
    console.log('地铁线', subway)
    console.log('详细地址', specific)
    console.log('小区主图', community_image)
    console.log('小区附图', community_vice)

    app.api.addCommunity({
      community_name,
      property,
      cost,
      car,
      elevator,
      content,
      province,
      city,
      areas,
      subway,
      orientation,
      specific,
      community_image,
      community_vice
    }).then(res => {
      if (res.code === 200) {
        wx.navigateBack({})
        wx.showToast({title: res.msg})
      } else {
        wx.showToast({title: res.msg})
      }
    })
  },

  /********************发布房源********************/

  // 类型值改变事件
  bindType(e) {
    this.data.typeList.index = Number(e.detail.value)
    this.setData({
      type: Number(e.detail.value) + 1,
      typeList: this.data.typeList
    })
  },

  // 装修
  decorate(e) {
    this.setData({
      decorate: e.detail.value
    })
  },

  // 付款方式
  payWay(e) {
    this.setData({
      way: e.detail.value
    })
  },

  // 商铺类型
  genreChange(e) {
    this.setData({
      genre: e.detail.value
    })
  },


  /**********住宅**********/
  // 朝向
  faceChange(e) {
    this.setData({
      toward: e.detail.value
    })
  },

  // 合租方式
  roommates(e) {
    this.setData({
      scale: e.detail.value
    })

  },

  // 限制性别
  sexChange(e) {
    this.setData({
      sex: e.detail.value
    })
  },

  /**户型**/

  // 房屋户型确定
  houseType(e) {
    const index = e.detail.value
    console.log(index)
    console.log(this.data.houseType)
    this.setData({
      room: this.data.houseType[0][index[0]]['id'],
      hall: this.data.houseType[1][index[1]]['id'],
      toilet: this.data.houseType[2][index[2]]['id']
    })
  },

  // 房屋户型取消
  houseTypeCancel(e) {
    this.setData({
      room: this.data.room,
      hall: this.data.hall,
      toilet: this.data.toilet
    })
  },
  /**********住宅**********/

  // 写字楼发布
  submit() {
    let {
      type,
      //标题
      title,
      //几室
      room,
      //几厅
      hall,
      //几卫
      toilet,
      //装修
      decorate,
      //朝向
      toward,
      //合租方式
      scale,
      //限制性别
      sex,
      //付款方式
      way,
      //租金
      rent,
      //面积
      area,
      //楼层,
      floor,
      //省
      province,
      //市
      city,
      //区
      areas,
      //地铁线
      subway,
      //经纬度
      orientation,
      //详细地址
      specific,
      //小区id
      community_id,
      //商圈名称
      circle,
      //联系人
      membername,
      //联系电话
      phone,
      //楼宇(厂区)主图
      garden_image,
      //主图
      sitting_image,
      //附图
      other_image,
      //房屋(合同)照
      house_image
    } = this.data

    console.log('type', type)
    console.log('标题', title)
    console.log('装修', decorate)
    console.log('几室', room)
    console.log('几厅', hall)
    console.log('几卫', toilet)
    console.log('合租方式', scale)
    console.log('限制性别', sex)
    console.log('付款方式', way)
    console.log('朝向', toward)
    console.log('租金', rent)
    console.log('面积', area)
    console.log('楼层', floor)
    console.log('省', province)
    console.log('市', city)
    console.log('区', areas)
    console.log('地铁线', subway)
    console.log('经纬度', orientation)
    console.log('详细地址', specific)
    console.log('小区id', community_id)
    console.log('商圈名称', circle)
    console.log('联系人', membername)
    console.log('联系电话', phone)
    console.log('楼宇(厂区)主图', garden_image)
    console.log('主图', sitting_image)
    console.log('附图', other_image)
    console.log('房屋(合同)照', house_image)


    app.api.addLease({
      type,
      //标题
      title,
      //几室
      room,
      //几厅
      hall,
      //几卫
      toilet,
      //装修
      decorate,
      //朝向
      toward,
      //合租方式
      scale,
      //限制性别
      sex,
      //付款方式
      way,
      //租金
      rent,
      //面积
      area,
      //楼层,
      floor,
      //省
      province,
      //市
      city,
      //区
      areas,
      //地铁线
      subway,
      //经纬度
      orientation,
      //详细地址
      specific,
      //小区id
      community_id,
      //商圈名称
      circle,
      //联系人
      membername,
      //联系电话
      phone,
      //楼宇(厂区)主图
      garden_image,
      //主图
      sitting_image,
      //附图
      other_image,
      //房屋(合同)照
      house_image
    }).then(res => {
      console.log(res)
      if (res.code === 200) {
        wx.navigateBack({})
        wx.showToast({title: res.msg, icon: 'none'})
      } else {
        wx.showToast({title: res.msg, icon: 'none'})
      }
    })
  },


  /********************省市区********************/

  // 地址确定
  cityChange(e) {
    const index = e.detail.value
    this.setData({
      province: this.data.citys[0][index[0]]['ID'],
      city: this.data.citys[1][index[1]]['ID'],
      areas: this.data.citys[2][index[2]]['ID'],
      cityIndex: index
    })
  },

  // 地址取消
  cityCancel(e) {
    this.setData({
      cityIndex: this.data.cityIndex
    })
  },

  // 地址列改变
  cityColumnChange(e) {
    // 选中的列
    const {column, value} = e.detail
    const {ID, Name} = this.data.citys[column][value]
    if (column === 0) {
      // 获取市
      this.getCitys(ID)
    } else if (column === 1) {
      // 获取区
      this.getAreas(ID)
      // 获取地铁
      this.getSubway(ID)
    } else if (column === 2) {
      this.getCommunity(ID)
    }
  },

  // 省
  getProvince() {
    // 初始化省份
    app.api.province().then(res => {
      res.list.unshift({Name: '请选择'})
      this.setData({
        cityIndex: [0, 0, 0],
        citys: [res.list, [{Name: '请选择'}], [{Name: '请选择'}]]
      })
    })
  },

  // 市
  getCitys(ID = 110000) {
    app.api.getAreas({ID}).then(res => {
      res.list.unshift({Name: '请选择'})
      this.setData({
        citys: [this.data.citys[0], res.list, [{Name: '请选择'}]]
      })
    })
  },

  // 区
  getAreas(ID = 110100) {
    app.api.getAreas({ID}).then(res => {
      res.list.unshift({Name: '请选择'})
      this.setData({
        citys: [this.data.citys[0], this.data.citys[1], res.list]
      })
    })
  },


  /********************地铁线********************/

  // 地铁
  getSubway(ID) {
    app.api.getSubway({ID}).then(res => {
      res.list.unshift({subway_id: -1, subway_name: '请选择'})
      this.setData({
        subwayIndex: 0,
        subwayList: res.list
      })
    })
  },

  // 地铁线确定
  subwayChange(e) {
    const index = Number(e.detail.value)
    this.setData({
      subway: this.data.subwayList[index].subway_id,
      subwayIndex: index
    })
  },

  // 地铁线取消
  subwayCancel() {
    this.setData({
      subwayIndex: this.data.subwayIndex
    })
  },

  /********************小区********************/

  // 小区
  getCommunity(ID) {
    app.api.getCommunity({ID}).then(res => {
      res.list.unshift({community_id: -1, community_name: '请选择'})
      this.setData({
        communityIndex: 0,
        communityList: res.list
      })
    })
  },

  // 搜索小区
  searchCommunity() {
    app.api.search({community_name: this.data.community_name}).then(res => {
      if (res.list.length > 0) {
        wx.showToast({title: `找到${res.list.length}条小区数据`, icon: 'none'})
        this.setData({
          community_id: res.list[0].community_id,
          searchCommunityIndex: 0,
          searchCommunity: res.list
        })
      } else {
        wx.showToast({title: '没有找到小区数据', icon: 'none'})
        this.setData({
          searchCommunityIndex: 0,
          searchCommunity: []
        })
      }
    })
  },

  // 选择搜索的小区
  selectSearchCommunity(e) {
    const index = Number(e.detail.value)
    this.setData({
      community_id: this.data.searchCommunity[index].community_id,
      searchCommunityIndex: index
    })
  },

  // 选择小区
  selectCommunity(e) {
    const index = Number(e.detail.value)
    this.setData({
      community_id: this.data.communityList[index].community_id,
      communityIndex: index
    })
  },

  // 小区取消
  communityCancel() {
    this.setData({
      communityIndex: this.data.communityIndex
    })
  },


  /********************发布房源图********************/


  // 楼宇(厂区)主图
  garden_image() {
    wx.chooseImage({
      success: (res) => {
        wx.uploadFile({
          url: app.data.uploadImg,
          filePath: res['tempFilePaths'][0],
          name: 'file',
          success: (res) => {
            const file = JSON.parse(res.data).list.file
            this.setData({
              garden_image: file
            })
          }
        })
      }
    })
  },

  // 主图
  sitting_image() {
    wx.chooseImage({
      success: (res) => {
        wx.uploadFile({
          url: app.data.uploadImg,
          filePath: res['tempFilePaths'][0],
          name: 'file',
          success: (res) => {
            const file = JSON.parse(res.data).list.file
            this.setData({
              sitting_image: file
            })
          }
        })
      }
    })
  },


  // 附图
  other_image() {
    wx.chooseImage({
      success: (res) => {
        wx.uploadFile({
          url: app.data.uploadImg,
          filePath: res['tempFilePaths'][0],
          name: 'file',
          success: (res) => {
            const file = JSON.parse(res.data).list.file

            this.data.other_image.push(file)
            this.setData({
              other_image: this.data.other_image
            })
          }
        })
      }
    })
  },

  // 主图
  house_image() {
    wx.chooseImage({
      success: (res) => {
        wx.uploadFile({
          url: app.data.uploadImg,
          filePath: res['tempFilePaths'][0],
          name: 'file',
          success: (res) => {
            const file = JSON.parse(res.data).list.file
            this.setData({
              house_image: file
            })
          }
        })
      }
    })
  }

})
