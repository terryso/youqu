import wepy from 'wepy'

export function getItems(url) {
  if (!url) {
    url = 'https://baobab.kaiyanapp.com/api/v2/feed?num=2'
  }
  return wepy.request(url).then((res) => {
    var statusCode = res.statusCode
    var data = res.data
    if (statusCode === 200) {
      var itemList = []
      data.issueList.forEach(function (item) {
        itemList = itemList.concat(item.itemList)
      })
      var items = itemList.filter(item => item.type === 'video')
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

export function getRelatedItems(itemId) {
  let url = 'https://baobab.kaiyanapp.com/api/v4/video/related?id=' + itemId

  return wepy.request(url).then((res) => {
    var statusCode = res.statusCode
    var data = res.data
    if (statusCode === 200) {
      var items = data.itemList
        .filter(item => item.type === 'videoSmallCard')
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

export function getUserItems(uid, url) {
  if (!url) {
    url = 'https://baobab.kaiyanapp.com/api/v5/userInfo/tab/works?uid=' + uid
  }

  return wepy.request(url).then((res) => {
    var statusCode = res.statusCode
    var data = res.data
    if (statusCode === 200) {
      var items = data.itemList
        .filter(item => item.data.content.type === 'video')
        .map(item => item.data.content)

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

export function getCategoryItems(cid, url) {
  if (!url) {
    url = 'https://baobab.kaiyanapp.com/api/v4/categories/videoList?id=' + cid + '&udid=05d79663510465d2c1b99af2768189398f172060'
  } else {
    url = url + '&udid=05d79663510465d2c1b99af2768189398f172060'
  }

  return wepy.request(url).then((res) => {
    var statusCode = res.statusCode
    var data = res.data
    if (statusCode === 200) {
      var items = data.itemList
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

export function getItem(itemId) {
  let url = 'https://baobab.kaiyanapp.com/api/v1/video/' + itemId + '?udid=05d79663510465d2c1b99af2768189398f172060'
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

export function searchItems(q, url) {
  if (!url) {
    url = 'https://baobab.kaiyanapp.com/api/v3/search?num=10&query=' + q
  }

  return wepy.request(url).then((res) => {
    var statusCode = res.statusCode
    var data = res.data
    if (statusCode === 200) {
      var items = data.itemList
        .filter(item => item.type === 'followCard')
        .map(item => item.data.content.data)

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

export function getItemComments(itemId, url) {
  if (!url) {
    url = 'https://baobab.kaiyanapp.com/api/v2/replies/video?videoId=' + itemId
  }

  return wepy.request(url).then((res) => {
    var statusCode = res.statusCode
    var data = res.data
    if (statusCode === 200) {
      var items = data.itemList
        .filter(item => item.type === 'reply')
        .map(item => item.data)

      var ret = {
        next_page_url: data.nextPageUrl,
        total: data.total,
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

