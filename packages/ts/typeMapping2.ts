export type Entity={
  type:'user'
}|{
  type:'post'
}|{
  type:'comment'
}

// type EntityWithID={
//   type:'user';
//   userID:string;
// }|{
//   type:'post';
//   postID:string;
// }|{
//   type:'comment';
//   commentID:string;
// }

type EntityWithID={
    [EntityType in Entity['type']]:{
      'type':EntityType,
    }&Record<`${EntityType}ID`,string>
}[ Entity['type']]

let s:EntityWithID={
  type:"comment",
  "commentID":'xxx'
}