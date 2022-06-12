export function compose<Input,FirstArg>(
  func:(input:Input)=>FirstArg
):(input:Input)=>FirstArg

export function compose<Input,FirstArg,SecondArg>(
  func:(input:Input)=>FirstArg,
  func2:(input:FirstArg)=>SecondArg,
):(input:Input)=>SecondArg;

export function compose<Input,FirstArg,SecondArg,ThirdArg>(
  func:(input:Input)=>FirstArg,
  func2:(input:FirstArg)=>SecondArg,
  func3:(input:SecondArg)=>ThirdArg,
):(input:Input)=>ThirdArg

export function compose(...args:any){
  return {} as any;
}

const addOne=(a:number)=>{
  return a+1;
}
const addTwo=(a:number)=>{
  return a+1;
}
const addThree=(a:number)=>{
  return a+1;
}
const func=compose<number,number,number,number>(addOne,addTwo,addThree);