const app = getApp()

Page({

  data: {
    //身份证正面
    cardFront: undefined,
    //省份证反面
    cardBack: undefined
  },

  //点击条款
  terms() {
    wx.navigateTo({url: '/pages/manager_terms/manager_terms'})
  },

  input_name(e) {
    this.data.name = e.detail.value
  },

  cardFront() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          cardFront: res['tempFilePaths'][0]
        })
      }
    })
  },

  cardBack() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          cardBack: res['tempFilePaths'][0]
        })
      }
    })
  },

  handheld() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          handheld: res['tempFilePaths'][0]
        })
      }
    })
  },

  agree(e) {
    this.data.agree = Boolean(e.detail.value)
  },

  //提交注册
  submit(e) {
    if (!this.data.name) {
      wx.showToast({title: '请输入姓名', icon: 'none'})
      return
    }
    if (!this.data.cardFront || !this.data.cardBack || !this.data.handheld) {
      wx.showToast({title: '请上传身份证照片', icon: 'none'})
      return
    }
    if (!this.data.agree) {
      wx.showToast({title: '请同意条款', icon: 'none'})
      return
    }
    Promise.all([
      this.uploadImg(this.data.cardFront),
      this.uploadImg(this.data.cardBack),
      this.uploadImg(this.data.handheld)
    ]).then(res => {
      return app.api.agent({
        id: app.data.id,
        card_side: JSON.parse(res[0].data).list.file,
        card_back: JSON.parse(res[1].data).list.file,
        handheld: JSON.parse(res[2].data).list.file,
        name: this.data.name
      })
    }).then(res => {
      if (res.code === 200) {
        wx.navigateTo({url: '/pages/manager_review/manager_review'})
        wx.showToast({title: res['msg'], icon: 'none'})
      }
    })

  },

  //上传图片
  uploadImg(path) {
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: 'https://project.xiaozhanxiang.com/wechar/login/uploadImg',
        filePath: path,
        name: 'file',
        success: (res) => {
          resolve(res)
        }
      })
    })
  },

  preview() {
    wx.previewImage({
      current: 'https://project.xiaozhanxiang.com/upload/admin/static/2018/06/andheld.png',
      urls: ['https://project.xiaozhanxiang.com/upload/admin/static/2018/06/andheld.png']
    })
  }
})
