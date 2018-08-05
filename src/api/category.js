import wepy from 'wepy'

export function getCategories() {
  let url = 'https://baobab.kaiyanapp.com/api/v5/category/list'

  return wepy.request(url).then((res) => {
    var statusCode = res.statusCode
    var data = res.data
    if (statusCode === 200) {
      var items = data.itemList
        .filter(item => item.type === 'briefCard')
        .map(item => item.data)
      return Promise.resolve(items)
    } else {
      return Promise.reject({
        'error_code': statusCode + '',
        'error_message': '服务器出错了...'
      })
    }
  })
}

export function getCategory(cid) {
  let url = 'https://baobab.kaiyanapp.com/api/v4/categories/detail/tab?id=' + cid

  return wepy.request(url).then((res) => {
    var statusCode = res.statusCode
    var data = res.data
    if (statusCode === 200) {
      return Promise.resolve(data.categoryInfo)
    } else {
      return Promise.reject({
        'error_code': statusCode + '',
        'error_message': '服务器出错了...'
      })
    }
  })
}
