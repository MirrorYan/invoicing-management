import { isObject } from './is'

// 接口域名
const domain = 'https://product.chuncongcong.com'
// 接口统一前缀
const urlPrev = '/api'

const CODE = {
  SUCCESS: 1,
}

// 拼接get请求参数
const joinGetData = (url, data) => {
  isObject(data) && Object.keys(data).forEach((key, index) => {
    if (index === 0) {
      url += '?'
    } else {
      url += '&'
    }
    url += `${key}=${data[key]}`
  })

  return url
}

export function request ({ url, method = 'get', data }) {
  const token = wx.getStorageSync('token')
  if (method === 'get') {
    url = joinGetData(url, data)
    data = undefined
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: domain + urlPrev + url,
      method,
      data,
      ...( token ? {header: { token }} : {} ),
      success: res => {
        const response = res?.data
        if (response.code === CODE.SUCCESS) {
          resolve(response.data)
        } else {
          reject(response)
          wx.showToast({
            title: response.msg,
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: err => {
        reject(err)
        wx.showToast({
          title: '请求失败，请检查网络连接',
          icon: 'none',
          duration: 2000
        })
      }
    })
  })
}
