import { getToken, getRoles } from '@/utils/auth'
import { PAGES } from '@/utils/constants'

App({
  globalData: {
    admin: false
  },
  onLaunch: function () {
    const roles = getRoles()
    // Get user informations.
    if (!getToken() || !roles) {
      wx.redirectTo({
        url: PAGES.LOGIN
      })
    } else {
      if (roles.indexOf('ROLE_ADMIN') !== -1) {
        this.globalData.admin = true
      }
    }
  }
})
