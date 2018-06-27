import ajax from './ajax.js'

export default {
    pay(param) {
        return ajax.post('/wx/pay', param)
    },
    getOpenId(param) {
        return ajax.post('/wx/getOpenId', param)
    },
    login(param) {
        return ajax.post('/login/getOpenidKey', param)
    },
    getPhoneNumber(param) {
        return ajax.post('/wx/getPhoneNumber', param)
    },
    area(param) {
        return ajax.get('/Areas/areas', param)
    }
}