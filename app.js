import { getToken, getRoles } from './utils/auth'

App({
  globalData: {
    admin: false
  },
  onLaunch: function () {
    const roles = getRoles()
    // Get user informations.
    if (!getToken() || !roles) {
      wx.redirectTo({
        url: '/pages/login/login'
      })
    } else {
      if (roles.indexOf('ROLE_ADMIN') !== -1) {
        this.globalData.admin = true
      }
    }
  }
})
