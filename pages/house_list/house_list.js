// pages/house_list/house_list.js
const app = getApp()


Page({
    data: {
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
        //租金
        rentList: [],
        //面积
        acreageList: [],
        //区域选择下标
        switchIndex: [1],
        //更多选中
        otherIndex: {},
        //面积选中
        acreageIndex: {},
        //租金选中
        rentIndex: {},
        list: []
    },

    onLoad(options) {
        // if (options.type) {
        //     this.getLeaseList(options.type)
        // }
        this.getLeaseList(1)
        this.getArea()
        this.getSubway()
        this.other()
        this.rent()
        this.acreage()
    },

    //获取(厂房/商铺/写字楼/住宅)列表
    getLeaseList(type) {
        app.api.leaseList({
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
        console.log('上拉刷新')
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
        console.log(this)
    },

    //选择区
    areaSelected(e) {
        let id = e.currentTarget.dataset.id
        let arr = this.data.switchIndex
        arr[1] = id
        this.setData({
            switchIndex: arr
        })
    },

    //获取当前城市
    getArea() {
        app.api.area({city_name: app.data.currentCity}).then(res => {
            this.setData({
                areaList: res.list
            })
        })
    },

    //获取当前城市地铁
    getSubway() {
        app.api.subway({city_name: app.data.currentCity}).then(res => {
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
            switchIndex: arr
        })
        app.api.subwayinfo({subway_id}).then(res => {
            this.setData({
                subwayAroundList: res.list
            })
        })
    },

    //选择地铁周边
    subwayAroundSelected(e) {
        let index = e.currentTarget.dataset.index
        let arr = this.data.switchIndex
        arr[2] = index
        this.setData({
            switchIndex: arr
        })
    },

    //更多
    other() {
        app.api.other().then(res => {
            this.setData({
                otherList: res.data
            })
        })
    },

    //更多选中
    otherSelected(e) {
        let {index, data} = e.currentTarget.dataset
        let otherIndex = this.data.otherIndex
        otherIndex[index] === data.title ? delete otherIndex[index] : otherIndex[index] = data.title
        this.setData({
            otherIndex
        })
    },

    //租金
    rent() {
        app.api.rent().then(res => {
            this.setData({
                rentList: res.data.list
            })
        })
    },

    //租金选中
    rentSelected(e) {
        let {index, data} = e.currentTarget.dataset
        let rentIndex = this.data.rentIndex
        rentIndex[index] === data.title ? delete rentIndex[index] : rentIndex[index] = data.title
        this.setData({
            rentIndex
        })
    },

    //面积
    acreage() {
        app.api.acreage().then(res => {
            this.setData({
                acreageList: res.data.list
            })
        })
    },

    //面积
    acreageSelected(e) {
        let {index, data} = e.currentTarget.dataset
        let acreageIndex = this.data.acreageIndex
        acreageIndex[index] === data.title ? delete acreageIndex[index] : acreageIndex[index] = data.title
        this.setData({
            acreageIndex
        })
    },

    //不限条件
    clearConditions() {
        this.setData({
            otherIndex: {},
            acreageIndex: {},
            rentIndex: {}
        })
    }
})