import {
  saleStaticsApi,
  purchaseStaticsApi,
  backStaticsApi,
  stockStaticsApi
} from '@/apis/home'
import { formatDate } from '@/utils/date'
import { handlePrice } from '@/utils/price'

const today = formatDate()

Page({
  /* Init data of Page */
  data: {
    dateRange: [today, today],
    info: {
      sale: {
        icon: '/assets/images/home-sale.png',
        title: '销售',
        label: '销量',
        load: false,
        price: null,
        number: null,
      },
      purchase: {
        icon: '/assets/images/home-purchase.png',
        title: '进货',
        label: '进货数',
        load: false,
        price: null,
        number: null,
      },
      back: {
        icon: '/assets/images/home-back.png',
        title: '退货',
        label: '退货数',
        load: false,
        price: null,
        number: null,
      },
      stock: {
        icon: '/assets/images/home-stock.png',
        title: '库存',
        label: '库存总量',
        load: false,
        price: null,
        number: null,
      }
    },
  },
  pageLoad: function () {
    const _this = this
    const { dateRange } = _this.data
    saleStaticsApi(dateRange)
      .then(res => {
        _this.setData({
          'info.sale': {
            ..._this.data.info.sale,
            price: handlePrice(res.totalPrices),
            number: res.totalNums
          }
        })
      })
      .catch(() => {
        _this.setData({
          'info.sale': {
            ..._this.data.info.sale,
            price: null,
            number: null
          }
        })
      })
    purchaseStaticsApi(dateRange)
      .then(res => {
        _this.setData({
          'info.purchase': {
            ..._this.data.info.purchase,
            price: handlePrice(res.totalPrices),
            number: res.totalNums
          }
        })
      })
      .catch(() => {
        _this.setData({
          'info.purchase': {
            ..._this.data.info.purchase,
            price: null,
            number: null
          }
        })
      })
    backStaticsApi(dateRange)
      .then(res => {
        _this.setData({
          'info.back': {
            ..._this.data.info.back,
            price: handlePrice(res.totalPrices),
            number: res.totalNums
          }
        })
      })
      .catch(() => {
        _this.setData({
          'info.back': {
            ..._this.data.info.back,
            price: null,
            number: null
          }
        })
      })
    stockStaticsApi(dateRange)
      .then(res => {
        _this.setData({
          'info.stock': {
            ..._this.data.info.stock,
            price: handlePrice(res.totalPrices),
            number: res.totalNums
          }
        })
      })
      .catch(() => {
        _this.setData({
          'info.stock': {
            ..._this.data.info.stock,
            price: null,
            number: null
          }
        })
      })
    // Request({
    //   url: pucStatis,
    //   success: function (res) {
    //     const data = SuccRequest(res)
    //     if (data) {
    //       that.setData({
    //         purcInfo: data,
    //         pucLoad: false
    //       })
    //     }
    //   }
    // })
    // Request({
    //   url: stoStatis,
    //   success: function (res) {
    //     const data = SuccRequest(res)
    //     if (data) {
    //       that.setData({
    //         stokeInfo: data,
    //         stoLoad: false
    //       })
    //       wx.stopPullDownRefresh()
    //     }
    //   }
    // })
    // Request({
    //   url: bacStatis,
    //   success: function (res) {
    //     const data = SuccRequest(res)
    //     if (data) {
    //       that.setData({
    //         backInfo: data,
    //         bacLoad: false
    //       })
    //       wx.stopPullDownRefresh()
    //     }
    //   }
    // })
  },
  // /* Event Listeners */
  // dateFresh: function (e) {
  //   let { dates } = e.detail
  //   this.setData({ dates })
  //   this.pageLoad()
  // },
  /* LifeCycle-监听页面显示 */
  onShow: function () {
    this.pageLoad()
  },
  // /* 下拉刷新 */
  // onPullDownRefresh: function() {
  //   const { salLoad, pucLoad, stoLoad, bacLoad } = this.data
  //   if (salLoad || pucLoad || stoLoad || bacLoad) return
  //   this.pageLoad()
  // }
})
