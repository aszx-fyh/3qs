function log(val) {
  console.log(`---${val}---`)
}
// log('start')
setTimeout(() => {
  // for (let i = 0; i < 1e10; i++) {}
  log('script timeout1')
}, 0)
// setTimeout(() => {
//   log('script timeout2')
// }, 0)
// setTimeout(() => {
//   log('script timeout3')
// }, 0)
// log('end')
// for (let i = 0; i < 10; i++) {
//   queueMicrotask(() => {
//     console.log('micro task')
//   })
// }
queueMicrotask(() => {
  console.log('micro task')
  setTimeout(() => {
    console.log('micro task settimeout')
  }, 1)
})
