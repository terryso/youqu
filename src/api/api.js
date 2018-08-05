import {API_HOST} from './config'
import wepy from 'wepy'

export const api = {
  get: (url, data) => {
    return wepy.request(API_HOST + url, data).then((res) => {
      var statusCode = res.statusCode
      var data = res.data
      if (statusCode === 200) {
        if (data.error_code === '0') {
          return Promise.resolve(res.data.result)
        } else {
          return Promise.reject(data)
        }
      } else {
        return Promise.reject({
          'error_code': statusCode + '',
          'error_message': data.detail
        })
      }
    })
  }
}
