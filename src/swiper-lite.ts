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
    },
    nextMargin: {
      type: Number,
      value: 0
    },
    prevMargin: {
      type: Number,
      value: 0
    },
    vertical: {
      type: Boolean,
      value: false
    }
  },
  observers: {
    // realWidth
    'width, prevMargin, nextMargin, vertical': function (width, prevMargin, nextMargin, vertical) {
      this.setData({
        realWidth: width - (vertical ? 0 : (prevMargin + nextMargin))
      })
    },
    // realHeight
    'height, prevMargin, nextMargin, vertical': function (height, prevMargin, nextMargin, vertical) {
      this.setData({
        realHeight: height - (vertical ? 0 : (prevMargin + nextMargin))
      })
    }
  },
  data: {
    realWidth: systemInfo.windowWidth,
    realHeight: systemInfo.windowHeight
  },
  lifetimes: {
    created() {
    }
  },
  methods: {
    selectAllItem() {
    }
  }
})
