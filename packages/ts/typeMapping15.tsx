export type Event ={
  type:"LOG_IN";
  payload:{
    userId:string;
  }
}|{
  type:"SIGN_OUT";
}
const fu=(...args:[name:string,age:number])=>{
  const age=args[1];
  const name=args[0];
}

const sendEvent=<Type extends Event['type']>
(...args:Extract<Event,{type:Type}> extends {payload:infer TPayload}
  ?[type:Type,payload:TPayload]
  :[type:Type]
  )=>{}

/** correct */ 
sendEvent('SIGN_OUT')
sendEvent("LOG_IN",{
  userId:"24"
})

/** should error */
sendEvent("SIGN_OUT",{});
sendEvent("LOG_IN",{
  userId:123
});
sendEvent("LOG_IN",{
});
sendEvent("LOG_IN");