import ajax from './ajax.js'

export default {
  login(param) {
    return ajax.post('/login', param)
  },
  area(param) {
    return ajax.get('/area', param)
  }
}