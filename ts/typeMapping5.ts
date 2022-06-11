export const getDeepValue=<Obj,FirstKey extends keyof Obj,SecondKey extends keyof Obj[FirstKey]>(
  obj:Obj,
  firstKey:FirstKey,
  secondKey:SecondKey
)=>{
return {} as any;
}

const obj={
  foo:{
    a:true,
    b:2
  },
  bar:{
    c:"xd",
    d:333
  }
}

getDeepValue(obj,'foo','a')