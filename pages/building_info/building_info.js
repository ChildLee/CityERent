// pages/building_info/building_info.js
// 写字楼详情

Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [
      {
        latitude: 32.5056200000,
        longitude: 111.0965700000,
        callout: {
          content: '武当山5A级风景区',
          display: 'ALWAYS',
          padding: 10,
          borderRadius: 10
        }
      },
      {
        latitude: 32.5016200000,
        longitude: 111.0965700000
      },
      {
        latitude: 32.5099200000,
        longitude: 111.0905700000
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})