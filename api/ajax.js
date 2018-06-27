const host = 'http://scoket.xiaozhanxiang.com/wechar/'
// const host = 'http://127.0.0.1:3000'

class ajax {
    static get(url, data) {
        return this.request(url, data, 'GET')
    }

    static post(url, data) {
        return this.request(url, data, 'POST')
    }

    static request(url, data, method) {
        return new Promise(function (resolve, reject) {
            wx.request({
                url: host + url,
                data,
                method,
                success: function (res) {
                    console.log(url, method, res.data)
                    resolve(res.data)
                },
                fail: function (res) {
                    reject(res)
                }
            })
        })
    }
}

export default ajax