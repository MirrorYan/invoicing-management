import { request } from "@/utils/request"

/**
 * 销售统计
 * @param {String} startDate YYYY-MM-DD
 * @param {String} endDate YYYY-MM-DD
 */
export const saleStaticsApi = ([ startDate, endDate ] = []) => {
  return request({
    url: '/sell/log/nums',
    method: 'get',
    data: {
      startDate,
      endDate
    }
  })
}

/**
 * 进货统计
 * @param {String} startDate YYYY-MM-DD
 * @param {String} endDate YYYY-MM-DD
 */
export const purchaseStaticsApi = ([ startDate, endDate ]) => {
  return request({
    url: '/purchase/log/nums',
    method: 'get',
    data: {
      startDate,
      endDate
    }
  })
}

/**
 * 退货统计
 * @param {String} startDate YYYY-MM-DD
 * @param {String} endDate YYYY-MM-DD
 */
export const backStaticsApi = ([ startDate, endDate ]) => {
  return request({
    url: '/return/log/nums',
    method: 'get',
    data: {
      startDate,
      endDate
    }
  })
}

/**
 * 库存统计
 * @param {String} startDate YYYY-MM-DD
 * @param {String} endDate YYYY-MM-DD
 */
export const stockStaticsApi = ([ startDate, endDate ]) => {
  return request({
    url: '/sku/nums',
    method: 'get',
    data: {
      startDate,
      endDate
    }
  })
}
