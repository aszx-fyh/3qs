export type Letters='a'|'b'|'c'

type RemoveC<TType>=TType extends 'c'?'d':TType;
type WowWithoutC=RemoveC<Letters>
type WowWithoutC1=Exclude<Letters,'c'>