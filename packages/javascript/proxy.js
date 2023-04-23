const origin = {
  bar: 'bar',
  foo() {
    console.log('foooooooo', this.bar, ...arguments)
  },
}
const p = new Proxy(origin, {
  get(target, key, receiver) {
    console.log('get', target, key, receiver)
    const value = Reflect.get(target, key, receiver)
    if (typeof value === 'function') {
      return createFunctionProxy(value)
    }
    return value
  },
})
function createFunctionProxy(fn) {
  return new Proxy(fn, {
    apply(target, t, args) {
      console.log('apply', ...arguments)
      return Reflect.apply(target, { bar: '000' }, args)
    },
  })
}
console.log(p.foo(1, 2, 3))
