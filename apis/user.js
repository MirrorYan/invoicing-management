import { request } from "@/utils/request"

/**
 * 登录
 * @param {Object} data { mobile, password }
 */
export const loginApi = (data) => {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
