export const myObject={
  a:1,
  b:2,
  c:3
}
type MyObject=keyof typeof myObject;
Object.keys(myObject).forEach((key )=>{
  console.log(myObject[key as MyObject])
})
const objectKeys=<Obj>(obj:Obj)=>{
  return Object.keys(obj) as (keyof Obj)[]
}
objectKeys(myObject).forEach((key)=>{
  console.log(myObject[key])
})