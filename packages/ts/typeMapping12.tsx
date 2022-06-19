type IconSize='sm'|'xs';
interface IconProps{
  size:IconSize;
}

export const Icon=(props:IconProps)=>{
  return <></>
}

const Comp1=()=>{
  return (
    <>
    <Icon size="xs"></Icon>
    </>
  )
}