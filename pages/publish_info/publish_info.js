// pages/publish_info/publish_info.js

const { $Message } = require('../../components/base/index');

Page({
  handleDefault() {
    $Message({
      content: '这是一条普通提醒'
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    //房屋类型
    houseType: {
      index: 0,
      list: ['住宅', '商铺']
    }
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
  onReachBottom: function (e) {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 房屋类型值改变事件
   */
  bindHouseType(e) {
    this.setData({
      'houseType.index': e.detail.value
    })
  }
})