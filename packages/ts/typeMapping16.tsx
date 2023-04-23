export const myObj:Record<string,string[]>={}
if(!myObj.foo){
  myObj.foo=[]
}
myObj.foo.push('33')