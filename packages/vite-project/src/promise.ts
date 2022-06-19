type QPromiseResolver = (resolve:Function,reject:Function)=>void
type QPromiseState='pending'|'fulfilled'|'rejected'
type QPromiseFull=(val:any)=>any
type QPromiseReject=(val:any)=>any

export class QPromise {
  [Symbol.toStringTag]='QPromise';
  value:any;
  reason:any;
  onFulfilled:QPromiseFull[] = [];//成功的回调
  onRejected:QPromiseReject[] = []; //失败的回调
  state:QPromiseState='pending'
  constructor(resolver: QPromiseResolver) {
    if (typeof resolver !== 'function') {
      const error = new Error()
      error.name = 'func error'
      error.message = `Promise resolver ${resolver} is not a function`
      throw error
    }

    const resolve=(val:any)=>{
      if(this.state==='pending'){
        this.value=val;
        this.state='fulfilled'
        this.onFulfilled.forEach(func=>func(this.value))
      }
    }
    const reject=(reason:any)=>{
      if(this.state==='pending'){
          this.reason=reason;
          this.state='rejected'
          this.onRejected.forEach(func=>func(this.value))
      }
    }
    try {
      resolver(resolve,reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onFulfilled:QPromiseFull,onRejected?:QPromiseReject) {
    if(this.state === 'fulfilled'&&typeof onFulfilled==='function'){
       onFulfilled(this.value)
    }
    if(this.state==='rejected'&&typeof onRejected==='function'){
      onRejected(this.reason)
    }
    if(this.state==='pending'){
     typeof onFulfilled==='function'&& this.onFulfilled.push(onFulfilled)
     typeof onRejected==='function'&& this.onRejected.push(onRejected)
    }
  }
  catch(onReject:QPromiseReject) {
    if(this.state==='rejected'&&typeof onReject==='function'){
      return QPromise.resolve(onReject(this.value))
    }
    return this;
  }
  static resolve(val) {
     return new QPromise((resolve)=>{
        resolve(val)
     })
  }
  static reject() {

  }
  static all() {}

  static race() {}
}
  