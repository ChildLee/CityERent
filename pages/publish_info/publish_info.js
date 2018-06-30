// pages/publish_info/publish_info.js
const app = getApp()

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
            list: [[{ID: -1, Name: '请选择'}], [{ID: -1, Name: '请选择'}], [{ID: -1, Name: '请选择'}]]
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
        more: false,
        //地铁线
        metroLine: [{subway_id: -1, subway_name: '无'}],
        //地铁下标
        metroLineIndex: 0,
        //小区
        community: [{community_id: -1, community_name: '无'}],
        //小区下标
        communityIndex: 0
    },

    onLoad() {
        this.getProvince()
    },

    //初始化省
    getProvince() {
        return app.api.province().then(res => {
            this.setData({
                'address.list[0]': this.data.address.list[0].concat(res.list)
            })
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

    //获取地址
    // getAddress(e) {
    //
    // },
    cancelAddressIndex() {
        this.setData({
            'address.index': [0, 0, 0]
        })
        wx.showToast({title: '请选择完整地址', icon: 'none'})

    },
    //地址确定事件
    bindAddressIndex(e) {
        let index = e.detail.value
        if (index[0] <= 0 || index[1] <= 0 || index[2] <= 0) {
            this.setData({
                'address.index': [0, 0, 0]
            })
            return wx.showToast({title: '请选择完整地址', icon: 'none'})
        }
        console.log(e.detail.value)
        this.setData({
            'address.index': e.detail.value
        })
    },

    //地址值改变事件
    bindAddressValue(e) {
        let {column, value} = e.detail
        let {ID} = this.data.address.list[column][value]
        if (column === 0) {
            let index = this.data.address.index
            index[0] = value
            index[1] = -1
            index[2] = -1

            this.setData({
                'address.index': index,
                'address.list[1]': [{ID: -1, Name: '请选择'}],
                'address.list[2]': [{ID: -1, Name: '请选择'}]
            })
            app.api.getAreas({ID}).then(res => {
                this.setData({
                    'address.list[1]': [{ID: -1, Name: '请选择'}].concat(res.list)
                })
            })
        }
        if (column === 1) {
            let index = this.data.address.index
            index[1] = value
            index[2] = -1
            this.setData({
                'address.list[2]': [{ID: -1, Name: '请选择'}]
            })
            app.api.getAreas({ID}).then(res => {
                this.setData({
                    'address.list[2]': [{ID: -1, Name: '请选择'}].concat(res.list)
                })
            })
            app.api.getSubway({ID}).then(res => {
                this.setData({
                    metroLine: [{subway_id: -1, subway_name: '无'}].concat(res.list)
                })
            })
        }
        if (column === 2) {
            app.api.getCommunity({ID}).then(res => {
                this.setData({
                    community: [{community_id: -1, community_name: '无'}].concat(res.list)
                })
            })
        }
    },

    //地铁线选中事件
    metroLineSelected(e) {
        console.log(e)
        this.setData({
            metroLineIndex: e.detail.value
        })
    },

    //小区选中事件
    communitySelected(e) {
        this.setData({
            communityIndex: e.detail.value
        })
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
        wx.chooseImage({
            success(res) {
                wx.uploadFile({
                    url: 'http://scoket.xiaozhanxiang.com/wechar/Community/uploadImag',
                    filePath: res['tempFilePaths'][0],
                    name: 'sitting_image',
                    success: function (res) {
                        console.log(res)
                    }
                })
            }
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

    }
})