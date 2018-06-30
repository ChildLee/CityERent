// pages/search/search.js
const app = getApp()

Page({

    data: {
        img: app.data.img,
        page: 1,
        content: '',
        list: []
    },

    search(e) {
        let {value} = e.detail
        this.setData({
            content: value
        })
        app.api.homeSearch({
            content: value,
            page: this.data.page
        }).then(res => {
            this.setData({
                list: res.list
            })
        })
    },

    //上拉刷新
    onReachBottom() {
        app.api.homeSearch({
            content: this.data.content,
            page: ++this.data.page
        }).then(res => {
            if (res.list.length) {
                this.setData({
                    list: this.data.list.concat(res.list)
                })
            }
        })
    }
})