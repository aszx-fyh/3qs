type CheckArg<Arg>=Arg extends any[]?'You cannot compare two arrays using deepEqualCompare':Arg

export const deepEqualCompare=<Arg>(a:CheckArg<Arg>,b:CheckArg<Arg>):boolean=>{
  if(Array.isArray(a)||Array.isArray(b)){
    throw new Error('You cannot compare two arrays using deepEqualCompare');
  }
  return a===b;
}

deepEqualCompare([''],['o']);
deepEqualCompare([],[]);
