let id: number = 0

Component({
  properties: {
  },
  data: {
    id
  },
  lifetimes: {
    created() {
      this.setData({
        id: id++
      })
    }
  }
})
