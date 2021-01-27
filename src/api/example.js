import request from '@/utils/http'

export function exampleAdd (payload) {
  return request({
    url: 'api',
    method: 'post',
    data: payload
  })
}

export function exampleDel (_id) {
  return request({
    url: 'api/' + _id,
    method: 'delete'
  })
}

export function exampleUpdate (_id, payload) {
  return request({
    url: 'api/' + _id,
    method: 'put',
    data: payload
  })
}

export function exampleGet1 (_id) {
  return request({
    url: 'api/' + _id,
    method: 'get'
  })
}

export function exampleGet2 (payload) {
  return request({
    url: 'group',
    method: 'get',
    params: payload
  })
}
