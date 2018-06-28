// pages/house_list/house_list.js
const app = getApp()


Page({
    data: {
        img: app.data.img,
        //打开筛选样式
        sortFixed: '',
        //筛选下标
        sortIndex: 0,
        //更多帅选
        sortMore: [],
        list: []
    },

    onLoad(options) {
        if (options.type) {
            this.getLeaseList(options.type)
        }
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
        if (index === 1) {

        } else if (index === 2) {
        } else if (index === 3) {
        } else if (index === 4) {
            this.setData({
                'sortMore[0]': {
                    index: 0,
                    list: [
                        {
                            id: 0,
                            name: '面积'
                        }, {
                            id: 1,
                            name: '价格'
                        }, {
                            id: 2,
                            name: '状态'
                        }
                    ]
                },
                'sortMore[1]': {
                    index: 0,
                    list: [
                        {
                            id: 0,
                            name: '全部'
                        }, {
                            id: 1,
                            name: '营业中'
                        }
                    ]
                }
            })
            console.log(this)
        } else {
            wx.showToast({title: '没有更多数据', icon: 'none'})
        }
    },

    //更多选项切换
    moreChange(e) {
        //arrindex层级下标,itemindex当前层级第几个选项,id当前选项的数据库id
        let {arrindex, itemindex, id} = e.currentTarget.dataset
        let sortMore = this.data.sortMore
        sortMore = sortMore.slice(0, arrindex + 1)
        sortMore[arrindex].index = itemindex
        sortMore.push({
            index: 0,
            list: [{
                id: 0,
                name: '全部'
            }, {
                id: 1,
                name: '营业中'
            }]
        })
        this.setData({
            sortMore
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
    }
})