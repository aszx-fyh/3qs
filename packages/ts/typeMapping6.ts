type Nickname<T>={
  nickname:T
}

const MyComponent:Nickname<string>={
  nickname:"cd"
}

type PropsFrom<TComponent>=TComponent extends Nickname<infer T>?T:never;

const props:PropsFrom<typeof MyComponent>='xxdd'
