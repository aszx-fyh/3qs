export const makeKeyRemover=
<Key extends string>(arr:Key[])=>
<Obj>(obj:Obj):Omit<Obj,Key>=>{
  return {} as any
}
const keyRemover=makeKeyRemover(['a',"b"])
const newObject=keyRemover({a:2,b:3,c:44})
newObject.c;