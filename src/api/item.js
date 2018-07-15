import wepy from 'wepy'

export function getItems(url) {
  if (!url) {
    url = 'https://baobab.kaiyanapp.com/api/v2/feed?num=20'
  }
  return wepy.request(url).then((res) => {
    var statusCode = res.statusCode
    var data = res.data
    if (statusCode === 200) {
      var items = data.issueList[0].itemList
        .filter(item => item.type === 'video')
        .map(item => item.data)
      var ret = {
        next_page_url: data.nextPageUrl,
        data: items
      }
      return Promise.resolve(ret)
    } else {
      return Promise.reject({
        'error_code': statusCode + '',
        'error_message': '服务器出错了...'
      })
    }
  })
}

export function getItem(item_id) {
  let url = 'https://baobab.kaiyanapp.com/api/v1/video/' + item_id
  return wepy.request(url).then((res) => {
    var statusCode = res.statusCode
    var data = res.data
    if (statusCode === 200) {
      var item = data
      var cover = {
        feed: item.coverForFeed,
        detail: item.coverForDetail,
        blurred: item.coverBlurred
      }
      item['cover'] = cover
      return Promise.resolve(item)
    } else {
      return Promise.reject({
        'error_code': statusCode + '',
        'error_message': '服务器出错了...'
      })
    }
  })
}
