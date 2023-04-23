async function* makerGenerator() {
  console.log(11)
  yield 1
  console.log(22)
  yield 2
  console.log(33)
  return 3
}
const ite = makerGenerator()
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())

const person = {
  value: 1,
  next() {
    this.value += 1
    return {
      value: this.value,
      done: this.value > 6 ? true : false,
    }
  },
  return() {
    return {
      value: 999,
      done: true,
    }
  },
  [Symbol.iterator]() {
    return this
  },
}

// for (const item of person) {
//   console.log(item)
// }
