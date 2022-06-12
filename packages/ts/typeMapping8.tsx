interface TableProps<TItem>{
  items:TItem[];
  renderItem:(item:TItem)=>"React.ReactNode";
}

export function Table<TItem>(props:TableProps<TItem>){
  return null
}
// 泛型函数创建react组件
const Component=()=>{
  return (
    <Table items={[{
      id:"1",
      name:"ddd"
    }]}
    renderItem={(item)=><div>{item.id}</div>}
    >
    </Table>
  )
}