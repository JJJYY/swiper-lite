import {getSystemInfo} from './helper/system'

const systemInfo = getSystemInfo()

Component({
  properties: {
  },
  data: {
    windowWidth: systemInfo.windowWidth,
    windowHeight: systemInfo.windowHeight,
  },
  lifetimes: {
    created() {
      const systemInfo = getSystemInfo()

      this.setData({
        windowWidth: systemInfo.windowWidth,
        windowHeight: systemInfo.windowHeight
      })

      this.selectAllItem()
    }
  },
  methods: {
    selectAllItem() {
    }
  }
})
