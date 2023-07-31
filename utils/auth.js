export const getToken = () => {
  return wx.getStorageSync('token')
}

export const getRoles = () => {
  return wx.getStorageSync('roles')
}
