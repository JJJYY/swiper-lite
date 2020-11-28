
Component({
  properties: {
    data: Number
  },
  data: {
    color: 'rgb(0,0,0)'
  },
  lifetimes: {
    created() {
      setTimeout(() => {
        this.setData({
          color: `rgb(${this.getRandom()}, ${this.getRandom()}, ${this.getRandom()})`
        })
      }, 500)
    }
  },
  methods: {
    getRandom() {
      return parseInt(Math.random() * 255, 10)
    }
  }
})
