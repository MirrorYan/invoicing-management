import { loginApi } from '@/apis/user'

let app = getApp()

const Message = {
  username: '请输入用户名',
  password: '请输入密码'
}

Page({
  /* Init data of page */
  data: {
    username: null,
    password: null
  },
  // Input value listener
  username: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  password: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  // 表单校验
  validate() {
    let errorMessage = ''
    if (!this.data.username) {
      errorMessage = Message.username
    } else if (!this.data.password) {
      errorMessage = Message.password
    }
    if (errorMessage) {
      wx.showToast({
        title: errorMessage,
        icon: 'none',
        duration: 1000
      })
      return false
    }
    return true
  },
  // Login
  login: function () {
    if (!this.validate()) return
    const { username, password } = this.data
    loginApi({
      mobile: username,
      password
    }).then(res => {
      const roles = res.roles
      wx.showToast({
        title: '登录成功！',
        duration: 2000,
        complete: function () {
          if (roles.indexOf('ROLE_ADMIN') !== -1) {
            app.globalData.admin = true
          }
          wx.setStorageSync('token', res.token)
          wx.setStorageSync('roles', roles)
          wx.switchTab({ url: '/pages/home/index' })
        }
      })
    })
  },
  /* LifeCycle--监听页面加载 */
  onLoad: function (options) {
    const token = wx.getStorageSync('token') || null
    if (token) {
      wx.redirectTo({ url: '/pages/index/index' })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})