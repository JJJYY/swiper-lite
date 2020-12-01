import {getSystemInfo} from './helper/system'

const systemInfo = getSystemInfo()

Component({
  properties: {
    data: Array,
    width: {
      type: Number,
      value: systemInfo.windowWidth
    }
  },
  data: {
    windowWidth: systemInfo.windowWidth,
    windowHeight: systemInfo.windowHeight,
    current: 0
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
