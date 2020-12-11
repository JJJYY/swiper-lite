Page({
  data: {
    data: new Array(5).fill(1).map((item, i) => i)
  },
  showEvent(e) {
    console.log(e)
  }
})
