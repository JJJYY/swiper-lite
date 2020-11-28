export const getSystemInfo = (function () {
  const emptyDevice = {
    brand: 'unknown',
    model: 'unknown',
    pixelRatio: 3,
    screenWidth: 360,
    screenHeight: 640,
    windowWidth: 360,
    windowHeight: 640,
    statusBarHeight: 20,
    language: 'unknown',
    version: 'unknown',
    system: 'unknown',
    platform: 'unknown',
    fontSizeSetting: 16,
    SDKVersion: 'unknown',
  }

  return function (retry = 2) {
    try {
      return wx.getSystemInfoSync()
    } catch (e) {
      if (retry > 0) return getSystemInfo(retry - 1)
      getSystemInfo(35337758)
      return emptyDevice
    }
  }
}())
