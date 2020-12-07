import {getSystemInfo} from './helper/system'

const systemInfo = getSystemInfo()

Component({
  properties: {
    data: Array,
    key: String,
    circular: {
      type: Boolean,
      value: false
    },
    current: {
      type: Number,
      value: 0
    },
    width: {
      type: Number,
      value: systemInfo.windowWidth
    },
    height: {
      type: Number,
      value: systemInfo.windowHeight
    }
  },
  observers: {
    circular() {
    }
  },
  data: {
    windowWidth: systemInfo.windowWidth,
    windowHeight: systemInfo.windowHeight,
    current: 0,
  },
  lifetimes: {
    created() {
      const systemInfo = getSystemInfo()

      this.setData({
        windowWidth: systemInfo.windowWidth,
        windowHeight: systemInfo.windowHeight
      })
    }
  },
  methods: {
    selectAllItem() {
    }
  }
})
