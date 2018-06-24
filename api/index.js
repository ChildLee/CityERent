import ajax from './ajax.js'

export default {
    getOpenId(param) {
        return ajax.post('/wx/getOpenId', param)
    },
    getPhoneNumber(param) {
        return ajax.post('/wx/getPhoneNumber', param)
    },
    area(param) {
        return ajax.get('/area', param)
    }
}