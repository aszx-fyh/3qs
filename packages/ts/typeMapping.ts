const fruitCounts={
  apple:3,
  pear:{age:3}
}
type SingleFruitCount ={
  apple:number;
}|{
  pear:number;
}
type FruitCounts=typeof fruitCounts;
//
type NewSingleFruitCount={
  [P in keyof FruitCounts]:{
    [T in P]:number
  };
}[keyof FruitCounts]

const newFruitCounts:NewSingleFruitCount={
  pear:3,
}

type p=FruitCounts['apple'|'pear']