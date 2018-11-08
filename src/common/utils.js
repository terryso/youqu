export function secondToTime(second) {
  var hours = Math.floor(second / 3600)
  var minutes = Math.floor(Math.floor(second % 3600) / 60)
  var seconds = second % 60

  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds

  if (hours > 0) {
    hours = hours > 9 ? hours : '0' + hours
    return hours + ':' + minutes + ':' + seconds
  }
  return minutes + ':' + seconds
}

export function uniqueArray(origin) {
  let temp = []
  let r = []
  for (let i = 0; i < origin.length; i++) {
    if (temp.indexOf(origin[i].id) === -1) {
      temp.push(origin[i].id)
      r.push(origin[i])
    }
  }
  return r
}

export function timestampToDate(ts) {
  return new Date(ts).toLocaleDateString()
}
