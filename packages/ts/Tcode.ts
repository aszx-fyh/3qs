type Tcode<T>=T extends number?T|200|1:never

type code=Tcode<20|3|4>
type code1=Tcode<'ddd'>
type code2=Tcode<['ddd']>

interface x<T=number>{
  code:Tcode<T>
}
let xds:x<3>={
    code:9
}