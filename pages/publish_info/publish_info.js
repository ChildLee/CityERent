// pages/publish_info/publish_info.js
import upng from '../../lib/UPNG'

Page({
    data: {
        showCanvas: false,
        //房屋类型
        houseType: {
            index: 0,
            list: ['住宅', '商铺']
        },
        //付款方式
        payWay: {
            index: 0,
            list: ['押一付一', '押二付一']
        },
        //房屋装修
        houseDecoration: {
            index: 0,
            list: ['精装修', '古屋']
        },
        //具体位置
        address: {
            index: [0, 0, 0],
            list: [
                //省
                [{
                    id: 0,
                    name: '请选择'
                }, {
                    id: 0,
                    name: '湖南省'
                }],
                //市
                [{
                    id: 0,
                    name: '请选择'
                }, {
                    id: 0,
                    name: '京山市'
                }],
                //区
                [{
                    id: 0,
                    name: '请选择'
                }]
            ]
        },
        //房屋朝向
        houseOrientation: {
            index: 0,
            list: ['西北', '西南']
        },
        //房屋户型
        houseStyle: {
            index: [0, 0, 0],
            list: [
                [{
                    id: 0,
                    name: '请选择'
                }, {
                    id: 1,
                    name: '二室'
                }],
                [{
                    id: 0,
                    name: '请选择'
                }, {
                    id: 1,
                    name: '二厅'
                }],
                [{
                    id: 0,
                    name: '请选择'
                }, {
                    id: 1,
                    name: '二卫'
                }]
            ]
        },
        //更多
        more: false
    },

    //房屋类型值改变事件
    bindHouseType(e) {
        this.setData({
            'houseType.index': e.detail.value
        })
    },

    //付款方式值改变事件
    bindPayWay(e) {
        this.setData({
            'payWay.index': e.detail.value
        })
    },

    //房屋装修值改变事件
    bindHouseDecoration(e) {
        this.setData({
            'houseDecoration.index': e.detail.value
        })
    },

    //地址下标改变事件
    bindAddressIndex(e) {
        this.setData({
            'address.index': e.detail.value
        })
    },

    //地址值改变事件
    bindAddressValue(e) {
        let {column, value} = e.detail
        console.log(this.data.address.list[column][value])
    },

    //房屋朝向值改变事件
    bindHouseOrientation(e) {
        this.setData({
            'houseOrientation.index': e.detail.value
        })
    },

    //户型下标改变事件
    bindHouseStyleIndex(e) {
        this.setData({
            'houseStyle.index': e.detail.value
        })
    },

    //户型值改变事件
    bindHouseStyleValue(e) {
        let {column, value} = e.detail
        console.log(this.data.houseStyle.list[column][value])
    },

    //上传主图
    uploadMainPhoto() {
        this.setData({
            showCanvas: true
        })
        let ctx = wx.createCanvasContext('canvas')
        new Promise((resolve) => {
            wx.chooseImage({
                count: 2,
                sizeType: ['compressed'],
                sourceType: ['album', 'camera'],
                success: function (res) {
                    resolve(res)
                }
            })
        }).then(res => {
            return new Promise((resolve) => {
                wx.getImageInfo({
                    src: res['tempFilePaths'][0],
                    success: res => {
                        resolve(res)
                    }
                })
            })
        }).then(res => {
            return new Promise((resolve) => {
                let suffix = res.type
                ctx.drawImage(res.path, 0, 0, res.width, res.height)
                ctx.draw(false, () => {
                    wx.canvasGetImageData({
                        canvasId: 'canvas',
                        x: 0,
                        y: 0,
                        width: res.width,
                        height: res.height,
                        success: res => {
                            this.setData({
                                showCanvas: false
                            })
                            let arrBuffer = upng.encode([res.data.buffer], res.width, res.height)
                            let base64 = `data:image/${suffix};base64,${wx.arrayBufferToBase64(arrBuffer)}`
                            console.log(base64)
                            resolve(base64)
                        }
                    })
                })
            })
        })
    },

    //更多
    moreChange(e) {
        this.setData({
            more: e.detail.value
        })
    },

    //重置表单
    formReset() {
        this.setData({
            more: false
        })
    },

    //提交表单
    formSubmit(e) {
        console.log(e)
    }
})