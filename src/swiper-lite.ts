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
    }
  },
  observers: {
    'width, prevMargin, nextMargin': function (width, prevMargin, nextMargin) {
      this.setData({
        realWidth: width - prevMargin - nextMargin
      })
    }
  },
  data: {
    realWidth: systemInfo.windowWidth
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
