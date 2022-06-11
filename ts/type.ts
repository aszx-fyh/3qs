interface User {
  name:string;
  age:number;
  address:string;
}

type UserUI=Pick<User,'address'|'age'>
type UserRecord=Record<keysUser,number>
type keysUser=keyof User
type ss=ArrayLike<User>
interface ChildUser extends User{}
type sss=Exclude<keysUser,'address'>
type ssss=Extract<keysUser,'address'>
type sssss=keyof any;
let s:UserUI={
  address:'',
  age:2
}
let ss:User;
ss={
  name:'',
  age:1,
  address:''
}
type T1<T>={
  [P in keyof T]:number;
}
type T2=T1<any>
let  sys=Symbol('key')
let t2:T2={
  3:3,
  "d":2222,
  [sys]:44
}

const s1 = Symbol("liao");
const s2 = Symbol("liao");
type Er=string&number;
type ErR=any|1;
type Ee=any&never;



