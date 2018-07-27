// pages/attention/attention.js
const app = getApp()
Page({

  data: {
    img: app.data.img,
    page: 1,
    focusList: []
  },

  onShow() {
    app.api.focusList({
      id: app.data.id,
      page: this.data.page
    }).then(res => {
      this.setData({
        focusList: res.list
      })
    })
  },

  onReachBottom() {
    app.api.focusList({
      id: app.data.id,
      page: ++this.data.page
    }).then(res => {
      if (res.list.length) {
        this.setData({
          focusList: this.data.focusList.concat(res.list)
        })
      }
    })
  }
})
