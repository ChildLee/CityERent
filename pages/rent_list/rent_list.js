// pages/rent_list/rent_list.js
const app = getApp()

Page({
    data: {
        img: app.data.img,
        page: 1,
        community_id: 1,
        rent_list: []
    },

    onLoad: function (options) {
        if (options.id) {
            this.setData({
                community_id: options.id
            })
            this.getCommunity(options.id, 1)
        }
    },

    //展示楼盘里所有出租的列表
    getCommunity(id, page) {
        app.api.community({
            page: page,
            community_id: id
        }).then(res => {
            if (res.code === 200 && res.list.length) {
                this.setData({
                    rent_list: this.data.rent_list.push(...res.list)
                })
            }
        })
    },

    //上拉刷新
    onReachBottom() {
        let {page, community_id} = this.data
        ++page
        this.setData({
            page: page
        })
        this.getCommunity(community_id, page)
    }
})