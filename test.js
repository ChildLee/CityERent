let a = {a: 1}
setInterval(res => {
  console.time('1')
  Object.assign(a, {b: 2})
  console.timeEnd('1')
}, 1111)
