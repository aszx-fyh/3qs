
type IconSize=LooseAutoComplete<'sm'|'xs'>;
type LooseAutoComplete<T extends string>=T|Omit<string,T>

interface IconProps{
  size:IconSize;
}

export const Icon=(props:IconProps)=>{
  return <p>{props.size}</p>
}

export const Comp1=()=>{
  return (
    <div>
    <Icon size="xs"></Icon>
    </div>
  )
}