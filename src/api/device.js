import http from '@/utils/fetch'

export function queryDeviceList(deviceRequestVo) {
  const url = '/api/device/queryList'
  return http.post(url, JSON.stringify(deviceRequestVo))
}
export function queryDeviceCount(deviceRequestVo) {
  const url = '/api/device/queryCount'
  return http.post(url, JSON.stringify(deviceRequestVo))
}
export function updateDevice(deviceRequestVo) {
  const url = '/api/device/updateDevice'
  return http.post(url, JSON.stringify(deviceRequestVo))
}

export function queryDeviceGroupList(requestVo) {
  const url = '/api/deviceGroup/select'
  return http.post(url, JSON.stringify(requestVo))
}
export function queryDeviceGroupCount(requestVo) {
  const url = '/api/deviceGroup/selectCount'
  return http.post(url, JSON.stringify(requestVo))
}

export function updateDeviceGroup(requestVo) {
  const url = '/api/deviceGroup/update'
  return http.post(url, JSON.stringify(requestVo))
}

export function queryDeviceTypeList(requestVo) {
  const url = '/api/device/typeList'
  return http.post(url, JSON.stringify(requestVo))
}
export function queryDeviceTypeCount(requestVo) {
  const url = '/api/device/typeCount'
  return http.post(url, JSON.stringify(requestVo))
}

export function updateDeviceType(requestVo) {
  const url = '/api/device/updateType'
  return http.post(url, JSON.stringify(requestVo))
}

export function createDeviceType(requestVo) {
  const url = '/api/device/createType'
  return http.post(url, JSON.stringify(requestVo))
}

