import {api} from './api'

export function getApp(version) {
  return api.get('/api/v1/app/?version=' + version)
}

export function getAppVersion() {
  return api.get('/version_1_1_3.json')
}
